#![no_std]

use gstd::{async_main, metadata, msg, prelude::*, util, ActorId};

mod io;

pub use io::*;

static mut CONTRACT: Option<Dns> = None;

static mut DNS_META: Option<DnsMeta> = None;

#[derive(Default, Debug)]
struct Dns {
    admin: ActorId,
}


#[no_mangle]
extern "C" fn init() {
    let DNSInit { admin } = msg::load().expect("Failed to decode `DNSInit`");

    if admin.is_zero() {
        panic!("`admin` mustn't be `ActorId::zero()`");
    }

    let contract = Dns {
        admin,
        ..Default::default()
    };
    unsafe { CONTRACT = Some(contract) }
}

#[async_main]
async fn main() {
    let action: DNSAction = msg::load().expect("Failed to load or decode `DNSAction`");
    let contract = contract();

    let event = match action {
        DNSAction::GetDnsMeta => unsafe { DNSEvent::DnsMeta(DNS_META.clone()) },
        DNSAction::SetDnsMeta(meta) => unsafe {
            if contract.admin != msg::source() {
                panic!("Dns metadata can be added only by admin")
            }
            DNS_META = Some(meta);
            DNSEvent::DnsMeta(DNS_META.clone())
        }
    };

    msg::reply(event, 0).expect("Failed to encode or reply with `DNSEvent`");
}

#[no_mangle]
extern "C" fn meta_state() -> *mut [i32; 2] {
    let Dns {
        admin,
        ..
    } = contract();

    let reply = DNSState {
        admin: *admin,
    };

    util::to_leak_ptr(reply.encode())
}

fn contract() -> &'static mut Dns {
    unsafe { CONTRACT.get_or_insert(Default::default()) }
}

metadata! {
    title: "decentralized Hello World webpage",
    init:
        input: DNSInit,
    handle:
        input: DNSAction,
        output: DNSEvent,
    state:
        output: DNSState,
}

#![no_std]

use ft_logic_io::Action;
use ft_main_io::{FTokenAction, FTokenEvent};
use gstd::{async_main, exec, metadata, msg, prelude::*, util, ActorId};

mod io;

pub use io::*;

static mut CONTRACT: Option<Goc> = None;

static mut DNS_META: Option<DnsMeta> = None;

#[derive(Default, Debug)]
struct Goc {
    admin: ActorId,
}


#[no_mangle]
extern "C" fn init() {
    let GOCInit { admin } = msg::load().expect("Failed to decode `GOCInit`");

    if admin.is_zero() {
        panic!("`admin` mustn't be `ActorId::zero()`");
    }

    let contract = Goc {
        admin,
        ..Default::default()
    };
    unsafe { CONTRACT = Some(contract) }
}

#[async_main]
async fn main() {
    let action: GOCAction = msg::load().expect("Failed to load or decode `GOCAction`");
    let contract = contract();

    let event = match action {
        GOCAction::GetDnsMeta => unsafe { GOCEvent::DnsMeta(DNS_META.clone()) },
        GOCAction::SetDnsMeta(meta) => unsafe {
            if contract.admin != msg::source() {
                panic!("Dns metadata can be added only by admin")
            }
            DNS_META = Some(meta);
            GOCEvent::DnsMeta(DNS_META.clone())
        }
    };

    msg::reply(event, 0).expect("Failed to encode or reply with `GOCEvent`");
}

#[no_mangle]
extern "C" fn meta_state() -> *mut [i32; 2] {
    let Goc {
        admin,
        ..
    } = contract();

    let reply = GOCState {
        admin: *admin,
    };

    util::to_leak_ptr(reply.encode())
}

fn contract() -> &'static mut Goc {
    unsafe { CONTRACT.get_or_insert(Default::default()) }
}

metadata! {
    title: "DNS test",
    init:
        input: GOCInit,
    handle:
        input: GOCAction,
        output: GOCEvent,
    state:
        output: GOCState,
}

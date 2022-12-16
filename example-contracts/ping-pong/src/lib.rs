#![no_std]

use ft_logic_io::Action;
use gstd::{debug, msg,exec, metadata, async_main, prelude::*, util, ActorId};
mod io;
pub use io::*;
static mut CONTRACT: Option<Pong> = None;
static mut DNS_META: Option<DnsMeta> = None;


#[derive(Default, Debug)]
struct Pong {
    admin: ActorId,
    new_msg:String
}

#[no_mangle]
unsafe extern "C" fn init() {

    let PONGInit { admin, new_msg } = msg::load().expect("failed to decode PONGInit");

    }

    let contract = Pong{
        admin,
        new_msg,
        ..Default::default()
    };


    unsafe { CONTRACT = Some(contract)}

}

#[async_main]
async fn main() {
    let action: PONGAction = msg::load().expect("Failed to load or decode `PONGAction`");
    let contract = contract();

    let event = match action {
        PONGAction::GetPong(text)=>{
            return PONGEvent::
        },
        PONGAction::GetDnsMeta => unsafe { PONGEvent::DnsMeta(DNS_META.clone()) },
        PONGAction::SetDnsMeta(meta) => unsafe {
            if contract.admin != msg::source() {
                panic!("Dns metadata can be added only by admin")
            }
            DNS_META = Some(meta);
            return PONGEvent::DnsMeta(DNS_META.clone())
        }
    };

    msg::reply(event, 0).expect("Failed to encode or reply with `PONGEvent`");
}

#[no_mangle]
extern "C" fn meta_state() -> *mut [i32; 2] {
    let Pong {
        admin,
        ..
    } = contract();

    let reply = PONGState {
        admin: *admin,
    };

    util::to_leak_ptr(reply.encode())
}

fn contract() -> &'static mut Pong {
    unsafe { CONTRACT.get_or_insert(Default::default()) }
}

metadata! {
    title: "DNS test",
    init:
        input: PONGInit,
    handle:
        input: PONGAction,
        output: PONGEvent,
    state:
        output: PONGState,
}


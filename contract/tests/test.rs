use gstd::{ActorId};
use gtest::{Log, Program, System};

const ID: u64 = 100;

#[test]
fn init_test(){
    let sys = System::new();
    sys.init_logger();
    let dns = Program::current(&sys);
    dns.send(2, String::from("Init"));
}
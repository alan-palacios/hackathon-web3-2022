use gtest::{Log, Program, System};
#[test]
fn send_ping(){
    let sys = System::new();
    sys.init_logger();
    let contract = Program::current(&sys);
    let ping_pong_id = contract.id();
    let res = contract.send_bytes(1, "INIT MESSAGE");
    let res = contract.send_bytes(1, "PING");
}
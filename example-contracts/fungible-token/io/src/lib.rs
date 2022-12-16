#![no_std]

use gstd::{prelude::*, ActorId};

// DNS
#[derive(Debug, Default, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo)]
pub struct DnsMeta {
    pub name: String,
    pub link: String,
    pub description: String,
}

#[derive(Debug, Decode, Encode, TypeInfo, Eq, PartialEq, PartialOrd, Ord, Clone)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub struct InitConfig {
    pub name: String,
    pub symbol: String,
    pub decimals: u8,
    pub admin :ActorId//DNS
}

#[derive(Debug, Decode, Encode, TypeInfo, Eq, PartialEq, PartialOrd, Ord, Clone)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub enum FTAction {
    GetDnsMeta, // DNS
    SetDnsMeta(DnsMeta), // DNS
    Mint(u128),
    Burn(u128),
    Transfer {
        from: ActorId,
        to: ActorId,
        amount: u128,
    },
    Approve {
        to: ActorId,
        amount: u128,
    },
    TotalSupply,
    BalanceOf(ActorId),
}

#[derive(Debug, Decode, Encode, TypeInfo, Eq, PartialEq, PartialOrd, Ord, Clone)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub enum FTEvent {
    DnsMeta(Option<DnsMeta>), // DNS
    Transfer {
        from: ActorId,
        to: ActorId,
        amount: u128,
    },
    Approve {
        from: ActorId,
        to: ActorId,
        amount: u128,
    },
    TotalSupply(u128),
    Balance(u128),
}

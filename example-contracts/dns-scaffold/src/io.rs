use gstd::{prelude::*, ActorId};

#[derive(Debug, Default, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo)]
pub struct GOCInit {
    pub admin: ActorId,
}

#[derive(Debug, Default, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo)]
pub struct DnsMeta {
    pub name: String,
    pub link: String,
    pub description: String,
}

#[derive(Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo)]
pub enum GOCAction {
    GetDnsMeta,
    SetDnsMeta(DnsMeta),
}

#[derive(Debug, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo)]
pub enum GOCEvent {
    DnsMeta(Option<DnsMeta>),
}

#[derive(Debug, Default, Encode, Decode, PartialEq, Eq, PartialOrd, Ord, Clone, TypeInfo)]
pub struct GOCState {
    pub admin: ActorId,
}

![alt text](https://github.com/alan-palacios/hackathon-web3-2022/blob/main/frontend/public/static/logo.svg?raw=true)

# Decentralized Internet

Decentralized Internet demonstrates on-chain server-less approach to web sites and web applications hosting. Unlike server-based DNS built on centralized components and services, decentralized solutions running on the blockchain are characterized by boosted data security, enhanced data reconciliation, minimized system weak points, optimized resource allocation, and demonstrated great fault tolerance. It brings all the benefits of decentralization such as censorship resistance, security resilience, high transparency.

Briefly the solution consists of DNS smart contract that is uploaded on-chain. It lists programs (smart-contracts) that are also uploaded on-chain and registered in DNS contract. Hosted programs may have the user interface that resides on IPFS.

## Connect your dApp to the Decentralized Internet

To connect your program to the Decentralized Internet on Gear Network it's necessary to have a variable of type `Option<DnsMeta>` in your program that will contain metadata of the DNS record.

```rust
pub struct DnsMeta {
    pub name: String,
    pub link: String,
    pub description: String,
    pub category: String,
    pub tags: String,
    pub date: String,
    pub image: String, //Optional
}
```

One more thing that you need to do is to include the following enum variants:

1. in handle_input type

- `GetDnsMeta` - it has to be the first variant of the enum
- `SetDnsMeta(DnsMeta)` - it is needed to setup the dns record

2. in handle_output type

- `DnsMeta(Option<DnsMeta>)` - it also has to be the first variant of the enum

After your program has been uploaded on chain you need to build your frontend to a single html file and upload it to IPFS.

1. Download and install IPFS Desktop - https://github.com/ipfs/ipfs-desktop
2. Upload your built web app using 'Files' tab
3. Get file link by pressing option dots button on file and choose 'Share link'

The next step is to send Metadata to your program using the `SetDnsMeta` enum variant. Where you need to set name, link (that is link to html file on IPFS) and description.

To register your DApp in DNS, go to {link}, then you need to click the “Add DApp” button right at the bottom of The Chain Hub logo and add your DApp contract address in the Register form.

## Open and use dApp

Go to {link}. If you have your DApp registered in DNS program, you will see it in the list of available DApps. Just click the “Open” button and your interface will be opened in the new tab.
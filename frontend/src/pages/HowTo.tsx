import React from 'react'

export default function HowTo() {
	return (
		<div className='flex flex-col  justify-center bg-gradient-to-b from-dark1 to-dark2 
		min-h-full h-full text-justify p-20'>
			<p className='py-2'>
				To start a rust smart contract template with code located in this
				<a href="https://github.com/alan-palacios/hackathon-web3-2022/tree/main/domain-template"
					className='text-blue-600 visited:text-purple-600'
				>
					&nbsp;Github repository&nbsp;
				</a>
				you will need to follow the steps below:
			</p>
			<ul className='list-disc'>
				<li>
					Install rust on your machine: You can install rust by following the
					instructions on the <a href="https://www.rust-lang.org/tools/install" className='text-blue-600 visited:text-purple-600'>&nbsp;Rust website&nbsp;</a>.
				</li>
				<li>
					Clone the repository: Use the git clone command to clone the repository onto your local machine.
					Navigate to the repository directory: Use the cd command to navigate to the domain-template directory within the repository.
				</li>
				<li>
					Install the required dependencies: Run the cargo build command to install the required dependencies for the contract.
					Review the contract code: Take some time to review the contract code and familiarize yourself with its structure and functionality.
					Make any necessary modifications: If you want to make any modifications to the contract, you can do so by editing the source code files in the src directory.
				</li>
				<li>
					Build and deploy the contract: Once you are ready to deploy the contract, use the cargo build and cargo deploy commands to build and deploy it to the blockchain.
				</li>
				<li>
					You can start your rust smart contract with the template located in this
					<a href="https://github.com/alan-palacios/hackathon-web3-2022/tree/main/domain-template" className='text-blue-600 visited:text-purple-600'>&nbsp;github repository&nbsp;</a>
					but if you have a project already created you should add the DNS_META and admin state as well as GetDNSMeta and SetDNSMeta
					methods in order to be reachable from TheChainHub contract
				</li>
			</ul>
		</div>
	)
}

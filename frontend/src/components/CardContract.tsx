import { Link } from 'react-router-dom';
import React, { useEffect, useMemo, useState } from 'react'
import { Icon } from '@iconify/react';
import { ElementType } from 'types';
import { useReadConfig } from 'hooks/useReadConfig';
import { bufferString } from "assets/metaBuffer";
import Button from './Button';

interface CardContractProps {
	contract: ElementType
}

export default function CardContract({ contract, ...defaultProps }: CardContractProps) {
	function shortenHex(hex: string, length = 4) {
		if (!hex) return ''
		return `${hex.substring(0, length + 2)}…${hex.substring(
			hex.length - length
		)}`;
	}
	const [selectValue, setSelectValue] = useState('GetAll');
	const [search, setSearch] = useState('');


	const [isCopied, setIsCopied] = useState(false)
	const [isCopiedCreator, setIsCopiedCreator] = useState(false)
	const [isCopiedLink, setIsCopiedLink] = useState(false)
	const metaBuffer = useMemo(() => Buffer.from(bufferString, 'base64'), []);
	const { stateAll } = useReadConfig(metaBuffer, selectValue, search);

	const copyText = (type: string) => {
		if (type === "creator") {
			if (!isCopiedCreator) {
				navigator.clipboard.writeText(contract.createdBy);
				setIsCopiedCreator(true)
				setTimeout(() => {
					setIsCopiedCreator(false)
				}, 5000)
			}
		} else if (type === " ") {
			if (!isCopied) {
				navigator.clipboard.writeText(contract.id);
				setIsCopied(true)
				setTimeout(() => {
					setIsCopied(false)
				}, 5000)
			}
		} else if (type === "link") {
			if (!isCopiedLink) {
				navigator.clipboard.writeText(contract.meta.link);
				setIsCopiedLink(true)
				setTimeout(() => {
					setIsCopiedLink(false)
				}, 5000)
			}
		}
	}
	useEffect(() => {
		if (stateAll.error) {
			setSelectValue('GetAll');
			setSearch('');
		}
	}, [stateAll.error]);

	const readDataFrom = (urlLink: string | undefined) => {
		if (!urlLink) return;
		window.open(urlLink);
	};


	return (
		<div className="bg-dark3 w-80 h-72 flex flex-col p-5 m-3 rounded-lg">
			<h1 className='text-xl font-bold italic mb-2'>{contract.meta.name}</h1>
			<div className='flex flex-row font-light items-center'>
				<span className='mr-2'>
					{shortenHex(contract.id)}
				</span>
				{isCopied ?
					<div className='flex flex-row'>
						<Icon icon="akar-icons:check" className='text-yellow' width={20} onClick={() => copyText(" ")} />
					</div>
					:
					<Icon icon="akar-icons:copy" className='text-yellow hover:cursor-pointer' width={20} onClick={() => copyText(" ")} />
				}
			</div>
			<span className='mb-2'>{contract.meta.description}</span>
			<div className='flex flex-row justify-between font-light text-sm mb-1'>
				<div className='flex flex-row'>
					<Icon icon="mdi-light:account" width={20} />
					<span className='ml-1 mr-2'>{shortenHex(contract.createdBy)}</span>
					{isCopiedCreator ?
						<div className='flex flex-row'>
							<Icon icon="akar-icons:check" className='text-yellow' width={20} onClick={() => copyText("creator")} />
						</div>
						:
						<Icon icon="akar-icons:copy" className='text-yellow hover:cursor-pointer' width={20} onClick={() => copyText("creator")} />
					}
				</div>
				{/* <span>Date</span> */}
			</div>
			<div className='flex flex-row font-light text-sm'>
				<Icon icon="mdi-light:link-variant" width={20} />
				<span className='ml-1 mr-2'> {shortenHex(contract.meta.link)}</span>
				{isCopiedLink ?
					<div className='flex flex-row'>
						<Icon icon="akar-icons:check" className='text-yellow' width={20} onClick={() => copyText("link")} />
					</div>
					:
					<Icon icon="akar-icons:copy" className='text-yellow hover:cursor-pointer' width={20} onClick={() => copyText("link")} />
				}
			</div>
			<div className='flex justify-center mt-5'>
				<Link to={`/program/${contract.id}`}>
					<Button label="Info" width="40" color="purple"  />
				</Link>
				<Button label="Open" width="40" color="purple" onClick={() => readDataFrom(contract.meta.link)} />
			</div>
		</div>
	)
}

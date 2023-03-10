import { ElementType } from 'types';
import { useEffect, useMemo, useState } from 'react';
import { useReadState } from '@gear-js/react-hooks';
import { CONTRACT_ID } from '../consts';

type StateAllConfig = {
	Records: ElementType[];
	Record: ElementType;
};
type PayloadType = {
	[key: string | number | symbol]: any;
};

export function useReadConfig(metaBuffer: Buffer, payload: string, payloadText?: string) {
	const programId = useMemo(() => CONTRACT_ID, []);
	const [newPayload, setNewPayload] = useState({ GetAll: null } as {});

	useEffect(() => {
		const obj: PayloadType = {};
		if (!(payload === 'GetAll')) {
			if (payload && payloadText) {
				obj[payload] = payloadText || '';
				setNewPayload(obj);
			}
		} else {
			setNewPayload({ GetAll: null });
		}
	}, [payload, payloadText]);

	const stateAll = useReadState<StateAllConfig>(programId, metaBuffer, newPayload);

	return {
		stateAll,
	};
}
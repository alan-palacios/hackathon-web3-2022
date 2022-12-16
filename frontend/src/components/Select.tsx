const ACTIONS = {
	GetAll: 'Get All',
	GetById: 'Get by Id',
	GetByName: "Get by name",
	GetByCreator: "Get by creator",
	GetByDescription: "Get by description",
	GetByPattern: "Get by pattern"
}
type Props = {
	handleSelectedValue: (value: string,) => void
}

function Select({ handleSelectedValue }: Props) {

	return (
		<div className='bg-neutral-700 flex p-2 items-center space-x-2'>
			<h4 className=''>Filter by: </h4>
			<select className='bg-neutral-700 border-black border-2' onChange={(e) => handleSelectedValue(e.currentTarget.value)}>
				{
					Object.entries(ACTIONS).map(action => <option key={action[0]} value={action[0]}>{action[1]}</option>)
				}
			</select>
		</div>
	);
}

export { Select };

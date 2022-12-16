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
		<div className='flex p-2 items-center space-x-2 mb-5'>
			<h4 className='mr-3'>Filter by: </h4>
			<select className='bg-dark2' onChange={(e) => handleSelectedValue(e.currentTarget.value)}>
				{
					Object.entries(ACTIONS).map(action => <option key={action[0]} value={action[0]}>{action[1]}</option>)
				}
			</select>
		</div>
	);
}

export { Select };

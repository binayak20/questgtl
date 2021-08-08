import React from 'react';
import { rentalData } from '../../data';

const Body = ({ getReantalByName }) => {
	return (
		<>
			<form className='form-inline'>
				<select
					defaultValue='-1'
					className='custom-select'
					onChange={(e) => getReantalByName(e.target.value)}
				>
					<option value='-1'>Select</option>
					{rentalData.map((rental, index) => (
						<option value={rental.code} key={rental.code}>
							{rental.name}
						</option>
					))}
				</select>
				<input
					className='form-control mr-sm-2 mt-2 w-100'
					type='text'
					placeholder='Used Mileage'
				/>
			</form>
		</>
	);
};

export default Body;

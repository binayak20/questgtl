import React, { useState } from 'react';

import Booking from '../Booking/Booking';
import Return from '../Return/Return';
import { rentalData } from '../../data';

const Rental = () => {
	const [dataSource, setDataSource] = useState(rentalData);
	const changeData = (e) => {
		const quickCriteria = e.target.value;
		let quickResult = rentalData.filter((obj) => {
			let newObject = obj;
			['minimum_rent_period', 'name', 'price', 'type'].forEach(
				(key) => delete newObject[key]
			);
			return Object.values(newObject).some((val) =>
				val || val === false
					? val.toString().toLowerCase().includes(quickCriteria)
					: false
			);
		});
		setDataSource(quickResult);
	};
	return (
		<div className='card' style={{ width: '60rem' }}>
			<div className='card-body'>
				<h5 className='card-title text-center'>Rental Data Table</h5>

				<div className='float-right mb-2'>
					<form className='form-inline'>
						<input
							className='form-control mr-sm-2'
							type='search'
							placeholder='Search'
							aria-label='Search'
							onChange={(e) => changeData(e)}
						/>
					</form>
				</div>

				<div className='bs-example'>
					<table className='table table-striped'>
						<thead>
							<tr>
								<th>Id</th>
								<th>Code</th>
								<th>Availability</th>
								<th>Need to Repair</th>
								<th>Durability</th>
								<th>Mileage</th>
							</tr>
						</thead>
						<tbody>
							{dataSource.map((rental, index) => (
								<tr key={rental.code}>
									<td>{index + 1}</td>
									<td>{rental.code}</td>
									<td>{rental.availability ? 'True' : 'False'}</td>
									<td>{rental.needing_repair ? 'True' : 'False'}</td>
									<td>{`${rental.durability} / ${rental.max_durability}`}</td>
									<td>{rental.mileage}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className='float-right'>
					<Booking />
					<Return />
				</div>
			</div>
		</div>
	);
};

export default Rental;

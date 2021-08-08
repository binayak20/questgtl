import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { rentalData } from '../../data';

const Body = ({ getRentalByName }) => {
	const [startDate, setStartDate] = useState(new Date());
	return (
		<>
			<form className='form-inline'>
				<select
					defaultValue='-1'
					className='custom-select mb-2'
					onChange={(e) => getRentalByName(e.target.value)}
				>
					<option value='-1'>Select</option>
					{rentalData.map((rental, index) => (
						<option value={rental.code} key={rental.code}>
							{rental.name}
						</option>
					))}
				</select>
			</form>
			<label>From : </label>
			<DatePicker
				selected={startDate}
				onChange={(date) => setStartDate(date)}
			/>
			<label>To : </label>
			<DatePicker
				selected={startDate}
				onChange={(date) => setStartDate(date)}
			/>

			{/* <div class='input-group date' data-provide='datepicker'>
				<input type='text' class='form-control' />
				<div class='input-group-addon'>
					<span class='glyphicon glyphicon-th'></span>
				</div>
			</div> */}
		</>
	);
};

export default Body;

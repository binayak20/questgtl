import React, { useState } from 'react';

import Modal from '../../component/modal/Modal';
import Button from '../../component/Button';
import { rentalData } from '../../data';
import ChildModalBody from './ChildBodyModal';
import Body from './Body';

const Booking = () => {
	const [totalPrice, setTotalPrice] = useState(0);
	const getRentalByName = (code) => {
		const rentalObj = rentalData.find((value) => value.code === code);
		const totalPrice = rentalObj.price * rentalObj.minimum_rent_period;
		setTotalPrice(totalPrice);
	};
	return (
		<>
			<Button dataTarget='#bookingModal' title='Book' buttonType='primary' />
			<Modal
				title='Book a product'
				id='bookingModal'
				body={<Body getRentalByName={getRentalByName} />}
				yesButton={
					<Button dataTarget='#bookYesModal' title='Yes' buttonType='primary' />
				}
				size='modal-lg'
			/>
			<Modal
				title='Book a product'
				id='bookYesModal'
				body={<ChildModalBody totalPrice={totalPrice} />}
			/>
		</>
	);
};

export default Booking;

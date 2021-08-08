import React, { useState } from 'react';

import Modal from '../../component/modal/Modal';
import Button from '../../component/Button';
import { rentalData } from '../../data';
import ChildModalBody from './ChildModalBody';
import Body from './Body';

const Return = () => {
	const [totalPrice, setTotalPrice] = useState(0);
	const getReantalByName = (code) => {
		const rentalObj = rentalData.find((value) => value.code === code);
		const totalPrice = rentalObj.price * rentalObj.minimum_rent_period;
		setTotalPrice(totalPrice);
	};
	return (
		<>
			<Button dataTarget='#returnModal' title='Return' buttonType='secondary' />
			<Modal
				title='Return a product'
				id='returnModal'
				body={<Body getReantalByName={getReantalByName} />}
				yesButton={
					<Button
						dataTarget='#returnYesModal'
						title='Yes'
						buttonType='primary'
					/>
				}
				size='modal-lg'
			/>
			<Modal
				title='Return a product'
				id='returnYesModal'
				body={<ChildModalBody totalPrice={totalPrice} />}
			/>
		</>
	);
};

export default Return;

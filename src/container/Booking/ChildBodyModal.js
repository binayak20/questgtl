import React from 'react';

const ChildModalBody = ({ totalPrice }) => {
	return (
		<div className='text-center'>
			<p>Your estimate price is {totalPrice || '******'}</p>
			<p>Do you want to procedure?</p>
		</div>
	);
};

export default ChildModalBody;

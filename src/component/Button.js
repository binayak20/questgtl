import React from 'react';

const Button = ({ dataTarget, title, buttonType }) => {
	return (
		<button
			type='button'
			className={`btn btn-${buttonType} ml-1`}
			data-toggle='modal'
			data-target={dataTarget}
		>
			{title}
		</button>
	);
};

export default Button;

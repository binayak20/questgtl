import React from 'react';

const Modal = ({ title, id, body, yesButton, size }) => {
	return (
		<div
			className={`modal fade ${size}`}
			id={id}
			tabIndex='-1'
			role='dialog'
			aria-labelledby='exampleModalLabel'
			aria-hidden='true'
		>
			<div className='modal-dialog' role='document'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title' id='exampleModalLabel'>
							{title}
						</h5>
						<button
							type='button'
							className='close'
							data-dismiss='modal'
							aria-label='Close'
						>
							<span aria-hidden='true'>&times;</span>
						</button>
					</div>
					<div className='modal-body'>{body}</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-dismiss='modal'
						>
							No
						</button>
						{yesButton ? (
							yesButton
						) : (
							<button type='button' className='btn btn-primary'>
								Yes
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;

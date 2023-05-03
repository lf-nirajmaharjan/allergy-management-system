import React from 'react';

const stopPropagation = (e) => {
	e.stopPropagation();
};

const Modal = (props) => {
	return (
		<>
			<div
				className='modal__wrapper'
				onClick={props.onClose}
			>
				<div
					className='modal'
					onClick={stopPropagation}
				>
					<div className='modal__header'>
						<h3 className='modal__title mb-4x'>{props.title}</h3>
						<button
							className='modal__close'
							onClick={props.onClose}
						>
							&times;
						</button>
					</div>
					<div className='modal__body'>{props.children}</div>
				</div>
			</div>
		</>
	);
};

export default Modal;

import React from 'react';
import BrandLogo from '../../assets/images/brand-logo.svg';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
	const navigate = useNavigate();
	return (
		<aside className='aside pt-8x'>
			<div className='logo text-center mb-8x'>
				<img
					src={BrandLogo}
					alt='Allergy Brand Logo'
				/>
			</div>
			<nav className='aside__nav'>
				<ul className='d-flex flex-direction-column'>
					<li className='aside__nav__item'>
						<Link
							className='aside__nav__link'
							to='/dashboard'
						>
							<span className='nav__text'>Dashboard</span>
						</Link>
					</li>
					<li className='aside__nav__item'>
						<Link
							className='aside__nav__link'
							to='#'
						>
							<span className='nav__text'>Sample Link</span>
						</Link>
					</li>
					<li className='aside__nav__item'>
						<Link
							className='aside__nav__link'
							to='#'
						>
							<span className='nav__text'>Sample Link</span>
						</Link>
					</li>
				</ul>

				<button
					className='py-6x mb-0x mt-auto logout'
					onClick={() => {
						localStorage.clear();
						navigate('/login');
					}}
				>
					<span className='nav__text'>Logout</span>
				</button>
			</nav>
		</aside>
	);
};

export default Sidebar;

import React from 'react'

const MenuIcon = (props) => {
	const { headerClass, menuVisible } = props;
	let color = '';
	if ((headerClass === `mainHeader--dark`) || menuVisible) {
		color = `var(--gray1)`;
	} else if (headerClass === `mainHeader--light`) {
		color = `hsl(0, 0%, 5%)`
	}
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill={color}
			>
				<path fill="none" d="M0 0h24v24H0V0z" />
				<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
			</svg>
		);		
}

export default MenuIcon;
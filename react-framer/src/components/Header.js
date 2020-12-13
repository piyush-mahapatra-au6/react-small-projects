import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
	height: 60px;
	background: transparent;
	padding: 0rem calc((100vw - 1300px) / 2);
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const NavItems = styled.div``;
const NavbarLinks = styled(Link)`
	color: #fff;
	text-decoration: none;
	padding: 1rem;
`;
const Logo = styled(Link)`
	color: #fff;
	padding-left: 1rem;
	text-decoration: none;
	font-size: 1.5rem;
	font-weight: bold;
	font-style: italic;
`;

function Header() {
	return (
		<Navbar>
			<Logo to=''>Pakhi.</Logo>
			<NavItems>
				<NavbarLinks to='/'>Home</NavbarLinks>
				<NavbarLinks to='/about'>About</NavbarLinks>
				<NavbarLinks to='/services'>Services</NavbarLinks>
			</NavItems>
		</Navbar>
	);
}

export default Header;

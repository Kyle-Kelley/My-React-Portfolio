import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    background-color: #69b7eb;
    border-radius: 8px;
    position: fixed;
    justify-content: center;
    align-items: center;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 25vh;
    width: 200px;
    padding: 20px;
    transition: transform 0.3s ease-in-out;

    li {
        padding: 10px 10px;
    }

    // @media (max-width: 768px) {
    //     flex-flow: column nowrap;
    //     background-color: #f4d6db;
    //     position: fixed;
    //     transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    //     top: 0;
    //     right: 0;
    //     height: 50vh;
    //     width: 300px;
    //     padding-top: 3.5rem;
    //     transition: transform 0.3s ease-in-out;

    //     li {
    //         color: #b3dbd3;
    //     }
    // }
`;

const NavLinks = ({ open }) => {
    return (
        <Ul open={open}>
            <li>
                <Link href='/'>
                <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href='/about'>
                    <a>About Me</a>
                </Link>
            </li>
            <li>
                <Link href='/blog'>
                    <a>Blog</a>
                </Link>
            </li>
            <li>
                <Link href='/contact'>
                    <a>Contact</a>
                </Link>
            </li>
            <li>
                <Link href='/projects'>
                    <a>Projects</a>
                </Link>
            </li>
        </Ul>
    )
}

export default NavLinks

import React from 'react';
import * as AiIcons from 'react-icons/ai';
// import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

export const NavbarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Quem Somos?',
        path: '/quemsomos',
        icon: <IoIcons.IoIosFootball />,
        cName: 'nav-text'
    },
    {
        title: 'Como Funciona?',
        path: '/comofunciona',
        // icon: <FaIcons.FaTeamspeak />,
        icon: <AiIcons.AiOutlineTeam />,
        cName: 'nav-text'
    },
    {
        title: 'FAQ',
        path: '/faq',
        // icon: <FaIcons.FaTeamspeak />,
        icon: <AiIcons.AiOutlineTeam />,
        cName: 'nav-text'
    },
    {
        title: 'Tutorial',
        path: '/tutorial',
        // icon: <FaIcons.FaTeamspeak />,
        icon: <AiIcons.AiOutlineTeam />,
        cName: 'nav-text'
    },
    {
        title: 'Download',
        path: '/download',
        // icon: <FaIcons.FaTeamspeak />,
        icon: <AiIcons.AiOutlineTeam />,
        cName: 'nav-text'
    },
];
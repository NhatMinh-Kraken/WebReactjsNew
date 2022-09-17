import "./NavHomePage.scss";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg'
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';

function NavHomePage() {
    return (
        <Navbar>
            <NavItem icon={"fa fa-car"} titlenav={"Các dòng xe"}>
                <DropdownMenu />
            </NavItem>
            <NavItem titlenav={"Mua trực tuyến"}></NavItem>
            <NavItem titlenav={"Tư vấn mua xe"}></NavItem>
            <NavItem titlenav={"Dịch vụ"}></NavItem>
            <NavItem titlenav={"Thế giới Mercedes"}></NavItem>
        </Navbar>
    );
}

function Navbar(props) {
    return (
        <nav className="NavHomePage">
            <ul className="NavHomePage-Body">{props.children}</ul>
        </nav>
    );
}

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="NavHomePage-Item">
            <button className="NavHomePage-Item-Button" onClick={() => setOpen(!open)}>

                <div className='NavHomePage-Item-Icon'>
                    <i className={props.icon} aria-hidden="true"></i>
                </div>
                <div className='NavHomePage-Item'>
                    {props.titlenav}
                </div>
            </button>

            {open && props.children}
        </li>
    );
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el){
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <button className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </button>
        );
    }
    return (

        <div className="dropdown" style={{height: menuHeight}}>
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="setting"><span className="icon-button">{<CogIcon />}</span><span className="title-header">Tất cả các dòng xe</span></DropdownItem>
                    <DropdownItem><span className="title">Tất cả các dòng xe</span></DropdownItem>
                    <DropdownItem><span className="title">Tất cả các dòng xe</span></DropdownItem>
                    <DropdownItem><span className="title">Tất cả các dòng xe</span></DropdownItem>
                    <DropdownItem><span className="title">Tất cả các dòng xe</span></DropdownItem>
                    <DropdownItem><span className="title">Tất cả các dòng xe</span></DropdownItem>
                    <DropdownItem><span className="title">Tất cả các dòng xe</span></DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'setting'}
                unmountOnExit timeout={500}
                classNames="menu-secondary"
            >
                <div className="menu">
                    <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main"><span className="icon-button">{<ArrowIcon />}</span><span className="title-header">Setting</span></DropdownItem>

                </div>
            </CSSTransition>
        </div>
    );
}



export default NavHomePage;
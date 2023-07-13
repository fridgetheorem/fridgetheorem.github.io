import React from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import './Burger.css';
import { MenuHeader } from './Menu.Components';
import { ReactComponent as FoxFace } from '../../FoxFace_rotated.svg'

const Menu = () => {
    return(
        <BurgerMenu right>
            <MenuHeader>
                <FoxFace style={{maxHeight: 300, maxWidth: 200 }} />
            </MenuHeader>
            <h4> <a href="#work-experience">Work Experience</a> </h4>
            <h4> <a href="#waterloo">Waterloo and I</a> </h4>
            <h4> <a href="#hobbies">Hobbies</a> </h4>
            <h4> <a href="#contact">Contact Info</a> </h4>
        </BurgerMenu>
    );
}

export { Menu }
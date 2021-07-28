import React from "react";

const MenuItem = ({setMenuOpen}) => {

    const closeMenu = () => {
        setMenuOpen(false)
    }
    return (
        <ul>
            <li onClick={closeMenu}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={closeMenu}>
                <a href="#portfolio">Portfolio</a>
            </li>
            {/*<li onClick={closeMenu}>*/}
            {/*    <a href="#works">Works</a>*/}
            {/*</li>*/}
            {/*<li onClick={closeMenu}>*/}
            {/*    <a href="#testimonials">Testimonials</a>*/}
            {/*</li>*/}
            <li onClick={closeMenu}>
                <a href="#contact">Contact</a>
            </li>

        </ul>
)
}

export default MenuItem



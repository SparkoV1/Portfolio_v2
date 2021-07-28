import "./menu.scss";
import MenuItem from "./MenuItem";

const Menu = ({menuOpen, setMenuOpen}) => {


    return (
        <div className={"menu "+(menuOpen && "active")}>
            <MenuItem setMenuOpen={setMenuOpen}/>
        </div>
    );
}

export default Menu;
import './styles/nav.css';
import { NavLink } from "react-router-dom";


function Nav(){
    return(
        <div className="navbar">
            <div className="logo">TO DO LIST</div>
            <div className="links">
                <NavLink to="/" style={({ isActive}) => {
                    return {
                    color: isActive ? "rgb(230, 185, 166)" : "",
                    };}}>HOME</NavLink>
                <NavLink to="/about"  style={({ isActive}) => {
                    return {
                    color: isActive ? "rgb(230, 185, 166)" : "",
                    };}}>ABOUT</NavLink>
            </div>
            
        </div>
    )
}

export default Nav;
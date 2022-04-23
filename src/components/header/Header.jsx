import {Link } from "react-router-dom";
import css from './Header.module.css';


export default function Header(){
    return(
        <div className={css.wrapper}>
            <div className={css.logo}>LOGO</div>
            <div className={css.buttons}>
                <Link to="/main">Main</Link>
                {/* <Link to="/ad">Create</Link> */}
                <Link to="/contacts">Contacts</Link>
                <Link to="/login">Log in</Link>
            </div>
        </div>
    )
}
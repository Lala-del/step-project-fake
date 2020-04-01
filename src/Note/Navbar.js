import React, {Component} from 'react';
import style from './note.module.css'
import {Link} from "react-router-dom";
class Navbar extends Component {
    render() {
        return (
            <div className={style.nav}>
                <div className={style.logo}>Notes App</div>
                <div className={style.links}>
                    <Link to={'/actual'}>Actual </Link>
                    <Link to={'/archive'}>Archive </Link>
                    <Link to={'/create'}>Create </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;
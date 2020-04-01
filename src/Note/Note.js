import React, {Component} from 'react';
import style from './note.module.css'
import {Link} from "react-router-dom";
import MainPage from "./MainPage";

class Note extends Component {
    render() {
        return (
            this.props.selectedNote[0]?
            <div className={style.noteContainer}>
                <div className={style.note}>
                    <div>
                        <h1>{this.props.selectedNote[0].title}</h1>
                        <p> {this.props.selectedNote[0].text}</p>
                    </div>
                    <button>EDIT</button>
                    <button>ARCHIVE</button>
                    <Link to={'/modal'}>
                        <button>DELETE</button>
                    </Link>
                </div>
            </div>
:'loading'

        );
    }
}

export default Note;
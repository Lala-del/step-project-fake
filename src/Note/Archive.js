import React, {Component} from 'react';
import style from './note.module.css'
import {Link} from "react-router-dom";
import NoteCard from "./NoteCard";

class Archive extends Component {
    render() {
        return (
            <>

            <div className={style.container}>
                {this.props.notes.map(note=>(
                <Link to={`/note`} >
                    <NoteCard openNote={this.props.openNote}
                              key={note.id}
                              id={note.id}
                              title={note.title}
                              text={note.text}
                              note={note}
                    />
                </Link>

           ))} </div>
                </>
        );
    }
}

export default Archive;
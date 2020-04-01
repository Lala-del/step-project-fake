import React from 'react';
import style from "./note.module.css";

const NoteCard =({title,text,openNote,id,note})=>{
    console.log(note);
        return (
            <div className={style.sheet} onClick={openNote} id={id}>
                <div className={style.sheetHeader}>{title}</div>
                <div className={style.sheetBody}>
                    <p>{text}</p>
                </div>
            </div>
        );

}

export default NoteCard;
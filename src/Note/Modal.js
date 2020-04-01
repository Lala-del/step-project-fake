import React, {Component} from 'react';
import style from './note.module.css'

class Modal extends Component {
    render() {
        return (
            <div className={style.modalContainer}>
            <div className={style.modal}>
               <div className={style.modalHeader}> <p> Want to delete this note?</p> </div>
                <button className={style.cancel}>CANCEL</button>
                <button className={style.ok}>OK</button>
            </div>
            </div>
        );
    }
}

export default Modal;
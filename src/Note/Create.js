import React, {Component} from 'react';
import style from './note.module.css'
class Create extends Component {
    render() {
        return (
            <div className={style.create}>
            <form>
                <h1>Fill data</h1>
                <input className={style.title} type="text" placeholder={'Title'}/>
                <input className={style.text} type="text" placeholder={'Note text '}/>
                <label >Color:</label>
                <input className={[style.colorButton , style.color1 ].join(' ') } type="submit" value={''}/>
                <input className={[style.colorButton , style.color2 ].join(' ')} type="submit" value={''}/>
                <input className={[style.colorButton , style.color3 ].join(' ')} type="submit" value={''}/>
                <input className={[style.colorButton , style.color4 ].join(' ')} type="submit" value={''}/>
                <button className={style.button} type={'submit'}> Create a note</button>
            </form>
            </div>
        );
    }
}

export default Create;
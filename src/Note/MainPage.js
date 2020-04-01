import React, {Component} from 'react';
import Archive from "./Archive";
import Actual from "./Actual";
import Navbar from "./Navbar";
import Create from "./Create";
import {Route} from "react-router-dom";
import Note from "./Note";
import Modal from "./Modal";

class MainPage extends Component {
    render() {
        return (
           this.props.selectedNote?
            <>
                <Navbar/>

                <Route path={'/create'}>
                    < Create/>
                </Route>
                <Route path={'/actual'}>
                    <Actual/>
                </Route>
                <Route exact path={'/archive'}>
                    <Archive
                        notes={this.props.notes}
                        openNote={this.props.openNote}
                        selectedNote={this.props.selectedNote}
                    />
                </Route>
                <Route exact path={`/note`}>
                    <Note  selectedNote={this.props.selectedNote}/>
                </Route>
                <Route exact path={'/modal'}>
                    <Modal/>
                </Route>
            </>
               :"loading"
        );
    }
}

export default MainPage;
import React, {Component} from 'react';
import MainPage from "./Note/MainPage";

class App extends  Component {
    state={
        notes:[],
        selectedNote:[]
    };
    openNote=(e)=>{
        let selectedNote=this.state.notes.filter(note=>note.id===e.currentTarget.getAttribute('id'));
       this.setState({selectedNote:selectedNote}, () => {
           console.log(this.state.selectedNote[0].title);
       } );
        console.log(e.currentTarget);
        console.log(selectedNote);
        console.log(this.state.selectedNote);
        console.log(e.currentTarget.getAttribute('id'));

    };
    componentDidMount=()=>{
        fetch( "http://localhost:3000/notes")
            .then(r=>r.json())
            .then(data=>this.setState({notes:data}));
    };
    render(){
  return (
    <>
     <MainPage
         notes={this.state.notes}
         openNote={this.openNote}
         selectedNote={this.state.selectedNote}
     />
    </>
  );
    }
}

export default App;

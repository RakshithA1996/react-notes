import React, { Component } from "react";
import "./App.css";
import firebase from "./config";
// import firebase from 'firebase/app';
import "firebase/database";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AddNoteModal from "./components/AddNoteModal";

class App extends Component {
  constructor() {
    super();

    this.app = firebase;
    this.database = this.app.database().ref().child('noteData');

    this.state = {
      isAddNote: false,
      noteData: [
        // {
        //   title: "Sffsfasfasfdfasf",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        // },
        // {
        //   title: "KdefrgsfsdfASDF",
        //   description:
        //     "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        // },
        // {
        //   title: "Esasfdasfsadfsdaf",
        //   description:
        //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
        // },
        // {
        //   title: "Wsadfsdfasdfasdf",
        //   description:
        //     "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        // },
        // {
        //   title: "Rgasdfafasfasfda",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        // },
        // {
        //   title: "Kdfgsdgaasdfsdf",
        //   description:
        //     "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        // },
        // {
        //   title: "Nsdfgadfasfsdf",
        //   description:
        //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
        // },
        // {
        //   title: "Ssgfgsddgfsafasfa",
        //   description:
        //     "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        // },
        // {
        //   title: "Hsdfgasfdsadf",
        //   description:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        // },
        // {
        //   title: "mSDFgsadfsadfsadf",
        //   description:
        //     "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        // },
        // {
        //   title: "Bsdafgasdfsafd",
        //   description:
        //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
        // },
        // {
        //   title: "Fsdfasdfasfdasf",
        //   description:
        //     "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        // },
      ],
    };
  }

  componentDidMount(){
    const previousNotes = this.state.noteData;

    this.database.on('child_added', data => {
      previousNotes.push({
        id: data.key,
        title: data.val().title,
        description: data.val().description,
      })

      this.setState({
        noteData: previousNotes
      })
    })

    this.database.on( 'child_removed', data => {
      for(var i=0; i < previousNotes.length; i++){
        if(previousNotes[i].id === data.key){
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        noteData: previousNotes
      })
    })
  }

  addNote = (note) => {
    this.database.push().set(note);
  }

  removeNote = (noteId) => {
    this.database.child(noteId).remove();
  }

  toggleAddNote = () => {
    this.setState({ isAddNote: !this.state.isAddNote });
  };

  render() {
    const { noteData, isAddNote } = this.state;
    return (
      <div className="App">
        <Header />
        <Body noteData={noteData} removeNote={this.removeNote} />
        <Footer toggleAddNote={this.toggleAddNote} />
        {isAddNote ? <AddNoteModal addNote={this.addNote} closeModal={this.toggleAddNote} /> : ""}
      </div>
    );
  }
}

export default App;

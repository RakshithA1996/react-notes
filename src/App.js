import React, { Component } from "react";
import "./App.css";
import firebase from "./config";
// import firebase from 'firebase/app';
import "firebase/database";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AddNoteModal from "./components/AddNoteModal";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();

    this.app = firebase;
    this.database = this.app.database().ref().child("noteData");

    this.state = {
      isAddNote: false,
      searchQuery: "",
      noteData: [],
    };
  }

  componentDidMount() {
    const previousNotes = this.state.noteData;

    this.database.on("child_added", (data) => {
      previousNotes.push({
        id: data.key,
        title: data.val().title,
        description: data.val().description,
      });

      this.setState({
        noteData: previousNotes,
      });
    });

    this.database.on("child_removed", (data) => {
      for (var i = 0; i < previousNotes.length; i++) {
        if (previousNotes[i].id === data.key) {
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        noteData: previousNotes,
      });
    });
  }

  addNote = (note) => {
    this.database.push().set(note);
  };

  removeNote = (noteId) => {
    this.database.child(noteId).remove();
  };

  toggleAddNote = () => {
    this.setState({ isAddNote: !this.state.isAddNote });
  };

  setSearchQuery = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  clearSearch = () => {
    this.setState({ searchQuery: "" });
  };

  render() {
    const { noteData, isAddNote, searchQuery } = this.state;
    return (
      <div className="App">
        <Header
          setSearchQuery={this.setSearchQuery}
          clearSearch={this.clearSearch}
        />
        <Body
          noteData={noteData}
          removeNote={this.removeNote}
          searchQuery={searchQuery}
        />
        <Footer toggleAddNote={this.toggleAddNote} />
        {isAddNote ? (
          <AddNoteModal
            addNote={this.addNote}
            closeModal={this.toggleAddNote}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isDark: state.dark.mode,
  };
}

export default connect(mapStateToProps)(App);

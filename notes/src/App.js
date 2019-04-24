import React, {Component} from 'react';
import Note from './Components/Note';
import uuid from 'uuid';

import {Jumbotron ,Container,Button,CardColumns} from 'reactstrap';




class App extends Component {

  componentWillMount(){
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }


  constructor(props){
    super(props);

    this.state = {
      notes : []
    };

  }

  handleUpdate = (i,e) => {

    const {notes} = this.state;

    notes.map((n,j) => (n.id===i ? n.msg=e: n.msg ));

    this.setState({
      notes : notes
    });
    localStorage.setItem("notes", JSON.stringify(notes));

  }

addNote = () =>{

  let {notes} = this.state;

  notes = [...notes , {id:uuid.v4(), msg:""}];

  this.setState({
    notes : notes
  });
  localStorage.setItem("notes", JSON.stringify(notes));

}

handleDelete = (i) => {
  const {notes} = this.state;
  const filtered = notes.filter(note => note.id !==i);
  this.setState({
    notes : filtered
  });
  localStorage.setItem("notes", JSON.stringify(filtered));

}

  render() {
    return(
      <div className="App">
        <Jumbotron>
          <Container>
            <h1 className="display-3">Note taking app</h1>
          </Container>
        </Jumbotron>
        <Button color="primary" onClick={this.addNote}>Add Note</Button>



        <Container>
        {this.state.notes && this.state.notes.length===0 &&
            <h1>No notes...</h1>
        }
          <CardColumns color="primary">
          {this.state.notes.map((note) =>(
            <Note key={note.id} note={note} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
          ))}
          </CardColumns>
        </Container>
      </div>
    );
  }

}

export default App;

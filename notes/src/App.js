import React, {Component} from 'react';
import Note from './Components/Note';
import uuid from 'uuid';

import {Jumbotron ,Container,Row,Col,Button} from 'reactstrap';

class App extends Component {

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
  }

addNote = () =>{
  this.setState(previousState =>({
    notes : [...previousState.notes, {id:uuid.v4(), msg:"new note"}]
  }));
}

handleDelete = (i) => {
  const {notes} = this.state;
  const filtered = notes.filter(note => note.id !==i);
  this.setState({
    notes : filtered
  });
}

  render() {
    return(
      <div className="App">
        <Jumbotron>
          <Container>
            <h1 className="display-3">Note taking app</h1>

          </Container>
        </Jumbotron>
        <Button onClick={this.addNote}>Add Note</Button>
        {this.state.notes.map((note) =>(
            <Note key={note.id} note={note} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
        ))}

      </div>
    );
  }

}

export default App;

import React, { Component } from 'react';
import {Card,CardBody,Input,Button,Row} from 'reactstrap';

class Note extends Component {

  constructor(props){
    super(props);

    this.state = {
      edit: false
    };
  }

  handleClick = () =>{
    this.setState({edit: !this.state.edit});
  }

  handleUpdate = (e) =>{
    this.props.handleUpdate(this.props.note.id, e.target.value);
  }

  handleDelete = (e) =>{
    this.props.handleDelete(this.props.note.id);
  }

  render(){
    return(
      <Card id={"id"+this.props.note.id} className="nav-note" color="light">
        <Row md="10" sm="10">
            {!this.state.edit &&
              <CardBody id={"id"+this.props.note.id +"-msg"} onClick={this.handleClick}>{this.props.note.msg}</CardBody>
            }
            {this.state.edit &&
              <Input autoFocus type="textarea" onBlur={this.handleClick} defaultValue={this.props.note.msg} onChange={this.handleUpdate}></Input>
            }
            <Button className="nav-close-note" size="sm" color="danger" onClick={this.handleDelete}><b>&times;</b></Button>

          </Row>
      </Card>
    );
  }
}

export default Note;

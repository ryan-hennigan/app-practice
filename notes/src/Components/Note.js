import React, { Component } from 'react';
import {Card,CardBody,Input,Button,Row,Col} from 'reactstrap';


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

  handleDelete = (e)=>{
    this.props.handleDelete(this.props.note.id);
  }


  render(){
    return(
      <Card color="light">
        <Row>
          <Col sm="10">
            {!this.state.edit &&
              <CardBody onClick={this.handleClick}>{this.props.note.msg}</CardBody>
            }
            {this.state.edit &&
              <div>
                <Input type="textarea" onBlur={this.handleClick} defaultValue={this.props.note.msg} onChange={this.handleUpdate}></Input>
              </div>
            }
          </Col>
          <Col sm="2">
            <Button color="danger" onClick={this.handleDelete}>&times;</Button>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Note;

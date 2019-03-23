import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class GroceryForm extends Component {
  state = { name: '', price: ''}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ name: '', price: ''});
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
        <Form.Input 
        fluid
        value={this.state.name}
        name='name'
        onChange={this.handleChange}
        required placeholder="Add an item" />
        <Form.Input 
        fluid
        value ={this.state.price}
        name='price'
        onChange={this.handleChange}
        required placeholder="Price" />
        <Form.Button>Add</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default GroceryForm;
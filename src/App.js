import React, { Component } from 'react';
import List from './components/List';
import GroceryForm from './components/GroceryForm';
import { Container, Header, Button, Icon, Segment } from 'semantic-ui-react';

class App extends Component {
  state = {
    groceryItems: [
      { id: 1, name: 'Red Bull', price: 2.50, complete: false, },
      { id: 2, name: 'Bread', price: 3.25, complete: false, },
      { id: 3, name: 'Cheese', price: 2.50, complete: false, }
    ],
    showForm: true,
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm, });


  addGroceryItem = (groceryItemData) => {
    let groceryItem = { id: this.getId(), ...groceryItemData };
    this.setState({ groceryItems: [ groceryItem, ...this.state.groceryItems],});
  }

  removeItem = (id) => {
    const groceryItems = this.state.groceryItems.filter( groceryItem => {
      if (groceryItem.id !== id)
        return groceryItem
    });
    this.setState({ groceryItems: [...groceryItems]});
  }

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  render() {
    const { groceryItems } = this.state;
    return (
      <Container style={{paddingTop: '25px' }}>
        <Header as="h1">React Grocery List</Header>
        <Segment basic>
          <Button icon color='blue' onClick={this.toggleForm}>
            <Icon name={this.state.showForm? 'angle double up' : 'angle double down'} />
          </Button>
          <br />
          {this.state.showForm ? <GroceryForm add={this.addGroceryItem} /> : null }
        </Segment>
        <br />
          <List name='Grocery List' groceryItems={groceryItems} remove={this.removeItem} />
       
      </Container>
    );
  }
}

export default App;

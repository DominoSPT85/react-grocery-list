import React from 'react';
import Item from './Item';
import { Table } from 'semantic-ui-react';

const List = ({groceryItems, name, remove }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Item Name</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        groceryItems.map( item => (
          <Item key={item.id} {...item} remove={remove} />
        ))

      }
    </Table.Body>
  </Table>
)

export default List;
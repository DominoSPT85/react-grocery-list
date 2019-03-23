import React from 'react';
import { Button, Table } from 'semantic-ui-react';

const Item = ({ id, name, price, remove }) => (
  <Table.Row>
    <Table.Cell>{name}</Table.Cell>
    <Table.Cell>${price}</Table.Cell>
    <Table.Cell>
      <Button color='blue' onClick={() => remove(id)}>
        Delete
      </Button>
    </Table.Cell>
  </Table.Row>
)

export default Item;
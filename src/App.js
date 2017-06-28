import React, { Component } from 'react';
import Group from './Group';

const wishlist = [
  {
    name: 'Backpacks',
    items: [
      {
        name: 'Osprei',
        brandName: 'Eagle Creek',
        price: 130
      },
      {
        name: 'Item 2',
        brandName: 'Eagle Creek',
        price: 130
      },
      {
        name: 'Item 4',
        brandName: 'Eagle Creek',
        price: 130
      }
    ]
  },
  {
    name: 'Notebooks',
    items: [
      {
        name: 'Item 1',
        brandName: 'Eagle Creek',
        price: 130
      },
      {
        name: 'Item 2',
        brandName: 'Eagle Creek',
        price: 130
      },
      {
        name: 'Osprei',
        brandName: 'Eagle Creek',
        price: 130
      }
    ]
  },
];

class App extends Component {

  render() {
    return (
      <div className="Main__container">
        { wishlist.map( group => (
          // TODO add correct id
          <Group
            key={group.name}
            name={group.name}
            items={group.items}/>
        ))}
      </div>
    );
  }
}

export default App;

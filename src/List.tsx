import {useState } from 'react';

const items = [
    {
        item: 'An item'
    },
    {
        item: 'A second item'
    },
    {
        item: 'A third item'
    },
    {
        item: 'A fourth item'
    },
    {
        item: 'And a fifth one'
    }
]

function List() {
  const [list, setList] = useState(items);
  const createListItems = () => {
    const newList = [...list];
    newList.push({item: 'A new item'});
    setList(newList);
  }
  const removeListItem = (index: number) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }
  return (
    <>
      <div className="d-flex justify-content-end mb-3">
        <button type="button" className="btn btn-outline-primary me-3" style={{width: '150px'}} onClick={createListItems}>Add Item</button>
      </div>
      <ul className="list-group">
        {
          list.map((item, index) => {
            return (
              <li className="list-group-item d-flex justify-content-between" key={index}>
                <p>{item.item}</p>
                <button type="button" className="btn btn-outline-danger" style={{width: '150px'}} onClick={() => removeListItem(index)}>Remove Item</button>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default List

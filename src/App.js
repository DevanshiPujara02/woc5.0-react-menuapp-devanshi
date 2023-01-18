import './App.css';
import { useState } from 'react';
import items from './Data.js';

// const allCategories = ;

function App() {
  const [activeCategory,setactiveCategory] = useState("All");
  const [menuitems, setmenuitems] = useState(items);

  const categories=["All", ...new Set(items.map((item) => item.category))];
  

  const filteritems = (category)=> {
    // console.log(`filtering items by category ${category}`)
    setactiveCategory(category);
    if(category === "All"){
      setmenuitems(items);
    }
    else{
      const newitems=items.filter((item) => item.category === category);
      setmenuitems(newitems);
    }

  }

  return (
    <div className="App">
      <div className='header'>
      <h1>This is Jane's Kitchen</h1>
      </div>
      <div className='category_container'>
        {categories.map((category) => {
          return(
            <div className='buttonss'>
              <button
              type="button"
              className={`${activeCategory === category?'filter-btn-active': 'filter-btn'}`}
              onClick={() => filteritems(category)}>
              {category}</button>
            </div>
          );
        })}
      </div>

      {/* Displaying menu items */}

      <div>
        {menuitems.map((item) => {
          // const {id,name,category,price,img} = item;
          return (
            <div className='Menuitem'>
              <img src={item.img} alt={item.name} className='picture'></img>
              <div className='menutext'>
                <h2>{item.name}</h2>
                <h3>Rs. {item.price}</h3>
                <p>An Indian dish consisting of pieces of vegetable, chicken, etc, dipped in a spiced batter and deep-fried: served with a piquant sauce.</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// woc5.0-react-menuapp-devanshi\src\dabeli_img.jpeg



export default App;

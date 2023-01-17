import './App.css';
import { useState } from 'react';
import items from './Data.js';

// const allCategories = ;

function App() {
  const [activeCategory,setactiveCategory] = useState("All");
  const categories=["All", ...new Set(items.map((item) => item.category))];

  const filteritems = (category)=> {
    setactiveCategory(category);
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

    </div>
  );
}



export default App;

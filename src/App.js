import './App.css';
import { useState } from 'react';
import items from './Data.js';

// const allCategories = ;

function App() {
  const [activeCategory,setactiveCategory] = useState("All");
  const categories=["All", ...new Set(items.map((item) => item.category))];

  return (
    <div className="App">
      <div className='header'>
      <h1>This is Jane's Kitchen</h1>
      </div>
      {/* {categories.map((item) => {
        return <div>{item}</div>
      })} */}
      <div className='category_container'>
        {categories.map((category) => {
          return(
            <div>
              <button>{category}</button>
            </div>
          );
        })}
      </div>

    </div>
  );
}



export default App;

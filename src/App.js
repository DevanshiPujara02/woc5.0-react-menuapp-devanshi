import './App.css';
import { useState } from 'react';
import items from './Data.js';

// const allCategories = ;

function App() {
  const [activefilter1category,setactivefilter1category] = useState("All");
  const [activefilter2category,setactivefilter2category] = useState("All");
  const [activesortcategory,setactivesortcategory]=useState("None");
  const [menuitems, setmenuitems] = useState(items);

  const filter1categories=["All", ...new Set(items.map((item) => item.category1))];
  const filter2categories=["All", ...new Set(items.map((item) => item.category2))];
  
  const sortcategories=["None","Price","Popularity"];
  

  const filteritems = (category1,category2)=> {
    setactivefilter1category(category1);
    setactivefilter2category(category2);

    var newitems=items;

    if(category1!=="All"){
      newitems=newitems.filter((item) => item.category1 === category1);
    }

    if(category2!="All"){
      newitems=newitems.filter((item) => item.category2 === category2);
    }

    setmenuitems(newitems);
  }

  //how to loop through key value pairs in an object
  // const showsortcategories = () =>{
  //   Object.entries(items[0]).map(([key, value]) => {
  //     if(Number.isInteger(value)){
  //       console.log(key);
  //     }
  //   })
  // }

  return (
    <div className="App">
      <div className='header'>
      <h1>This is Jane's Kitchen</h1>
      </div>
      <div className='category_container'>
        {/* {filtercategories.map((category) => {
          return(
            <div className='buttonss'>
              <button
              type="button"
              className={`${activefiltercategory === category?'filter-btn-active': 'filter-btn'}`}
              onClick={() => filteritems(category)}>
              {category}</button>
            </div>
          );
        })} */}
        <button className='filter-btn'>Menu</button>
        <button className='filter-btn'>About</button>
        <button className='filter-btn'>Contact</button>
      </div>

      {/* <div className='dropdown'>

        <div className='filterdiv'>
          <button className='filter-dropbtn'>Filter</button>
          <div className='dropdown-content'>
            <button>Show all</button>
            <button>Breakfast</button>
            <button>Lunch</button>
            <button>Dinner</button>
          </div>
        </div>

        <div className='sortdiv'>
          <button className='sort-dropbtn'>Sort</button>
          <div className='dropdown-content'>
            <button>Price</button>
            <button>Popularity</button>
          </div>
        </div>

      </div> */}


      <div className='dropdown'>
        <div className='filterdivhead'>Filter by: </div>
        <div className='filterdiv'>
          <button className='filter-dropbtn'>{activefilter1category}</button>
          <div className='dropdown-content'>
            {filter1categories.map((category) => {
              return(
                <button onClick={() => filteritems(category,activefilter2category)}>{category}</button>
              )
            })}
          </div>
        </div>

        <div className='filterdiv'>
          <button className='filter-dropbtn'>{activefilter2category}</button>
          <div className='dropdown-content'>
            {filter2categories.map((category) => {
              return(
                <button onClick={() => filteritems(activefilter1category,category)}>{category}</button>
              )
            })}
          </div>
        </div>

        <div className='filterdivhead'>Sort by: </div>
        <div className='sortdiv'>
          <button className='sort-dropbtn'>Sort</button>
          <div className='dropdown-content'>
            {sortcategories.map((category) => {
              return(
                <button>{category}</button>
              )
            })}
          </div>
        </div>

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

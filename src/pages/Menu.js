import '../App.css';
import { useState } from 'react';
import items from '../Data.js';
import { Link } from 'react-router-dom';


export const Menu = () => {
    const [activefilter1category,setactivefilter1category] = useState("All");
    const [activefilter2category,setactivefilter2category] = useState("All");
    const [activesortcategory,setactivesortcategory]=useState("None");
    const [menuitems, setmenuitems] = useState(items);
  
    const filter1categories=["All", ...new Set(items.map((item) => item.category1))];
    const filter2categories=["All", ...new Set(items.map((item) => item.category2))];
    
    const sortcategories=["None","Price (Low to High)","Price (High to Low)","Popularity (Low to High)", "Popularity (High to Low)"];
    
  
    const filteritems = (category1,category2)=> {
      setactivefilter1category(category1);
      setactivefilter2category(category2);
  
      var newitems=items;
  
      // if(category1=="All" &&)
  
      if(category1!=="All"){
        newitems=newitems.filter((item) => item.category1 === category1);
      }
  
      if(category2!=="All"){
        newitems=newitems.filter((item) => item.category2 === category2);
      }
  
      console.log(newitems);
      newitems=[...newitems].sort((a,b) => a.price - b.price);
      
  
      if(activesortcategory ==='None'){
        newitems=[...newitems].sort((a,b) => a.id - b.id);
      }
      else if(activesortcategory ==='Price (Low to High)'){
        newitems=[...newitems].sort((a,b) => a.price - b.price);
      }
      else if(activesortcategory ==='Price (High to Low)'){
        newitems=[...newitems].sort((a,b) => b.price - a.price);
      }
      else if(activesortcategory === 'Popularity (Low to High)'){
        newitems=[...newitems].sort((a,b) => a.orders - b.orders);
      }
      else{
        newitems=[...newitems].sort((a,b) => b.orders - a.orders);
      }
  
      setmenuitems(newitems);
    }
  
    const sortitems = (category) => {
      setactivesortcategory(category);
      if(category ==='None'){
        setmenuitems([...menuitems].sort((a,b) => a.id - b.id));
      }
      else if(category ==='Price (Low to High)'){
        setmenuitems([...menuitems].sort((a,b) => a.price - b.price));
      }
      else if(category ==='Price (High to Low)'){
        setmenuitems([...menuitems].sort((a,b) => b.price - a.price));
      }
      else if(category === 'Popularity (Low to High)'){
        setmenuitems([...menuitems].sort((a,b) => a.orders - b.orders));
      }
      else{
        setmenuitems([...menuitems].sort((a,b) => b.orders - a.orders));
      }
    }
    return (
        <div>
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
                    <button className='sort-dropbtn'>{activesortcategory}</button>
                    <div className='dropdown-content'>
                        {sortcategories.map((category) => {
                        return(
                            <button onClick={() => sortitems(category)}>{category}</button>
                        )
                        })}
                    </div>
                </div>
            </div>

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
                            <Link to={`/items/${item.id}`}><button className='loginbtn2'>Details</button><br /><br /></Link>
                        </div>
                    </div>
                );
                })}
            </div>
        </div>
    )
}
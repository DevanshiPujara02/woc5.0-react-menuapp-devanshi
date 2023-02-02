import { useState } from "react";
import { Link } from "react-router-dom"
import { auth } from "../firebase-config";
import {onAuthStateChanged, signOut} from "firebase/auth"


export const Header = () => {


  const [user,setUser] = useState({});

  const logout = async () => {
    await signOut(auth);
    if(user===null){
      alert("You have not logged in!");
    }
    else{
      alert("Logged out successfully!");
    }

  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })


    return (
        <div>
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
          <button className='filter-btn-active'>Menu</button>
          <button className='filter-btn'>About</button>
          <button className='filter-btn'>Contact</button>
          
          <br />
          
          {user===null && <div>Not Logged in</div>}
          {user===null && <Link to={"/loginpage"}>Login</Link>}
          {user!==null && <div>Logged in as: {user?.email}</div>}
          {user!==null && <button onClick={logout}>Log out</button>}
        </div>
        </div>
    )
}
import { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { auth } from "../firebase-config";
import {onAuthStateChanged, signOut} from "firebase/auth"
import '../App.css';


export const Header = () => {


  const [user,setUser] = useState({});
  const [pg,setPg] = useState(0);

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
          <div>
          {user===null && <div className='loginbtn-upp'>Not Logged in</div>}
          {/* {user===null && <div className='loginbtn-div'><Link to={"/loginpage"} className='loginbtn'>Login</Link></div>} */}
          {user===null && <Link to={'/loginpage'}><button const path = '/loginpage' className='loginbtn2'>Login</button></Link>}
          {user!==null && <div className='loginbtn-upp'>Logged in as: {user?.email}</div>}
          {user!==null && <button onClick={logout} className='loginbtn2'>Log out</button>}
          </div>
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

          <NavLink to="/" className={({ isActive }) => (isActive ? 'filter-btn-active' : 'filter-btn')}>Menu</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'filter-btn-active' : 'filter-btn')}>Contact us</NavLink>
          
          
          <br />
          

        </div>
        </div>
    )
}
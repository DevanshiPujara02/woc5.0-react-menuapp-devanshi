import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { Extrapage } from './extrapage';
import { Details } from './pages/Details';
import { Header } from './components/Header';
import { Menu } from './pages/Menu';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Contact } from './pages/Contact';

function App() {

  //how to loop through key value pairs in an object
  // const showsortcategories = () =>{
  //   Object.entries(items[0]).map(([key, value]) => {
  //     if(Number.isInteger(value)){
  //       console.log(key);
  //     }
  //   })
  // }

  //added extra lines

  //hello adding more lines
  //adding still more lines
  


  return (
    <div className="App">
      {/* <Router basename={process.env.PUBLIC_URL}> */}
      <Router basename="/woc5.0-react-menuapp-devanshi">
        <Header />
        <Routes>
          <Route  path="/" element={<Menu />}></Route>
          <Route  exact path="/extrapage" element={<Extrapage />}></Route>
          <Route  exact path="/items/:id" element={<Details />}></Route>
          <Route exact path="/loginpage" element={<Login />}></Route>
          <Route exact path="/signuppage" element={<Signup />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;

import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { Extrapage } from './extrapage';
import { Details } from './pages/Details';
import { Header } from './components/Header';
import { Menu } from './pages/Menu';

function App() {

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
      <Router>
        <Header />
        <Routes>
          <Route  path="/" element={<Menu />}></Route>
          <Route  exact path="/extrapage" element={<Extrapage />}></Route>
          <Route  exact path="/items/:id" element={<Details />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;

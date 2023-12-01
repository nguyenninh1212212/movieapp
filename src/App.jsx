import './App.css';
import Nav from './components/Nav/Nav'
import RealNav from './components/realNav/RealNav';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Log from "./components/Log/Log"
import Action from './components/Action/Action';
import Horror from './components/Action/Horror';
import Details from './components/Details/Details';
import Footer from "./components/footer/Footer"
import Moviefound from './components/Search/Moviefound';
import War from './components/Action/War';
import Technology from './components/Action/Technology';
const App=()=> {
  return (
<>
<div className="realNav"><RealNav/></div>
<div className='body'>
<Routes>
  <Route path='/Login' element={<Log/>}/>
  <Route path='/Action' element={<Action/>}/>
  <Route path='/Horror' element={<Horror/>}/>
  <Route path='/Technology' element={<Technology/>}/>
  <Route path='/War' element={<War/>}/>
  <Route path='/Details/:id' element={<Details/>}/>
  <Route path='/MovieFound/:searchTerm' element={<Moviefound/>}/>
  <Route path='/' element={<Nav/>}/>
</Routes>
 </div>

</>
  )
}

export default App;

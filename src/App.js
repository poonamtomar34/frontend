
import './App.css';
import Home from './Home'
import Form from './Form'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Instaposts from './Instaposts'

function App() {
  return (<BrowserRouter>
  <Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/posts' element={<Instaposts />}/>
  <Route path='/form' element={<Form />}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;

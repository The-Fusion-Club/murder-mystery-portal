import './App.css';
import Home from './Home'
import Actions from './Actions'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/actions' element={<Actions />}/>
      </Routes>
    </>
  );
}

export default App;

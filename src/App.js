import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound'
import { createContext } from 'react';
import useData from './hooks/useData';
import useReviews from './hooks/useReviews';

export const AllContext = createContext()
function App() {

  const data = useData()
  const reviews = useReviews()

  return (
    <div>
      <Header></Header>
      <AllContext.Provider value={{data, reviews}}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </AllContext.Provider>
    </div>
  );
}

export default App;

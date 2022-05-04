import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Login from './pages/Home/Login/Login';
import Signup from './pages/Home/Signup/Signup';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Inventory from './pages/Home/Inventory/Inventory';
import Blogs from './pages/Home/Blogs/Blogs'
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Toaster></Toaster>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;

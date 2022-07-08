
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import About from "./pages/About";
import AddEditBlog from "./pages/AddEditBlog";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <ToastContainer/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/addBlog" element={<AddEditBlog/>}></Route>
      <Route path="/editBlog/:id" element={<AddEditBlog/>}></Route>
      <Route path="/blog/:id" element={<Blog/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
     </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;

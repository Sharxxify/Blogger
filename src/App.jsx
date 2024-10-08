import { Routes, Route } from 'react-router-dom';
import Home from './stuff/Home';
import AddBlog from './stuff/AddBlog';
import EditBlog from './stuff/EditBlog';
import ViewBlog from './stuff/ViewBlog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddBlog />} />
      <Route path="/edit/:id" element={<EditBlog />} />
      <Route path="/view/:id" element={<ViewBlog />} />
    </Routes>
  );
}

export default App;

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);

  const handleDelete = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
  };

  return (
    <div className="h-full flex flex-col items-center bg-transparent p-6">
      <div className="bg-[#003366] p-5 flex justify-between w-full mb-4 rounded-full">
        <h1 className="text-3xl font-bold text-white">Blog Posts</h1>
        <Link to="/add" className="bg-[#FF9800] text-white px-4 py-2 rounded-full hover:bg-[#F57C00]">
          + Add Blog
        </Link>
      </div>
      <div className="flex flex-wrap justify-center">
        {blogs.map((blog) => (
          <Link 
            to={`/view/${blog.id}`} 
            key={blog.id} 
            className="bg-white p-4 rounded-lg shadow-md m-2 w-80 hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-xl font-bold text-left">{blog.title}</h2>
            <p className="text-gray-600 text-left">By {blog.author}</p>
            <p className="text-gray-800 text-left">{blog.content.substring(0, 100)}...</p>
            <div className="flex justify-between mt-4">
              <Link 
                to={`/edit/${blog.id}`} 
                className="bg-[#FF9800] text-white px-2 py-1 rounded-full hover:bg-[#F57C00]">
                ✏️ Edit
              </Link>
              <button 
                onClick={(e) => {
                  e.stopPropagation(); 
                  handleDelete(blog.id);
                }} 
                className="bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600">
                🗑️ Delete
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;

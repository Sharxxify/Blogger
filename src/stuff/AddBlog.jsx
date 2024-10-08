import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function AddBlog() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: Date.now(),
      title,
      author,
      content,
    };
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    localStorage.setItem('blogs', JSON.stringify([...storedBlogs, newBlog]));
    navigate('/');
  };

  return (
    <div className="h-full flex flex-col items-center bg-transparent p-6">
      {/* Header similar to Home.jsx */}
      <div className="bg-[#003366] p-5 flex justify-between w-full mb-4 rounded-full">
        <h1 className="text-3xl font-bold text-white">New Blog</h1>
        <Link to="/" className="bg-[#FF9800] text-white px-4 py-2 rounded-full hover:bg-[#F57C00]">
          🏠 Home
        </Link>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
            className="w-full p-2 border border-gray-300 rounded" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Author</label>
          <input 
            type="text" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            required 
            className="w-full p-2 border border-gray-300 rounded" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Content</label>
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
            className="w-full p-2 border border-gray-300 rounded" 
          ></textarea>
        </div>
        <button type="submit" className="bg-[#FF9800] text-white px-4 py-2 rounded-full hover:bg-[#F57C00]">
          Add Blog
        </button>
      </form>
    </div>
  );
}

export default AddBlog;

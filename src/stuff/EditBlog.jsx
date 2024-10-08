import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const blog = blogs.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setTitle(blog.title);
      setAuthor(blog.author);
      setContent(blog.content);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBlog = { id: parseInt(id), title, author, content };
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const updatedBlogs = storedBlogs.map((blog) => (blog.id === parseInt(id) ? updatedBlog : blog));
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center h-full bg-transparent p-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Edit Blog</h2>
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
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditBlog;

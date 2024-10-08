import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ViewBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const foundBlog = blogs.find((blog) => blog.id === parseInt(id));
    if (foundBlog) {
      setBlog(foundBlog);
    }
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full flex flex-col items-center bg-transparent p-6">
      {/* Header */}
      <div className="bg-[#003366] p-5 flex justify-between w-full mb-4 rounded-full">
        <h1 className="text-3xl font-bold text-white">Blog Posts</h1>
        <Link to="/" className="bg-[#FF9800] text-white px-4 py-2 rounded-full hover:bg-[#F57C00]">
          🏠 Home
        </Link>
      </div>

      {/* Blog Content */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-left">{blog.title}</h2>
        <p className="text-gray-600 text-left">By {blog.author}</p>
        <p className="text-gray-800 text-left mt-4">{blog.content}</p>

        <div className="flex justify-between mt-6">
          {/* Edit Button */}
          <Link 
            to={`/edit/${blog.id}`} 
            className="bg-[#FF9800] text-white px-4 py-2 rounded-full hover:bg-[#F57C00]"
          >
            ✏️ Edit
          </Link>

          {/* Delete Button */}
        </div>
      </div>
    </div>
  );
}

export default ViewBlog;

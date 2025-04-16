import { useState, useEffect } from 'react';
import WhyRecyclensImage from "../assets/image/whyrecyclens.png";

export default function Blog() {
  const [featuredPost, setFeaturedPost] = useState(null);
  const [regularPosts, setRegularPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);

        const apiBaseUrl = import.meta.env.DEV
          ? "/api"
          : import.meta.env.VITE_API_URL;

        const response = await fetch(`${apiBaseUrl}/blogs`);
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data && data.length > 0) {
          // Set the first post as featured
          setFeaturedPost(data[0]);
          // Set the rest as regular posts
          setRegularPosts(data.slice(1));
        }
      } catch (err) {
        setError(`Failed to fetch blog posts: ${err.message}`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  // Format date function
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      // Format to DD Bulan YYYY in Indonesian
      const months = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
      ];
      
      return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    } catch (e) {
      return dateString;
    }
  };
  
  // Loading state
  if (loading) {
    return (
      <div className="w-full mx-auto bg-gray-50 p-8 flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-teal-600">Memuat artikel...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-full mx-auto bg-gray-50 p-8 flex justify-center items-center min-h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p className="font-bold">Error!</p>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  // No posts state
  if (!featuredPost && regularPosts.length === 0) {
    return (
      <div className="w-full mx-auto bg-gray-50 p-8 flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-600">Tidak ada artikel yang tersedia saat ini.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full mx-auto bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <header className="py-6">
          <h1 className="text-3xl font-bold text-center">Blog Kami</h1>
        </header>
        
        {/* Featured Post */}
        {featuredPost && (
          <div className="mx-4 mb-8 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={`/api/blog_thumbnails/${featuredPost.thumbnail}`} 
                  alt={featuredPost.title}
                  className="h-96 w-full object-cover"
                  onError={(e) => {
                    e.target.src = WhyRecyclensImage;
                  }}
                />
              </div>
              <div className="md:w-1/2 p-6">
                <h2 className="text-3xl font-medium text-teal-700 mb-2">{featuredPost.title}</h2>
                <p className="text-sm text-gray-500 mb-3">
                  {formatDate(featuredPost.created_at)}
                </p>
                <p className="text-gray-600 mb-4 text-sm">
                  {featuredPost.content.substring(0, 150)}
                  {featuredPost.content.length > 150 && "..."}
                </p>
                <div className="flex justify-between items-center">
                  <button className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-700">
                    Baca Selengkapnya
                  </button>
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Grid of Regular Posts */}
        <div className="px-4">
          {regularPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {regularPosts.map(post => (
                <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img 
                    src={`/api/blog_thumbnails/${post.thumbnail}`}
                    alt={post.title}
                    className="h-48 w-full object-cover"
                    onError={(e) => {
                      e.target.src = WhyRecyclensImage;
                    }}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-medium text-gray-800 mb-1">{post.title}</h3>
                    <p className="text-xs text-gray-500 mb-2">
                      {post.content.substring(0, 80)}
                      {post.content.length > 80 && "..."}
                    </p>
                    <div className="flex justify-start">
                      <button className="text-teal-600 text-xs flex items-center hover:text-teal-800">
                        Baca Selengkapnya
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Pagination Button */}
        <div className="flex justify-center mb-8 mt-6">
          <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-700">
            Lihat Artikel Lainnya
          </button>
        </div>
      </div>
    </div>
  );
}


import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import WhyRecyclensImage from "../assets/image/whyrecyclens.png";

export default function BlogDetail() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true);

        const apiBaseUrl = import.meta.env.DEV
          ? "/api"
          : import.meta.env.VITE_API_URL;

        const response = await fetch(`${apiBaseUrl}/blogs/${id}`);
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(`Gagal memuat artikel: ${err.message}`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

  // Format date function (same as in your Blog component)
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
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
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md">
          <p className="font-bold">Error!</p>
          <p>{error}</p>
          <div className="mt-4 flex space-x-3">
            <button 
              onClick={() => window.location.reload()} 
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm"
            >
              Coba Lagi
            </button>
            <Link 
              to="/blog" 
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-sm"
            >
              Kembali ke Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // No post found state
  if (!post) {
    return (
      <div className="w-full mx-auto bg-gray-50 p-8 flex justify-center items-center min-h-screen">
        <div className="text-center max-w-md">
          <p className="text-gray-600 mb-4">Artikel tidak ditemukan.</p>
          <Link 
            to="/blog" 
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded text-sm"
          >
            Kembali ke Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back button */}
        <div className="mb-6">
          <Link 
            to="/blog" 
            className="flex items-center text-teal-600 hover:text-teal-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Kembali ke Blog
          </Link>
        </div>

        {/* Article header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{post.title}</h1>
          <p className="text-gray-500 text-sm">
            Dipublikasikan pada {formatDate(post.created_at)}
          </p>
        </div>

        {/* Featured image */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <img 
            src={`/api/blog_thumbnails/${post.thumbnail}`} 
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
            onError={(e) => {
              e.target.src = WhyRecyclensImage;
            }}
          />
        </div>

        {/* Article content */}
        <div className="prose max-w-none mb-12">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share buttons */}
        <div className="border-t border-b border-gray-200 py-6 mb-8">
          <h3 className="text-sm font-medium text-gray-500 mb-3">Bagikan artikel ini:</h3>
          <div className="flex space-x-4">
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a 
              href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - ${window.location.href}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-500"
            >
              <span className="sr-only">WhatsApp</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Back to blog button */}
        <div className="text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Kembali ke Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getDataFromFirestore from "../Getdatafromfirestrore";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register ScrollTo plugin
gsap.registerPlugin(ScrollToPlugin);

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch blogs from Firestore
  const fetchBlogs = async () => {
    try {
      const blogs = await getDataFromFirestore("blogs");
      setBlogPosts(blogs);
    } catch (error) {
      console.error("Error fetching Blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    // Smooth scroll to top on page load
    gsap.to(window, { duration: 1, scrollTo: 0, ease: "power2.inOut" });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-8 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto mt-24 sm:mt-32">
        {/* Content Container */}
        <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl p-6 sm:p-10 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Blog Posts
            </h1>
            <p className="mt-4 text-gray-400 text-base sm:text-lg">
              Explore our latest thoughts and insights
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => navigate(`/blogs/${post.id}`)}
                className="group relative backdrop-blur-md bg-white/5 rounded-2xl overflow-hidden cursor-pointer border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <h3 className="text-sm sm:text-md text-gray-400 mb-4 line-clamp-2">
                    {post.secondTitle}
                  </h3>

                  {/* Metadata */}
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-2">
                        <span className="text-xs text-gray-400">
                          {post.author ? post.author[0].toUpperCase() : "?"}
                        </span>
                      </div>
                      <span className="text-gray-400">
                        {post.author || "Unknown"}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>
                        {post.date?.seconds
                          ? new Date(post.date.seconds * 1000).toLocaleDateString()
                          : "Unknown"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {blogPosts.length === 0 && (
            <div className="text-center text-gray-500 py-16">
              <p className="text-lg">No blog posts available yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

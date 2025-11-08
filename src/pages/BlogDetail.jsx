import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { marked } from "marked";
import getDataFromFirestore from "../Getdatafromfirestrore";

const BlogDetail = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const blogs = await getDataFromFirestore("blogs");
        const selectedPost = blogs.find((post) => post.id === id);
        setBlogPost(selectedPost);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900">
        <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-4 border-gray-200"></div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-gray-200 px-4">
        <p className="text-lg sm:text-xl mb-4">Blog post not found.</p>
        <Link to="/blogs" className="underline hover:text-gray-400">
          Return to all blogs
        </Link>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-32 lg:pt-36 px-4 sm:px-6 lg:px-8 text-base sm:text-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${blogPost.imageUrl})` }}
    >
      {/* Blurred background overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-lg"></div>

      {/* Blog content */}
      <div className="relative z-10 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto w-full lg:w-[60%] bg-white/20 backdrop-blur-md rounded-lg shadow-lg border border-white/30 my-8 sm:my-12">
        <div className="overflow-hidden rounded-t-lg">
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
            <img src={blogPost.imageUrl} alt={blogPost.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-50 to-gray-100 mb-3 sm:mb-4">
            {blogPost.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 gap-2 sm:gap-0">
            <p>{blogPost.author || "Unknown"}</p>
            <p>
              {blogPost.date?.seconds
                ? new Date(blogPost.date.seconds * 1000).toLocaleDateString()
                : "Unknown"}
            </p>
          </div>

          <h2 className="text-base sm:text-lg md:text-xl text-gray-200 mb-4 sm:mb-6 italic">
            {blogPost["secondTitle"]}
          </h2>

          <div className="prose prose-sm sm:prose-base md:prose-lg prose-invert max-w-none text-gray-200">
            <div dangerouslySetInnerHTML={{ __html: marked(blogPost.content) }} />
          </div>
        </div>
      </div>

      {/* Back to blogs button */}
      <Link
        to="/blogs"
        className="fixed bottom-3 left-3 sm:bottom-4 sm:left-4 bg-gradient-to-r from-gray-700 to-gray-600 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full text-gray-200 hover:from-gray-600 hover:to-gray-500 transition-all duration-300 border border-gray-500 shadow-md"
      >
        ← Back to all blogs
      </Link>
    </div>
  );
};

export default BlogDetail;
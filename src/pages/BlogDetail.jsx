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
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-gray-200"></div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-gray-200">
        <p className="text-xl mb-4">Blog post not found.</p>
        <Link to="/blogs" className="underline hover:text-gray-400">
          Return to all blogs
        </Link>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen flex items-center justify-center pt-36 text-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${blogPost.imageUrl})` }}
    >
      {/* Blurred background overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-lg"></div>

      {/* Blog content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full lg:w-[60%] bg-white/20 backdrop-blur-md rounded-lg shadow-lg border border-white/30">
        <div className="overflow-hidden rounded-t-lg">
          <div className="relative w-full h-72 md:h-96">
            <img src={blogPost.imageUrl} alt={blogPost.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>

        <div className="p-6">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 mb-4">
            {blogPost.title}
          </h1>

          <div className="flex items-center justify-between text-gray-400 mb-6">
            <p>{blogPost.author || "Unknown"}</p>
            <p>
              {blogPost.date?.seconds
                ? new Date(blogPost.date.seconds * 1000).toLocaleDateString()
                : "Unknown"}
            </p>
          </div>

          <h2 className="text-xl text-gray-400 mb-6 italic">{blogPost["secondTitle"]}</h2>

          <div className="prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: marked(blogPost.content) }} />
          </div>
        </div>
      </div>

      {/* Back to blogs button */}
      <Link
        to="/blogs"
        className="fixed bottom-4 left-4 bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-3 rounded-full text-gray-200 hover:from-gray-600 hover:to-gray-500 transition-all duration-300 border border-gray-500 shadow-md"
      >
        ← Back to all blogs
      </Link>
    </div>
  );
};

export default BlogDetail;

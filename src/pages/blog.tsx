import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fetchAllPosts, type WispPost } from "../lib/wisp";

export default function BlogListPage() {
  const [posts, setPosts] = useState<WispPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setLoading(true);
        const data = await fetchAllPosts();
        if (isMounted) setPosts(data);
      } catch (err) {
        if (isMounted) setError("Failed to load blog posts.");
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  const safePosts = Array.isArray(posts) ? posts : [];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 bg-gray-50 mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Blog</h1>
            <p className="mt-3 text-gray-600">Insights and updates from Aadyanvi Wealth.</p>
          </div>

          {loading && (
            <div className="text-center text-gray-600">Loading posts...</div>
          )}
          {error && (
            <div className="text-center text-red-600">{error}</div>
          )}
          {!loading && !error && safePosts.length === 0 && (
            <div className="text-center text-gray-600">No posts yet. Please check back soon.</div>
          )}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {safePosts.map((post) => (
              <Card key={post.id} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48 w-full">
                  <img
                    src={post.coverImageUrl || "https://placehold.co/800x450"}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardContent className="flex-1 p-6">
                  <div className="text-sm text-[#08AFF1] mb-2">
                    {post.publishedAt && new Date(post.publishedAt).toLocaleDateString()}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    <Link to={`/blog/${encodeURIComponent(post.slug)}`} className="hover:text-[#AACF45] transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  {post.excerpt && (
                    <p className="mt-3 text-gray-600">{post.excerpt}</p>
                  )}
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                    <div>{post.authorName}</div>
                    <Link to={`/blog/${encodeURIComponent(post.slug)}`}>
                      <Button variant="ghost" className="text-[#08AFF1] hover:text-[#AACF45] hover:bg-transparent">Read More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}



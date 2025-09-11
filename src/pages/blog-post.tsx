import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { fetchPostBySlug, type WispPost } from "../lib/wisp";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<WispPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setLoading(true);
        const data = slug ? await fetchPostBySlug(slug) : null;
        if (isMounted) setPost(data);
        if (isMounted && !data) setError("Post not found.");
      } catch (err) {
        if (isMounted) setError("Failed to load post.");
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 bg-gray-50 mt-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <Link to="/blog" className="text-[#08AFF1] hover:text-[#AACF45]">← Back to Blog</Link>
          </div>
          {loading && <div className="text-gray-600">Loading...</div>}
          {error && <div className="text-red-600">{error}</div>}
          {!loading && !error && post && (
            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <img
                  src={post.coverImageUrl || "https://placehold.co/1200x600"}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
                <div className="mt-2 text-sm text-gray-500">
                  <span>{post.authorName}</span>
                  {post.publishedAt && (
                    <time dateTime={post.publishedAt} className="ml-2">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </time>
                  )}
                </div>
                {post.html && (
                  <div className="prose prose-gray max-w-none mt-6" dangerouslySetInnerHTML={{ __html: post.html }} />
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}



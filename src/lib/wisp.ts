import { buildWispClient } from "@wisp-cms/client";

// Centralized Wisp client configured via Vite env vars
// Required: VITE_WISP_BLOG_ID
// Optional: VITE_WISP_BASE_URL (defaults to https://www.wisp.blog)

const blogId = import.meta.env.VITE_WISP_BLOG_ID as string | undefined;
const baseUrl = (import.meta.env.VITE_WISP_BASE_URL as string | undefined) ||
  "https://www.wisp.blog";

if (!blogId) {
  // eslint-disable-next-line no-console
  console.warn(
    "Wisp CMS: VITE_WISP_BLOG_ID is not set. Blog pages will not be able to fetch posts."
  );
}

export const wisp = buildWispClient({
  baseUrl,
  // blogId is required by Wisp client; to avoid runtime crash before env is set,
  // we pass an empty string and guard actual fetches below.
  blogId: (blogId || "") as string,
});

export type WispPost = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImageUrl?: string;
  authorName?: string;
  publishedAt?: string;
  html?: string;
  tags?: Array<string>;
};

function normalizePost(raw: any): WispPost {
  const image = raw?.image || raw?.coverImageUrl || raw?.cover_image || undefined;
  const description = raw?.description || raw?.excerpt || undefined;
  const authorName = raw?.author?.name || raw?.authorName || raw?.author_name || undefined;
  const date = raw?.publishedAt || raw?.published_at || raw?.updatedAt || raw?.updated_at || undefined;
  const tags = Array.isArray(raw?.tags)
    ? raw.tags.map((t: any) => (typeof t === "string" ? t : t?.name || t?.slug)).filter(Boolean)
    : undefined;

  return {
    id: String(raw?.id ?? raw?._id ?? raw?.slug),
    title: raw?.title ?? "Untitled",
    slug: raw?.slug ?? String(raw?.id ?? ""),
    excerpt: description,
    coverImageUrl: image,
    authorName,
    publishedAt: date ? new Date(date).toISOString() : undefined,
    html: raw?.html || raw?.content || undefined,
    tags,
  };
}

export async function fetchAllPosts(): Promise<WispPost[]> {
  if (!blogId) return [];
  const raw: unknown = await wisp.getPosts({ limit: "all" } as any);
  // Normalize various possible shapes to an array
  const normalized = Array.isArray(raw)
    ? raw
    : (raw as any)?.posts || (raw as any)?.data || (raw as any)?.items || [];
  const arr = (normalized || []) as any[];
  return arr.map(normalizePost);
}

export async function fetchPostBySlug(slug: string): Promise<WispPost | null> {
  if (!blogId) return null;
  // Official client exposes wisp.getPost(slug) -> { post }
  try {
    const result = await wisp.getPost(slug);
    const candidate = (result as any)?.post || null;
    if (candidate) return normalizePost(candidate);
  } catch {
    // continue to fallback below
  }
  // Fallback: fetch all and find by slug or id
  try {
    const all = await fetchAllPosts();
    const lower = slug.toLowerCase();
    const found = all.find((p) =>
      p.slug?.toLowerCase() === lower || String(p.id).toLowerCase() === lower
    );
    return found || null;
  } catch {
    return null;
  }
}



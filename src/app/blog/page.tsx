import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { format } from "date-fns";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on building products, indie hacking, and lessons learned along the way — by Utsav Gupta.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Utsav Gupta",
    description:
      "Thoughts on building products, indie hacking, and lessons learned along the way.",
    url: "https://www.utsavworks.in/blog",
    siteName: "Utsav Gupta",
    type: "website",
    images: [{ url: "/og-image.png", width: 1307, height: 727 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Utsav Gupta",
    description:
      "Thoughts on building products, indie hacking, and lessons learned along the way.",
    images: ["/og-image.png"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-4 py-16">
      {/* <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 w-fit"
      >
        <ArrowLeft className="h-4 w-4" />
        Back home
      </Link> */}

      <h1 className="text-4xl sm:text-5xl font-serif text-primary mb-4">
        Blog
      </h1>
      <p className="text-muted-foreground mb-12 max-w-lg">
        Thoughts on building products, indie hacking, and lessons learned along
        the way.
      </p>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet. Stay tuned!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="flex flex-col gap-3">
                {post.image && (
                  <div className="w-full aspect-[16/9] relative rounded-lg overflow-hidden border border-white/10 bg-black/20">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                      sizes="(max-width:640px) 100vw, 50vw"
                    />
                  </div>
                )}

                <h2 className="text-lg sm:text-xl font-serif text-foreground group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h2>

                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {format(new Date(post.date), "MMMM d, yyyy")}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readingTime}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {post.description}
                </p>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-sm font-bold text-white}`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

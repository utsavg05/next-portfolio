import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { format } from "date-fns";

export default function RecentBlogs() {
  const posts = getAllPosts().slice(0, 4);

  if (posts.length === 0) return null;

  return (
    <section className="flex flex-col w-full max-w-4xl mx-auto py-6 px-4">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-serif text-primary">
          Most recent blogs
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <article className="flex flex-col gap-2">
              <div className="flex gap-4 items-start">
                {post.image && (
                  <div className="w-28 h-20 sm:w-36 sm:h-24 relative rounded-md overflow-hidden border border-white/10 flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="144px"
                    />
                  </div>
                )}

                <div className="flex flex-col gap-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {format(new Date(post.date), "MMMM d, yyyy")}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-1 hidden sm:block">
                    {post.description}
                  </p>
                </div>
              </div>

              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs font-medium tracking-tight text-muted-foreground whitespace-nowrap"
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
    </section>
  );
}

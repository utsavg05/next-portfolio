import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";

const components = {
  img: (props: React.ComponentProps<"img">) => {
    const src = typeof props.src === "string" ? props.src : "";
    return (
      <span className="block my-6">
        <Image
          src={src}
          alt={props.alt ?? ""}
          width={800}
          height={450}
          className="rounded-lg border border-white/10 w-full h-auto"
        />
      </span>
    );
  },
  a: (props: React.ComponentProps<"a">) => (
    <Link
      href={props.href ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary underline underline-offset-4 hover:text-foreground transition-colors"
      {...props}
    />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-2 border-primary/50 pl-4 italic text-muted-foreground"
      {...props}
    />
  ),
};

export function MDXContent({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}

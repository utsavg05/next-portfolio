"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";

export default function ContactPage() {
    return (
        <section
            id="contact"
            className="bg-background max-h-screen flex flex-col items-center justify-center py-16 px-4 mb-12"
        >
            <div className="max-w-xl text-center space-y-7">
                <h2 className="text-4xl sm:text-6xl font-serif text-primary">Get in Touch</h2>

                <p className="text-muted-foreground text-lg leading-relaxed">
                    Always open to new opportunities, collaborations, or just a good conversation.
                    You can reach me directly on <span className="text-foreground font-medium">X</span>.
                </p>

                <div className="flex justify-center">
                    {/* wrapper provides the gradient hover border, inner <a> is the real link */}
                    <HoverBorderGradient containerClassName="rounded-full">
                        <a
                            href="https://x.com/0xdevug"   
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Connect on X"
                            className="inline-flex items-center gap-3 px-5 py-2 rounded-full text-foreground transition"
                        >
                            {/* X logo (uses currentColor so it follows text color) */}
                        <div className="flex items-center gap-2">
                            <span className="font-serif text-background dark:text-foreground tracking-wide">Connect on </span>
                            <Image width={20} height={20} src={'/image.png'} alt={"x logo"} />
                        </div>
                        </a>
                    </HoverBorderGradient>
                </div>
            </div>
        </section>
    );
}

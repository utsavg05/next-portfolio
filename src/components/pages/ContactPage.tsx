"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";

export default function ContactPage() {
    return (
        <section
            id="contact"
            className="bg-transparent flex flex-col items-center justify-center pt-12 px-4 pb-30 md:pb-30"
        >
            <div className="max-w-xl text-center space-y-7">
                <h2 className="text-4xl sm:text-6xl font-serif text-primary">Get in Touch</h2>

                <p className="text-muted-foreground text-2xl leading-relaxed flex flex-wrap items-center justify-center gap-2">
                    Want to chat? Shoot me a mail on
                    <a
                        href="mailto:work.utsavg21@gmail.com"
                        className="inline-flex items-center gap-1.5 bg-accent text-foreground text-sm font-medium px-3 py-1 rounded-md hover:opacity-90 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="16" height="16">
                            <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/>
                            <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/>
                            <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
                            <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/>
                            <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"/>
                        </svg>
                        Gmail
                    </a>
                    or
                </p>

                <div className="flex justify-center">
                    <HoverBorderGradient containerClassName="rounded-full">
                        <a
                            href="https://x.com/0xdevug"   
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Connect on X"
                            className="inline-flex items-center gap-3 px-5 py-2 rounded-full text-foreground transition"
                        >
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

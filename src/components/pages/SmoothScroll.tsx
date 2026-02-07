"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        // const lenis = new Lenis({
        //   duration: 1.2,       // scroll delay
        //   easing: (t: number) =>
        //     Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
        //   smoothWheel: true,
        // });

        const lenis = new Lenis({
            duration: 1.1,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}

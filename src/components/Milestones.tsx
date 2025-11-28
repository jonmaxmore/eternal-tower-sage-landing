"use client";

import Image from "next/image";

export default function Milestones() {
    return (
        <section className="relative w-full h-auto bg-black">
            {/* Container for Milestone Map Image
         - Uses aspect-ratio to maintain image ratio
         - On mobile (md:) might need a vertical image if available
      */}
            <div className="relative w-full aspect-[16/9] md:aspect-[1920/1080]">
                <Image
                    src="/images/p2-bg.webp"
                    alt="Pre-registration Milestones"
                    fill
                    className="object-cover object-top"
                    priority={false}
                />
            </div>
        </section>
    );
}

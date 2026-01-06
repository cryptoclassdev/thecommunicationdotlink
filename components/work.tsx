"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "MetaDAO",
    category: "Explainers, Animations, New Project Coverage",
    description:
      "Helping MetaDAO explain futarchy, governance, and on-chain decision-making through clear explainers, short-form animations, and ecosystem coverage.",
    video:
      "https://res.cloudinary.com/di6zkr8of/video/upload/v1765010051/metadao-thumb_kaqxir.mp4",
    poster:
      "https://res.cloudinary.com/di6zkr8of/video/upload/v1765010051/metadao-thumb_kaqxir.jpg",
    color: "from-[#FF4949]/10 to-[#FF6B6B]/10",
    slug: "metadao",
    tags: ["Explainers", "Animations", "Coverage"],
  },
  {
    title: "Meteora",
    category: "Explainers, New User Onboarding",
    description:
      "Helping Meteora onboard new users through clear explainers and structured onboarding that makes liquidity provisioning and DLMMs easy to understand.",
    video:
      "https://res.cloudinary.com/di6zkr8of/video/upload/v1767720915/final-meteora-video_ddd58i.mp4",
    poster:
      "https://res.cloudinary.com/di6zkr8of/image/upload/v1767027816/P7WLQ9zM3O0-HD_nttmem.jpg",
    color: "from-[#FF5722]/10 to-[#9C27B0]/10",
    slug: "meteora",
    tags: ["Explainers", "Onboarding"],
  },
  {
    title: "ZCASH",
    category: "Animations",
    description:
      "Helping Zcash communicate the importance of privacy through clear explainers, narrative-driven content, and culturally relevant animations.",
    video:
      "https://res.cloudinary.com/di6zkr8of/video/upload/v1765010080/zcash-thumb_x2k9mn.mp4",
    poster:
      "https://res.cloudinary.com/di6zkr8of/video/upload/v1765010080/zcash-thumb_x2k9mn.jpg",
    color: "from-[#F9A825]/10 to-[#FFEB3B]/10",
    slug: "zcash",
    tags: ["Animations", "Motion Design"],
  },
  {
    title: "Solana Mobile",
    category: "Product Review",
    description:
      "Providing a detailed, user-focused product review that clearly explains Solana Mobile's hardware, software, and ecosystem experience.",
    video:
      "https://res.cloudinary.com/di6zkr8of/video/upload/v1765010165/solana-mobile_utrgao.mp4",
    poster:
      "https://res.cloudinary.com/di6zkr8of/image/upload/v1767031550/seeker-thumb_ee3qxj.jpg",
    color: "from-[#00B8B8]/10 to-[#9B4BFF]/10",
    slug: "solana-mobile",
    tags: ["Product Review", "Video Content"],
    youtubeUrl: "https://youtu.be/ZPReMS8bnlA",
  },
];

function ProjectMedia({ project }: { project: (typeof projects)[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || !containerRef.current || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting && videoRef.current) {
            playPromiseRef.current = videoRef.current.play();
            try {
              await playPromiseRef.current;
            } catch (error) {
              // Ignore errors
            }
          } else if (
            !entry.isIntersecting &&
            videoRef.current &&
            playPromiseRef.current
          ) {
            try {
              await playPromiseRef.current;
              videoRef.current.pause();
            } catch (error) {
              // Ignore errors
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isMobile]);

  // Ensure video is loaded and ready
  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    const handleLoadedData = () => {
      // Video is ready
    };

    const handleError = (e: Event) => {
      console.error("Video load error:", e);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
    };
  }, [project.video]);

  const handleMouseEnter = async () => {
    if (videoRef.current && !isMobile) {
      try {
        const video = videoRef.current;
        // Wait for video to be ready if needed
        if (video.readyState < 2) {
          await new Promise((resolve) => {
            const handleCanPlay = () => {
              video.removeEventListener("canplay", handleCanPlay);
              resolve(undefined);
            };
            video.addEventListener("canplay", handleCanPlay);
            video.load();
          });
        }
        // Reset video to start
        video.currentTime = 0;
        // Play the video
        playPromiseRef.current = video.play();
        await playPromiseRef.current;
      } catch (error) {
        // Ignore errors
        console.error("Error playing video:", error);
      }
    }
  };

  const handleMouseLeave = async () => {
    if (videoRef.current && playPromiseRef.current && !isMobile) {
      try {
        await playPromiseRef.current;
        videoRef.current.pause();
      } catch (error) {
        // Ignore errors
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[240px] sm:h-[280px] md:h-[360px] lg:h-[400px] overflow-hidden bg-black/[0.02]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={project.video}
        poster={project.poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* Subtle overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const CardWrapper = project.youtubeUrl ? "a" : Link;
  const cardProps = project.youtubeUrl
    ? { href: project.youtubeUrl, target: "_blank", rel: "noopener noreferrer" }
    : { href: `/projects/${project.slug}` };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <CardWrapper
        {...cardProps}
        className={cn(
          "group block overflow-hidden rounded-2xl sm:rounded-3xl",
          "bg-white border border-black/[0.06]",
          "hover:border-black/[0.1] hover:shadow-xl hover:shadow-black/[0.05]",
          "transition-all duration-500"
        )}
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Content Section - Law of Proximity: grouped elements */}
          <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center order-2 md:order-1">
            {/* Hover gradient background */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100",
                "transition-opacity duration-500",
                project.color
              )}
            />

            <div className="relative z-10">
              {/* Category label */}
              <span className="inline-block text-xs sm:text-sm font-medium text-black/40 mb-3 sm:mb-4 uppercase tracking-wider">
                {project.category}
              </span>

              {/* Title with arrow indicator */}
              <div className="flex items-start gap-3 mb-4 sm:mb-5">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black group-hover:text-black/90 transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 mt-1 sm:mt-2 text-black/30 group-hover:text-black/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
              </div>

              {/* Description - optimal reading width */}
              <p className="text-sm sm:text-base text-black/60 leading-relaxed mb-5 sm:mb-6 max-w-md">
                {project.description}
              </p>

              {/* Tags - Fitts's Law: adequate touch targets */}
              <div className="flex flex-wrap items-center gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={cn(
                      "px-3 sm:px-4 py-1.5 sm:py-2 rounded-full",
                      "text-xs sm:text-sm font-medium",
                      "bg-black/[0.04] border border-black/[0.06]",
                      "group-hover:bg-black/[0.06] group-hover:border-black/[0.08]",
                      "transition-colors duration-300"
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Media Section */}
          <div className="order-1 md:order-2">
            <ProjectMedia project={project} />
          </div>
        </div>
      </CardWrapper>
    </motion.div>
  );
}

export function Work() {
  return (
    <section
      id="work"
      className="py-16 sm:py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-blue-50/50 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header - Visual hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4">
            Our Work
          </h2>
          <p className="text-base sm:text-lg text-black/50 max-w-2xl mx-auto">
            A selection of projects where we helped crypto teams clarify their
            message, shape their narrative, and drive real adoption.
          </p>
        </motion.div>

        {/* Projects grid - Consistent spacing */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

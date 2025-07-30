"use client"

import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface Video {
  id: string
  title: string
  thumbnail: string
}

const VIDEOS: Video[] = [
  {
    id: "IHtVAM0noNI",
    title: "ESPORTS TALK BGMI SHOWDOWN 2025 OFFICIAL LOGO REVEAL",
    thumbnail: "IHtVAM0noNI"
  },
  {
    id: "EUk_JsOXDKM",
    title: "ESPORTS TALK SHOWDOWN TEASER",
    thumbnail: "EUk_JsOXDKM"
  },
  {
    id: "OGtkxwd3TlU",
    title: "BGMI ROADMAP: DEMANDS & ACTION PLAN- KRAFTON FOOLING INDIAN AUDIENCE",
    thumbnail: "OGtkxwd3TlU"
  },
  {
    id: "McRR-On25s8",
    title: "DARK REALITY OF INDIAN BGMI COMMUNITY",
    thumbnail: "McRR-On25s8"
  }
]

const ThumbnailImage = ({ videoId, title }: { videoId: string, title: string }) => {
  const [imgSrc, setImgSrc] = useState(`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`);
  const [errorCount, setErrorCount] = useState(0);

  const fallbackImages = [
    `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
    `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`,
    `https://i.ytimg.com/vi/${videoId}/default.jpg`,
  ];

  const handleImageError = () => {
    if (errorCount < fallbackImages.length) {
      setImgSrc(fallbackImages[errorCount]);
      setErrorCount(prev => prev + 1);
    }
  };

  return (
    <Image
      src={imgSrc}
      alt={title}
      width={320}
      height={180}
      className="object-cover rounded-t-lg w-full"
      onError={handleImageError}
      unoptimized
    />
  );
};

export function YoutubeVideos() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="icon"
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg rounded-full hidden md:flex"
        onClick={() => scroll('left')}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg rounded-full hidden md:flex"
        onClick={() => scroll('right')}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {VIDEOS.map((video) => (
          <Card
            key={video.id}
            className="cursor-pointer transition-transform hover:scale-105 flex-shrink-0 w-[300px] snap-start"
            onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')}
          >
            <CardContent className="p-0">
              <div className="aspect-video relative">
                <ThumbnailImage videoId={video.id} title={video.title} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayIcon className="w-12 h-12 text-white opacity-80" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold line-clamp-2">{video.title}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export default YoutubeVideos;
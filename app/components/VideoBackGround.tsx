"use client";

import { useState, useEffect } from "react";

export default function VideoBackground() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // クライアントサイドでのみ動画を表示
  }, []);

  return isClient ? (
    <video
      autoPlay
      loop
      muted
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/video/background_video.mp4" type="video/mp4" />
    </video>
  ) : null;
}

"use client";

import { useEffect, useRef, useState } from "react";

export default function Avatar({ name }: { name: string }) {
  const [errored, setErrored] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  // The onError event can fire before React hydration attaches the handler,
  // so also check for an already-broken image once mounted.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setErrored(true);
    }
  }, []);

  return (
    <div className="relative mx-auto h-36 w-36">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/40 to-accent-soft/30 blur-md" />
      <div className="relative h-36 w-36 overflow-hidden rounded-full ring-2 ring-accent/40 ring-offset-2 ring-offset-bg">
        {!errored ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imgRef}
            src="/avatar.jpg"
            alt={name}
            className="h-full w-full object-cover"
            onError={() => setErrored(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-deep to-accent/40 font-display text-4xl font-bold text-white">
            {initials}
          </div>
        )}
      </div>
    </div>
  );
}

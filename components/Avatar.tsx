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
    <figure className="m-0">
      <div className="aspect-[4/5] w-full overflow-hidden bg-paper-3">
        {!errored ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imgRef}
            src="/avatar.jpg"
            alt={name}
            className="h-full w-full object-cover object-top"
            onError={() => setErrored(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-accent font-display text-display-s text-accent-ink">
            {initials}
          </div>
        )}
      </div>
    </figure>
  );
}

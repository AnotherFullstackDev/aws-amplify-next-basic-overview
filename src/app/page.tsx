"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Photos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo: { id: string; url: string; title: string }) => (
          <div
            key={photo.id}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={photo.url}
              alt={photo.title}
              width={200}
              height={200}
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{photo.title}</h2>
              <p className="text-sm text-gray-500">{photo.id}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

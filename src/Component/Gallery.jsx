import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const IMAGES_PER_PAGE = 12;
const TOTAL_IMAGES = 300;

// Shuffle function
const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const Gallery = ({ searchQuery }) => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(TOTAL_IMAGES / IMAGES_PER_PAGE);

  useEffect(() => {
    // Fetch images when the page loads or page changes
    fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=${IMAGES_PER_PAGE}`)
      .then((res) => res.json())
      .then((data) => {
        // Shuffle images only on initial load (or every page load)
        setImages(shuffleArray(data));
      })
      .catch((err) => console.error(err));
  }, [currentPage]); // runs on page change

  const filteredImages = images.filter((img) =>
    img.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Image Gallery</h1>

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {filteredImages.map((img) => (
          <Card key={img.id} img={img} />
        ))}
        {filteredImages.length === 0 && (
          <p className="col-span-full text-center text-gray-500 mt-4">
            No images found.
          </p>
        )}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Gallery;

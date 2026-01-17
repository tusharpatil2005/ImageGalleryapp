import React, { useState } from "react";

const Card = ({ img }) => {
  const [isOpen, setIsOpen] = useState(false);
  const imageUrl = `https://picsum.photos/id/${img.id}/800/1200`;

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `Image by ${img.author}`,
          url: imageUrl,
        })
        .catch((err) => console.log("Share failed:", err));
    } else {
      // fallback: copy URL to clipboard
      navigator.clipboard.writeText(imageUrl);
      alert("Image URL copied to clipboard!");
    }
  };

  return (
    <>
      {/* Image Card */}
      <div
        className="mb-4 break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={imageUrl}
          alt={img.author}
          className="w-full rounded-xl hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <p className="p-2 text-sm text-gray-600">{img.author}</p>
      </div>

      {/* Fullscreen Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300"
            >
              &times;
            </button>

            {/* Image */}
            <img
              src={imageUrl}
              alt={img.author}
              className="w-full max-h-[90vh] object-contain rounded-lg"
            />

            {/* Download & Share Buttons */}
            <div className="absolute bottom-4 right-4 flex gap-4">
              <a
                href={imageUrl}
                download={`image-${img.id}.jpg`}
                className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-full shadow hover:bg-gray-200"
              >
                Download
              </a>
              <button
                onClick={handleShare}
                className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-full shadow hover:bg-gray-200"
              >
                Share
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

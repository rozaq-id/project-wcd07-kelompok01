import React from "react";

interface BeritaCardProps {
  imageUrl: string;
  category: string;
  title: string;
  date: string;
  time: string;
  views: number;
}

const BeritaCard: React.FC<BeritaCardProps> = ({
  imageUrl,
  category,
  title,
  date,
  time,
  views,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md mb-6 overflow-hidden relative">
      <div className="flex flex-col md:flex-row">
        {/* Content */}
        <div className="p-6 w-9/12">
          <h2 className="text-xl font-bold mb-4">{title}</h2>

          <div className="mb-4">
            <h3 className="text-gray-700 font-medium">Kategori</h3>
            <p className="text-gray-600">{category}</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <span className="font-medium">Tanggal:</span> {date}
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium">Waktu:</span> {time} WIB
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium">Views:</span> {views} View
            </div>
          </div>
        </div>

        {/* Image on right */}
        <div className="w-3/12 flex justify-center bg-gray-50">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://placehold.co/400x300/red/white?text=${title}`;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BeritaCard;

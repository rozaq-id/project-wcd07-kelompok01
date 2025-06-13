import React from "react";

interface InfografisCardProps {
  judul: string;
  kategori: string;
  location: string;
  tahun: string;
  kutipan: string;
  program: string;
  gambarUrl: string;
}

const InfografisCard: React.FC<InfografisCardProps> = ({
  judul,
  kategori,
  location,
  tahun,
  kutipan,
  program,
  gambarUrl,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md mb-6 overflow-hidden relative">
      <div className="flex flex-col md:flex-row">
        {/* Content */}
        <div className="p-6 w-9/12">
          <h2 className="text-xl font-bold mb-4">{judul}</h2>

          <div className="mb-4">
            <h3 className="text-gray-700 font-medium">Kategori</h3>
            <p className="text-gray-600">{kategori}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-gray-700 font-medium">Kutipan</h3>
            <div className="pl-4 border-l-4 border-blue-500 italic text-gray-600">
              "{kutipan}"
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <span className="font-medium">Lokasi:</span> {location}
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium">Tahun:</span> {tahun}
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium">Program:</span> {program}
            </div>
          </div>
        </div>

        {/* Image on right */}
        <div className="w-3/12 flex justify-center bg-gray-50">
          <img
            src={gambarUrl}
            alt={judul}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://placehold.co/400x300/red/white?text=${judul}`;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InfografisCard;

import { useState } from "react";
import InfografisCard from "./InfografisCard";
import Pagination from "./Pagination";
import Berita from "./Berita"; 

function Body() {
  const [activeTab, setActiveTab] = useState<"berita" | "infografis">(
    "berita" 
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const infografisSosialMedia = [
    {
      judul:
        "Dukung Swasembada Pangan, Wamendagri Bima Arya Dorong Perbaikan Waduk Klampis di Sampang",
      kategori: "Program Pemerintah",
      location: "Sampang, Jawa Timur",
      tahun: "2023",
      kutipan:
        "Kita punya target swasembada dengan strategi memperbaiki daerah irigasi. Ada sektor 2 juta daerah irigasi di Indonesia, 3 juta hektare yang selama ini diabaikan mata jumlah swasembada pangan atau lebih sehat.",
      program: "Infrastruktur Pangan",
      gambarUrl:
        "https://www.kemendagri.go.id/api/file-media-services/images/media/2025/01//webdagri-media-202501rxz2bRrAqq.jpg",
    },
    {
      judul:
        "Wamendagri Bima Arya Tekankan Kolaborasi Lintas Pihak Sebagai Kunci Keberhasilan Program Pangan Nasional",
      kategori: "Program Pangan",
      location: "Jakarta",
      tahun: "2024",
      kutipan:
        "Saya yakin, kita ke depan memang perencanaan tdk hanya di tataran pusat tetapi juga di tataran daerah begitu juga dengan pelaksanaannya. Jangan sampai kita tidak saling koordinasi yang yang tidak nyambung.",
      program: "Ketahanan Pangan",
      gambarUrl:
        "https://www.kemendagri.go.id/api/file-media-services/images/media/2025/01//webdagri-media-202501Guxa4fAPNQ.jpg",
    },
    {
      judul:
        "Mendagri: Inflasi Indonesia YoY pada Desember 2024 Tersendali di Angka 1,57 Persen",
      kategori: "Ekonomi",
      location: "Jakarta",
      tahun: "2024",
      kutipan:
        "Inflasi kita masih tersendali, karena target pemerintah pusat, angka harus tetap di antara 1,5 persen sampai 3,5 persen. Atau bahasa lainnya, target adalah 2,5 persen plus minus 1 persen, jadi 1,57 persen masuk target level bawah yang artinya cukup baik.",
      program: "Laporan Inflasi",
      gambarUrl:
        "https://www.kemendagri.go.id/api/file-media-services/images/media/2025/01//webdagri-media-202501N4Qlrbd1ga.jpg",
    },
    {
      judul: "Program Makan Siang Bergizi Gratis Resmi Dimulai",
      kategori: "Program Sosial",
      location: "Seluruh Indonesia",
      tahun: "2024",
      kutipan:
        "Ini hari bersejarah untuk Indonesia, program pembangunan Indonesia Emas melalui perbaikan gizi, peningkatan kesehatan anak-anak Indonesia resmi dimulai.",
      program: "Gizi dan Kesehatan",
      gambarUrl:
        "https://www.kemendagri.go.id/api/file-media-services/images/media/2025/01//webdagri-media-202501zRFbBhpAC9.jpg",
    },
    {
      judul: "Kendalikan Inflasi dan Waspadai Ancaman Penyakit PMK",
      kategori: "Kesehatan dan Ekonomi",
      location: "Jakarta",
      tahun: "2024",
      kutipan:
        "Kami mengendalikan inflasi khususnya inflasi pangan dengan berbagai langkah, termasuk mewaspadai ancaman penyakit mulut dan kuku (PMK) pada hewan ternak serta mengantisipasi dampak perubahan cuaca, terutama menginggi musim panen.",
      program: "Pengendalian Inflasi",
      gambarUrl:
        "https://www.kemendagri.go.id/api/file-media-services/images/media/2025/01//webdagri-media-202501MLw0QyWZho.jpg",
    },
    {
      judul: "Selamat Tahun Baru 2025",
      kategori: "Ucapan",
      location: "Jakarta",
      tahun: "2025",
      kutipan:
        "Kementerian Dalam Negeri Republik Indonesia mengucapkan Selamat Tahun Baru 2025.",
      program: "Publikasi",
      gambarUrl:
        "https://www.kemendagri.go.id/api/file-media-services/images/media/2024/12/2/webdagri-media-202412ut4e8RkL5n.jpg",
    },
    {
      judul:
        "Mendagri Dorong Pemda Perkuat Semangat Gotong Royong Dukung Program Tiga Juta Rumah",
      kategori: "Program Perumahan",
      location: "Seluruh Indonesia",
      tahun: "2024",
      kutipan:
        "Kita mendukung penuh kebijakan dan program yang dikeluarkan pemerintah dalam mewujudkan program tiga juta rumah bagi masyarakat berpenghasilan rendah (MBR). Kita harapkan gelombang ini bergerak ke semua daerah. Oleh karena itu, kami tidak akan berhenti.",
      program: "Perumahan Rakyat",
      gambarUrl:
        "https://www.kemendagri.go.id/api/file-media-services/images/media/2024/12/2/webdagri-media-202412UEzW8b0xSO.jpg",
    },
    {
      judul:
        "Wamendagri Bima Arya Imbau Pemda Wujudkan Pemerintah Bersih dan Melayani",
      kategori: "Pemerintahan",
      location: "Jakarta",
      tahun: "2024",
      kutipan:
        "Target dari Bapak Presiden itu clear sekali kalau kita rangkum semua, arahantnya yaitu mewujudkan pemerintahan yang bersih dan melayani. Itu intinya bersih, berarti ini tidak main-main, tegas sekali tidak ada korupsi.",
      program: "Tata Kelola Pemerintahan",
      gambarUrl:
        "https://www.kemendagri.go.id/api/file-media-services/images/media/2024/12/2/webdagri-media-202412yYSK1PxM9l.jpg",
    },
  ];

  const totalItems = infografisSosialMedia.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = infografisSosialMedia.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-7/12 mx-auto my-8 px-4 bg-white rounded-lg shadow-md">
      <div className="p-3">
        <div className="flex border-b border-gray-300">
          <button
            className={`pb-2 px-4 font-medium ${
              activeTab === "berita"
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("berita")}
          >
            Berita
          </button>
          <button
            className={`pb-2 px-4 font-medium ${
              activeTab === "infografis"
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("infografis")}
          >
            Infografis Sosial Media
          </button>
        </div>{" "}
        <div className="mt-8">
          {" "}
          {activeTab === "berita" && (
            <Berita /> 
          )}
          {activeTab === "infografis" && (
            <>
              {currentItems.map((org, index) => (
                <InfografisCard
                  key={index}
                  judul={org.judul}
                  kategori={org.kategori}
                  location={org.location}
                  tahun={org.tahun}
                  kutipan={org.kutipan}
                  program={org.program}
                  gambarUrl={org.gambarUrl}
                />
              ))}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Body;
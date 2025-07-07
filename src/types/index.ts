export interface Agency {
  id: string;
  name: string;
  shortCode: string;
  establishmentYear: number;
  location: string;
  responsibilities: string[];
  logo: string;
  rating: number;
}

export interface SearchFilters {
  query: string;
  sort: 'newest' | 'oldest' | 'alphabetical';
}

export interface InfografisCardProps {
  judul: string;
  kategori: string;
  location: string;
  tahun: string;
  kutipan: string;
  program: string;
  gambarUrl: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string; 
  publishDate: string; 
  publishTime: string;
  views: number;
  imageUrl: string;
  linkUrl: string;
}
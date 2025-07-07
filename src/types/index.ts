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
import React, { useState, useEffect } from 'react';
import type { NewsArticle } from '../types'; 

const Berita: React.FC = () => {
    const newsArticles: NewsArticle[] = [
        {
            id: 'news-1',
            title: 'Dukung Kopdeskel Merah Putih, Wamendagri Bima Arya Jelaskan Kemendagri Siap Gelar Bimtek bagi Kepala Desa dan Pengurus',
            category: 'BERITA KEMENDAGRI',
            publishDate: '05/31/2025',
            publishTime: '15:35 WIB',
            views: 3,
            imageUrl: 'https://www.kemendagri.go.id/api/file-media-services/article/images/2025/05/webdagri-article-202505TfhNnW4BOu.jpg',
            linkUrl: 'https://kemendagri.go.id/beritaArtikel/beritakemendagri?id=37690'
        },
        {
            id: 'news-2',
            title: 'Presiden Prabowo Tegaskan Energi dan Pangan adalah Kunci Kedaulatan Bangsa',
            category: 'BERITA NASIONAL',
            publishDate: '05/23/2025',
            publishTime: '16:54 WIB',
            views: 20,
            imageUrl: 'https://www.kemendagri.go.id/api/file-media-services/article/images/2025/05/webdagri-article-202505lG8CY6aAYa.png',
            linkUrl: 'https://kemendagri.go.id/beritaArtikel/beritanasional?id=37673'
        },
        {
            id: 'news-3',
            title: 'Karangmoncol Terapkan Layanan Digital, Urus KTP dan Surat Keterangan Kini Cukup dari Desa',
            category: 'BERITA DAERAH',
            publishDate: '06/20/2025',
            publishTime: '10:16 WIB',
            views: 10,
            imageUrl: 'https://www.kemendagri.go.id/api/file-media-services/article/images/2025/06/webdagri-article-202506YbRiDt0abV.jpg',
            linkUrl: 'https://kemendagri.go.id/beritaArtikel/beritadaerah?id=37700'
        },
        {
            id: 'news-4',
            title: 'Kemendagri Apresiasi Progres Pembangunan Kawasan Pusat Pemerintahan Provinsi Papua Selatan',
            category: 'BERITA KEMENDAGRI',
            publishDate: '05/19/2025',
            publishTime: '12:13 WIB',
            views: 10,
            imageUrl: 'https://www.kemendagri.go.id/api/file-media-services/article/images/2025/05/webdagri-article-202505drIaPDmgky.jpg',
            linkUrl: 'https://kemendagri.go.id/beritaArtikel/beritadaerah?id=37650'
        },
        {
            id: 'news-5',
            title: 'Kunjungan Perdana Pasca Terpilih Kembali, PM Albanese Disambut Meriah di Istana Merdeka Jakarta',
            category: 'BERITA NASIONAL',
            publishDate: '05/16/2025',
            publishTime: '13:53 WIB',
            views: 15,
            imageUrl: 'https://www.kemendagri.go.id/api/file-media-services/article/images/2025/05/webdagri-article-202505WzRGttQpSd.png',
            linkUrl: 'https://kemendagri.go.id/beritaArtikel/beritanasional?id=37643'
        },
        {
            id: 'news-6',
            title: 'DPRD Purbalingga Sepakat Raperda RPJMD 2025–2029 Dibahas Lebih Lanjut',
            category: 'BERITA DAERAH',
            publishDate: '05/22/2025',
            publishTime: '10:11 WIB',
            views: 25,
            imageUrl: 'https://www.kemendagri.go.id/api/file-media-services/article/images/2025/06/webdagri-article-202506sdmasn.jpg',
            linkUrl: 'https://kemendagri.go.id/beritaArtikel/beritanasional?id=37680'
        },
    ];

    const allCategories = ['SEMUA KATEGORI', 'BERITA KEMENDAGRI', 'BERITA NASIONAL', 'BERITA DAERAH'];

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('SEMUA KATEGORI');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>(newsArticles);

    const parseDate = (dateString: string): Date | null => {
        if (!dateString) return null;
        const [month, day, year] = dateString.split('/').map(Number);
        const date = new Date(year, month - 1, day);
        return isNaN(date.getTime()) ? null : date;
    };

    useEffect(() => {
        const lowercasedFilter = searchTerm.toLowerCase();
        const start = parseDate(startDate);
        const end = parseDate(endDate);

        const currentFiltered = newsArticles.filter(article => {
            const matchesSearchTerm =
                article.title.toLowerCase().includes(lowercasedFilter) ||
                article.category.toLowerCase().includes(lowercasedFilter);

            const matchesCategory =
                selectedCategory === 'SEMUA KATEGORI' || article.category === selectedCategory;

            const articleDate = parseDate(article.publishDate);
            const matchesDateRange =
                (!start || (articleDate && articleDate >= start)) &&
                (!end || (articleDate && articleDate <= end));

            return matchesSearchTerm && matchesCategory && matchesDateRange;
        });
        setFilteredArticles(currentFiltered);
    }, [searchTerm, selectedCategory, startDate, endDate]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(event.target.value);
    };

    const groupedArticles = filteredArticles.reduce((acc, article) => {
        const categoryKey = article.category.replace('BERITA ', '').toLowerCase();
        if (!acc[categoryKey]) {
            acc[categoryKey] = {
                header: article.category,
                items: []
            };
        }
        acc[categoryKey].items.push(article);
        return acc;
    }, {} as Record<string, { header: string; items: NewsArticle[] }>);

    return (
        <div className="search-and-news-container">
            <div className="filter-section-wrapper">
                <h2 className="filter-section-title">Berita Kemendagri</h2>

                <div className="filter-group">
                    <label className="filter-label">Kategori Berita</label>
                    <div className="category-buttons">
                        {allCategories.map(category => (
                            <button
                                key={category}
                                className={`category-button ${selectedCategory === category ? 'active' : ''} ${category === 'BERITA NASIONAL' ? 'category-btn-nasional' : category === 'BERITA KEMENDAGRI' ? 'category-btn-kemendagri' : category === 'BERITA DAERAH' ? 'category-btn-daerah' : 'category-btn-default'}`}
                                onClick={() => handleCategoryChange(category)}
                            >
                                {category.replace('BERITA ', '')}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="filter-row">
                    <div className="filter-group text-search">
                        <label htmlFor="searchInput" className="filter-label">Cari Berita</label>
                        <div className="search-box">
                            <span className="search-icon">🔍</span>
                            <input
                                type="text"
                                id="searchInput"
                                placeholder="Judul" 
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="search-input"
                            />
                        </div>
                    </div>

                    <div className="filter-group date-filter">
                        <label htmlFor="startDateInput" className="filter-label">Tanggal</label>
                        <div className="date-input-wrapper">
                            <input
                                type="date" 
                                id="startDateInput"
                                value={startDate}
                                onChange={handleStartDateChange}
                                className="date-input"
                            />
                            <span className="date-separator">S/D</span>
                            <input
                                type="date"
                                id="endDateInput"
                                value={endDate}
                                onChange={handleEndDateChange}
                                className="date-input"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="berita-section-container">
                <h2 className="berita-section-title">Berita Terkini</h2>
                <div className="berita-cards-grid">
                    {Object.keys(groupedArticles).length === 0 && (searchTerm !== '' || selectedCategory !== 'SEMUA KATEGORI' || startDate !== '' || endDate !== '') && (
                        <div className="no-results">Tidak ada berita yang ditemukan.</div>
                    )}

                    {Object.keys(groupedArticles).map((categoryKey) => {
                        const section = groupedArticles[categoryKey];
                        const categoryClass = categoryKey === 'kemendagri' ? '' : 
                                              categoryKey === 'nasional' ? 'category-national' :
                                              categoryKey === 'daerah' ? 'category-regional' : '';
                        
                        return (
                            <React.Fragment key={categoryKey}>
                                {section.items.length > 0 && (
                                     <div className="berita-section-header-group">
                                        <div className="section-header">{section.header}</div>
                                        {section.items.map((article) => (
                                            <a href={article.linkUrl} target="_blank" rel="noopener noreferrer" className="berita-card-item" key={article.id}>
                                                <div className="berita-card-image-wrapper">
                                                    <img src={article.imageUrl} alt={article.title} className="berita-card-image" />
                                                    <div className={`berita-card-category ${categoryClass}`}>
                                                        {article.category}
                                                    </div>
                                                </div>
                                                <div className="berita-card-content">
                                                    <div className="berita-card-title">{article.title}</div>
                                                    <div className="berita-card-meta">
                                                        <span className="berita-card-date">{article.publishDate} / {article.publishTime}</span>
                                                        <span className="berita-card-views">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                                <circle cx="12" cy="12" r="3"></circle>
                                                            </svg>
                                                            {article.views} View
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Berita;
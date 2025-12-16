import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';

interface ImageItem {
  src: string;
  category: string;
  alt: string;
}

interface CategoryData {
  id: string;
  name: string;
  images: string[];
}

const Gallery: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  // Categories data with their images
  const categoriesData: CategoryData[] = [
    {
      id: 'furniture',
      name: 'اثاث',
      images: [
        'WhatsApp Image 2025-12-16 at 3.51.58 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 3.51.59 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 3.52.00 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 3.52.01 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 3.52.01 PM (2).jpeg',
        'WhatsApp Image 2025-12-16 at 3.52.01 PM (3).jpeg',
        'WhatsApp Image 2025-12-16 at 3.52.01 PM (4).jpeg',
        'WhatsApp Image 2025-12-16 at 3.52.01 PM (5).jpeg',
        'WhatsApp Image 2025-12-16 at 3.52.01 PM (6).jpeg',
        'WhatsApp Image 2025-12-16 at 3.52.01 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 3.52.02 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 3.52.02 PM (2).jpeg',
        'WhatsApp Image 2025-12-16 at 3.52.02 PM (3).jpeg',
        'WhatsApp Image 2025-12-16 at 3.52.02 PM (4).jpeg',
        'WhatsApp Image 2025-12-16 at 3.52.02 PM (5).jpeg',
        'WhatsApp Image 2025-12-16 at 3.52.02 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 3.52.03 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 3.52.03 PM (2).jpeg',
        'WhatsApp Image 2025-12-16 at 3.52.03 PM (3).jpeg',
        'WhatsApp Image 2025-12-16 at 3.52.03 PM.jpeg'
      ]
    },
    {
      id: 'doors',
      name: 'الابواب والشبابيك',
      images: [
        'WhatsApp Image 2025-12-16 at 3.53.15 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.15 PM (2).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.15 PM (3).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.15 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.16 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.16 PM (2).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.16 PM (3).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.16 PM (4).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.16 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.17 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.17 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.18 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.18 PM (2).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.18 PM (3).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.18 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.19 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.19 PM (2).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.19 PM (3).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.19 PM (4).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.19 PM (5).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.19 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.20 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.20 PM (2).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.20 PM (3).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.20 PM (4).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.20 PM (5).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.20 PM (6).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.20 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.21 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 3.53.21 PM.jpeg'
      ]
    },
    {
      id: 'restoration',
      name: 'الترميم و التجديد',
      images: [
        'WhatsApp Image 2025-12-16 at 4.03.03 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 4.03.03 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 4.03.04 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 4.03.04 PM (2).jpeg',
        'WhatsApp Image 2025-12-16 at 4.03.04 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 4.03.05 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 4.03.05 PM (2).jpeg',
        'WhatsApp Image 2025-12-16 at 4.03.05 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 4.03.06 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 4.03.06 PM (2).jpeg',
        'WhatsApp Image 2025-12-16 at 4.03.06 PM (3).jpeg',
        'WhatsApp Image 2025-12-16 at 4.03.06 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 4.03.07 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 4.03.07 PM (2).jpeg',
        'WhatsApp Image 2025-12-16 at 4.03.07 PM.jpeg'
      ]
    },
    {
      id: 'libraries',
      name: 'المكتبات والنيش',
      images: [
        'WhatsApp Image 2025-12-16 at 4.01.20 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 4.01.20 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 4.01.21 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 4.01.21 PM (2).jpeg',
        'WhatsApp Image 2025-12-16 at 4.01.21 PM (3).jpeg',
        'WhatsApp Image 2025-12-16 at 4.01.21 PM (4).jpeg',
        'WhatsApp Image 2025-12-16 at 4.01.21 PM (5).jpeg',
        'WhatsApp Image 2025-12-16 at 4.01.21 PM (6).jpeg',
        'WhatsApp Image 2025-12-16 at 4.01.21 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 4.01.22 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 4.01.22 PM (2).jpeg',
        'WhatsApp Image 2025-12-16 at 4.01.22 PM (3).jpeg',
        'WhatsApp Image 2025-12-16 at 4.01.22 PM (4).jpeg',
        'WhatsApp Image 2025-12-16 at 4.01.22 PM (5).jpeg',
        'WhatsApp Image 2025-12-16 at 4.01.22 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 4.01.23 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 4.01.23 PM (2).jpeg',
        'WhatsApp Image 2025-12-16 at 4.01.23 PM (3).jpeg',
        'WhatsApp Image 2025-12-16 at 4.01.23 PM (4).jpeg',
        'WhatsApp Image 2025-12-16 at 4.01.23 PM.jpeg'
      ]
    },
    {
      id: 'decor',
      name: 'ديكورات',
      images: [
        'WhatsApp Image 2025-12-16 at 4.06.08 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 4.06.08 PM (2).jpeg',
        'WhatsApp Image 2025-12-16 at 4.06.08 PM (3).jpeg',
        'WhatsApp Image 2025-12-16 at 4.06.08 PM (4).jpeg',
        'WhatsApp Image 2025-12-16 at 4.06.08 PM (5).jpeg',
        'WhatsApp Image 2025-12-16 at 4.06.08 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 4.06.09 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 4.06.09 PM (2).jpeg',
        'WhatsApp Image 2025-12-16 at 4.06.09 PM (3).jpeg',
        'WhatsApp Image 2025-12-16 at 4.06.09 PM (4).jpeg',
        'WhatsApp Image 2025-12-16 at 4.06.09 PM (5).jpeg',
        'WhatsApp Image 2025-12-16 at 4.06.09 PM (6).jpeg',
        'WhatsApp Image 2025-12-16 at 4.06.09 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 4.06.10 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 4.06.10 PM (2).jpeg',
        'WhatsApp Image 2025-12-16 at 4.06.10 PM (3).jpeg',
        'WhatsApp Image 2025-12-16 at 4.06.10 PM (4).jpeg',
        'WhatsApp Image 2025-12-16 at 4.06.10 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 4.06.11 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 4.06.11 PM.jpeg'
      ]
    },
    {
      id: 'coffee',
      name: 'كوفي كورنير',
      images: [
        'WhatsApp Image 2025-12-16 at 3.57.49 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 3.57.49 PM (2).jpeg',
        'WhatsApp Image 2025-12-16 at 3.57.49 PM (3).jpeg',
        'WhatsApp Image 2025-12-16 at 3.57.49 PM (4).jpeg',
        'WhatsApp Image 2025-12-16 at 3.57.49 PM (5).jpeg',
        'WhatsApp Image 2025-12-16 at 3.57.49 PM (6).jpeg',
        'WhatsApp Image 2025-12-16 at 3.57.49 PM.jpeg',
        'WhatsApp Image 2025-12-16 at 3.57.50 PM (1).jpeg',
        'WhatsApp Image 2025-12-16 at 3.57.50 PM (2).jpeg',
        'WhatsApp Image 2025-12-16 at 3.57.50 PM.jpeg'
      ]
    }
  ];

  // Load images from categories
  useEffect(() => {
    const allImages: ImageItem[] = [];
    
    categoriesData.forEach(category => {
      category.images.forEach((imageName, index) => {
        allImages.push({
          src: `/images/${encodeURIComponent(category.name)}/${encodeURIComponent(imageName)}`,
          category: category.id,
          alt: `${getCategoryName(category.id)} - عمل ${index + 1}`
        });
      });
    });

    setImages(allImages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCategoryName = (categoryId: string) => {
    const categoryMap: { [key: string]: string } = {
      furniture: 'الأثاث',
      doors: 'الأبواب والشبابيك',
      restoration: 'الترميم والتجديد',
      shelves: 'المكتبات والنيش',
      decor: 'الديكورات',
      libraries: 'المكتبات والنيش',
      coffee: 'كوفي كورنير'
    };
    return categoryMap[categoryId] || 'عمل خشبي';
  };

  const categories = [
    { id: 'all', name: 'جميع الأعمال' },
    { id: 'furniture', name: 'الأثاث' },
    { id: 'doors', name: 'الأبواب والشبابيك' },
    { id: 'restoration', name: 'الترميم والتجديد' },
    { id: 'libraries', name: 'المكتبات والنيش' },
    { id: 'decor', name: 'الديكورات' },
    { id: 'coffee', name: 'كوفي كورنير' }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Filter images based on selected category
  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(image => image.category === filter);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImage]);

  return (
    <div className="gallery">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="gallery-hero-content"
          >
            <h1>معرض أعمالنا</h1>
            <p>استكشف مجموعة من أروع الأعمال الخشبية التي صنعناها بحب وإتقان</p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${filter}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                viewport={{ once: true, margin: "-50px" }}
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <div className="image-container">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <span>عرض الصورة</span>
                    <div className="image-category">{getCategoryName(image.category)}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox"
            onClick={closeLightbox}
          >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>
                <FaTimes />
              </button>
              
              <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
                <FaChevronLeft />
              </button>
              
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                src={filteredImages[selectedImage]?.src}
                alt={filteredImages[selectedImage]?.alt}
                className="lightbox-image"
              />
              
              <button className="lightbox-nav lightbox-next" onClick={nextImage}>
                <FaChevronRight />
              </button>
              
              <div className="lightbox-counter">
                {selectedImage + 1} / {filteredImages.length}
              </div>
              
              <div className="lightbox-category">
                {filteredImages[selectedImage] && getCategoryName(filteredImages[selectedImage].category)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHammer, FaTree, FaStar, FaArrowLeft } from 'react-icons/fa';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section 
        className="hero"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/IMG_3460.PNG')`,
          backgroundSize: 'cover',
          backgroundPosition: '40% center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hero-buttons"
        >
          <Link to="/gallery" className="btn btn-primary">
            شاهد أعمالنا
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            تواصل معنا
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <h2 className="section-title">لماذا تختارنا؟</h2>
          <div className="features-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              className="feature-card"
            >
              <div className="feature-icon">
                <FaHammer />
              </div>
              <h3>حرفية عالية</h3>
              <p>نستخدم أحدث التقنيات مع الحرفية التقليدية لضمان أعلى جودة</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="feature-card"
            >
              <div className="feature-icon">
                <FaTree />
              </div>
              <h3>خشب طبيعي</h3>
              <p>نختار أجود أنواع الخشب الطبيعي المستورد والمحلي</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="feature-card"
            >
              <div className="feature-icon">
                <FaStar />
              </div>
              <h3>تصاميم مميزة</h3>
              <p>تصاميم عصرية وكلاسيكية تناسب جميع الأذواق والديكورات</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="gallery-preview section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="gallery-preview-header"
          >
            <h2 className="section-title">لقطات من أعمالنا</h2>
            <p className="section-subtitle">استكشف مجموعة مختارة من أروع إبداعاتنا الخشبية</p>
          </motion.div>
          
          <div className="preview-gallery-grid">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="preview-item large"
            >
              <img src="/images/اثاث/WhatsApp Image 2025-12-16 at 3.51.58 PM.jpeg" alt="أثاث فاخر" />
              <div className="preview-overlay">
                <h3>أثاث فاخر</h3>
                <p>تصاميم عصرية وكلاسيكية</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="preview-item"
            >
              <img src="/images/الابواب والشبابيك/WhatsApp Image 2025-12-16 at 3.53.15 PM.jpeg" alt="أبواب خشبية" />
              <div className="preview-overlay">
                <h3>أبواب خشبية</h3>
                <p>تصاميم متنوعة</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="preview-item"
            >
              <img src="/images/المكتبات والنيش/WhatsApp Image 2025-12-16 at 4.01.20 PM.jpeg" alt="مكتبات ونيش" />
              <div className="preview-overlay">
                <h3>مكتبات ونيش</h3>
                <p>حلول تخزين أنيقة</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              className="preview-item"
            >
              <img src="/images/ديكورات/WhatsApp Image 2025-12-16 at 4.06.08 PM.jpeg" alt="ديكورات خشبية" />
              <div className="preview-overlay">
                <h3>ديكورات خشبية</h3>
                <p>لمسات فنية مميزة</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="preview-item"
            >
              <img src="/images/كوفي كورنير/WhatsApp Image 2025-12-16 at 3.57.49 PM.jpeg" alt="كوفي كورنير" />
              <div className="preview-overlay">
                <h3>كوفي كورنير</h3>
                <p>أجواء دافئة ومريحة</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="gallery-cta"
          >
            <Link to="/gallery" className="btn btn-gallery">
              شاهد المعرض كاملاً
              <FaArrowLeft />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section">
        <div className="container">
          <h2 className="section-title">خدماتنا</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>أبواب خشبية</h3>
              <p>أبواب داخلية وخارجية بتصاميم متنوعة</p>
            </div>
            <div className="service-item">
              <h3>مكتبات ونيش</h3>
              <p>مكتبات وأرفف بتصاميم عملية وأنيقة</p>
            </div>
            <div className="service-item">
              <h3>أثاث مخصص</h3>
              <p>تفصيل أثاث حسب المقاسات والتصاميم المطلوبة</p>
            </div>
            <div className="service-item">
              <h3>ديكورات خشبية</h3>
              <p>لمسات ديكورية تضفي الدفء والأناقة</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
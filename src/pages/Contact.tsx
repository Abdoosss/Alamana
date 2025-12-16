import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaWhatsapp, 
  FaSnapchatGhost, 
  FaInstagram, 
  FaPhone, 
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF
} from 'react-icons/fa';
import './Contact.css';

const Contact: React.FC = () => {

  const socialContactInfo = [
    {
      icon: <FaSnapchatGhost />,
      title: 'سناب شات',
      value: '@booda1a',
      link: 'https://www.snapchat.com/add/booda1a?share_id=f2OGPkKw7CA&locale=ar-EG',
      color: '#FFFC00'
    },
    {
      icon: <FaInstagram />,
      title: 'انستغرام',
      value: '@aman.ah1270',
      link: 'https://www.instagram.com/aman.ah1270?igsh=MWFvMmE4aDg0ZWFtYQ==&utm_source=ig_contact_invite',
      color: '#E4405F'
    },
    {
      icon: <FaFacebookF />,
      title: 'فيسبوك',
      value: 'مؤسسة الأمانة',
      link: 'https://www.facebook.com/share/1DVoGBVrTo/',
      color: '#1877F2'
    }
  ];

  const businessInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'العنوان',
      value: 'جدة وسواحل جدة، المملكة العربية السعودية'
    },
    {
      icon: <FaClock />,
      title: 'ساعات العمل',
      value: 'السبت - الخميس: 8:00 ص - 6:00 م'
    }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="contact-hero-content"
          >
            <h1>تواصل معنا</h1>
            <p>نحن هنا لتحويل أفكارك إلى واقع خشبي رائع</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="contact-header"
          >
            <h2 className="section-title">تواصل معنا مباشرة</h2>
            <p className="section-subtitle">اختر الطريقة الأنسب لك للتواصل معنا</p>
          </motion.div>

          {/* Primary Contact - WhatsApp */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="primary-contact"
          >
            <a 
              href="https://wa.me/966547809565?text=مرحباً، أريد استشارة مجانية لمشروع خشبي"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-contact-card whatsapp"
            >
              <div className="primary-icon">
                <FaWhatsapp />
              </div>
              <div className="primary-content">
                <h3>تواصل عبر الواتساب</h3>
                <p className="primary-number">+966 54 780 9565</p>
                <p className="primary-description">الطريقة الأسرع للحصول على رد فوري</p>
              </div>
              <div className="primary-action">
                <span>ابدأ المحادثة</span>
              </div>
            </a>
          </motion.div>

          {/* Secondary Contacts */}
          <div className="secondary-contacts">
            <h3 className="secondary-title">طرق التواصل الأخرى</h3>
            <div className="contact-grid">
              {socialContactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (index + 1) * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="contact-card"
                  style={{ '--accent-color': contact.color } as React.CSSProperties}
                >
                  <div className="contact-icon" style={{ color: contact.color }}>
                    {contact.icon}
                  </div>
                  <div className="contact-info">
                    <h4>{contact.title}</h4>
                    <p>{contact.value}</p>
                  </div>
                  <div className="contact-arrow">←</div>
                </motion.a>
              ))}
              
              {/* Phone Call Card */}
              <motion.a
                href="tel:+966547809565"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true, margin: "-50px" }}
                className="contact-card"
                style={{ '--accent-color': '#D2691E' } as React.CSSProperties}
              >
                <div className="contact-icon" style={{ color: '#D2691E' }}>
                  <FaPhone />
                </div>
                <div className="contact-info">
                  <h4>اتصال مباشر</h4>
                  <p>0547809565</p>
                </div>
                <div className="contact-arrow">←</div>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="location-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="location-header"
          >
            <h2 className="section-title">موقعنا</h2>
            <p className="section-subtitle">تجدنا في جدة وسواحل جدة، المملكة العربية السعودية</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="map-container"
          >
            <div className="map-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3709.1445570032815!2d39.177534!3d21.61929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDM3JzA5LjQiTiAzOcKwMTAnMzkuMSJF!5e0!3m2!1sar!2seg!4v1765909041632!5m2!1sar!2seg" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع مؤسسة الأمانة"
              />
            </div>
            <div className="map-info">
              <div className="map-info-item">
                <FaMapMarkerAlt className="map-info-icon" />
                <div>
                  <h4>العنوان</h4>
                  <p>جدة وسواحل جدة، المملكة العربية السعودية</p>
                </div>
              </div>
              <div className="map-info-item">
                <FaPhone className="map-info-icon" />
                <div>
                  <h4>للاتجاهات والاستفسار</h4>
                  <p>اتصل بنا على: 0547809565</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Info */}
      <section className="business-info-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
            className="business-info-container"
          >
            <h2 className="section-title">معلومات الاتصال</h2>
            <div className="business-info-grid">
              {businessInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="info-card enhanced"
                >
                  <div className="info-icon-wrapper">
                    <div className="info-icon">{info.icon}</div>
                  </div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="cta-section"
            >
              <h3>جاهز لبدء مشروعك؟</h3>
              <p>تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك</p>
              <a 
                href="https://wa.me/966547809565?text=مرحباً، أريد استشارة مجانية لمشروع خشبي"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                <FaWhatsapp />
                احصل على استشارة مجانية
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <div className="quick-contact-bar">
        <div className="quick-contact-items">
          <a 
            href="https://wa.me/966547809565" 
            target="_blank" 
            rel="noopener noreferrer"
            className="quick-contact-item whatsapp"
          >
            <FaWhatsapp />
            <span>واتساب</span>
          </a>
          
          <a 
            href="tel:+966547809565" 
            className="quick-contact-item phone"
          >
            <FaPhone />
            <span>اتصال</span>
          </a>
          
          <a 
            href="https://www.instagram.com/aman.ah1270?igsh=MWFvMmE4aDg0ZWFtYQ==&utm_source=ig_contact_invite" 
            target="_blank" 
            rel="noopener noreferrer"
            className="quick-contact-item instagram"
          >
            <FaInstagram />
            <span>انستغرام</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaClock, FaHeart } from 'react-icons/fa';
import './About.css';

const About: React.FC = () => {
  const stats = [
    { icon: <FaAward />, number: '15+', label: 'سنوات خبرة' },
    { icon: <FaUsers />, number: '500+', label: 'عميل راضي' },
    { icon: <FaClock />, number: '1000+', label: 'مشروع مكتمل' },
    { icon: <FaHeart />, number: '100%', label: 'رضا العملاء' }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-hero-content"
          >
            <h1>نبذة عنا</h1>
            <p>رحلة من الشغف والإبداع في عالم الأخشاب</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story section">
        <div className="container">
          <div className="story-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="story-text"
            >
              <h2>قصتنا</h2>
              <p>
                بدأت رحلتنا منذ أكثر من 15 عامًا بحلم بسيط: تحويل قطع الخشب الطبيعي إلى تحف فنية تضفي الدفء والجمال على المنازل. 
                ما بدأ كورشة صغيرة في جدة تطور ليصبح مؤسسة الأمانة، من أبرز الأسماء في مجال الأعمال الخشبية الفاخرة في جدة وسواحلها.
              </p>
              <p>
                نحن نؤمن بأن كل قطعة خشب لها روح وحكاية، ومهمتنا هي إبراز هذا الجمال الطبيعي من خلال التصاميم المبتكرة والحرفية العالية. 
                فريقنا من الحرفيين المهرة يجمع بين الخبرة التقليدية والتقنيات الحديثة لضمان أعلى معايير الجودة.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="story-image"
            >
              <div className="image-placeholder">
                <FaHeart className="heart-icon" />
                <p>صنع بحب وإتقان</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats section">
        <div className="container">
          <h2 className="section-title">إنجازاتنا بالأرقام</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="stat-card"
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values section">
        <div className="container">
          <h2 className="section-title">قيمنا</h2>
          <div className="values-grid">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="value-card"
            >
              <h3>الجودة</h3>
              <p>نلتزم بأعلى معايير الجودة في كل تفصيلة، من اختيار الخشب حتى اللمسة الأخيرة</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="value-card"
            >
              <h3>الإبداع</h3>
              <p>نسعى دائمًا للابتكار وتقديم تصاميم فريدة تلبي احتياجات وأذواق عملائنا</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="value-card"
            >
              <h3>الثقة</h3>
              <p>نبني علاقات طويلة الأمد مع عملائنا قائمة على الثقة والشفافية والالتزام</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mission-content"
          >
            <h2>رسالتنا</h2>
            <p>
              نسعى في مؤسسة الأمانة لأن نكون الخيار الأول في جدة وسواحلها لكل من يبحث عن الجودة والإتقان في الأعمال الخشبية. 
              مهمتنا هي تحويل أحلام عملائنا إلى واقع ملموس من خلال قطع فنية تدوم لسنوات طويلة 
              وتضفي لمسة من الأناقة والدفء على كل مساحة.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
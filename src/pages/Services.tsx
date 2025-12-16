import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCouch, FaHome, FaTools, FaHeart, FaCheckCircle, FaClock, FaAward, FaPhone, FaWhatsapp } from 'react-icons/fa';
import './Services.css';

const Services: React.FC = () => {


  const services = [
    {
      icon: <FaCouch />,
      title: 'الأثاث',
      description: 'نقدّم في مؤسسة الأمانة جميع أنواع الأثاث المنزلي المصنوع من أجود الخامات، بداية من غرف النوم والسفر، وحتى المطابخ ووحدات التخزين. نحرص على تنفيذ الأثاث بدقة عالية وتشطيبات مميزة، مع مراعاة الذوق العصري أو الكلاسيكي حسب رغبة العميل، وبخامات مقاومة للمياه والرطوبة وقابلة للغسيل لضمان عمر أطول وجودة تدوم.',
      features: ['غرف النوم والسفر', 'المطابخ ووحدات التخزين', 'تشطيبات مميزة', 'خامات مقاومة للمياه']
    },
    {
      icon: <FaHome />,
      title: 'الأبواب والشبابيك',
      description: 'نقوم بتصنيع الأبواب والشبابيك الخشبية بأعلى معايير الجودة، باستخدام أخشاب مختارة بعناية ومعالجة ضد الرطوبة والعوامل الجوية. نوفّر تصميمات متعددة تناسب جميع المساحات، مع تشطيبات قوية تضيف لمسة جمالية وتضمن الأمان والمتانة على المدى الطويل.',
      features: ['أخشاب مختارة بعناية', 'معالجة ضد الرطوبة', 'تصميمات متعددة', 'تشطيبات قوية ومتينة']
    },
    {
      icon: <FaTools />,
      title: 'الترميم والتجديد',
      description: 'نمتلك خبرة واسعة في ترميم وتجديد الأخشاب بجميع أنواعها، سواء للأثاث أو الأبواب أو الشبابيك، بالإضافة إلى ترميم الحوائط ومعالجة التلف والشروخ. نعيد القطع والمكان لأفضل حالته من حيث القوة والمظهر، مع الحفاظ على التفاصيل الأصلية قدر الإمكان.',
      features: ['ترميم جميع أنواع الأخشاب', 'ترميم الحوائط', 'معالجة التلف والشروخ', 'الحفاظ على التفاصيل الأصلية']
    },
    {
      icon: <FaHome />,
      title: 'المكتبات والنيش',
      description: 'نصمم وننفذ مكتبات ووحدات نيش مخصصة تناسب مساحتك وتلبي احتياجاتك. نستخدم أجود أنواع الخشب مع تصميمات عملية وأنيقة تضيف لمسة جمالية لمنزلك أو مكتبك.',
      features: ['تصميمات مخصصة', 'استغلال أمثل للمساحة', 'خامات عالية الجودة', 'تشطيبات احترافية']
    },
    {
      icon: <FaCouch />,
      title: 'الديكورات الخشبية',
      description: 'نقدم حلول ديكورية متنوعة من الخشب تشمل الجدران الخشبية، الأسقف المعلقة، والقواطع الداخلية. نحول مساحتك إلى تحفة فنية بلمسات خشبية راقية.',
      features: ['جدران خشبية مميزة', 'أسقف معلقة', 'قواطع داخلية', 'تصميمات عصرية']
    },
    {
      icon: <FaHome />,
      title: 'كوفي كورنر',
      description: 'نصمم وننفذ كوفي كورنر مخصص لمنزلك أو مكتبك بتصميمات عملية وأنيقة. نوفر جميع التفاصيل من الخزائن والرفوف إلى منطقة التحضير بأعلى معايير الجودة.',
      features: ['تصميم مخصص', 'استغلال أمثل للمساحة', 'خامات مقاومة للحرارة', 'تشطيبات عملية وجميلة']
    }
  ];



  const processSteps = [
    {
      step: '01',
      title: 'الاستشارة المجانية',
      description: 'نقوم بزيارة الموقع وفهم احتياجاتك ومتطلباتك'
    },
    {
      step: '02',
      title: 'التصميم والتخطيط',
      description: 'نضع التصميم المناسب ونحدد الخامات والتكلفة'
    },
    {
      step: '03',
      title: 'التنفيذ',
      description: 'نبدأ العمل بدقة عالية والتزام بالجودة والمواعيد'
    },
    {
      step: '04',
      title: 'التسليم والمتابعة',
      description: 'نسلم العمل مكتملاً ونقدم خدمة ما بعد البيع'
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaAward />,
      title: 'الجودة العالية',
      description: 'نستخدم أجود الخامات والمواد المقاومة للعوامل الجوية'
    },
    {
      icon: <FaClock />,
      title: 'الالتزام بالمواعيد',
      description: 'نحرص على تسليم المشاريع في الوقت المحدد دون تأخير'
    },
    {
      icon: <FaCheckCircle />,
      title: 'الدقة في التنفيذ',
      description: 'نهتم بأدق التفاصيل لضمان النتيجة المثالية'
    },
    {
      icon: <FaHeart />,
      title: 'رضا العميل',
      description: 'هدفنا الأول هو تحقيق رضا العميل الكامل'
    }
  ];



  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="services-hero-content"
          >
            <h1>خدماتنا</h1>
            <p>نقدم مجموعة شاملة من الخدمات الخشبية عالية الجودة</p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-list section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2 className="section-title">ما نقدمه لك</h2>
            <p className="section-subtitle">خدمات متكاملة في عالم الأخشاب والنجارة</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="service-card"
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <FaCheckCircle className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/gallery" className="view-gallery-btn">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="gallery-button"
                  >
                    شاهد أعمالنا
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Section */}
      <section className="customer-satisfaction section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="satisfaction-content"
          >
            <div className="satisfaction-text">
              <h2>رضا العميل</h2>
              <p>
                في مؤسسة الأمانة رضا العميل هو هدفنا الأول، لذلك نلتزم بالجودة، والدقة في التنفيذ، والالتزام بالمواعيد. 
                نعمل دائمًا على تقديم حلول عملية وتشطيبات احترافية تلبّي احتياجات العميل.
              </p>
            </div>
            <div className="satisfaction-icon">
              <FaHeart />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2 className="section-title">كيف نعمل؟</h2>
            <p className="section-subtitle">خطوات بسيطة للحصول على خدمتك</p>
          </motion.div>

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="process-step"
              >
                <div className="step-number">{step.step}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                {index < processSteps.length - 1 && <div className="step-connector"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Why Choose Us Section */}
      <section className="why-choose-us section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2 className="section-title">لماذا تختارنا؟</h2>
            <p className="section-subtitle">ما يميزنا عن الآخرين</p>
          </motion.div>

          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="why-choose-card"
              >
                <div className="why-choose-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="contact-methods section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2 className="section-title">تواصل معنا</h2>
            <p className="section-subtitle">اختر الطريقة الأنسب للتواصل</p>
          </motion.div>

          <div className="contact-methods-grid">
            <motion.a
              href="tel:+966123456789"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="contact-method-card"
            >
              <FaPhone className="contact-icon" />
              <h3>اتصل بنا</h3>
              <p>للاستفسارات العاجلة</p>
              <span className="contact-info">+966 12 345 6789</span>
            </motion.a>

            <motion.a
              href="https://wa.me/966123456789"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="contact-method-card whatsapp"
            >
              <FaWhatsapp className="contact-icon" />
              <h3>واتساب</h3>
              <p>للتواصل السريع</p>
              <span className="contact-info">راسلنا الآن</span>
            </motion.a>


          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cta-content"
          >
            <h2>هل أنت مستعد لبدء مشروعك؟</h2>
            <p>تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك</p>
            <div className="cta-buttons">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cta-button primary"
                >
                  تواصل معنا الآن
                </motion.button>
              </Link>
              <Link to="/gallery">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cta-button secondary"
                >
                  شاهد أعمالنا
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
# دليل النشر - موقع أعمال الخشب الفاخرة

## خيارات النشر

### 1. Netlify (مجاني ومُوصى به)

#### الخطوات:
1. **إنشاء حساب على Netlify:**
   - اذهب إلى [netlify.com](https://netlify.com)
   - أنشئ حساب جديد

2. **رفع المشروع:**
   ```bash
   npm run build
   ```
   - اسحب مجلد `build` إلى Netlify
   - أو اربط مع GitHub

3. **إعدادات النشر:**
   - Build command: `npm run build`
   - Publish directory: `build`

#### المميزات:
- نشر مجاني
- SSL تلقائي
- CDN عالمي
- نطاق فرعي مجاني

### 2. Vercel

#### الخطوات:
1. **تثبيت Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **النشر:**
   ```bash
   vercel --prod
   ```

#### المميزات:
- أداء عالي
- تحسين تلقائي
- دعم React ممتاز

### 3. GitHub Pages

#### الخطوات:
1. **تثبيت gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **إضافة scripts في package.json:**
   ```json
   {
     "homepage": "https://username.github.io/woodwork-portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **النشر:**
   ```bash
   npm run deploy
   ```

### 4. استضافة مشتركة (cPanel)

#### الخطوات:
1. **بناء المشروع:**
   ```bash
   npm run build
   ```

2. **رفع الملفات:**
   - ارفع محتويات مجلد `build` إلى `public_html`
   - تأكد من رفع ملف `.htaccess`

3. **إنشاء ملف .htaccess:**
   ```apache
   Options -MultiViews
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteRule ^ index.html [QSA,L]
   ```

## إعدادات ما بعد النشر

### 1. تحديث معلومات التواصل
في ملف `src/pages/Contact.tsx`:
- غيّر أرقام الهواتف
- حدّث حسابات وسائل التواصل
- أضف العنوان الصحيح

### 2. إعداد Google Analytics (اختياري)
```html
<!-- في public/index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. إعداد Facebook Pixel (اختياري)
```html
<!-- في public/index.html -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## تحسين الأداء

### 1. ضغط الصور
```bash
# تثبيت أداة ضغط الصور
npm install -g imagemin-cli imagemin-webp

# ضغط الصور
imagemin public/images/*.jpg --out-dir=public/images/compressed --plugin=webp
```

### 2. تحسين الخطوط
- استخدم `font-display: swap` في CSS
- حمّل الخطوط المهمة مسبقاً

### 3. تفعيل Service Worker
```javascript
// في src/index.tsx
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
```

## النطاق المخصص

### 1. شراء النطاق
- من GoDaddy، Namecheap، أو أي مزود آخر
- اختر اسم يعكس طبيعة العمل

### 2. ربط النطاق
#### Netlify:
1. اذهب إلى Domain settings
2. أضف النطاق المخصص
3. حدّث DNS records

#### Vercel:
1. اذهب إلى Project settings
2. أضف النطاق في Domains
3. اتبع التعليمات

## الأمان

### 1. HTTPS
- تأكد من تفعيل SSL
- استخدم HTTPS في جميع الروابط

### 2. Headers الأمان
```javascript
// في netlify.toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

## المراقبة والتحليل

### 1. Google Search Console
- أضف الموقع للمراقبة
- ارسل sitemap.xml

### 2. مراقبة الأداء
- استخدم Google PageSpeed Insights
- راقب Core Web Vitals

## الصيانة

### 1. النسخ الاحتياطي
- احتفظ بنسخة من الكود
- اعمل backup للصور

### 2. التحديثات
```bash
# تحديث المكتبات
npm update

# فحص الثغرات الأمنية
npm audit
npm audit fix
```

## الدعم الفني

للحصول على المساعدة:
1. راجع الوثائق الرسمية لمنصة النشر
2. تحقق من console المتصفح للأخطاء
3. استخدم أدوات المطورين لتشخيص المشاكل

---

**نصائح مهمة:**
- اختبر الموقع على أجهزة مختلفة قبل النشر
- تأكد من سرعة تحميل الصور
- راجع جميع الروابط والمعلومات
- فعّل ضغط Gzip على الخادم
// مطبعة بيرق - الملف الرئيسي للجافاسكريبت
// تم التطوير بواسطة: Manus

// تهيئة AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: 'ease',
  once: true,
  offset: 100
});

// محتوى الموقع باللغة العربية
const arabicContent = {
  // القائمة
  nav_home: "الرئيسية",
  nav_services: "خدماتنا",
  nav_contact: "تواصل معنا",
  nav_download: "تحميل البروفايل",
  // القسم الرئيسي
  hero_title: "مطبعة بيرق للدعاية والإعلان",
  hero_subtitle: "نقدم خدمات طباعة احترافية وعصرية بأعلى جودة وأفضل الأسعار",
  hero_button: "استكشف خدماتنا",
  // قسم من نحن
  about_title: "من نحن",
  about_subtitle: "تعرف على مطبعة بيرق للدعاية والإعلان",
  about_heading: "مطبعة بيرق للدعاية والإعلان",
  about_p1: "مطبعة بيرق هي واحدة من أبرز المطابع في منطقة القصيم بالمملكة العربية السعودية، تأسست بهدف تقديم خدمات طباعية متميزة تلبي احتياجات العملاء من الأفراد والشركات والمؤسسات.",
  about_p2: "نمتلك فريقاً من المصممين والفنيين المحترفين المؤهلين للعمل على أحدث التقنيات والمعدات في مجال الطباعة، مما يضمن تقديم منتجات ذات جودة عالية وبأسعار منافسة.",
  about_p3: "نسعى دائماً لمواكبة التطورات في عالم الطباعة والدعاية والإعلان، ونحرص على تطوير خدماتنا باستمرار لتلبية تطلعات عملائنا وتحقيق رضاهم.",
  about_button: "اكتشف خدماتنا",
  // قسم الخدمات
  services_title: "خدماتنا",
  services_subtitle: "نقدم مجموعة متنوعة من خدمات الطباعة والدعاية والإعلان",
  service1_title: "طباعة رقمية",
  service1_desc: "نقدم خدمات الطباعة الرقمية عالية الجودة لجميع أنواع المطبوعات بأحجام مختلفة وبأسرع وقت.",
  service2_title: "طباعة الهوية البصرية",
  service2_desc: "تصميم وطباعة الهوية البصرية الكاملة للشركات والمؤسسات من شعارات وبطاقات عمل ومطبوعات رسمية.",
  service3_title: "لوحات إعلانية",
  service3_desc: "تصميم وتنفيذ اللوحات الإعلانية بمختلف الأحجام والخامات للداخل والخارج بأعلى جودة.",
  service4_title: "الهدايا الدعائية",
  service4_desc: "طباعة الشعارات والتصاميم على الهدايا الدعائية المختلفة مثل الأقلام والأكواب والميداليات.",
  service5_title: "طباعة الكتب والمجلات",
  service5_desc: "خدمات طباعة الكتب والمجلات والنشرات بمختلف المقاسات والتشطيبات وبجودة عالية.",
  service6_title: "تصميم جرافيك",
  service6_desc: "خدمات تصميم جرافيك احترافية لجميع احتياجات العملاء من شعارات وإعلانات ومطبوعات.",
  services_button: "عرض جميع الخدمات",
  // قسم لماذا نحن
  why_title: "لماذا مطبعة بيرق",
  why_subtitle: "أسباب تجعلنا الخيار الأمثل لخدمات الطباعة والدعاية",
  why1_title: "جودة عالية",
  why1_desc: "نستخدم أحدث التقنيات والمعدات لضمان جودة عالية لجميع المطبوعات.",
  why2_title: "سرعة في التنفيذ",
  why2_desc: "نلتزم بتسليم المشاريع في الوقت المحدد دون المساس بالجودة.",
  why3_title: "أسعار منافسة",
  why3_desc: "نقدم أسعاراً تنافسية مع الحفاظ على أعلى معايير الجودة.",
  why4_title: "فريق محترف",
  why4_desc: "فريق من المصممين والفنيين ذوي الخبرة والكفاءة العالية.",
  why5_title: "تقنيات حديثة",
  why5_desc: "نستخدم أحدث التقنيات والمعدات في مجال الطباعة والدعاية.",
  why6_title: "خدمة عملاء متميزة",
  why6_desc: "نقدم خدمة عملاء متميزة ودعم فني مستمر قبل وأثناء وبعد تنفيذ المشروع.",
  // قسم آراء العملاء
  testimonials_title: "آراء العملاء",
  testimonials_subtitle: "ماذا يقول عملاؤنا عن خدماتنا",
  // قسم الإحصائيات
  stats_years: "سنوات الخبرة",
  stats_projects: "مشروع منجز",
  stats_clients: "عميل سعيد",
  stats_awards: "جائزة تميز"
};

// محتوى الموقع باللغة الإنجليزية
const englishContent = {
  // القائمة
  nav_home: "Home",
  nav_services: "Services",
  nav_contact: "Contact Us",
  nav_download: "Download Profile",
  // القسم الرئيسي
  hero_title: "Beiraq Printing & Advertising",
  hero_subtitle: "We provide professional and modern printing services with the highest quality and best prices",
  hero_button: "Explore Our Services",
  // قسم من نحن
  about_title: "About Us",
  about_subtitle: "Learn about Beiraq Printing & Advertising",
  about_heading: "Beiraq Printing & Advertising",
  about_p1: "Beiraq Printing is one of the leading printing presses in the Qassim region of Saudi Arabia, established with the aim of providing distinguished printing services that meet the needs of customers from individuals, companies and institutions.",
  about_p2: "We have a team of professional designers and technicians qualified to work on the latest technologies and equipment in the field of printing, which ensures the provision of high-quality products at competitive prices.",
  about_p3: "We always strive to keep pace with developments in the world of printing, advertising and publicity, and we are keen to continuously develop our services to meet the aspirations of our customers and achieve their satisfaction.",
  about_button: "Discover Our Services",
  // قسم الخدمات
  services_title: "Our Services",
  services_subtitle: "We offer a variety of printing, advertising and publicity services",
  service1_title: "Digital Printing",
  service1_desc: "We provide high-quality digital printing services for all types of prints in different sizes and in the fastest time.",
  service2_title: "Visual Identity Printing",
  service2_desc: "Design and print the complete visual identity for companies and institutions, including logos, business cards and official publications.",
  service3_title: "Billboards",
  service3_desc: "Design and implement billboards of various sizes and materials for indoor and outdoor with the highest quality.",
  service4_title: "Promotional Gifts",
  service4_desc: "Printing logos and designs on various promotional gifts such as pens, cups and medals.",
  service5_title: "Books and Magazines Printing",
  service5_desc: "Services for printing books, magazines and bulletins in various sizes and finishes with high quality.",
  service6_title: "Graphic Design",
  service6_desc: "Professional graphic design services for all customer needs from logos, advertisements and publications.",
  services_button: "View All Services",
  // قسم لماذا نحن
  why_title: "Why Beiraq",
  why_subtitle: "Reasons that make us the best choice for printing and advertising services",
  why1_title: "High Quality",
  why1_desc: "We use the latest technologies and equipment to ensure high quality for all prints.",
  why2_title: "Fast Execution",
  why2_desc: "We are committed to delivering projects on time without compromising quality.",
  why3_title: "Competitive Prices",
  why3_desc: "We offer competitive prices while maintaining the highest quality standards.",
  why4_title: "Professional Team",
  why4_desc: "A team of designers and technicians with experience and high efficiency.",
  why5_title: "Modern Technologies",
  why5_desc: "We use the latest technologies and equipment in the field of printing and advertising.",
  why6_title: "Excellent Customer Service",
  why6_desc: "We provide excellent customer service and continuous technical support before, during and after project implementation.",
  // قسم آراء العملاء
  testimonials_title: "Testimonials",
  testimonials_subtitle: "What our customers say about our services",
  // قسم الإحصائيات
  stats_years: "Years of Experience",
  stats_projects: "Completed Projects",
  stats_clients: "Happy Clients",
  stats_awards: "Excellence Awards"
};

// تبديل اللغة
function toggleLanguage() {
  const body = document.querySelector('body');
  const langSwitch = document.querySelectorAll('.lang-switch a');
  
  if (body.classList.contains('en')) {
    // التبديل إلى العربية
    body.classList.remove('en');
    localStorage.setItem('language', 'ar');
    langSwitch.forEach(el => el.textContent = 'English');
    updatePageContent(arabicContent);
  } else {
    // التبديل إلى الإنجليزية
    body.classList.add('en');
    localStorage.setItem('language', 'en');
    langSwitch.forEach(el => el.textContent = 'العربية');
    updatePageContent(englishContent);
  }
}

// تحديث محتوى الصفحة حسب اللغة
function updatePageContent(content) {
  // تحديث القائمة
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  if (navLinks.length >= 4) {
    navLinks[0].textContent = content.nav_home;
    navLinks[1].textContent = content.nav_services;
    navLinks[2].textContent = content.nav_contact;
    navLinks[3].textContent = content.nav_download;
  }
  
  // تحديث القسم الرئيسي
  const heroTitle = document.querySelector('.hero-content h1');
  const heroSubtitle = document.querySelector('.hero-content p');
  const heroButton = document.querySelector('.hero-content .btn');
  if (heroTitle) heroTitle.textContent = content.hero_title;
  if (heroSubtitle) heroSubtitle.textContent = content.hero_subtitle;
  if (heroButton) heroButton.textContent = content.hero_button;
  
  // تحديث قسم من نحن
  const aboutTitle = document.querySelector('#about .section-title h2');
  const aboutSubtitle = document.querySelector('#about .section-title p');
  const aboutHeading = document.querySelector('.about-content h2');
  const aboutParagraphs = document.querySelectorAll('.about-content p');
  const aboutButton = document.querySelector('.about-content .btn');
  
  if (aboutTitle) aboutTitle.textContent = content.about_title;
  if (aboutSubtitle) aboutSubtitle.textContent = content.about_subtitle;
  if (aboutHeading) aboutHeading.textContent = content.about_heading;
  if (aboutParagraphs.length >= 3) {
    aboutParagraphs[0].textContent = content.about_p1;
    aboutParagraphs[1].textContent = content.about_p2;
    aboutParagraphs[2].textContent = content.about_p3;
  }
  if (aboutButton) aboutButton.textContent = content.about_button;
  
  // تحديث قسم الخدمات
  const servicesTitle = document.querySelector('#services .section-title h2');
  const servicesSubtitle = document.querySelector('#services .section-title p');
  const serviceItems = document.querySelectorAll('.service-item');
  const servicesButton = document.querySelector('#services .btn');
  
  if (servicesTitle) servicesTitle.textContent = content.services_title;
  if (servicesSubtitle) servicesSubtitle.textContent = content.services_subtitle;
  
  if (serviceItems.length >= 6) {
    updateServiceItem(serviceItems[0], content.service1_title, content.service1_desc);
    updateServiceItem(serviceItems[1], content.service2_title, content.service2_desc);
    updateServiceItem(serviceItems[2], content.service3_title, content.service3_desc);
    updateServiceItem(serviceItems[3], content.service4_title, content.service4_desc);
    updateServiceItem(serviceItems[4], content.service5_title, content.service5_desc);
    updateServiceItem(serviceItems[5], content.service6_title, content.service6_desc);
  }
  
  if (servicesButton) servicesButton.textContent = content.services_button;
  
  // تحديث قسم لماذا نحن
  const whyTitle = document.querySelector('#why-us .section-title h2');
  const whySubtitle = document.querySelector('#why-us .section-title p');
  const whyItems = document.querySelectorAll('.why-us-item');
  
  if (whyTitle) whyTitle.textContent = content.why_title;
  if (whySubtitle) whySubtitle.textContent = content.why_subtitle;
  
  if (whyItems.length >= 6) {
    updateWhyItem(whyItems[0], content.why1_title, content.why1_desc);
    updateWhyItem(whyItems[1], content.why2_title, content.why2_desc);
    updateWhyItem(whyItems[2], content.why3_title, content.why3_desc);
    updateWhyItem(whyItems[3], content.why4_title, content.why4_desc);
    updateWhyItem(whyItems[4], content.why5_title, content.why5_desc);
    updateWhyItem(whyItems[5], content.why6_title, content.why6_desc);
  }
  
  // تحديث قسم آراء العملاء
  const testimonialsTitle = document.querySelector('#testimonials .section-title h2');
  const testimonialsSubtitle = document.querySelector('#testimonials .section-title p');
  
  if (testimonialsTitle) testimonialsTitle.textContent = content.testimonials_title;
  if (testimonialsSubtitle) testimonialsSubtitle.textContent = content.testimonials_subtitle;
  
  // تحديث قسم الإحصائيات
  const statTitles = document.querySelectorAll('.stat-title');
  if (statTitles.length >= 4) {
    statTitles[0].textContent = content.stats_years;
    statTitles[1].textContent = content.stats_projects;
    statTitles[2].textContent = content.stats_clients;
    statTitles[3].textContent = content.stats_awards;
  }
}

// تحديث عنصر الخدمة
function updateServiceItem(item, title, desc) {
  const titleEl = item.querySelector('.service-title');
  const descEl = item.querySelector('.service-description');
  
  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = desc;
}

// تحديث عنصر لماذا نحن
function updateWhyItem(item, title, desc) {
  const titleEl = item.querySelector('h4');
  const descEl = item.querySelector('p');
  
  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = desc;
}

// التحقق من اللغة المخزنة
document.addEventListener('DOMContentLoaded', function() {
  const storedLanguage = localStorage.getItem('language');
  const body = document.querySelector('body');
  const langSwitch = document.querySelectorAll('.lang-switch a');
  
  if (storedLanguage === 'en') {
    body.classList.add('en');
    langSwitch.forEach(el => el.textContent = 'العربية');
    updatePageContent(englishContent);
  } else {
    langSwitch.forEach(el => el.textContent = 'English');
    updatePageContent(arabicContent);
  }
  
  // تفعيل عداد الإحصائيات
  const statElements = document.querySelectorAll('.stat-number');
  if (statElements.length > 0) {
    initCounters();
  }
  
  // تفعيل نموذج التواصل
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactFormSubmit);
  }
  
  // تفعيل معرض الصور
  initGallery();
  
  // تفعيل تأثيرات الخلفية المتحركة
  initAnimatedBackground();
});

// عداد الإحصائيات
function initCounters() {
  const statElements = document.querySelectorAll('.stat-number');
  
  const options = {
    threshold: 0.7
  };
  
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const target = parseInt(element.getAttribute('data-target'));
        let count = 0;
        const duration = 2000; // مدة العد بالمللي ثانية
        const interval = Math.floor(duration / target);
        
        const counter = setInterval(function() {
          count++;
          element.textContent = count;
          
          if (count >= target) {
            clearInterval(counter);
          }
        }, interval);
        
        observer.unobserve(element);
      }
    });
  }, options);
  
  statElements.forEach(element => {
    observer.observe(element);
  });
}

// التعامل مع نموذج التواصل
function handleContactFormSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const phone = form.querySelector('#phone').value;
  const message = form.querySelector('#message').value;
  
  // التحقق من صحة البيانات
  if (!name || !email || !phone || !message) {
    showAlert('يرجى ملء جميع الحقول المطلوبة', 'danger');
    return;
  }
  
  // إرسال البيانات إلى الخادم (سيتم تنفيذه لاحقاً)
  // في هذه المرحلة نعرض رسالة نجاح افتراضية
  showAlert('تم إرسال رسالتك بنجاح، سنتواصل معك قريباً', 'success');
  form.reset();
}

// عرض رسائل التنبيه
function showAlert(message, type) {
  const alertContainer = document.querySelector('.alert-container');
  
  if (!alertContainer) {
    return;
  }
  
  const alert = document.createElement('div');
  alert.className = `alert alert-${type} alert-dismissible fade show`;
  alert.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;
  
  alertContainer.appendChild(alert);
  
  // إخفاء التنبيه بعد 5 ثوانٍ
  setTimeout(function() {
    alert.classList.remove('show');
    setTimeout(function() {
      alert.remove();
    }, 300);
  }, 5000);
}

// تهيئة معرض الصور
function initGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const imgSrc = this.querySelector('img').getAttribute('src');
      const imgTitle = this.querySelector('img').getAttribute('alt');
      
      openGalleryModal(imgSrc, imgTitle);
    });
  });
}

// فتح نافذة معرض الصور
function openGalleryModal(imgSrc, imgTitle) {
  const modal = document.createElement('div');
  modal.className = 'gallery-modal';
  modal.innerHTML = `
    <div class="gallery-modal-content">
      <span class="gallery-modal-close">&times;</span>
      <img src="${imgSrc}" alt="${imgTitle}">
      <div class="gallery-modal-caption">${imgTitle}</div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // إغلاق النافذة عند النقر على زر الإغلاق أو خارج الصورة
  modal.querySelector('.gallery-modal-close').addEventListener('click', function() {
    closeGalleryModal(modal);
  });
  
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeGalleryModal(modal);
    }
  });
}

// إغلاق نافذة معرض الصور
function closeGalleryModal(modal) {
  modal.classList.add('fade-out');
  setTimeout(function() {
    modal.remove();
  }, 300);
}

// تثبيت القائمة العلوية عند التمرير
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

// تفعيل التمرير السلس للروابط الداخلية
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// تهيئة الخلفية المتحركة
function initAnimatedBackground() {
  // إضافة خلفية متحركة للقسم الرئيسي
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    // إنشاء عناصر الخلفية المتحركة
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    
    // إضافة جزيئات متحركة
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // تعيين خصائص عشوائية للجزيئات
      const size = Math.random() * 5 + 2; // حجم بين 2 و 7 بكسل
      const posX = Math.random() * 100; // موقع أفقي بين 0 و 100%
      const posY = Math.random() * 100; // موقع رأسي بين 0 و 100%
      const duration = Math.random() * 20 + 10; // مدة الحركة بين 10 و 30 ثانية
      const delay = Math.random() * 5; // تأخير البدء بين 0 و 5 ثوانٍ
      
      // تطبيق الخصائص على الجزيء
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;
      
      // إضافة الجزيء إلى الحاوية
      particlesContainer.appendChild(particle);
    }
    
    // إضافة الحاوية إلى القسم الرئيسي
    heroSection.appendChild(particlesContainer);
  }
  
  // إضافة خلفية متحركة لقسم الإحصائيات
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    // إنشاء عناصر الخلفية المتحركة
    const wavesContainer = document.createElement('div');
    wavesContainer.className = 'waves-container';
    
    // إضافة موجات متحركة
    for (let i = 0; i < 3; i++) {
      const wave = document.createElement('div');
      wave.className = 'wave';
      wave.style.animationDelay = `${i * 0.5}s`;
      wavesContainer.appendChild(wave);
    }
    
    // إضافة الحاوية إلى قسم الإحصائيات
    statsSection.appendChild(wavesContainer);
  }
}

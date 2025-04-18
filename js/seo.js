// ملف JavaScript لتحسين SEO
// تم التطوير بواسطة: Manus

// إضافة البيانات الوصفية لمحركات البحث
document.addEventListener('DOMContentLoaded', function() {
  // إضافة العلامات الوصفية الإضافية
  addMetaTags();
  
  // تحسين الروابط الداخلية
  enhanceInternalLinks();
  
  // إضافة البيانات المنظمة
  addStructuredData();
});

// إضافة العلامات الوصفية
function addMetaTags() {
  const metaTags = [
    {
      name: 'keywords',
      content: 'مطبعة بيرق, مطبعة في القصيم, طباعة, دعاية, إعلان, مطبعة بيرق في القصيم, خدمات طباعة, طباعة رقمية, هوية بصرية, لوحات إعلانية, هدايا دعائية, طباعة كتب, تصميم جرافيك, السعودية'
    },
    {
      name: 'author',
      content: 'مطبعة بيرق للدعاية والإعلان'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      property: 'og:title',
      content: document.title
    },
    {
      property: 'og:description',
      content: document.querySelector('meta[name="description"]').getAttribute('content')
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: window.location.href
    },
    {
      property: 'og:image',
      content: 'https://beiraq.com/images/logo.jpg'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: document.title
    },
    {
      name: 'twitter:description',
      content: document.querySelector('meta[name="description"]').getAttribute('content')
    },
    {
      name: 'twitter:image',
      content: 'https://beiraq.com/images/logo.jpg'
    },
    {
      name: 'geo.region',
      content: 'SA-04'
    },
    {
      name: 'geo.placename',
      content: 'القصيم'
    }
  ];
  
  metaTags.forEach(tag => {
    const metaTag = document.createElement('meta');
    
    if (tag.name) {
      metaTag.setAttribute('name', tag.name);
    } else if (tag.property) {
      metaTag.setAttribute('property', tag.property);
    }
    
    metaTag.setAttribute('content', tag.content);
    document.head.appendChild(metaTag);
  });
}

// تحسين الروابط الداخلية
function enhanceInternalLinks() {
  const links = document.querySelectorAll('a[href]');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    
    // إضافة العنوان للروابط التي لا تحتوي على عنوان
    if (!link.hasAttribute('title') && href.startsWith('/') || href.includes('beiraq.com')) {
      let title = '';
      
      if (href.includes('index.html') || href === '/' || href === '') {
        title = 'الصفحة الرئيسية - مطبعة بيرق للدعاية والإعلان في القصيم';
      } else if (href.includes('services.html')) {
        title = 'خدماتنا - مطبعة بيرق للدعاية والإعلان في القصيم';
      } else if (href.includes('contact.html')) {
        title = 'تواصل معنا - مطبعة بيرق للدعاية والإعلان في القصيم';
      }
      
      if (title) {
        link.setAttribute('title', title);
      }
    }
    
    // إضافة rel="noopener" للروابط الخارجية
    if (href.startsWith('http') && !href.includes('beiraq.com')) {
      link.setAttribute('rel', 'noopener noreferrer');
      
      // فتح الروابط الخارجية في نافذة جديدة
      if (!link.hasAttribute('target')) {
        link.setAttribute('target', '_blank');
      }
    }
  });
}

// إضافة البيانات المنظمة
function addStructuredData() {
  const currentPage = window.location.pathname;
  let structuredData = {};
  
  // البيانات المنظمة للمؤسسة (لجميع الصفحات)
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'مطبعة بيرق للدعاية والإعلان',
    'image': 'https://beiraq.com/images/logo.jpg',
    'url': 'https://beiraq.com',
    'telephone': '+966538773161',
    'address': {
      '@type': 'PostalAddress',
      'addressRegion': 'القصيم',
      'addressCountry': 'SA'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '26.3292',
      'longitude': '43.9720'
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'
      ],
      'opens': '08:00',
      'closes': '20:00'
    },
    'sameAs': [
      'https://facebook.com/beiraqprinting',
      'https://twitter.com/beiraqprinting',
      'https://instagram.com/beiraqprinting'
    ]
  };
  
  // إضافة بيانات منظمة خاصة بالصفحة الحالية
  if (currentPage.includes('index.html') || currentPage === '/' || currentPage === '') {
    // الصفحة الرئيسية
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'مطبعة بيرق للدعاية والإعلان في القصيم',
      'description': 'مطبعة بيرق للدعاية والإعلان في القصيم - خدمات طباعة احترافية وعصرية بأعلى جودة وأفضل الأسعار',
      'url': 'https://beiraq.com',
      'mainEntity': organizationData
    };
  } else if (currentPage.includes('services.html')) {
    // صفحة الخدمات
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'خدمات مطبعة بيرق للدعاية والإعلان في القصيم',
      'description': 'قائمة خدمات مطبعة بيرق للدعاية والإعلان في القصيم - طباعة رقمية، هوية بصرية، لوحات إعلانية وأكثر',
      'url': 'https://beiraq.com/services.html',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'طباعة رقمية',
          'url': 'https://beiraq.com/services.html#digital-printing'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'طباعة الهوية البصرية',
          'url': 'https://beiraq.com/services.html#identity-printing'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'لوحات إعلانية',
          'url': 'https://beiraq.com/services.html#signage'
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': 'الهدايا الدعائية',
          'url': 'https://beiraq.com/services.html#promotional-gifts'
        },
        {
          '@type': 'ListItem',
          'position': 5,
          'name': 'طباعة الكتب والمجلات',
          'url': 'https://beiraq.com/services.html#books-printing'
        },
        {
          '@type': 'ListItem',
          'position': 6,
          'name': 'تصميم جرافيك',
          'url': 'https://beiraq.com/services.html#graphic-design'
        }
      ]
    };
  } else if (currentPage.includes('contact.html')) {
    // صفحة التواصل
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'تواصل مع مطبعة بيرق للدعاية والإعلان في القصيم',
      'description': 'تواصل مع مطبعة بيرق للدعاية والإعلان في القصيم - احصل على خدمات طباعية احترافية وعصرية',
      'url': 'https://beiraq.com/contact.html',
      'mainEntity': organizationData
    };
  }
  
  // إضافة البيانات المنظمة إلى الصفحة
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
  
  // إضافة بيانات المؤسسة بشكل منفصل
  if (!currentPage.includes('index.html') && currentPage !== '/' && currentPage !== '') {
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.text = JSON.stringify(organizationData);
    document.head.appendChild(orgScript);
  }
}

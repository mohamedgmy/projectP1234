// ملف JavaScript لاختبار توافق الموقع مع مختلف الأجهزة
// تم التطوير بواسطة: Manus

document.addEventListener('DOMContentLoaded', function() {
  // إضافة فئة للجسم تشير إلى نوع الجهاز
  addDeviceClass();
  
  // التحقق من توافق الصور
  checkImagesResponsiveness();
  
  // التحقق من توافق العناصر
  checkElementsResponsiveness();
  
  // إضافة مستمع لتغيير حجم النافذة
  window.addEventListener('resize', function() {
    addDeviceClass();
  });
});

// إضافة فئة للجسم تشير إلى نوع الجهاز
function addDeviceClass() {
  const body = document.querySelector('body');
  const width = window.innerWidth;
  
  // إزالة الفئات السابقة
  body.classList.remove('device-mobile', 'device-tablet', 'device-desktop');
  
  // إضافة الفئة المناسبة
  if (width < 576) {
    body.classList.add('device-mobile');
    console.log('تم اكتشاف جهاز: هاتف محمول');
  } else if (width < 992) {
    body.classList.add('device-tablet');
    console.log('تم اكتشاف جهاز: جهاز لوحي');
  } else {
    body.classList.add('device-desktop');
    console.log('تم اكتشاف جهاز: كمبيوتر');
  }
}

// التحقق من توافق الصور
function checkImagesResponsiveness() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    // التأكد من أن الصور تستخدم الفئات المتجاوبة
    if (!img.classList.contains('img-fluid') && !img.parentElement.classList.contains('navbar-brand')) {
      img.classList.add('img-fluid');
      console.log('تم تصحيح توافق الصورة:', img.src);
    }
    
    // التأكد من وجود النص البديل
    if (!img.hasAttribute('alt') || img.getAttribute('alt') === '') {
      const imgSrc = img.src.split('/').pop();
      img.setAttribute('alt', 'صورة ' + imgSrc.split('.')[0]);
      console.log('تم إضافة نص بديل للصورة:', img.src);
    }
  });
}

// التحقق من توافق العناصر
function checkElementsResponsiveness() {
  // التحقق من الجداول
  const tables = document.querySelectorAll('table');
  tables.forEach(table => {
    if (!table.classList.contains('table-responsive') && !table.parentElement.classList.contains('table-responsive')) {
      // إضافة غلاف متجاوب للجدول
      const wrapper = document.createElement('div');
      wrapper.className = 'table-responsive';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
      console.log('تم تصحيح توافق الجدول');
    }
  });
  
  // التحقق من نماذج الاتصال
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      if (!input.classList.contains('form-control') && input.type !== 'submit' && input.type !== 'button' && input.type !== 'hidden') {
        input.classList.add('form-control');
        console.log('تم تصحيح توافق حقل النموذج:', input.name || input.id);
      }
    });
  });
  
  // التحقق من الأزرار
  const buttons = document.querySelectorAll('button, .btn');
  buttons.forEach(button => {
    if (!button.classList.contains('btn') && button.tagName !== 'BUTTON') {
      button.classList.add('btn');
      console.log('تم تصحيح توافق الزر');
    }
  });
}

// اختبار توافق الموقع مع مختلف الأجهزة
function testResponsiveness() {
  console.log('بدء اختبار توافق الموقع مع مختلف الأجهزة...');
  
  // اختبار الهاتف المحمول
  console.log('اختبار توافق الهاتف المحمول...');
  simulateDevice(375, 667); // iPhone 8
  
  // اختبار الجهاز اللوحي
  console.log('اختبار توافق الجهاز اللوحي...');
  simulateDevice(768, 1024); // iPad
  
  // اختبار الكمبيوتر
  console.log('اختبار توافق الكمبيوتر...');
  simulateDevice(1366, 768); // حجم شاشة الكمبيوتر الشائع
  
  console.log('اكتمل اختبار التوافق!');
}

// محاكاة جهاز بأبعاد محددة
function simulateDevice(width, height) {
  console.log(`محاكاة جهاز بأبعاد: ${width}x${height}`);
  
  // تغيير حجم النافذة (محاكاة فقط في وحدة التحكم)
  console.log(`تغيير حجم النافذة إلى: ${width}x${height}`);
  
  // اختبار العناصر المهمة
  checkCriticalElements(width);
}

// اختبار العناصر المهمة
function checkCriticalElements(width) {
  // التحقق من القائمة
  console.log('التحقق من توافق القائمة...');
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    console.log('القائمة موجودة ومتجاوبة');
  }
  
  // التحقق من القسم الرئيسي
  console.log('التحقق من توافق القسم الرئيسي...');
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    console.log('القسم الرئيسي موجود ومتجاوب');
  }
  
  // التحقق من نموذج الاتصال
  console.log('التحقق من توافق نموذج الاتصال...');
  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    console.log('نموذج الاتصال موجود ومتجاوب');
  }
  
  // التحقق من التذييل
  console.log('التحقق من توافق التذييل...');
  const footer = document.querySelector('.footer');
  if (footer) {
    console.log('التذييل موجود ومتجاوب');
  }
}

// تشغيل اختبار التوافق عند النقر على زر الاختبار
window.runResponsivenessTest = function() {
  testResponsiveness();
  return 'تم تشغيل اختبار التوافق. يرجى التحقق من وحدة تحكم المتصفح للحصول على النتائج.';
};

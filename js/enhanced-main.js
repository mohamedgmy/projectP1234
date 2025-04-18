// تأثيرات الخلفية المتحركة والتفاعلات
document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // تهيئة مكتبة AOS للتأثيرات
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // إضافة تأثير التمرير للقائمة العلوية
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // إنشاء الجزيئات المتحركة
    createParticles();

    // إنشاء الفقاعات المتحركة
    createBubbles();

    // إنشاء الخطوط المتحركة
    createLines();

    // تفعيل عداد الإحصائيات
    initCounters();

    // زر العودة للأعلى
    initBackToTop();

    // تفعيل تحميل البروفايل
    initDownloadProfile();
});

// إنشاء الجزيئات المتحركة
function createParticles() {
    const particlesContainer = document.getElementById('particles-js');
    if (!particlesContainer) return;

    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // حجم عشوائي
        const size = Math.random() * 10 + 5;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // موقع عشوائي
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // مدة عشوائية
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = duration + 's';
        
        // تأخير عشوائي
        const delay = Math.random() * 5;
        particle.style.animationDelay = delay + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// إنشاء الفقاعات المتحركة
function createBubbles() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    const bubblesContainer = document.createElement('div');
    bubblesContainer.className = 'bubbles-container';
    
    const bubbleCount = 15;
    
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // حجم عشوائي
        const size = Math.random() * 60 + 20;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        
        // موقع عشوائي
        bubble.style.left = Math.random() * 100 + '%';
        
        // مدة عشوائية
        const duration = Math.random() * 15 + 10;
        bubble.style.animationDuration = duration + 's';
        
        // تأخير عشوائي
        const delay = Math.random() * 10;
        bubble.style.animationDelay = delay + 's';
        
        bubblesContainer.appendChild(bubble);
    }
    
    heroSection.appendChild(bubblesContainer);
}

// إنشاء الخطوط المتحركة
function createLines() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    const linesContainer = document.createElement('div');
    linesContainer.className = 'lines-container';
    
    const lineCount = 10;
    
    for (let i = 0; i < lineCount; i++) {
        const line = document.createElement('div');
        line.className = 'line';
        
        // موقع عشوائي
        line.style.left = Math.random() * 100 + '%';
        
        // مدة عشوائية
        const duration = Math.random() * 10 + 5;
        line.style.animationDuration = duration + 's';
        
        // تأخير عشوائي
        const delay = Math.random() * 5;
        line.style.animationDelay = delay + 's';
        
        linesContainer.appendChild(line);
    }
    
    heroSection.appendChild(linesContainer);
}

// تفعيل عداد الإحصائيات
function initCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length === 0) return;
    
    const statsSection = document.querySelector('.stats-section');
    let animated = false;
    
    function animateCounters() {
        if (animated) return;
        
        statNumbers.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000;
            const step = target / duration * 10;
            let current = 0;
            
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    setTimeout(updateCounter, 10);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
        
        animated = true;
    }
    
    // تفعيل العداد عند الوصول للقسم
    window.addEventListener('scroll', function() {
        if (isElementInViewport(statsSection)) {
            animateCounters();
        }
    });
    
    // التحقق عند تحميل الصفحة
    if (isElementInViewport(statsSection)) {
        animateCounters();
    }
}

// التحقق من ظهور العنصر في الشاشة
function isElementInViewport(el) {
    if (!el) return false;
    
    const rect = el.getBoundingClientRect();
    
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// زر العودة للأعلى
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// تفعيل تحميل البروفايل
function initDownloadProfile() {
    const downloadBtn = document.getElementById('downloadProfile');
    if (!downloadBtn) return;
    
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // يمكن تغيير المسار حسب موقع ملف البروفايل
        const profilePath = 'files/beiraq-profile.pdf';
        
        // إنشاء رابط تحميل
        const link = document.createElement('a');
        link.href = profilePath;
        link.download = 'beiraq-profile.pdf';
        link.click();
    });
}

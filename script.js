// Smooth scroll для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Анимация при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .team-member').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Эффект печати в терминале
const terminalLines = document.querySelectorAll('.typing');
terminalLines.forEach((line, index) => {
    const delay = index * 2;
    line.style.animationDelay = `${delay}s`;
});

// Интерактивный эффект мыши
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.querySelectorAll('.service-card, .team-member').forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;
        
        const angle = Math.atan2(e.clientY - cardY, e.clientX - cardX);
        const distance = Math.hypot(e.clientX - cardX, e.clientY - cardY);
        
        if (distance < 300) {
            const glow = Math.max(0, 1 - distance / 300);
            card.style.boxShadow = `0 0 ${30 * glow}px rgba(0, 255, 0, ${0.6 * glow})`;
        }
    });
});

// Обработка кнопки скачивания программы
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const originalText = this.textContent;
        this.textContent = '$ Загрузка...';
        
        setTimeout(() => {
            this.textContent = '✓ Готово!';
            
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
        }, 1500);
    });
});

// Эффект глитча при клике на заголовок
const glitchTitle = document.querySelector('.glitch');
if (glitchTitle) {
    glitchTitle.addEventListener('click', () => {
        glitchTitle.style.animation = 'none';
        setTimeout(() => {
            glitchTitle.style.animation = 'glitch 3s ease-in-out infinite';
        }, 10);
    });
}

// Анимация кнопки CTA
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const section = document.querySelector('#services');
        section.scrollIntoView({ behavior: 'smooth' });
    });
}

// Эффект свечения при наведении на карточки
document.querySelectorAll('.service-card, .team-member').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Создание случайных частиц в фоне
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = Math.random() > 0.5 ? '#00ff00' : '#ff00ff';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        particle.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`;
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '5';
        
        hero.appendChild(particle);
    }
}

createParticles();

// Добавление класса при загрузке страницы
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Инициализация
console.log('%c🦉 OWLTEAM INITIALIZED 🦉', 'color: #00ff00; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px #00ff00;');
console.log('%cДобро пожаловать в систему OWLTEAM', 'color: #ff00ff; font-size: 12px;');

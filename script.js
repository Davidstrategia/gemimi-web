/* ============================================
   GEMIMI VIBES — Official Website v3
   JavaScript: Mega Interactive Experience
   ============================================ */

// ============ INTRO CONTROLLER ============
function skipIntro() {
  const intro = document.getElementById('intro');
  if (!intro) return;
  intro.classList.add('fade-out');
  document.body.classList.remove('intro-active');
  // Pause the video when leaving
  const video = intro.querySelector('.intro-video');
  if (video) video.pause();
  // Scroll to top so page starts from the beginning
  window.scrollTo(0, 0);
  setTimeout(() => { intro.remove(); }, 800);
}

// Unmute video on user interaction
function toggleMute() {
  const video = document.getElementById('intro-video');
  const icon = document.getElementById('mute-icon');
  if (!video || !icon) return;
  video.muted = !video.muted;
  icon.textContent = video.muted ? '🔇' : '🔊';
}

// Smart autoplay: try with audio, fallback to muted
(function () {
  const video = document.getElementById('intro-video');
  const skipBtn = document.getElementById('skip-intro');
  const muteIcon = document.getElementById('mute-icon');
  if (!video) return;

  video.volume = 0.7;

  // Try to play with audio first
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      // Autoplay with audio worked!
      if (muteIcon) muteIcon.textContent = '🔊';
    }).catch(() => {
      // Browser blocked audio autoplay — fallback to muted
      video.muted = true;
      if (muteIcon) muteIcon.textContent = '🔇';
      video.play();
    });
  }

  // Show "Ir a página principal" button ONLY when video ends
  if (skipBtn) {
    // Ensure it stays hidden until video finishes
    skipBtn.classList.remove('visible');
    video.addEventListener('ended', () => {
      skipBtn.classList.add('visible');
      skipBtn.style.opacity = '1';
      skipBtn.style.pointerEvents = 'auto';
      skipBtn.style.transform = 'translateY(0)';
      skipBtn.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
  }
}());

// ============ MAGNETIC CURSOR + GLOW ============
const cursorGlow = document.getElementById('cursor-glow');
const cursorDot = document.getElementById('cursor-dot');
let cursorX = 0, cursorY = 0;
let glowX = 0, glowY = 0;
let dotX = 0, dotY = 0;
let cursorVisible = false;

document.addEventListener('mousemove', (e) => {
  cursorX = e.clientX;
  cursorY = e.clientY;
  if (!cursorVisible) {
    cursorVisible = true;
    cursorGlow.style.opacity = '1';
    cursorDot.style.opacity = '1';
  }
});

document.addEventListener('mouseleave', () => {
  cursorVisible = false;
  cursorGlow.style.opacity = '0';
  cursorDot.style.opacity = '0';
});

// Detect mobile once
const isMobile = window.innerWidth <= 768 || ('ontouchstart' in window);

if (!isMobile) {
  function updateCursor() {
    // Smooth follow with easing
    glowX += (cursorX - glowX) * 0.08;
    glowY += (cursorY - glowY) * 0.08;
    dotX += (cursorX - dotX) * 0.25;
    dotY += (cursorY - dotY) * 0.25;

    cursorGlow.style.transform = `translate(${glowX - 200}px, ${glowY - 200}px)`;
    cursorDot.style.transform = `translate(${dotX - 5}px, ${dotY - 5}px)`;
    requestAnimationFrame(updateCursor);
  }
  updateCursor();
}

// Magnetic pull on interactive elements — desktop only
if (!isMobile) {
  const magneticElements = document.querySelectorAll('.btn, .store-btn, .nav-cta, .feature-card, .nav-links a');
  magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const pull = el.classList.contains('feature-card') ? 0.15 : 0.3;
      el.style.transform = `translate(${x * pull}px, ${y * pull}px)`;
      cursorDot.classList.add('cursor-hover');
      cursorGlow.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
      cursorDot.classList.remove('cursor-hover');
      cursorGlow.classList.remove('cursor-hover');
    });
  });
}

// ============ SCROLL PROGRESS BAR ============
const scrollProgress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + '%';
}, { passive: true });

// ============ NAVBAR SCROLL ============
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
}, { passive: true });

// ============ MOBILE MENU ============
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
  document.getElementById('nav-toggle').classList.toggle('active');
}

function closeMenu() {
  document.getElementById('nav-links').classList.remove('open');
  document.getElementById('nav-toggle').classList.remove('active');
}

// 3D Tilt Cards — desktop only
if (!isMobile) {
  const tiltCards = document.querySelectorAll('.feature-card, .dashboard-card');

  tiltCards.forEach(card => {
    const isDashboard = card.classList.contains('dashboard-card');
    const maxRotation = isDashboard ? 6 : 12;
    const scaleVal = isDashboard ? '1, 1, 1' : '1.03, 1.03, 1.03';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -maxRotation;
      const rotateY = ((x - centerX) / centerX) * maxRotation;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scaleVal})`;

      const gradX = (x / rect.width) * 100;
      const gradY = (y / rect.height) * 100;
      card.style.setProperty('--shine-x', gradX + '%');
      card.style.setProperty('--shine-y', gradY + '%');
      card.classList.add('tilting');
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      card.classList.remove('tilting');
    });
  });
}

// ============ SCROLL REVEAL (Enhanced) ============
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach((el) => revealObserver.observe(el));

// ============ WORD-BY-WORD TEXT REVEAL ============
const splitHeaders = document.querySelectorAll('.section-header h2');
splitHeaders.forEach(header => {
  // Parse innerHTML preserving HTML tags
  const html = header.innerHTML;
  const tokens = [];
  let wordIndex = 0;
  // Split into HTML tags and text segments
  const parts = html.split(/(<[^>]+>)/);
  parts.forEach(part => {
    if (part.startsWith('<')) {
      tokens.push(part); // HTML tag, keep as-is
    } else {
      // Split text into words
      const words = part.split(/(\s+)/);
      words.forEach(word => {
        if (word.trim()) {
          tokens.push(`<span class="word-reveal" style="--word-i:${wordIndex}">${word}</span>`);
          wordIndex++;
        } else if (word) {
          tokens.push(word); // whitespace
        }
      });
    }
  });
  header.innerHTML = tokens.join('');
});

const wordObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.word-reveal').forEach(w => w.classList.add('visible'));
    }
  });
}, { threshold: 0.2 });

splitHeaders.forEach(h => wordObserver.observe(h.closest('.section-header') || h));

// ============ TYPEWRITER EFFECT ============
const typewriterEl = document.querySelector('.hero-typewriter');
if (typewriterEl) {
  const phrases = JSON.parse(typewriterEl.dataset.phrases);
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 70;

  function typewrite() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
      typewriterEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 35;
    } else {
      typewriterEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 70;
    }

    if (!isDeleting && charIndex === current.length) {
      typeSpeed = 2500; // pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 400;
    }

    setTimeout(typewrite, typeSpeed);
  }

  // Start typewriter after intro animation
  setTimeout(typewrite, 5500);
}

// ============ COUNTER ANIMATION (Spring Easing) ============
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 2200;
  const startTime = performance.now();

  function springEase(t) {
    return 1 - Math.pow(Math.E, -6 * t) * Math.cos(12 * t);
  }

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = springEase(progress);
    const current = Math.round(target * eased);

    el.textContent = current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target.toLocaleString() + suffix;
    }
  }
  requestAnimationFrame(update);
}

const statNumbers = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      if (!entry.target.dataset.target) return; // skip static numbers
      entry.target.dataset.animated = 'true';
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.5 });

statNumbers.forEach((num) => counterObserver.observe(num));

// ============ BUTTON RIPPLE EFFECT ============
const rippleButtons = document.querySelectorAll('.btn, .store-btn, .nav-cta');
rippleButtons.forEach(btn => {
  btn.addEventListener('click', function (e) {
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
});

// ============ CONSTELLATION PARTICLES ============
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let animationId;
let mouseX = 0;
let mouseY = 0;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2.5 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.6;
    this.speedY = (Math.random() - 0.5) * 0.6;
    this.opacity = Math.random() * 0.5 + 0.15;
    this.pulseSpeed = Math.random() * 0.02 + 0.005;
    this.pulseOffset = Math.random() * Math.PI * 2;
    this.life = 0;

    const colorChoice = Math.random();
    if (colorChoice < 0.45) {
      this.color = '155, 48, 255';   // purple
    } else if (colorChoice < 0.75) {
      this.color = '255, 77, 106';   // pink
    } else {
      this.color = '255, 215, 0';    // gold
    }
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life += this.pulseSpeed;

    // Pulsing opacity
    const pulse = Math.sin(this.life + this.pulseOffset) * 0.3;
    this.currentOpacity = Math.max(0.05, this.opacity + pulse);

    // Mouse repulsion
    const dx = this.x - mouseX;
    const dy = this.y - mouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const repulsionRadius = 150;

    if (dist < repulsionRadius) {
      const force = (repulsionRadius - dist) / repulsionRadius;
      const angle = Math.atan2(dy, dx);
      this.x += Math.cos(angle) * force * 3;
      this.y += Math.sin(angle) * force * 3;
    }

    // Wrap around
    if (this.x < -10) this.x = canvas.width + 10;
    if (this.x > canvas.width + 10) this.x = -10;
    if (this.y < -10) this.y = canvas.height + 10;
    if (this.y > canvas.height + 10) this.y = -10;
  }

  draw() {
    // Glow
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color}, ${this.currentOpacity * 0.15})`;
    ctx.fill();

    // Core
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color}, ${this.currentOpacity})`;
    ctx.fill();
  }
}

const particleCount = window.innerWidth < 768 ? 35 : 70;
for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

function drawConstellationLines() {
  const connectionDistance = 120;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < connectionDistance) {
        const opacity = (1 - dist / connectionDistance) * 0.15;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(155, 48, 255, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }

    // Also draw lines to mouse if close
    const dxm = particles[i].x - mouseX;
    const dym = particles[i].y - mouseY;
    const distm = Math.sqrt(dxm * dxm + dym * dym);
    if (distm < 180) {
      const opacity = (1 - distm / 180) * 0.25;
      ctx.beginPath();
      ctx.moveTo(particles[i].x, particles[i].y);
      ctx.lineTo(mouseX, mouseY);
      ctx.strokeStyle = `rgba(255, 77, 106, ${opacity})`;
      ctx.lineWidth = 0.7;
      ctx.stroke();
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.update();
    p.draw();
  });

  drawConstellationLines();

  animationId = requestAnimationFrame(animateParticles);
}

animateParticles();

// ============ CHART BAR INTERACTIVITY ============
const chartBars = document.querySelectorAll('.chart-bar');
const dayNames = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie'];

chartBars.forEach((bar, index) => {
  const height = parseInt(bar.style.height);
  const mockValue = Math.round(height * 12);

  bar.addEventListener('mouseenter', () => {
    bar.classList.add('bar-active');
    // Create tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'bar-tooltip';
    tooltip.innerHTML = `<strong>${dayNames[index]}</strong><br>${mockValue} visitantes`;
    bar.appendChild(tooltip);
    requestAnimationFrame(() => tooltip.classList.add('visible'));
  });

  bar.addEventListener('mouseleave', () => {
    bar.classList.remove('bar-active');
    const tooltip = bar.querySelector('.bar-tooltip');
    if (tooltip) tooltip.remove();
  });
});

// ============ CHART BAR SCROLL ANIMATION ============
const chartObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll('.chart-bar');
      bars.forEach((bar, i) => {
        const targetHeight = bar.style.height;
        bar.style.height = '0%';
        bar.style.transition = `height 1s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.08}s`;
        requestAnimationFrame(() => {
          bar.style.height = targetHeight;
        });
      });
      chartObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const chartContainer = document.querySelector('.chart-bars');
if (chartContainer) chartObserver.observe(chartContainer);

// ============ SCROLL-DRIVEN GRADIENT ============
const body = document.body;
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollRatio = scrolled / maxScroll;

  // Shift the background gradient hue
  const hueShift = scrollRatio * 30;
  body.style.setProperty('--scroll-hue', hueShift);
}, { passive: true });

// ============ PERFORMANCE ============
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    cancelAnimationFrame(animationId);
  } else {
    animateParticles();
  }
});

// ============ PARALLAX SUBTLE — desktop only ============
if (!isMobile) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero-visual');
    if (hero && scrolled < window.innerHeight) {
      hero.style.transform = `translateY(${scrolled * 0.08}px)`;
    }
  }, { passive: true });
}

// ============ SECTION ENTRY ANIMATIONS ============
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
    }
  });
}, { threshold: 0.05 });

sections.forEach(s => sectionObserver.observe(s));

// ============ STAGGER CHILDREN ANIMATION ============
const staggerContainers = document.querySelectorAll('.stagger');
const staggerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const children = entry.target.children;
      Array.from(children).forEach((child, i) => {
        setTimeout(() => {
          child.classList.add('stagger-visible');
        }, i * 120);
      });
      staggerObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

staggerContainers.forEach(c => staggerObserver.observe(c));

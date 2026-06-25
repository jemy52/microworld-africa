function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  
  grid.innerHTML = PRODUCTS.map(p => {
    let imageAreaHtml = '';

    // Check if this item uses the special dual-image block structure
    if (p.img && p.img.isMultiple) {
      imageAreaHtml = `
        <div class="product-image-grid-2">
          <div class="sub-image-item">
            <img src="${p.img.img1}" alt="${p.img.title1}" loading="lazy" onerror="this.style.borderStyle='dashed'; this.src='';" />
            <span class="sub-image-title">${p.img.title1}</span>
          </div>
          <div class="sub-image-item">
            <img src="${p.img.img2}" alt="${p.img.title2}" loading="lazy" onerror="this.style.borderStyle='dashed'; this.src='';" />
            <span class="sub-image-title">${p.img.title2}</span>
          </div>
        </div>
      `;
    } else {
      // Your exact original code layout line for single-image strings
      imageAreaHtml = `<img src="${p.img}" alt="${p.title}" loading="lazy" onerror="this.style.borderStyle='dashed'; this.src='';" />`;
    }

    // Returns your original product card structure seamlessly
    return `
      <article class="product-card" id="${p.id}">
        ${imageAreaHtml}
        <h4>${p.title}</h4>
        <p class="specs-short">${p.short}</p>
        <ul class="specs">
          ${p.specs.map(s => `<li>${s}</li>`).join('')}
        </ul>
        <div class="product-footer">
          <span class="badge">${p.tag}</span>
          <a class="btn ghost" href="contact.html" aria-label="Enquire about ${p.title}">Enquire</a>
        </div>
      </article>
    `;
  }).join('');
}


function setupMobileMenu() {
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const list = document.getElementById('nav-list');
      if (list) {
        const isOpen = list.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
        navToggle.textContent = isOpen ? 'close' : 'menu';
      }
    });
  }
}

function toggleNav(open) {
  const list = document.getElementById('nav-list');
  const btn = document.querySelector('.nav-toggle');
  if (!list || !btn) return;
  
  if (open) {
    list.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    btn.textContent = 'close';
  } else {
    list.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = 'menu';
  }
}

function setupFAQAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const answer = question.nextElementSibling;
      const isActive = item.classList.contains('active');
      
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-answer').style.maxHeight = null;
      });
      
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      }
    });
  });
}

function setupForm() {
  const form = document.getElementById('contact-form');
  const result = document.getElementById('form-result');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    result.textContent = '';
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const company = form.company.value.trim();

    if (name.length < 2) return showResult('Please enter your name (at least 2 characters).', true);
    if (!validateEmail(email)) return showResult('Please enter a valid email address.', true);
    if (message.length < 10) return showResult('Please enter a longer message (10+ characters).', true);

    const subject = encodeURIComponent(`Microworld Africa enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    
    window.location.href = `mailto:microworldafrica04@gmail.com?subject=${subject}&body=${body}`;
    showResult('Opening your mail client — or send directly to microworldafrica04@gmail.com', false);
    form.reset();
  });

  function showResult(msg, isError) {
    result.style.color = isError ? 'crimson' : 'green';
    result.textContent = msg;
  }
  
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

function setYear() {
  const el = document.getElementById('year');
  if(el) el.textContent = new Date().getFullYear();
}

function setupThemeToggle() {
  const icon = document.getElementById("themeIcon");
  if (!icon) return;

  icon.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    
    if(document.body.classList.contains("dark-mode")) {
      icon.textContent = "☀️";
    } else {
      icon.textContent = "🌙";
    }
  });
}

function setupDynamicWhatsApp() {
  const whatsappNumbers = [
    '254722671398', 
    '254720573612'  
  ];
  
  const inlineBtn = document.getElementById('contact-whatsapp-btn');
  const floatingBtn = document.getElementById('dynamic-whatsapp-btn');

  function handleRouting(e, element) {
    let index = localStorage.getItem('wa_line_index') || 0;
    index = parseInt(index);
    
    const selectedNumber = whatsappNumbers[index];
    element.href = `https://wa.me/${selectedNumber}`;
    
    const nextIndex = (index + 1) % whatsappNumbers.length;
    localStorage.setItem('wa_line_index', nextIndex);
  }

  if (inlineBtn) {
    inlineBtn.addEventListener('click', (e) => handleRouting(e, inlineBtn));
  }
  if (floatingBtn) {
    floatingBtn.addEventListener('click', (e) => handleRouting(e, floatingBtn));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupMobileMenu();
  setupForm();
  setYear();
  setupThemeToggle();
  setupFAQAccordion();
  setupDynamicWhatsApp();
});
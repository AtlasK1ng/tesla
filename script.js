const texts = {
  es: {
    hero: { badge: "OPORTUNIDAD", title: "Tesla Model 3", subtitle: "Long Range AWD · 2019 · Dual Motor" },
    description: { 
      title: "Descripción", 
      p1: "Tesla Model 3 Long Range AWD (Dual Motor) del año 2019, en color azul. Vehículo muy cuidado, con aproximadamente 140.000 km y en perfecto estado de funcionamiento.",
      p2: "Incluye prácticamente todos los extras disponibles en su configuración, destacando el sonido premium y el Full Self‑Driving (FSD).",
      priceText: "Precio:",
      priceNote: "Escucho ofertas razonables"
    },
    specs: { title: "Ficha técnica", year: "Año", km: "Kilómetros", drive: "Tracción", battery: "Batería", color: "Color", range: "Autonomía", sound: "Sonido", fsd: "FSD", price: "Precio" },
    contact: { title: "Contacto", name: "Nombre", email: "Email", phone: "Teléfono", msg: "Mensaje u oferta (€)", btn: "Contactar ahora", note: "Te responderé lo antes posible." },
    gallery: { title: "Galería de fotos" }
  },
  en: {
    hero: { badge: "BEST OPPORTUNITY", title: "Tesla Model 3", subtitle: "Long Range AWD · 2019 · Dual Motor" },
    description: { 
      title: "Description", 
      p1: "2019 Tesla Model 3 Long Range AWD (Dual Motor) in metallic blue. Very well maintained, approximately 140,000 km, in perfect working condition.",
      p2: "Equipped with almost all optional extras, featuring Premium Audio and Full Self-Driving (FSD) package.",
      priceText: "Price:",
      priceNote: "Open to reasonable offers"
    },
    specs: { title: "Technical Specs", year: "Year", km: "Mileage", drive: "Drivetrain", battery: "Battery", color: "Color", range: "Range", sound: "Audio", fsd: "FSD", price: "Price" },
    contact: { title: "Contact", name: "Name", email: "Email", phone: "Phone number", msg: "Message or offer (€)", btn: "Contact now", note: "I will get back to you shortly." },
    gallery: { title: "Photo Gallery" }
  }
};

function changeLanguage(lang) {
  localStorage.setItem('selectedLang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`btn-${lang}`).classList.add('active');

  document.querySelectorAll('[data-section]').forEach(el => {
    const section = el.getAttribute('data-section');
    const value = el.getAttribute('data-value');
    if (texts[lang][section] && texts[lang][section][value]) el.innerHTML = texts[lang][section][value];
  });

  // Placeholders
  document.getElementById('form-name').placeholder = texts[lang].contact.name;
  document.getElementById('form-email').placeholder = texts[lang].contact.email;
  document.getElementById('form-phone').placeholder = texts[lang].contact.phone;
  document.getElementById('form-msg').placeholder = texts[lang].contact.msg;
  document.getElementById('form-btn').innerText = texts[lang].contact.btn;

  renderSpecs(lang);
}

function renderSpecs(lang) {
  const grid = document.getElementById('spec-grid');
  const s = texts[lang].specs;
  const colorVal = lang === 'es' ? 'Azul' : 'Blue';
  const soundVal = lang === 'es' ? 'Premium' : 'Premium';
  
  grid.innerHTML = `
    <li><span>${s.year}</span><strong>2019</strong></li>
    <li><span>${s.km}</span><strong>~140.000</strong></li>
    <li><span>${s.drive}</span><strong>AWD (Dual Motor)</strong></li>
    <li><span>${s.battery}</span><strong>Long Range</strong></li>
    <li><span>${s.color}</span><strong>${colorVal}</strong></li>
    <li><span>${s.range}</span><strong>~450 km</strong></li>
    <li><span>${s.sound}</span><strong>${soundVal}</strong></li>
    <li><span>${s.fsd}</span><strong>Incluido / Yes</strong></li>
    <li class="price-box"><span>${s.price}</span><strong>23.000 €</strong></li>
  `;
}

// Lógica de Modal y Observador
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.style.display = 'flex';
  });
});
modal.addEventListener('click', () => { modal.style.display = 'none'; });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

window.onload = () => {
  const savedLang = localStorage.getItem('selectedLang') || 'es';
  changeLanguage(savedLang);
};
const pages = {
  presentation: `
    <section class="page active">
      <div class="presentation-hero">
        <div class="presentation-hero-text">
          <h1>AAA</h1>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
          </p>
        </div>
        <div class="presentation-hero-media" style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
          <video src="video/videoplayback.mp4" width="340" height="192" style="max-width: 90vw; object-fit: cover; border-radius: 14px; border: 3px solid #7ecbff; background: #1e335c;" autoplay muted loop playsinline></video>
          <video src="video/videoplayback.mp4" width="340" height="192" style="max-width: 90vw; object-fit: cover; border-radius: 14px; border: 3px solid #7ecbff; background: #1e335c;" autoplay muted loop playsinline></video>
        </div>
      </div>
    </section>
  `,
  projets: `
    <section class="page active">
      <div class="projets-layout">
        <nav class="projets-menu">
          <h4>Lorem ipsum</h4>
          <a href="#robotique">Lorem ipsum</a>
          <a href="#devperso">Lorem ipsum</a>
          <a href="#opensource">Lorem ipsum</a>
        </nav>
        <div class="projets-content">
          <h1 id="robotique">Lorem Ipsum</h1>
          <h2>Lorem ipsum dolor</h2>
          <div style="display: flex; align-items: flex-start; gap: 90px;">
            <img src="image/fox.jpg" alt="Robotique" style="max-width:317px;width:100%;height:179px;border-radius:10px;margin:1em 0 1em 1.2em;box-shadow:0 2px 12px rgba(0,0,0,0.12);object-fit:cover;">
            <video src="video/videoplayback.mp4" width="317" height="179" style="border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.12);background:#1e335c;object-fit:cover;display:block;" autoplay muted loop playsinline></video>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Lorem Ipsum</button>
          <hr>

          <h1 id="devperso">Lorem Ipsum</h1>
          <h2>Lorem ipsum dolor</h2>
          <div style="display: flex; align-items: flex-start; gap: 90px;">
            <video src="video/videoplayback.mp4" width="317" height="179" style="border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.12);background:#1e335c;object-fit:cover;display:block;" autoplay muted loop playsinline></video>
            <img src="image/fox.jpg" alt="Développement personnel" style="max-width:317px;width:100%;height:179px;border-radius:10px;margin:1em 0 1em 1.2em;box-shadow:0 2px 12px rgba(0,0,0,0.12);object-fit:cover;">
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Lorem Ipsum</button>
          <hr>

          <h1 id="opensource">Lorem Ipsum</h1>
          <h2>Lorem ipsum dolor</h2>
          <div style="display: flex; align-items: flex-start; gap: 90px;">
            <img src="image/fox.jpg" alt="Open Source" style="max-width:317px;width:100%;height:179px;border-radius:10px;margin:1em 0 1em 1.2em;box-shadow:0 2px 12px rgba(0,0,0,0.12);object-fit:cover;">
            <video src="video/videoplayback.mp4" width="317" height="179" style="border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.12);background:#1e335c;object-fit:cover;display:block;" autoplay muted loop playsinline></video>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Lorem Ipsum</button>
        </div>
      </div>
    </section>
  `,
  portfolio: `
    <section class="page active">
      <h1>Lorem Ipsum</h1>
      <h2>Lorem ipsum dolor</h2>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
      </ul>
      <hr>
      <h2>Lorem Ipsum</h2>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
      </ul>
      <hr>
      <h2>Lorem Ipsum</h2>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
      </ul>
      <button>Lorem Ipsum</button>
    </section>
  `,
  blog: `
    <section class="page active">
      <div class="projets-layout">
        <nav class="projets-menu">
          <h4>Lorem ipsum</h4>
          <a href="#tech">Lorem ipsum</a>
          <a href="#veille">Lorem ipsum</a>
          <a href="#vie">Lorem ipsum</a>
        </nav>
        <div class="projets-content">
          <h1 id="tech">Lorem Ipsum</h1>
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <hr>

          <h1 id="veille">Lorem Ipsum</h1>
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <hr>

          <h1 id="vie">Lorem Ipsum</h1>
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  `
};

function setActivePage(page) {
  const content = document.getElementById('content');
  // Animation de sortie
  const oldPage = content.querySelector('.page.active');
  if (oldPage) {
    oldPage.classList.remove('active');
    setTimeout(() => {
      content.innerHTML = pages[page];
      // Animation d'entrée
      setTimeout(() => {
        const newPage = content.querySelector('.page');
        if (newPage) newPage.classList.add('active');
      }, 10);
    }, 400);
  } else {
    content.innerHTML = pages[page];
    setTimeout(() => {
      const newPage = content.querySelector('.page');
      if (newPage) newPage.classList.add('active');
    }, 10);
  }
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setActivePage('presentation');
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      setActivePage(link.dataset.page);
    });
  });
  // Gestion du formulaire de contact (exemple)
  document.addEventListener('submit', function(e) {
    if (e.target.tagName === 'FORM') {
      e.preventDefault();
      alert('Message envoyé !');
      e.target.reset();
    }
  });
  // Affichage automatique de l'année dans le footer
  const yearSpan = document.getElementById('footer-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}); 
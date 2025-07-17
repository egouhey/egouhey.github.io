const pages = {
  presentation: `
    <section class="page active">
      <div class="presentation-hero">
        <div class="presentation-hero-text">
          <h1>Hello, my name is Estébane Gouhey</h1>
          <h2>Electronics Engineer specializing in Robotics and Embedded Systems</h2>
          <p>
          Welcome to my website! Here I will be sharing my experiences and projects in the field of robotics and electronics. Feel free to discover and be inspired by what you find here.
          </p>
        </div>
        <div class="presentation-hero-media" style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
          <video src="video/website_video_1.mp4" width="340" height="192" style="max-width: 90vw; object-fit: cover; border-radius: 14px; border: 3px solid #7ecbff; background: #1e335c;" autoplay muted loop playsinline></video>
          <video src="video/website_video_2.mp4" width="340" height="192" style="max-width: 90vw; object-fit: cover; border-radius: 14px; border: 3px solid #7ecbff; background: #1e335c;" autoplay muted loop playsinline></video>
        </div>
      </div>
    </section>
  `,
  projets: `
    <section class="page active">
      <div class="projets-layout">
        <nav class="projets-menu">
          <h4>Table of contents</h4>
          <a href="#pipe">Metal Pipe</a>
          <a href="#game">Gamebot</a>
          <a href="#POV">POV Display</a>
          <a href="#pami">Pami</a>
          <a href="#otto">Otto</a>
        </nav>
        <div class="projets-content">
          <h1 id="pipe">2025 | Metal Pipe</h1>
          <h2>A holonomic robot participating in the French Robotics Cup with the Metal Pipe team</h2>
          <div style="display: flex; align-items: flex-start; gap: 90px;">
            <img src="image/metal_fox.jpg" alt="Metal Pipe robot" style="max-width:317px;width:100%;height:179px;border-radius:10px;margin:1em 0 1em 1.2em;box-shadow:0 2px 12px rgba(0,0,0,0.12);object-fit:cover;">
            <video src="video/fox_2025.mp4" width="317" height="179" style="border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.12);background:#1e335c;object-fit:cover;display:block;" autoplay muted loop playsinline></video>
          </div>
          <p>I am currently working on this holonomic robot that will participate in the French Robotics Cup in 2026.</p>
          <button>Documentation will arrive soon</button>
          <hr>

          <h1 id="game">2025 | Gamebot</h1>
          <h2>A homemade gaming console</h2>
          <div style="display: flex; align-items: flex-start; gap: 90px;">
            <img src="image/gamebot.jpg" alt="Gamebot console" style="max-width:317px;width:100%;height:179px;border-radius:10px;margin:1em 0 1em 1.2em;box-shadow:0 2px 12px rgba(0,0,0,0.12);object-fit:cover;">
            <img src="image/layout_gamebot.png" alt="Gamebot layout" style="max-width:317px;width:100%;height:179px;border-radius:10px;margin:1em 0 1em 1.2em;box-shadow:0 2px 12px rgba(0,0,0,0.12);object-fit:cover;">
          </div>
          <p>I am currently working on this project in collaboration with my team members : We wanted to recreate a portable and affordable game console. I designed the PCB using KiCad, created the console casing, and we are currently developing small video games for both single-player and multiplayer.</p>
          <button>Documentation will arrive soon</button>
          <hr>

          <h1 id="POV">2025 | Persistence of Vision Display</h1>
          <h2>A POV display creates images by rapidly spinning lights, utilizing the persistence of vision effect</h2>
          <div style="display: flex; align-items: flex-start; gap: 90px;">
            <img src="image/pov.jpg" alt="POV display" style="max-width:317px;width:100%;height:179px;border-radius:10px;margin:1em 0 1em 1.2em;box-shadow:0 2px 12px rgba(0,0,0,0.12);object-fit:cover;">
            <video src="video/POV.mp4" width="317" height="179" style="border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.12);background:#1e335c;object-fit:cover;display:block;" autoplay muted loop playsinline></video>
            </div>
          <p>I completed this project as an academic project as part of my specialization in Robotics and Embedded Systems in my third year at the engineering school Enseirb-Matmeca. An ATmega328P is embedded on the PCB and controls the LEDs through a driver with which it communicates via SPI.</p>
          <hr>

          <h1 id="pami">2024 | Pami</h1>
          <h2>A differential robot participating in the French Robotics Cup with the Eirbot team</h2>
          <div style="display: flex; align-items: flex-start; gap: 90px;">
            <img src="image/pami.jpg" alt="Pami robot" style="max-width:317px;width:100%;height:179px;border-radius:10px;margin:1em 0 1em 1.2em;box-shadow:0 2px 12px rgba(0,0,0,0.12);object-fit:cover;">
            <video src="video/pami.mp4" width="317" height="179" style="border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.12);background:#1e335c;object-fit:cover;display:block;" autoplay muted loop playsinline></video>
          </div>
          <p>I developed this small robot in collaboration with one of my classmates to participate in the 2024 edition of the French Robotics Cup as a PAMI : a small robot that must move quickly on the table. It is equipped with an ESP32, DC micro motors, and ultrasonic sensors. We also designed a PCB for interconnecting all these components.</p>
          <button>Documentation will arrive soon</button>
          <hr>

          <h1 id="otto">2023 | Otto</h1>
          <h2>A bipedal robot capable of sensing its environment and controllable via Bluetooth</h2>
          <div style="display: flex; align-items: flex-start; gap: 90px;">
            <img src="image/otto.jpg" alt="Otto robot" style="max-width:317px;width:100%;height:179px;border-radius:10px;margin:1em 0 1em 1.2em;box-shadow:0 2px 12px rgba(0,0,0,0.12);object-fit:cover;">
            <video src="video/otto.mp4" width="317" height="179" style="border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.12);background:#1e335c;object-fit:cover;display:block;" autoplay muted loop playsinline></video>
          </div>
          <p>This project is the first electronics project I have completed. It was inspired by the open-source 
            <a href="https://www.ottodiy.com/" style="text-decoration: underline;">
            Ottodiy
            </a>
          project. However, I decided to start from scratch : I redesigned my own 3D parts with Onshape, designed and assembled the electronics, and rewrote the code on Arduino IDE.</p>
          <button>Documentation will arrive soon</button>
          <hr>

        </div>
      </div>
    </section>
  `,
  portfolio: `
    <section class="page active">
      <h1>My Resume</h1>
      <hr>
      <h1>Experiences</h1>
      <h2> 2025 | Intern at 
        <a href="https://bloom-lasers.com/" style="text-decoration: underline;">
        Bloom Lasers
        </a>
      </h2>
      <h3> Development of a robot for cleaning and checking machined blocks : Python, C, STM32, SolidWorks, KiCad</h3>
      <h2> 2024 | Intern at 
        <a href="https://www.rgu.ac.uk/" style="text-decoration: underline;">
        Robert Gordon University
        </a>
      </h2>
      <h3> Cooperative control of multiple aerial vehicles : Python, Model Predictive Control</h3>
      <h2> 2023 | Intern at 
        <a href="https://www.univ-brest.fr/ubo-open-factory/fr" style="text-decoration: underline;">
        Open Factory
        </a>
      </h2>
      <h3> Use of 3D printers and laser cutters </h3>
      <hr>
      <h1>Education</h1>
      <h2>2022-2025 | 
        <a href="https://enseirb-matmeca.bordeaux-inp.fr/fr" style="text-decoration: underline;">
        ENSEIRB MATMECA
        </a>
      , Bordeaux Graduate School of Engineering</h2>
      <h3> Master's degree equivalent in Electronic Engineering, specialized in Robotics </h3>
      <hr>
      <h1>Skills</h1>
      <h3> Programming languages : Python, C, C++</h3>
      <h3> RTOS and Frameworks : FreeRTOS, STM32CubeIDE, Espressif, Arduino</h3>
      <h3> Software : VS Code, Git, MATLAB, KiCad, Proteus, SolidWorks, Onshape, Office 365, Overleaf </h3>
      <h3> Operating systems : Linux, Windows </h3>
      <hr>
      <h1>Associative commitment</h1>
      <h3> 2024 | Treasurer of the robotics association of ENSEIRB-MATMECA, Eirbot</h3>
      <h3> 2024 | Fab Manager of the ENSEIRB-MATMECA Fab Lab, Eirlab</h3>
      <h3> 2024 | Captain of the Bordeaux-INP handball team</h3>
      <hr>
      <h1>Interests</h1>
      <h3>Handball, Windsurf, Sailing, Robotics</h3>
      <hr>
        <a href="https://www.linkedin.com/in/estebane-gouhey/" style="text-decoration: none;">
        <button>My LinkedIn</button>
        </a>
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

  // Remplacer 'Bloom Lasers' par un lien dans la page portfolio
  const observer = new MutationObserver(() => {
    const portfolioPage = document.querySelector('.portfolio.page');
    if (portfolioPage) {
      portfolioPage.innerHTML = portfolioPage.innerHTML.replace(/Bloom Lasers/g, '<a href="https://example.com" target="_blank">Bloom Lasers</a>');
    }
  });
  observer.observe(document.getElementById('content'), { childList: true, subtree: true });

}); 


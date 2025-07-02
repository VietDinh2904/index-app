document.addEventListener('DOMContentLoaded', () => {
  // 1) Particle background
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [], num = 80;
  function resize() {
    canvas.width = innerWidth; canvas.height = innerHeight;
    particles = [];
    for (let i=0; i<num; i++) {
      particles.push({
        x: Math.random()*innerWidth,
        y: Math.random()*innerHeight,
        vx: (Math.random()-0.5)*0.5,
        vy: (Math.random()-0.5)*0.5,
        r: Math.random()*2+1,
        a: Math.random()*0.5+0.2
      });
    }
  }
  window.addEventListener('resize', resize);
  resize();
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x<0||p.x>canvas.width) p.vx*=-1;
      if (p.y<0||p.y>canvas.height) p.vy*=-1;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,2*Math.PI);
      ctx.fillStyle = `rgba(255,255,255,${p.a})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();

  // 2) Theme toggle
  const btn = document.getElementById('theme-toggle');
  btn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    btn.textContent = document.body.classList.contains('light-mode')
      ? 'Switch to Dark Mode'
      : 'Switch to Light Mode';
  });

  // 3) Show/Hide rows
  document.querySelectorAll('.toggle-btn').forEach(b => {
    b.addEventListener('click', () => {
      const row = document.getElementById(b.dataset.target);
      const vis = row.style.display === 'table-row';
      row.style.display = vis ? 'none' : 'table-row';
      b.textContent = vis ? 'Show' : 'Hide';
    });
  });

  // 4) Slide-up on scroll
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('in-view');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.section').forEach(s => obs.observe(s));

  // 5) Typewriter + gradient start
  const header = document.getElementById('header-title');
  const text = header.dataset.text;
  let idx = 0;
  function type() {
    if (idx < text.length) {
      header.textContent += text[idx++];
      setTimeout(type, 100);
    } else {
      header.classList.add('gradient');
    }
  }
  type();

  // 6) Parallax header text
  window.addEventListener('scroll', () => {
    header.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  });
});

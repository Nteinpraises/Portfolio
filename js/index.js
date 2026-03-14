 const projects = [
    {
      tag: "Website", title: "ETERNA NL", year: "2024",
      desc: "Developed and maintained a full-featured business website for ETERNA NL, delivering a polished online presence with fast load times, responsive layouts, and a design that reflects the brand's identity. Focused on clean component architecture and SEO-friendly markup.",
      pills: ["React", "Node.js", "Vercel", "CSS Modules", "SEO"],
      mainImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
      screenshots: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80","https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80","https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&q=80"]
    },
    {
      tag: "UI / UX", title: "Standard Healthcare", year: "2024",
      desc: "Revamped the UI and UX of the Standard Healthcare platform to improve usability for both staff and patients. Streamlined navigation, improved accessibility compliance, and redesigned key workflows — resulting in improved client satisfaction and engagement.",
      pills: ["TypeScript", "Figma", "CSS", "Accessibility", "React"],
      mainImg: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=85",
      screenshots: ["https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80","https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80","https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"]
    },
    {
      tag: "Automation", title: "Sagacity Platform", year: "2024",
      desc: "Collaborated with the Sagacity team to automate key operational processes on their platform. Implemented workflow automation scripts, integrated third-party APIs, and reduced repetitive manual tasks — improving team throughput significantly.",
      pills: ["Node.js", "AWS Lambda", "REST API", "Automation", "CI/CD"],
      mainImg: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=85",
      screenshots: ["https://images.unsplash.com/photo-1542626991-cbc4d16097b4?w=800&q=80","https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80","https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80"]
    },
    {
      tag: "AI / SaaS", title: "AI Lead Pipeline", year: "2024",
      desc: "Built an end-to-end automated lead nurturing and sales pipeline for Aboova Digital Solutions, integrating AI/LLM tools for personalized outreach. The system boosted lead generation by 10% and improved overall business performance by 30% through intelligent process automation.",
      pills: ["LLM", "TypeScript", "AWS", "OpenAI API", "CRM Integration"],
      mainImg: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=85",
      screenshots: ["https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80","https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&q=80","https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&q=80"]
    },
    {
      tag: "Backend", title: "Cloud-Native Infrastructure", year: "2023",
      desc: "Architected a production-ready, cloud-native backend infrastructure for a high-traffic SaaS product. Designed for horizontal scalability with containerized microservices, load balancing, automated deployments, and zero-downtime rollouts.",
      pills: ["AWS", "Docker", "Node.js", "PostgreSQL", "Terraform"],
      mainImg: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=85",
      screenshots: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80","https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80","https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"]
    },
    {
      tag: "Full Stack", title: "Soccopoco", year: "2023",
      desc: "Delivered a sleek, minimalistic, and fast full-stack web platform for Soccopoco. Praised for its creative design direction, clean codebase, and seamless developer-client collaboration throughout the build.",
      pills: ["React", "Node.js", "TypeScript", "REST API", "Vercel"],
      mainImg: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=85",
      screenshots: ["https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80","https://images.unsplash.com/photo-1545670723-196ed0954986?w=800&q=80","https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"]
    },
  ];

  function openProject(idx) {
    const p = projects[idx];
    document.getElementById('d-tag').textContent = p.tag;
    document.getElementById('d-title').textContent = p.title;
    document.getElementById('d-desc').textContent = p.desc;
    document.getElementById('d-main-img').src = p.mainImg;
    document.getElementById('d-main-img').alt = p.title;
    document.getElementById('d-pills').innerHTML = p.pills.map(t => `<span class="detail-pill">${t}</span>`).join('');
    document.getElementById('d-screenshots').innerHTML = p.screenshots.map(src =>
      `<div class="screenshot-item" onclick="openLightbox('${src}')"><img src="${src}" alt="Screenshot" loading="lazy" /></div>`
    ).join('');
    document.getElementById('projects-grid').style.display = 'none';
    const detail = document.getElementById('project-detail');
    detail.classList.add('visible');
    window.scrollTo({ top: detail.closest('section').offsetTop - 24, behavior: 'smooth' });
  }

  function closeProject() {
    document.getElementById('project-detail').classList.remove('visible');
    document.getElementById('projects-grid').style.display = 'grid';
    window.scrollTo({ top: document.querySelector('.projects-section').offsetTop - 24, behavior: 'smooth' });
  }

  function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.add('open');
  }

  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
  }

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
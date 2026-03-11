const projects = [
  {
    title: "Eterna E-commerce",
    description: "Built an e-commerce website for a client",
    screenshots: ["screenshot1.jpg", "screenshot2.jpg"],
    link: "https://eternanl.com",
    problemsSolved: "Solved issues with payment gateway integration"
  },
  {
    title: "Standard HealthCare",
    description: "Built an e-commerce website for a client",
    screenshots: ["screenshot1.jpg", "screenshot2.jpg"],
    link: "https://adc.com",
    problemsSolved: "Solved issues with payment gateway integration"
  },
  {
    title: "Boba Dc",
    description: "Built an e-commerce website for a client",
    screenshots: ["screenshot1.jpg", "screenshot2.jpg"],
    link: "https://adc.com",
    problemsSolved: "Solved issues with payment gateway integration"
  },
  {
    title: "Yman Auto",
    description: "Built an e-commerce website for a client",
    screenshots: ["screenshot1.jpg", "screenshot2.jpg"],
    link: "https://adc.com",
    problemsSolved: "Solved issues with payment gateway integration"
  },
  {
    title: "Sagacity",
    description: "Built an e-commerce website for a client",
    screenshots: ["screenshot1.jpg", "screenshot2.jpg"],
    link: "https://adc.com",
    problemsSolved: "Solved issues with payment gateway integration"
  },
  {
    title: "Mistro 64",
    description: "Built an e-commerce website for a client",
    screenshots: ["screenshot1.jpg", "screenshot2.jpg"],
    link: "https://adc.com",
    problemsSolved: "Solved issues with payment gateway integration"
  },
                              
];

function showProject(id) {
  const project = projects[id - 1];
  const content = `
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <img src="${project.screenshots[0]}" alt="Screenshot">
    <p>Problems solved: ${project.problemsSolved}</p>
    <a href="${project.link}" target="_blank">Visit website</a>
  `;
  document.getElementById("project-content").innerHTML = content;
  document.getElementById("project-details").style.display = "block";
}

function hideProject() {
  document.getElementById("project-details").style.display = "none";
}
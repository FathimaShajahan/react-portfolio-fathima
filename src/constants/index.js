import recipe from "../assets/projects/recipe.jpg";
import project2 from "../assets/projects/medicine.png";
import project3 from "../assets/projects/portfolio.png";


export const HERO_CONTENT = `Driven by a passion for building dynamic web applications, I specialize in developing interactive frontends with React and robust backends using Python, Django, and MySQL. With hands-on experience from two Python development internships, I enjoy crafting efficient solutions, optimizing performance, and continuously expanding my technical expertise.`;

export const ABOUT_TEXT = `I am a Highly Motivated Full Stack Developer with practical experience in designing and implementing user-friendly web applications. My background includes working with modern frameworks like React for frontend development and Python Django with MySQL for backend logic. Through my internships, I gained valuable insights into real-world software development, problem-solving, and teamwork. I am always eager to explore emerging technologies and enhance my coding skills to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2025 ",
    role: "Python Full Stack Developer Intern",
    company: "MashupStack",
    description: `Worked on full-stack web development using Python, Django, React, and MySQL. Developed and managed front-end interfaces using React.js, implemented server-side logic with Django, and handled database operations using MySQL. Gained experience in building RESTful APIs, managing user authentication, and optimizing application performance.`,
    technologies: ["Python","Django","React","Mysql","JavaScript","Html","CSS","Bootsrap"],
  },
  {
    year: "2023 - 2024",
    role: "Python Developer Intern",
    company: "Inmakes Infotech Pvt Ltd.",
    description: `Gained hands-on experience in Python, Django, Flask, and MySQL. Worked on data-driven web applications, utilizing Flask for lightweight APIs and Django for full-stack development. Explored data processing with Pandas and NumPy and implemented machine learning algorithms using Scikit-learn.`,
    technologies: ["Python","Django","Flask","Mysql","Pandas","NumPy","Sci-kit learn"],
  }
];

export const PROJECTS = [
  {
    title: "Recipe Sharing Platform",
    image: recipe,
    description:
      "The Recipe Sharing Platform is an interactive web application designed for food enthusiasts to discover, share, and explore recipes from around the world. Users can create accounts, upload their favorite recipes with images, ingredients, and step-by-step instructions.",
    technologies: [ "React","Python","Django","MySQL"],
  },
  {
    title: "Medical Store Management Site",
    image: project2,
    description:
      "A web application that allows store managers to manage medicines efficiently. Users can add, edit, delete, and search for medicines, with pagination and access control.",
    technologies: ["React","Python","Django","Mysql"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React","Tailwind css","framer motion"],
  },
  
];

export const CONTACT = {
  
  phoneNo: "+91 7736733196",
  email: "fathima.webdev@gmail.com",
  address: "Thiruvananthapuram, Kerala, India",
};

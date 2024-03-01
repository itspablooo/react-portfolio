const projects = [
  {
    id: 1,
    title: 'Dev Launch',
    description: `Social platform for launching dev projects and finding contibutors and funding.`,
    image: '../../public/images/devlaunch.png', 
    deployedUrl: 'https://dev-launch.onrender.com/',
    repoLink: 'https://github.com/itspablooo/Dev-Launch', 
  },
  {
    id: 2,
    title: 'PlanIt',
    description: 'Booking application for barbers',
    image: '../../public/images/planit.png', 
    deployedUrl: 'https://plan1t-5fa59fd2b161.herokuapp.com/',
    repoLink: 'https://github.com/hfelix3/PlanIt', 
  },
  {
    id: 3,
    title: 'Book Search and Buy',
    description: 'Web app that searches for books and provides you with a link to purchase the book.',
    image: '../../public/images/book.png', 
    deployedUrl: 'https://hfelix3.github.io/APIProject1/',
    repoLink: 'https://github.com/hfelix3/APIProject1?tab=readme-ov-file'
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: '',
    image: '../../public/images/weather-dashboard.png', 
    deployedUrl: '',
    repoLink: ''
  }
];

const Portfolio = () => {
    return (
        <div className="portfolio-container">
          <h2>Portfolio</h2>
          <div className="project-list">
            {projects.map((project) => (
              <div key={project.id} className="project">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <img src={project.image} alt={project.title} />
                <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Deployed Project</a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Repository</a>
              </div>
            ))}
          </div>
        </div>
      );
    }

export default Portfolio;
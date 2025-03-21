import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Acacia AI',
      description: 'An AI-driven platform empowering women in underprivileged areas with business planning tools, an AI interview assistant, and agricultural advice.',
      technologies: ['Python', 'React', 'AI/ML'],
      link: '#'
    },
    {
      title: 'Stokvolution',
      description: 'A digital platform enhancing savings and collaboration for people in the kasi community.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Olympic Race Simulation',
      description: 'A Java-based GUI simulation of a 4x100 medley relay, demonstrating parallel and concurrent programming.',
      technologies: ['Java'],
      link: '#'
    }
  ];

  return (
    <main className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title">
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-light/5 rounded-xl transform scale-[1.02] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="card relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-xl"></div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-accent rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-accent hover:text-accent-light font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-200"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
};

export default Projects; 
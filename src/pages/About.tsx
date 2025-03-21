import { motion } from 'framer-motion';

const About = () => {
  const achievements = [
    {
      title: 'Graca Machel Hall Academic Representative',
      description: 'Oversaw the academics for my residence. Including coordinating tutors, whiteboard sessions and talks.'
    },
    {
      title: 'Spotlighting Anti-GBV Champion',
      description: 'Trained 60 people on SGBV awareness, making a positive impact in the community.'
    },
    {
      title: 'Computer Science Tutor',
      description: 'Mentored over 50 students in Computer Science, helping them excel in their studies.'
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
            About Me
          </span>
        </h1>
        
        <div className="prose prose-lg mb-12">
          <p className="card text-text-secondary leading-relaxed">
            I'm a final year student at UCT with a strong focus on Software Engineering and Data Science. My current goal is to finish my degree and pursue a career in software engineering.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-accent mb-6">Key Achievements</h2>
        <div className="grid gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group hover:border-accent/30"
            >
              <div className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0 group-hover:bg-accent-light transition-colors"></div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">{achievement.title}</h3>
                  <p className="text-text-secondary">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-accent mb-6">Career Aspirations</h2>
        <div className="card">
          <p className="text-text-secondary leading-relaxed">
            I'm dedicated to advancing my career in tech, with an interest in academia and creating innovative AI solutions to empower underprivileged communities.
          </p>
        </div>
      </motion.div>
    </main>
  );
};

export default About; 
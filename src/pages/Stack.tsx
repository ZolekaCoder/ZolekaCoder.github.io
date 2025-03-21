import { motion } from 'framer-motion';

const Stack = () => {
  const skills = {
    languages: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
      
    ],
    frameworks: [
      { name: 'React', level: 85 },
      { name: 'Bubble.io', level: 80 },
      { name: 'Tailwind CSS', level: 75}
    ],
  };

  const SkillSection = ({ title, items }: { title: string; items: { name: string; level: number }[] }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-accent mb-6">{title}</h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card group hover:border-accent/30"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="font-medium text-text-primary">{item.name}</span>
              <span className="text-accent font-semibold">{item.level}%</span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title">
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            Technical Stack
          </span>
        </h1>
        
        <div className="space-y-8">
          <SkillSection title="Programming Languages" items={skills.languages} />
          <SkillSection title="Frameworks & Tools" items={skills.frameworks} />
        </div>
      </motion.div>
    </main>
  );
};

export default Stack; 
import { motion } from 'framer-motion';
import TypeWriter from '../components/TypeWriter';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-night-dark via-night-purple to-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <div className="relative w-72 h-72 mx-auto md:mx-0">
              {/* Decorative rings */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-20 blur-2xl scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-accent rounded-full opacity-10 blur-xl scale-105"></div>
              {/* Border container */}
              <div className="absolute inset-0 rounded-full border-4 border-night-light/20 backdrop-blur-sm"></div>
              {/* Image */}
              <img
                src="/profile.jpg"
                alt="Zoleka Fuyana"
                className="relative w-full h-full object-cover rounded-full border-4 border-night-light/30 shadow-xl"
                style={{
                  objectPosition: "center 20%"
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Hi, I'm{" "}
              <TypeWriter 
                text="Zoleka Fuyana"
                className="bg-gradient-to-r from-accent-light via-accent to-primary bg-clip-text text-transparent"
                cursorColor="#8B5CF6"
              />
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Aspiring Software Engineer and Data Scientist.
            </p>
            <div className="max-w-2xl">
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                I'm currently pursuing a Bachelor of Science in Computer Science, Data Science, and Statistics at the University of Cape Town. Deeply interested in building fully functional software and collaborating with other engineers.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="/projects"
                  className="px-6 py-2 bg-gradient-to-r from-accent to-primary text-text-primary rounded-lg hover:shadow-lg hover:shadow-accent/25 hover:scale-105 transition-all duration-200"
                >
                  View My Work
                </a>
                <a
                  href="/contact"
                  className="px-6 py-2 border-2 border-accent text-accent rounded-lg hover:bg-accent/10 hover:scale-105 transition-all duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home; 
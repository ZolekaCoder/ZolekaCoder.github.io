import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-night-dark/80 backdrop-blur-md border-b border-night-purple/30 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-semibold text-text-primary hover:text-accent transition-colors">
            Zoleka Fuyana
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-text-secondary hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-text-secondary hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/projects" className="text-text-secondary hover:text-accent transition-colors">
              Projects
            </Link>
            <Link to="/stack" className="text-text-secondary hover:text-accent transition-colors">
              Stack
            </Link>
            <Link to="/contact" className="text-text-secondary hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Code2, Globe, Users } from 'lucide-react';

const projects = [
    {
        title: 'NCC Cadet Management Website',
        description:
            'A comprehensive web platform for managing NCC cadet activities, attendance tracking, event scheduling, and performance reports. Built with modern web technologies for seamless user experience.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
        github: 'https://github.com/nishar269/ncc-management',
        live: '#',
        category: 'fullstack',
        highlights: ['Role-based access control', 'Real-time notifications', 'Attendance tracking'],
    },
    {
        title: 'E-Commerce Website',
        description:
            'A fully responsive e-commerce platform with product catalog, shopping cart, user authentication, and payment integration. Features an intuitive UI for seamless shopping experience.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
        tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Firebase'],
        github: 'https://github.com/nishar269/ecommerce',
        live: '#',
        category: 'frontend',
        highlights: ['Shopping cart functionality', 'User authentication', 'Responsive design'],
    },
    {
        title: 'Portfolio Website',
        description:
            'Modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features smooth animations, dark mode support, and optimized performance.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        github: 'https://github.com/nishar269/portfolio',
        live: '#',
        category: 'frontend',
        highlights: ['Dark mode', 'Smooth animations', 'SEO optimized'],
    },
];

const categories = [
    { id: 'all', label: 'All Projects', icon: Code2 },
    { id: 'frontend', label: 'Frontend', icon: Globe },
    { id: 'fullstack', label: 'Full Stack', icon: Users },
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects =
        activeCategory === 'all'
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section
            id="projects"
            className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 section-heading center">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Showcasing my best work and passion projects
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    {categories.map((cat) => (
                        <motion.button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${activeCategory === cat.id
                                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <cat.icon size={18} />
                            {cat.label}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg card-hover border border-gray-100 dark:border-gray-700"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            layout
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Overlay buttons */}
                                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/90 dark:bg-gray-900/90 rounded-lg text-gray-900 dark:text-white font-medium text-sm hover:bg-white dark:hover:bg-gray-900 transition-colors"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Github size={16} />
                                        Code
                                    </motion.a>
                                    <motion.a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white font-medium text-sm"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <ExternalLink size={16} />
                                        Live
                                    </motion.a>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.highlights.map((highlight) => (
                                        <span
                                            key={highlight}
                                            className="text-xs px-2 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                >
                    <motion.a
                        href="https://github.com/nishar269"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 btn-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Github size={20} />
                        View More on GitHub
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

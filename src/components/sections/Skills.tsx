import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
    {
        name: 'Java',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        color: 'from-red-500 to-orange-500',
    },
    {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        color: 'from-yellow-400 to-yellow-500',
    },
    {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        color: 'from-blue-400 to-yellow-500',
    },
    {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        color: 'from-cyan-400 to-blue-500',
    },
    {
        name: 'HTML5',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        color: 'from-orange-500 to-red-500',
    },
    {
        name: 'CSS3',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        color: 'from-blue-500 to-blue-600',
    },
    {
        name: 'Tailwind CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
        color: 'from-cyan-400 to-teal-500',
    },
    {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        color: 'from-orange-500 to-red-500',
    },
    {
        name: 'GitHub',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        color: 'from-gray-700 to-gray-900',
    },
    {
        name: 'VS Code',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        color: 'from-blue-500 to-blue-600',
    },
    {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        color: 'from-green-500 to-green-600',
    },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="skills"
            className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 section-heading center">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Technologies and tools I work with to bring ideas to life
                    </p>
                </motion.div>

                {/* Skills Grid with Logos */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="group relative"
                            initial={{ opacity: 0, y: 30, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ delay: index * 0.05, type: 'spring', stiffness: 100 }}
                        >
                            <motion.div
                                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 cursor-pointer"
                                whileHover={{
                                    scale: 1.1,
                                    y: -8,
                                    boxShadow: '0 20px 40px rgba(102, 126, 234, 0.2)'
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* Glow effect on hover */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />

                                {/* Icon */}
                                <div className="relative w-12 h-12 md:w-14 md:h-14">
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-full h-full object-contain filter dark:brightness-110 transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>

                                {/* Name */}
                                <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                                    {skill.name}
                                </span>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


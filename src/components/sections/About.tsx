import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, GraduationCap, Target, Zap } from 'lucide-react';

const highlights = [
    {
        icon: Code2,
        title: 'Full Stack Focus',
        description: 'Specialized in Java, React, and modern web technologies',
    },
    {
        icon: GraduationCap,
        title: 'MCA Student',
        description: 'Pursuing Masters at MITS with 8.44 CGPA',
    },
    {
        icon: Target,
        title: 'Problem Solver',
        description: 'Skilled in DSA and algorithmic thinking',
    },
    {
        icon: Zap,
        title: 'Quick Learner',
        description: 'Passionate about learning new technologies and tools',
    },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="about"
            className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50 to-transparent dark:from-indigo-950/30 dark:to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 section-heading center">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A passionate developer on a journey to create meaningful digital experiences
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Building the Future, One Line of Code at a Time
                        </h3>

                        <div className="space-y-4 text-gray-600 dark:text-gray-400">
                            <p>
                                I'm <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Shaik Nishar Basha</span>,
                                an aspiring software developer currently pursuing my Master of Computer Applications (MCA) at
                                Madanapalle Institute of Technology & Science.
                            </p>
                            <p>
                                I'm passionate about building user-centric web applications that solve real-world problems.
                                My journey in tech started with a B.Sc in Computer Science, and I've been continuously
                                expanding my skills in both backend and frontend technologies ever since.
                            </p>
                            <p>
                                I've had the privilege of completing a 6-month intensive bootcamp at Devsnest,
                                where I honed my skills in DSA and frontend development through real-world projects.
                                I'm also proud to have my research published at{' '}
                                <a
                                    href="https://ieeexplore.ieee.org/document/11089644"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                >
                                    IEEE ICIRCA 2025 conference
                                </a>.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-8">
                            {[
                                { value: '8.44', label: 'CGPA' },
                                { value: '6+', label: 'Projects' },
                                { value: '1', label: 'Publication' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-800"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Highlight Cards */}
                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 card-hover border border-gray-100 dark:border-gray-700"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white mb-4">
                                    <item.icon size={24} />
                                </div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

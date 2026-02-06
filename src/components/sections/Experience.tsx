import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const experiences = [
    {
        type: 'internship',
        title: 'Frontend Developer & Python Trainee',
        organization: 'Devsnest',
        location: 'Remote',
        duration: 'Jan 2024 - June 2024',
        description: [
            'Completed an intensive 6-month bootcamp focusing on Data Structures and Algorithms',
            'Built multiple frontend projects using HTML, CSS, JavaScript, and React',
            'Collaborated with peers on real-world coding challenges and hackathons',
            'Gained hands-on experience with Git, GitHub, and agile development practices',
        ],
        icon: Briefcase,
    },
];

const education = [
    {
        type: 'education',
        title: 'Master of Computer Applications (MCA)',
        organization: 'Madanapalle Institute of Technology & Science',
        location: 'Madanapalle, Andhra Pradesh',
        duration: '2024 - 2026 (Expected)',
        description: ['CGPA: 8.44', 'Specializing in Software Development', 'Active member of coding clubs'],
        icon: GraduationCap,
    },
    {
        type: 'education',
        title: 'Bachelor of Science in Computer Science',
        organization: 'S.G. Government Degree College',
        location: 'Piler, Andhra Pradesh',
        duration: '2021 - 2024',
        description: ['CGPA: 7.40', 'Foundation in programming and computer science fundamentals'],
        icon: GraduationCap,
    },
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="experience"
            className="py-24 bg-white dark:bg-gray-900"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 section-heading center">
                        Experience & <span className="gradient-text">Education</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        My professional journey and academic background
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Experience */}
                    <div>
                        <motion.h3
                            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white">
                                <Briefcase size={20} />
                            </div>
                            Work Experience
                        </motion.h3>

                        <div className="space-y-6">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.title}
                                    className="relative pl-8 pb-8 border-l-2 border-indigo-200 dark:border-indigo-800 last:pb-0"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 ring-4 ring-white dark:ring-gray-900" />

                                    <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 card-hover border border-gray-100 dark:border-gray-700">
                                        <div className="flex flex-wrap items-center gap-2 mb-3">
                                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                                                Internship
                                            </span>
                                            <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                <Calendar size={14} />
                                                {exp.duration}
                                            </span>
                                        </div>

                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                            {exp.title}
                                        </h4>

                                        <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                                            {exp.organization}
                                        </p>

                                        <p className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                            <MapPin size={14} />
                                            {exp.location}
                                        </p>

                                        <ul className="space-y-2">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <motion.h3
                            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white">
                                <GraduationCap size={20} />
                            </div>
                            Education
                        </motion.h3>

                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.title}
                                    className="relative pl-8 pb-8 border-l-2 border-purple-200 dark:border-purple-800 last:pb-0"
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 ring-4 ring-white dark:ring-gray-900" />

                                    <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 card-hover border border-gray-100 dark:border-gray-700">
                                        <div className="flex flex-wrap items-center gap-2 mb-3">
                                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400">
                                                {edu.title.includes('Master') ? 'Masters' : 'Bachelors'}
                                            </span>
                                            <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                <Calendar size={14} />
                                                {edu.duration}
                                            </span>
                                        </div>

                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                            {edu.title}
                                        </h4>

                                        <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                                            {edu.organization}
                                        </p>

                                        <p className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                            <MapPin size={14} />
                                            {edu.location}
                                        </p>

                                        <ul className="space-y-2">
                                            {edu.description.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

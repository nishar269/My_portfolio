import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, FileText, Medal, Star } from 'lucide-react';

const achievements = [
    {
        icon: Trophy,
        title: 'CodeStorm 1.0 Hackathon Winner',
        organization: 'MITS, Madanapalle',
        date: '2024',
        description:
            'Won first place in the CodeStorm 1.0 hackathon for developing an innovative solution to a real-world problem.',
        color: 'from-yellow-400 to-orange-500',
        bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
        textColor: 'text-yellow-600 dark:text-yellow-400',
    },
    {
        icon: FileText,
        title: 'IEEE ICIRCA 2025 Publication',
        organization: 'IEEE Conference',
        date: '2025',
        description:
            'Research paper accepted and published at IEEE International Conference on Intelligent Computing, Research and Applications.',
        color: 'from-blue-400 to-indigo-500',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20',
        textColor: 'text-blue-600 dark:text-blue-400',
    },
    {
        icon: Medal,
        title: 'NCC C Certificate Holder',
        organization: 'National Cadet Corps',
        date: '2024',
        description:
            'Achieved Senior Rank Cadet status with C Certificate through dedicated service and leadership in NCC.',
        color: 'from-green-400 to-emerald-500',
        bgColor: 'bg-green-50 dark:bg-green-900/20',
        textColor: 'text-green-600 dark:text-green-400',
    },
];

const certifications = [
    'Frontend Development - Devsnest',
    'Python Programming - Devsnest',
    'Data Structures & Algorithms',
    'Cloud Computing Fundamentals',
];

export default function Achievements() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="achievements"
            className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl -translate-x-1/2" />
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 section-heading center">
                        Achievements & <span className="gradient-text">Recognition</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Milestones and accomplishments that define my journey
                    </p>
                </motion.div>

                {/* Achievement Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.title}
                            className="relative group"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.15 }}
                        >
                            <div className={`p-6 rounded-2xl ${achievement.bgColor} border border-gray-100 dark:border-gray-700 card-hover h-full`}>
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                                    <achievement.icon size={28} />
                                </div>

                                {/* Badge */}
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${achievement.textColor} ${achievement.bgColor} mb-3`}>
                                    {achievement.date}
                                </span>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {achievement.title}
                                </h3>

                                <p className={`text-sm font-medium ${achievement.textColor} mb-3`}>
                                    {achievement.organization}
                                </p>

                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    {achievement.description}
                                </p>

                                {/* Decorative star */}
                                <motion.div
                                    className="absolute top-4 right-4 opacity-20"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                >
                                    <Star size={24} className={achievement.textColor} />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications */}
                <motion.div
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 md:p-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-3">
                                <Award size={32} />
                                Certifications
                            </h3>
                            <p className="text-indigo-100 max-w-md">
                                Professional certifications and training programs completed
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-3">
                            {certifications.map((cert, index) => (
                                <motion.span
                                    key={cert}
                                    className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm hover:bg-white/30 transition-colors cursor-default"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {cert}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

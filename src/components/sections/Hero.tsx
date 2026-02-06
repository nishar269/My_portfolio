import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../../assets/profile.jpg';

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        className="text-center lg:text-left order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-gray-800/50 border border-indigo-100 dark:border-indigo-500/30 shadow-lg shadow-indigo-500/10 backdrop-blur-md mb-6 hover:scale-105 transition-transform duration-300 cursor-default"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <motion.span
                                className="text-xl"
                                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                                transition={{
                                    duration: 2.5,
                                    ease: "easeInOut",
                                    times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
                                    repeat: Infinity,
                                    repeatDelay: 1
                                }}
                                style={{ originX: 0.7, originY: 0.7 }}
                            >
                                👋
                            </motion.span>
                            <span className="text-gray-700 dark:text-gray-200 font-medium text-sm md:text-base tracking-wide">
                                Hello, I am
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 whitespace-nowrap"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="gradient-text">Shaik Nishar Basha</span>
                        </motion.h1>

                        <motion.div
                            className="flex items-center justify-center lg:justify-start gap-3 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium">
                                Aspiring Full Stack Java Developer
                            </h2>
                        </motion.div>

                        <motion.p
                            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            Passionate about crafting scalable, user-centric web applications using
                            Java and modern frontend technologies. Eager to contribute
                            to innovative projects and grow as a full stack developer.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <motion.a
                                href="#projects"
                                className="btn-primary flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View My Work
                                <ArrowDown size={18} className="animate-bounce" />
                            </motion.a>
                            <motion.a
                                href="#contact"
                                className="btn-secondary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                            </motion.a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            className="flex items-center justify-center lg:justify-start gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            {[
                                { icon: Github, href: 'https://github.com/nishar269', label: 'GitHub' },
                                { icon: Linkedin, href: 'https://www.linkedin.com/in/shaiknisharbasha/', label: 'LinkedIn' },
                                { icon: Mail, href: 'mailto:nisharshaik232@gmail.com', label: 'Email' },
                            ].map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.label}
                                >
                                    <social.icon size={22} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        className="order-1 lg:order-2 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative">
                            {/* Animated ring */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                style={{ width: 'calc(100% + 16px)', height: 'calc(100% + 16px)', top: -8, left: -8 }}
                            />

                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-2xl opacity-30 animate-pulse-glow" />

                            {/* Image container */}
                            <motion.div
                                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <img
                                    src={profileImage}
                                    alt="Shaik Nishar Basha"
                                    className="w-full h-full object-cover object-top"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                <motion.a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span className="text-sm font-medium">Scroll Down</span>
                    <ArrowDown size={20} />
                </motion.a>
            </motion.div>
        </section>
    );
}

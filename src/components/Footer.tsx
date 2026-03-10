import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-900 dark:bg-black text-white py-12 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                    {/* Logo & Tagline */}
                    <div className="text-center md:text-left">
                        <motion.a
                            href="#home"
                            className="text-2xl font-bold gradient-text inline-block mb-1"
                            whileHover={{ scale: 1.05 }}
                        >
                            Nishar<span className="text-purple-400">.</span>
                        </motion.a>
                        <p className="text-gray-500 text-sm">
                            Aspiring Full Stack Java Developer
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex items-center gap-6">
                        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/nishar269"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                        >
                            <Github size={16} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/shaik-nishar-basha/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                        >
                            <Linkedin size={16} />
                        </a>
                        <a
                            href="mailto:nisharshaik232@gmail.com"
                            className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                        >
                            <Mail size={16} />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Shaik Nishar Basha. All rights reserved.
                        </p>
                        <p className="text-gray-600 text-xs">
                            Built with React, TypeScript & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
                onClick={scrollToTop}
                className="absolute right-6 -top-6 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
            >
                <ArrowUp size={20} />
            </motion.button>
        </footer>
    );
}

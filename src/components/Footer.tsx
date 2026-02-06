import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-900 dark:bg-black text-white py-12 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <motion.a
                            href="#home"
                            className="text-2xl font-bold gradient-text inline-block mb-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            Nishar<span className="text-purple-400">.</span>
                        </motion.a>
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Shaik Nishar Basha. All rights reserved.
                        </p>
                    </div>

                    {/* Made with love */}
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        Made with
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            <Heart size={16} className="text-red-500 fill-red-500" />
                        </motion.span>
                        in India
                    </div>

                    {/* Quick Links */}
                    <div className="flex items-center gap-6">
                        {['About', 'Projects', 'Contact'].map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                {link}
                            </a>
                        ))}
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

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, CheckCircle, AlertCircle } from 'lucide-react';

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'nisharshaik232@gmail.com',
        href: 'mailto:nisharshaik232@gmail.com',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+91 93904 27942',
        href: 'tel:+919390427942',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Kalikiri, Andhra Pradesh, India',
        href: '#',
    },
];

const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/nishar269', color: 'hover:bg-gray-800 hover:text-white' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shaiknisharbasha/', color: 'hover:bg-blue-600 hover:text-white' },
    { icon: Mail, label: 'Email', href: 'mailto:nisharshaik232@gmail.com', color: 'hover:bg-red-500 hover:text-white' },
];

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Format message for WhatsApp
        const whatsappMessage = encodeURIComponent(
            `🌐 *Portfolio Contact*\n\n` +
            `👤 *Name:* ${formState.name}\n` +
            `📧 *Email:* ${formState.email}\n\n` +
            `💬 *Message:*\n${formState.message}`
        );

        // Your WhatsApp number (without + symbol)
        const phoneNumber = '919390427942';

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');

        // Show success
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
    };

    return (
        <section
            id="contact"
            className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
        >
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-200/50 dark:bg-indigo-900/30 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/50 dark:bg-purple-900/30 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 section-heading center">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? I'd love to hear from you!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Get in Touch
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            I'm currently open to new opportunities and collaborations.
                            Whether you have a question or just want to say hi, my inbox is always open!
                        </p>

                        {/* Contact Cards */}
                        <div className="space-y-4 mb-8">
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow group border border-gray-100 dark:border-gray-700"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                        <item.icon size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                                        <p className="font-medium text-gray-900 dark:text-white">{item.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6 }}
                        >
                            <p className="text-gray-600 dark:text-gray-400 mb-4">Find me on</p>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 transition-all ${social.color}`}
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={social.label}
                                    >
                                        <social.icon size={22} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Resume Download */}
                        <motion.div
                            className="mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.7 }}
                        >
                            <motion.a
                                href="/resume.jpg"
                                download="Shaik_Nishar_Basha_Resume.jpg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 btn-primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download size={20} />
                                Download Resume
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Send a Message
                            </h3>

                            <div className="space-y-5">
                                {/* Name Input */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>

                                {/* Message Input */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none resize-none"
                                        placeholder="Hi, I'd like to discuss a project..."
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                                    whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>

                                {/* Status Messages */}
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 p-3 rounded-xl"
                                    >
                                        <CheckCircle size={20} />
                                        Message sent successfully! I'll get back to you soon.
                                    </motion.div>
                                )}

                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 p-3 rounded-xl"
                                    >
                                        <AlertCircle size={20} />
                                        Oops! Something went wrong. Please try again.
                                    </motion.div>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

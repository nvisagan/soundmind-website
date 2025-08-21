"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Brain, 
  Mail, 
  Twitter, 
  Linkedin, 
  Github,
  Heart,
  Shield,
  FileText,
  Cookie
} from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "/features" },
    { name: "How It Works", href: "/about" },
    { name: "Voice Demo", href: "#voice-demo" },
    { name: "Pricing", href: "#pricing" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Data Security", href: "/privacy#data-security" },
  ],
  resources: [
    { name: "Help Center", href: "#help" },
    { name: "API Documentation", href: "#api" },
    { name: "Developer Tools", href: "#developers" },
    { name: "Status Page", href: "#status" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/getsoundmind", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/soundmind", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/soundmind", icon: Github },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#2D2D2D' }}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-20 w-32 h-32 rounded-full blur-xl"
          style={{ backgroundColor: 'rgba(196, 117, 91, 0.1)' }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-40 h-40 rounded-full blur-xl"
          style={{ backgroundColor: 'rgba(157, 181, 161, 0.1)' }}
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: 'rgba(196, 117, 91, 0.2)' }}
                  whileHover={{ rotate: 5 }}
                >
                  <Brain className="w-7 h-7" style={{ color: '#C4755B' }} />
                </motion.div>
                <span className="text-2xl font-bold" style={{ color: '#F5F1EB' }}>
                  Soundmind
                </span>
              </Link>
              
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'rgba(245, 241, 235, 0.8)' }}>
                Transform your mental wellness journey with AI-powered voice analysis. 
                Discover emotional patterns you didn&apos;t know existed.
              </p>

              <div className="flex items-center gap-2 text-sm mb-4" style={{ color: 'rgba(245, 241, 235, 0.6)' }}>
                <Shield className="w-4 h-4" />
                <span>HIPAA Compliant & Secure</span>
              </div>

              <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(245, 241, 235, 0.6)' }}>
                <Heart className="w-4 h-4" style={{ color: '#D4A5A5' }} />
                <span>Made with care for your privacy</span>
              </div>
            </motion.div>

            {/* Links Sections */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6" style={{ color: '#F5F1EB' }}>
                Product
              </h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="transition-colors duration-200 hover:underline"
                      style={{ 
                        color: 'rgba(245, 241, 235, 0.7)',
                        fontSize: '14px'
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6" style={{ color: '#F5F1EB' }}>
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="transition-colors duration-200 hover:underline"
                      style={{ 
                        color: 'rgba(245, 241, 235, 0.7)',
                        fontSize: '14px'
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6" style={{ color: '#F5F1EB' }}>
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 transition-colors duration-200 hover:underline"
                      style={{ 
                        color: 'rgba(245, 241, 235, 0.7)',
                        fontSize: '14px'
                      }}
                    >
                      {link.name === 'Privacy Policy' && <Shield className="w-3 h-3" />}
                      {link.name === 'Terms of Service' && <FileText className="w-3 h-3" />}
                      {link.name === 'Cookie Policy' && <Cookie className="w-3 h-3" />}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6" style={{ color: '#F5F1EB' }}>
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="transition-colors duration-200 hover:underline"
                      style={{ 
                        color: 'rgba(245, 241, 235, 0.7)',
                        fontSize: '14px'
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-8 border-t border-b"
          style={{ borderColor: 'rgba(245, 241, 235, 0.1)' }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2" style={{ color: '#F5F1EB' }}>
                Stay Updated
              </h4>
              <p style={{ color: 'rgba(245, 241, 235, 0.7)' }}>
                Get the latest updates on our launch and mental wellness insights.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="#email-signup"
                className="flex-1 px-6 py-3 rounded-lg text-center font-medium transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: '#C4755B',
                  color: 'white'
                }}
              >
                <Mail className="w-4 h-4 inline mr-2" />
                Join Waitlist
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p style={{ color: 'rgba(245, 241, 235, 0.6)', fontSize: '14px' }}>
                © 2024 Soundmind, Inc. All rights reserved.
              </p>
              <p style={{ color: 'rgba(245, 241, 235, 0.5)', fontSize: '12px' }} className="mt-1">
                Built with care in San Francisco
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      backgroundColor: 'rgba(245, 241, 235, 0.1)',
                      color: 'rgba(245, 241, 235, 0.7)'
                    }}
                    whileHover={{ 
                      backgroundColor: 'rgba(196, 117, 91, 0.2)',
                      color: '#C4755B'
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>

            {/* Cookie Settings */}
            <button
              className="text-xs px-3 py-2 rounded-md transition-colors duration-200 hover:underline"
              style={{ color: 'rgba(245, 241, 235, 0.6)' }}
              onClick={() => {
                // This would open cookie consent manager
                console.log('Open cookie settings');
              }}
            >
              🍪 Cookie Settings
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
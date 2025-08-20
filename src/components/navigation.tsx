"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Brain, 
  Home, 
  Users, 
  BookOpen, 
  Mail,
  Sun,
  Moon
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Features", href: "/features", icon: Brain },
  { name: "About", href: "/about", icon: Users },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(245, 241, 235, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(196, 117, 91, 0.1)' : 'none'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: 'rgba(196, 117, 91, 0.1)' }}
                whileHover={{ rotate: 5 }}
              >
                <Brain className="w-6 h-6" style={{ color: '#C4755B' }} />
              </motion.div>
              <span className="text-xl font-bold" style={{ color: '#2D2D2D' }}>
                Soundmind
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group py-2"
                >
                  <span className="transition-colors duration-200 hover:opacity-100" style={{ 
                    color: 'rgba(45, 45, 45, 0.8)'
                  }}>
                    {item.name}
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ background: 'linear-gradient(to right, #C4755B, #E6A85C)' }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="w-9 h-9 p-0"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isDark ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </motion.div>
              </Button>
              
              <Button className="group relative overflow-hidden border-0 hover:shadow-lg transition-all duration-300" style={{
                backgroundColor: '#C4755B',
                color: 'white'
              }}>
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to right, #E6A85C, #9DB5A1)' }}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="w-9 h-9 p-0"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isDark ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </motion.div>
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="w-9 h-9 p-0"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClick={closeMenu}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[80vw] z-50 lg:hidden border-l"
            style={{
              background: 'rgba(245, 241, 235, 0.95)',
              backdropFilter: 'blur(20px)',
              borderLeftColor: 'rgba(196, 117, 91, 0.1)'
            }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b" style={{
                borderBottomColor: 'rgba(196, 117, 91, 0.1)'
              }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{
                    backgroundColor: 'rgba(196, 117, 91, 0.1)'
                  }}>
                    <Brain className="w-5 h-5" style={{ color: '#C4755B' }} />
                  </div>
                  <span className="font-bold" style={{ color: '#2D2D2D' }}>
                    Soundmind
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={closeMenu}
                  className="w-8 h-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto py-6">
                <nav className="space-y-2 px-6">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="flex items-center gap-3 p-3 rounded-xl transition-colors duration-200 group hover:bg-opacity-10"
                          style={{
                            ':hover': { backgroundColor: 'rgba(196, 117, 91, 0.05)' }
                          }}
                        >
                          <Icon className="w-5 h-5 transition-colors duration-200 group-hover:opacity-80" style={{
                            color: '#999999'
                          }} />
                          <span className="font-medium" style={{ color: '#2D2D2D' }}>{item.name}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 border-t space-y-4" style={{
                borderTopColor: 'rgba(196, 117, 91, 0.1)'
              }}>
                <Button className="w-full group relative overflow-hidden border-0 hover:shadow-lg transition-all duration-300" style={{
                  backgroundColor: '#C4755B',
                  color: 'white'
                }}>
                  <span className="relative z-10">Get Started</span>
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to right, #E6A85C, #9DB5A1)' }}
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
                
                <div className="text-center text-sm" style={{ color: '#666666' }}>
                  Transform your mental wellness journey
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
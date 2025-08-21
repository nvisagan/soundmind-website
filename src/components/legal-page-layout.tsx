"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Mail, Calendar } from "lucide-react";
import "@/styles/legal-prose.css";

interface Section {
  id: string;
  title: string;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  sections: Section[];
  children: React.ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, sections, children }: LegalPageLayoutProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F1EB' }}>
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-40 h-40 rounded-full blur-xl"
            style={{ backgroundColor: 'rgba(196, 117, 91, 0.15)' }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#2D2D2D' }}>
              {title}
            </h1>
            
            <div className="flex items-center justify-center gap-2 text-lg" style={{ color: '#666666' }}>
              <Calendar className="w-5 h-5" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-4 gap-12">
            {/* Table of Contents */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <Card className="p-6 sticky top-8 backdrop-blur-md border-0" style={{
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 8px 32px rgba(45, 45, 45, 0.1)'
              }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#2D2D2D' }}>
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="block w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-opacity-10"
                      style={{ 
                        color: '#666666',
                        fontSize: '14px'
                      }}
                    >
                      {index + 1}. {section.title}
                    </button>
                  ))}
                </nav>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(196, 117, 91, 0.1)' }}>
                  <h4 className="font-semibold mb-3" style={{ color: '#2D2D2D' }}>
                    Questions?
                  </h4>
                  <div className="flex items-center gap-2 text-sm" style={{ color: '#666666' }}>
                    <Mail className="w-4 h-4" />
                    <a 
                      href="mailto:legal@getsoundmind.com"
                      className="hover:underline"
                      style={{ color: '#C4755B' }}
                    >
                      legal@getsoundmind.com
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <Card className="p-8 lg:p-12 backdrop-blur-md border-0" style={{
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 8px 32px rgba(45, 45, 45, 0.1)'
              }}>
                <div className="prose prose-lg max-w-none legal-prose">
                  {children}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
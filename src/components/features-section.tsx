"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Mic, 
  Brain, 
  LineChart, 
  Shield, 
  Clock, 
  Users,
  Zap,
  Heart,
  MessageSquare
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Understand Your Voice",
    description: "Discover emotional insights hidden in your voice patterns. Our AI reveals what traditional methods miss.",
    color: "#C4755B",
    bgColor: "rgba(196, 117, 91, 0.1)"
  },
  {
    icon: Brain,
    title: "Personalized Insights",
    description: "Get tailored recommendations that actually work for you. Transform awareness into meaningful change.",
    color: "#E6A85C",
    bgColor: "rgba(230, 168, 92, 0.1)"
  },
  {
    icon: LineChart,
    title: "Track Your Progress",
    description: "Watch your emotional patterns unfold over time. Celebrate growth and identify what's working.",
    color: "#9DB5A1",
    bgColor: "rgba(157, 181, 161, 0.1)"
  },
  {
    icon: Shield,
    title: "Your Privacy Matters",
    description: "Your voice stays yours. All analysis happens locally with bank-level security protecting your data.",
    color: "#7D5A7D",
    bgColor: "rgba(125, 90, 125, 0.1)"
  },
  {
    icon: Clock,
    title: "Instant Understanding",
    description: "Know how you're feeling in real-time. No more guessing - get clear emotional insights as you speak.",
    color: "#D4A5A5",
    bgColor: "rgba(212, 165, 165, 0.1)"
  },
  {
    icon: Heart,
    title: "Feel Better, Faster",
    description: "Move from awareness to action with personalized strategies that help you thrive, not just survive.",
    color: "#C4755B",
    bgColor: "rgba(196, 117, 91, 0.1)"
  }
];

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Users",
    description: "People using Soundmind daily"
  },
  {
    icon: Zap,
    value: "95%",
    label: "Accuracy Rate",
    description: "Voice emotion detection accuracy"
  },
  {
    icon: MessageSquare,
    value: "1M+",
    label: "Voice Samples",
    description: "Analyzed and processed"
  }
];

export function FeaturesSection() {

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F5F1EB' }}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full blur-xl"
          style={{ backgroundColor: 'rgba(196, 117, 91, 0.15)' }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 rounded-full blur-xl"
          style={{ backgroundColor: 'rgba(230, 168, 92, 0.15)' }}
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border"
            style={{
              backgroundColor: 'rgba(157, 181, 161, 0.1)',
              borderColor: 'rgba(157, 181, 161, 0.3)',
              color: '#9DB5A1'
            }}
          >
            <Brain className="w-4 h-4" style={{ color: '#9DB5A1' }} />
            Powered by Advanced AI
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#2D2D2D' }}>
            Benefits That Make{" "}
            <span className="bg-gradient-to-r bg-clip-text text-transparent" style={{
              background: 'linear-gradient(to right, #C4755B, #E6A85C, #9DB5A1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Life Better
            </span>
          </h2>
          
          <p className="text-xl" style={{ color: '#666666' }}>
            Experience the difference when technology actually understands you. 
            Join thousands who've transformed their emotional wellness through voice insights.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-6 h-full relative overflow-hidden group transition-all duration-300 backdrop-blur-md border-0" style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 4px 16px rgba(45, 45, 45, 0.08)'
                }}>
                  {/* Background Gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    background: `linear-gradient(135deg, ${feature.bgColor}, rgba(255, 255, 255, 0.1))`
                  }} />
                  
                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: feature.bgColor }}
                      whileHover={{ rotate: 5 }}
                    >
                      <Icon className="w-6 h-6" style={{ color: feature.color }} />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold" style={{ color: '#2D2D2D' }}>{feature.title}</h3>
                      <p className="leading-relaxed" style={{ color: '#666666' }}>
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Hover Arrow */}
                    <motion.div
                      className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: feature.color }}
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      Learn more →
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 lg:p-12 backdrop-blur-md border-0" style={{
            background: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 8px 32px rgba(45, 45, 45, 0.1)'
          }}>
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#2D2D2D' }}>
                Trusted by Thousands
              </h3>
              <p className="text-lg" style={{ color: '#666666' }}>
                Join a growing community of users who have transformed their mental wellness journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: 'rgba(196, 117, 91, 0.1)' }}
                      whileHover={{ rotate: 10 }}
                    >
                      <Icon className="w-8 h-8" style={{ color: '#C4755B' }} />
                    </motion.div>
                    
                    <motion.div
                      className="text-4xl font-bold mb-2"
                      style={{ color: '#C4755B' }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.div>
                    
                    <div className="font-semibold mb-1" style={{ color: '#2D2D2D' }}>{stat.label}</div>
                    <div className="text-sm" style={{ color: '#666666' }}>
                      {stat.description}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
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
    title: "Voice Analysis",
    description: "Advanced AI analyzes your voice patterns, tone, and speech to detect emotional states with 95% accuracy.",
    color: "primary",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Machine learning algorithms provide personalized recommendations and insights to improve your mental wellness.",
    color: "accent",
    gradient: "from-accent/20 to-accent/5"
  },
  {
    icon: LineChart,
    title: "Mood Tracking",
    description: "Visualize your emotional journey with beautiful, interactive charts and detailed analytics over time.",
    color: "chart-2",
    gradient: "from-green-500/20 to-green-500/5"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your voice data is encrypted and processed locally. We never store your personal conversations.",
    color: "chart-3",
    gradient: "from-purple-500/20 to-purple-500/5"
  },
  {
    icon: Clock,
    title: "Real-Time Analysis",
    description: "Get instant feedback and mood insights as you speak, with results appearing in seconds.",
    color: "primary",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: Heart,
    title: "Wellness Support",
    description: "Receive personalized coping strategies and wellness recommendations based on your mood patterns.",
    color: "accent",
    gradient: "from-accent/20 to-accent/5"
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
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/5 blur-xl"
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
          className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-accent/5 blur-xl"
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium mb-6"
          >
            <Brain className="w-4 h-4 text-primary" />
            Powered by Advanced AI
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Features That Make{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-chart-2 bg-clip-text text-transparent">
              Soundmind Special
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Discover how our cutting-edge technology transforms the way you understand 
            and manage your mental wellness through voice analysis.
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
                whileHover={{ y: -5 }}
              >
                <Card className="glass p-6 h-full hover-lift relative overflow-hidden group">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-${feature.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <Icon className={`w-6 h-6 text-${feature.color}`} />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Hover Arrow */}
                    <motion.div
                      className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
          <Card className="glass p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Trusted by Thousands
              </h3>
              <p className="text-muted-foreground text-lg">
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
                      className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 10 }}
                    >
                      <Icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    
                    <motion.div
                      className="text-4xl font-bold text-primary mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.div>
                    
                    <div className="font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">
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
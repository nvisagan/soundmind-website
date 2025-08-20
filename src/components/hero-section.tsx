"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Mic, 
  Brain, 
  Activity, 
  Shield, 
  ArrowRight, 
  Sparkles,
  HeartHandshake,
  TrendingUp
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#F5F1EB' }}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: '#C4755B20' }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: '#9DB5A120' }}
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ backgroundColor: '#E6A85C30' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border"
              style={{ 
                backgroundColor: 'rgba(196, 117, 91, 0.1)', 
                borderColor: 'rgba(196, 117, 91, 0.2)',
                color: '#C4755B'
              }}
            >
              <Sparkles className="w-4 h-4" style={{ color: '#C4755B' }} />
              Your voice reveals what you can&apos;t see
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
              style={{ color: '#2D2D2D' }}
            >
              Discover{" "}
              <span className="bg-gradient-to-r bg-clip-text text-transparent" style={{ 
                background: 'linear-gradient(to right, #C4755B, #E6A85C, #9DB5A1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Emotional Patterns
              </span>{" "}
              Through AI
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl max-w-xl mx-auto lg:mx-0"
              style={{ color: '#666666' }}
            >
              Understand yourself better with voice analysis that reveals emotional patterns 
              you didn&apos;t know existed. Join the thousands already transforming their 
              mental wellness journey with Soundmind.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="group relative overflow-hidden border-0 hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: '#C4755B', color: 'white' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Be first to experience Soundmind
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to right, #E6A85C, #9DB5A1)' }}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-2 hover:shadow-md transition-all duration-300"
                style={{ borderColor: '#C4755B', color: '#C4755B' }}
              >
                <Mic className="w-4 h-4 mr-2" />
                Try Voice Demo
              </Button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" style={{ color: '#9DB5A1' }} />
                <span style={{ color: '#2D2D2D' }}>Privacy Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4" style={{ color: '#E6A85C' }} />
                <span style={{ color: '#2D2D2D' }}>Real-time Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4" style={{ color: '#C4755B' }} />
                <span style={{ color: '#2D2D2D' }}>Personalized Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Card className="p-8 transition-all duration-300 backdrop-blur-md border-0 shadow-lg" style={{
              background: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 8px 32px rgba(45, 45, 45, 0.1)'
            }}>
              <div className="space-y-6">
                {/* Voice Visualization */}
                <div className="relative h-48 flex items-center justify-center">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-3 rounded-full"
                        style={{ background: 'linear-gradient(to top, #C4755B, #E6A85C)' }}
                        animate={{
                          height: ["20px", `${Math.random() * 100 + 50}px`, "20px"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </motion.div>
                  <Brain className="w-16 h-16 absolute" style={{ color: 'rgba(196, 117, 91, 0.2)' }} />
                </div>

                {/* Analysis Results */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold" style={{ color: '#2D2D2D' }}>Voice Analysis Demo</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm" style={{ color: '#666666' }}>Stress Level</span>
                      <motion.div
                        className="h-2 w-32 rounded-full overflow-hidden"
                        style={{ backgroundColor: 'rgba(196, 117, 91, 0.1)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: 'linear-gradient(to right, #9DB5A1, #E6A85C)' }}
                          initial={{ width: "0%" }}
                          animate={{ width: "35%" }}
                          transition={{ duration: 2, delay: 1 }}
                        />
                      </motion.div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm" style={{ color: '#666666' }}>Emotional State</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="text-sm font-medium"
                        style={{ color: '#C4755B' }}
                      >
                        Calm & Focused
                      </motion.span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm" style={{ color: '#666666' }}>Energy Level</span>
                      <motion.div
                        className="h-2 w-32 rounded-full overflow-hidden"
                        style={{ backgroundColor: 'rgba(196, 117, 91, 0.1)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: 'linear-gradient(to right, #E6A85C, #7D5A7D)' }}
                          initial={{ width: "0%" }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 2, delay: 1.2 }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    className="pt-4 border-t border-border/50"
                  >
                    <div className="flex items-center gap-2 text-sm" style={{ color: '#666666' }}>
                      <TrendingUp className="w-4 h-4" style={{ color: '#9DB5A1' }} />
                      <span>15% improvement from last week</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </Card>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 p-3 rounded-xl backdrop-blur-sm border"
              style={{
                backgroundColor: 'rgba(157, 181, 161, 0.1)',
                borderColor: 'rgba(157, 181, 161, 0.2)'
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Activity className="w-6 h-6" style={{ color: '#9DB5A1' }} />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 p-3 rounded-xl backdrop-blur-sm border"
              style={{
                backgroundColor: 'rgba(196, 117, 91, 0.1)',
                borderColor: 'rgba(196, 117, 91, 0.2)'
              }}
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Mic className="w-6 h-6" style={{ color: '#C4755B' }} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
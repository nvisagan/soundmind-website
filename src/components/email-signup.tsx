"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    setError("");
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F5F1EB' }}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-40 h-40 rounded-full blur-xl"
          style={{ backgroundColor: 'rgba(230, 168, 92, 0.15)' }}
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
        <motion.div
          className="absolute bottom-20 left-10 w-32 h-32 rounded-full blur-xl"
          style={{ backgroundColor: 'rgba(157, 181, 161, 0.2)' }}
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium">
              <Sparkles className="w-4 h-4 text-primary" />
              Early Access Available
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-chart-2 bg-clip-text text-transparent">
                Mental Health?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of users who are already using Soundmind to track their mood, 
              understand their emotions, and improve their mental wellness.
            </p>
          </motion.div>

          {/* Signup Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-8 lg:p-12 transition-all duration-300 backdrop-blur-md border-0 shadow-xl" style={{
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 12px 40px rgba(45, 45, 45, 0.15)'
            }}>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Get Early Access</h3>
                    <p className="text-muted-foreground">
                      Be among the first to experience the future of voice-powered mood tracking.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`pl-12 h-14 text-lg ${error ? 'border-red-500' : ''}`}
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="h-14 px-8 group relative overflow-hidden"
                      disabled={isLoading}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isLoading ? (
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                        ) : (
                          <>
                            Join 2,847 others waiting
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent to-chart-2"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Button>
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800"
                    >
                      {error}
                    </motion.div>
                  )}

                  <div className="text-sm text-muted-foreground">
                    🔒 We respect your privacy. No spam, unsubscribe anytime.
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-chart-2/20 rounded-full flex items-center justify-center mx-auto"
                  >
                    <CheckCircle className="w-10 h-10 text-chart-2" />
                  </motion.div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold">Welcome to Soundmind!</h3>
                    <p className="text-muted-foreground">
                      Thank you for joining our early access program. We&apos;ll notify you as soon as 
                      Soundmind is ready for you to try.
                    </p>
                  </div>
                  
                  <div className="space-y-3 pt-4">
                    <div className="text-sm font-medium">What happens next?</div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        You&apos;ll receive a welcome email with more details
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                        Get exclusive updates on our development progress
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-chart-2"></div>
                        Be the first to access the app when it launches
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </Card>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold" style={{ color: '#C4755B' }}>2,847</div>
              <div className="text-sm" style={{ color: '#666666' }}>People waiting for launch</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold" style={{ color: '#E6A85C' }}>HIPAA</div>
              <div className="text-sm" style={{ color: '#666666' }}>Compliant & Secure</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold" style={{ color: '#9DB5A1' }}>AI-Powered</div>
              <div className="text-sm" style={{ color: '#666666' }}>Advanced Analysis</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
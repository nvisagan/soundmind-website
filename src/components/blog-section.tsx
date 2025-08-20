"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  User,
  BookOpen,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Voice-Based Emotion Detection: The Science Behind Soundmind",
    excerpt: "Discover how advanced AI algorithms analyze vocal patterns to detect emotional states with remarkable accuracy.",
    category: "Technology",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    featured: true,
    tags: ["AI", "Voice Analysis", "Mental Health"]
  },
  {
    id: 2,
    title: "The Future of Mental Health: How Voice Technology is Revolutionizing Wellness",
    excerpt: "Explore the transformative potential of voice-powered mental health tools and their impact on accessible care.",
    category: "Wellness",
    author: "Michael Rodriguez",
    date: "2024-01-12",
    readTime: "7 min read",
    featured: false,
    tags: ["Mental Health", "Innovation", "Accessibility"]
  },
  {
    id: 3,
    title: "Privacy First: How Soundmind Protects Your Most Personal Data",
    excerpt: "Learn about our commitment to privacy and the advanced security measures protecting your voice data.",
    category: "Privacy",
    author: "Alex Thompson",
    date: "2024-01-10",
    readTime: "4 min read",
    featured: false,
    tags: ["Privacy", "Security", "Data Protection"]
  },
  {
    id: 4,
    title: "Building Emotional Intelligence Through Voice Tracking",
    excerpt: "Discover how regular voice analysis can help you develop greater self-awareness and emotional intelligence.",
    category: "Self-Improvement",
    author: "Dr. Emily Watson",
    date: "2024-01-08",
    readTime: "6 min read",
    featured: false,
    tags: ["Emotional Intelligence", "Self-Awareness", "Personal Growth"]
  }
];

export function BlogSection() {

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F5F1EB' }}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-20 w-40 h-40 rounded-full blur-xl"
          style={{ backgroundColor: 'rgba(212, 165, 165, 0.15)' }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
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
              backgroundColor: 'rgba(212, 165, 165, 0.1)',
              borderColor: 'rgba(212, 165, 165, 0.3)',
              color: '#D4A5A5'
            }}
          >
            <BookOpen className="w-4 h-4" style={{ color: '#D4A5A5' }} />
            Latest Insights
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#2D2D2D' }}>
            Explore Our{" "}
            <span className="bg-gradient-to-r bg-clip-text text-transparent" style={{
              background: 'linear-gradient(to right, #C4755B, #D4A5A5, #7D5A7D)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Latest Insights
            </span>
          </h2>
          
          <p className="text-xl" style={{ color: '#666666' }}>
            Discover how voice technology is transforming mental wellness. 
            Expert insights to help you understand and improve your emotional health.
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="overflow-hidden group transition-all duration-300 backdrop-blur-md border-0" style={{
              background: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 8px 32px rgba(45, 45, 45, 0.1)'
            }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.div
                    className="aspect-[16/9] lg:aspect-[16/9] flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(196, 117, 91, 0.2), rgba(230, 168, 92, 0.1), rgba(212, 165, 165, 0.15))' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TrendingUp className="w-20 h-20" style={{ color: 'rgba(196, 117, 91, 0.4)' }} />
                  </motion.div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-sm font-medium rounded-full" style={{
                      backgroundColor: '#C4755B',
                      color: 'white'
                    }}>
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm" style={{ color: '#999999' }}>
                      <span className="px-2 py-1 rounded-md font-medium" style={{
                        backgroundColor: 'rgba(196, 117, 91, 0.1)',
                        color: '#C4755B'
                      }}>
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight transition-colors duration-300" style={{
                      color: '#2D2D2D'
                    }}>
                      {featuredPost.title}
                    </h3>

                    <p className="leading-relaxed" style={{ color: '#666666' }}>
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <User className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium" style={{ color: '#2D2D2D' }}>{featuredPost.author}</span>
                      </div>

                      <Button variant="outline" className="group border-2 hover:shadow-md transition-all duration-300" style={{
                        borderColor: '#D4A5A5',
                        color: '#D4A5A5'
                      }}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
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
              <Card className="overflow-hidden h-full group transition-all duration-300 backdrop-blur-md border-0" style={{
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 4px 16px rgba(45, 45, 45, 0.08)'
              }}>
                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.div
                    className="aspect-[16/9] flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(212, 165, 165, 0.2), rgba(125, 90, 125, 0.1), rgba(230, 168, 92, 0.15))' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BookOpen className="w-12 h-12" style={{ color: 'rgba(212, 165, 165, 0.5)' }} />
                  </motion.div>
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 backdrop-blur-sm text-xs font-medium rounded-md" style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      color: '#2D2D2D'
                    }}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-4 text-xs" style={{ color: '#999999' }}>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold leading-tight transition-colors duration-300 line-clamp-2" style={{
                      color: '#2D2D2D'
                    }}>
                      {post.title}
                    </h3>

                    <p className="text-sm leading-relaxed line-clamp-3" style={{ color: '#666666' }}>
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 pt-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-md"
                          style={{ backgroundColor: 'rgba(212, 165, 165, 0.15)', color: '#666666' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-auto border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                        <User className="w-3 h-3" />
                      </div>
                      <span className="text-xs font-medium" style={{ color: '#2D2D2D' }}>{post.author}</span>
                    </div>

                    <Button size="sm" variant="ghost" className="group h-8 px-3">
                      <span className="text-xs">Read</span>
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/blog">
            <Button size="lg" variant="outline" className="group border-2 hover:shadow-md transition-all duration-300" style={{
              borderColor: '#D4A5A5',
              color: '#D4A5A5'
            }}>
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
import React from 'react';
import { blogPosts } from '../mockData';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const BlogSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative">
              Wissen für Marktplätze
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FFDA00]"></div>
            </h2>
          </div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Aktuelle Insights und Best Practices aus unserem Blog
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-[#FFDA00] group"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-6xl">📝</div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-[#FFDA00] text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    {new Date(post.date).toLocaleDateString('de-DE')}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FFDA00] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <button className="text-[#FFDA00] font-semibold flex items-center hover:underline">
                  Weiterlesen
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button className="bg-black hover:bg-gray-900 text-[#FFDA00] font-semibold text-lg px-8 py-6">
            Zu allen Blogbeiträgen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
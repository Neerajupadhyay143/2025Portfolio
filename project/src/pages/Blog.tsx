import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 'modern-react-patterns',
    title: 'Modern React Patterns for Better Code Organization',
    excerpt: 'Explore advanced React patterns and architectural decisions that lead to more maintainable and scalable applications.',
    content: 'Full content here...',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['React', 'JavaScript', 'Architecture'],
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    id: 'typescript-best-practices',
    title: 'TypeScript Best Practices for Large Applications',
    excerpt: 'Learn how to leverage TypeScript effectively in large-scale applications with proper type safety and developer experience.',
    content: 'Full content here...',
    date: '2024-01-10',
    readTime: '12 min read',
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    id: 'building-scalable-apis',
    title: 'Building Scalable APIs with Node.js and PostgreSQL',
    excerpt: 'A comprehensive guide to building robust, scalable backend APIs with proper database design and optimization techniques.',
    content: 'Full content here...',
    date: '2024-01-05',
    readTime: '15 min read',
    tags: ['Node.js', 'PostgreSQL', 'API Design'],
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    id: 'css-animations-performance',
    title: 'CSS Animations and Performance Optimization',
    excerpt: 'Deep dive into CSS animations, performance considerations, and best practices for smooth user experiences.',
    content: 'Full content here...',
    date: '2023-12-28',
    readTime: '10 min read',
    tags: ['CSS', 'Performance', 'Animation'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
];

const Blog: React.FC = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    // <div className="min-h-screen py-20">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     {/* Header */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 30 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6 }}
    //       className="text-center mb-16"
    //     >
    //       <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
    //         Blog
    //       </h1>
    //       <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
    //         Thoughts, tutorials, and insights about web development, technology, and design
    //       </p>
    //     </motion.div>

    //     {/* Featured Posts */}
    //     {featuredPosts.length > 0 && (
    //       <section className="mb-16">
    //         <motion.h2
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.6, delay: 0.2 }}
    //           className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
    //         >
    //           Featured Posts
    //         </motion.h2>

    //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    //           {featuredPosts.map((post, index) => (
    //             <motion.article
    //               key={post.id}
    //               initial={{ opacity: 0, y: 30 }}
    //               animate={{ opacity: 1, y: 0 }}
    //               transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
    //               className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
    //             >
    //               <div className="relative">
    //                 <img
    //                   src={post.image}
    //                   alt={post.title}
    //                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
    //                 />
    //                 <div className="absolute top-4 left-4">
    //                   <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
    //                     Featured
    //                   </span>
    //                 </div>
    //               </div>

    //               <div className="p-6">
    //                 <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
    //                   <div className="flex items-center space-x-1">
    //                     <Calendar size={16} />
    //                     <span>{formatDate(post.date)}</span>
    //                   </div>
    //                   <div className="flex items-center space-x-1">
    //                     <Clock size={16} />
    //                     <span>{post.readTime}</span>
    //                   </div>
    //                 </div>

    //                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
    //                   {post.title}
    //                 </h3>

    //                 <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
    //                   {post.excerpt}
    //                 </p>

    //                 <div className="flex flex-wrap gap-2 mb-4">
    //                   {post.tags.map((tag) => (
    //                     <span
    //                       key={tag}
    //                       className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-lg"
    //                     >
    //                       {tag}
    //                     </span>
    //                   ))}
    //                 </div>

    //                 <button className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
    //                   <span>Read More</span>
    //                   <ArrowRight size={16} />
    //                 </button>
    //               </div>
    //             </motion.article>
    //           ))}
    //         </div>
    //       </section>
    //     )}

    //     {/* All Posts */}
    //     <section>
    //       <motion.h2
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.6, delay: 0.4 }}
    //         className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
    //       >
    //         All Posts
    //       </motion.h2>

    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //         {blogPosts.map((post, index) => (
    //           <motion.article
    //             key={post.id}
    //             initial={{ opacity: 0, y: 30 }}
    //             animate={{ opacity: 1, y: 0 }}
    //             transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
    //             className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
    //           >
    //             <div className="relative">
    //               <img
    //                 src={post.image}
    //                 alt={post.title}
    //                 className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
    //               />
    //               {post.featured && (
    //                 <div className="absolute top-3 right-3">
    //                   <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
    //                     Featured
    //                   </span>
    //                 </div>
    //               )}
    //             </div>

    //             <div className="p-6">
    //               <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
    //                 <div className="flex items-center space-x-1">
    //                   <Calendar size={14} />
    //                   <span>{formatDate(post.date)}</span>
    //                 </div>
    //                 <div className="flex items-center space-x-1">
    //                   <Clock size={14} />
    //                   <span>{post.readTime}</span>
    //                 </div>
    //               </div>

    //               <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
    //                 {post.title}
    //               </h3>

    //               <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm line-clamp-2">
    //                 {post.excerpt}
    //               </p>

    //               <div className="flex flex-wrap gap-1 mb-4">
    //                 {post.tags.slice(0, 2).map((tag) => (
    //                   <span
    //                     key={tag}
    //                     className="flex items-center space-x-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-lg"
    //                   >
    //                     <Tag size={12} />
    //                     <span>{tag}</span>
    //                   </span>
    //                 ))}
    //                 {post.tags.length > 2 && (
    //                   <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-xs">
    //                     +{post.tags.length - 2} more
    //                   </span>
    //                 )}
    //               </div>

    //               <button className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors">
    //                 <span>Read Article</span>
    //                 <ArrowRight size={14} />
    //               </button>
    //             </div>
    //           </motion.article>
    //         ))}
    //       </div>
    //     </section>

    //     {/* Newsletter Signup */}
    //     <motion.section
    //       initial={{ opacity: 0, y: 30 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6 }}
    //       viewport={{ once: true }}
    //       className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-12 rounded-2xl text-center"
    //     >
    //       <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    //         Stay Updated
    //       </h3>
    //       <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
    //         Subscribe to get notified about new blog posts, tutorials, and insights about web development.
    //       </p>
    //       <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
    //         <input
    //           type="email"
    //           placeholder="Enter your email"
    //           className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
    //         />
    //         <motion.button
    //           whileHover={{ scale: 1.05 }}
    //           whileTap={{ scale: 0.95 }}
    //           className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
    //         >
    //           Subscribe
    //         </motion.button>
    //       </div>
    //     </motion.section>
    //   </div>
    // </div>

    <>
      <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-lg'>Comming Soon...</h1>
      </div>
    </>
  );
};

export default Blog;
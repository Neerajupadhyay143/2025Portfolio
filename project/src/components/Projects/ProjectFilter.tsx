import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useProjects } from '../../contexts/ProjectContext';

const ProjectFilter: React.FC = () => {
  const { projects, selectedTags, setSelectedTags } = useProjects();

  // Extract unique technologies and categories
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.techStack))
  ).sort();

  const allCategories = Array.from(
    new Set(projects.map(project => project.category))
  ).sort();

  const allYears = Array.from(
    new Set(projects.map(project => project.year))
  ).sort((a, b) => b - a);

  const toggleTag = (tag: string) => {
    setSelectedTags(
      selectedTags.includes(tag)
        ? selectedTags.filter(t => t !== tag)
        : [...selectedTags, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Filter Projects
        </h3>
        {selectedTags.length > 0 && (
          <button
            onClick={clearFilters}
            className="flex items-center space-x-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <X size={16} />
            <span>Clear All</span>
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Categories
          </h4>
          <div className="flex flex-wrap gap-2">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => toggleTag(category)}
                className={`px-3 py-2 text-sm rounded-lg border transition-all duration-200 ${
                  selectedTags.includes(category)
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => toggleTag(tech)}
                className={`px-3 py-2 text-sm rounded-lg border transition-all duration-200 ${
                  selectedTags.includes(tech)
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Years */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Year
          </h4>
          <div className="flex flex-wrap gap-2">
            {allYears.map((year) => (
              <button
                key={year}
                onClick={() => toggleTag(year.toString())}
                className={`px-3 py-2 text-sm rounded-lg border transition-all duration-200 ${
                  selectedTags.includes(year.toString())
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {selectedTags.length > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Active Filters ({selectedTags.length})
          </h4>
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-lg"
              >
                <span>{tag}</span>
                <button
                  onClick={() => toggleTag(tag)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectFilter;
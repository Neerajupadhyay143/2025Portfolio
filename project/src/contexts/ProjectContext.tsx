import React, { createContext, useContext, useState } from 'react';
import { projectsData } from '../data/projects';

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  techStack: string[];
  category: string;
  year: number;
  image: string;
  images: string[];
  liveUrl?: string;
  repoUrl?: string;
  challenges: string;
  role: string;
  featured: boolean;
}

interface ProjectContextType {
  projects: Project[];
  filteredProjects: Project[];
  selectedTags: string[];
  searchQuery: string;
  setSelectedTags: (tags: string[]) => void;
  setSearchQuery: (query: string) => void;
  getProjectById: (id: string) => Project | undefined;
  getFeaturedProjects: () => Project[];
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects] = useState<Project[]>(projectsData);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => project.techStack.includes(tag) || project.category === tag);
    
    return matchesSearch && matchesTags;
  });

  const getProjectById = (id: string) => projects.find(project => project.id === id);
  const getFeaturedProjects = () => projects.filter(project => project.featured);

  return (
    <ProjectContext.Provider value={{
      projects,
      filteredProjects,
      selectedTags,
      searchQuery,
      setSelectedTags,
      setSearchQuery,
      getProjectById,
      getFeaturedProjects
    }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};
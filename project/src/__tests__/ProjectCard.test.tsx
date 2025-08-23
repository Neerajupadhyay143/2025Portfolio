import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProjectCard from '../components/Projects/ProjectCard';
import { Project } from '../contexts/ProjectContext';

const mockProject: Project = {
  id: 'test-project',
  title: 'Test Project',
  description: 'This is a test project description.',
  shortDescription: 'Short test description',
  techStack: ['React', 'TypeScript', 'Tailwind CSS'],
  category: 'Web Development',
  year: 2024,
  image: 'https://example.com/test-image.jpg',
  images: ['https://example.com/test-image.jpg'],
  liveUrl: 'https://example.com',
  repoUrl: 'https://github.com/test/repo',
  challenges: 'Test challenges',
  role: 'Developer',
  featured: true,
};

const ProjectCardWrapper: React.FC<{ project: Project }> = ({ project }) => (
  <BrowserRouter>
    <ProjectCard project={project} />
  </BrowserRouter>
);

describe('ProjectCard', () => {
  test('renders project information correctly', () => {
    render(<ProjectCardWrapper project={mockProject} />);
    
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Short test description')).toBeInTheDocument();
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('2024')).toBeInTheDocument();
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  test('displays tech stack correctly', () => {
    render(<ProjectCardWrapper project={mockProject} />);
    
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
  });

  test('shows external links when provided', () => {
    render(<ProjectCardWrapper project={mockProject} />);
    
    const liveLink = screen.getByLabelText('View Live Project');
    const repoLink = screen.getByLabelText('View Source Code');
    
    expect(liveLink).toHaveAttribute('href', 'https://example.com');
    expect(repoLink).toHaveAttribute('href', 'https://github.com/test/repo');
  });

  test('renders learn more link', () => {
    render(<ProjectCardWrapper project={mockProject} />);
    
    const learnMoreLink = screen.getByText('Learn More →');
    expect(learnMoreLink).toBeInTheDocument();
  });
});
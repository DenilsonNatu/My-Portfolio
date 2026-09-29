import React from 'react';
import type { AcademicProject } from '../types';
import { ProjectCard } from './ProjectCard';

interface AcademicProjectCardProps {
  project: AcademicProject;
  onSelect: (project: AcademicProject) => void;
}

export const AcademicProjectCard: React.FC<AcademicProjectCardProps> = ({ project, onSelect }) => {
  return <ProjectCard project={project} onSelect={onSelect} />;
};

export default AcademicProjectCard;

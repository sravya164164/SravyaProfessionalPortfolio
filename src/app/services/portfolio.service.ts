import { Injectable, signal } from '@angular/core';

export interface NavItem {
  label: string;
  fragment: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
}

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  readonly navItems: NavItem[] = [
    { label: 'About Me',    fragment: 'about'   },
    { label: 'My Skills',   fragment: 'skills'  },
    { label: 'Projects',    fragment: 'projects' },
    { label: 'Contact Me',  fragment: 'contact' },
  ];

  readonly about = {
    name: 'Sravya Balivada',
    tagline: 'Software Engineer · Problem Solver · Lifelong Learner',
    bio: `Hi! I'm Sravya Balivada, a passionate software engineer who loves building
          clean, user-friendly applications. I enjoy turning complex problems into
          simple, elegant solutions.`,
  };

  readonly skills: Skill[] = [
    {
      category: 'Frontend',
      items: ['Angular', 'TypeScript', 'HTML5', 'CSS3 / SCSS', 'RxJS'],
    },
    {
      category: 'Backend',
      items: ['Java', 'Spring Boot', 'Node.js', 'REST APIs'],
    },
    {
      category: 'Tools & Cloud',
      items: ['Git', 'GitHub', 'Docker', 'AWS', 'VS Code'],
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'MongoDB'],
    },
  ];

  readonly projects: Project[] = [
    {
      title: 'Professional Portfolio',
      description: 'A personal portfolio website built with Angular 22 showcasing my work and skills.',
      tech: ['Angular', 'TypeScript', 'SCSS'],
      githubUrl: 'https://github.com/sravya164164/SravyaProfessionalPortfolio',
    },
    {
      title: 'Project Two',
      description: 'Description of your second project goes here.',
      tech: ['Java', 'Spring Boot', 'MySQL'],
    },
    {
      title: 'Project Three',
      description: 'Description of your third project goes here.',
      tech: ['Node.js', 'MongoDB', 'REST API'],
    },
  ];

  readonly contact: ContactInfo = {
    email: 'sravya164164@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sravya-balivada',
    github: 'https://github.com/sravya164164',
  };

  // Tracks which section is currently active in view
  readonly activeSection = signal<string>('about');

  setActiveSection(fragment: string): void {
    this.activeSection.set(fragment);
  }
}

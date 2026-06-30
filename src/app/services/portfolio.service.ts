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
  demoVideoUrl?: string; // YouTube embed URL: https://www.youtube.com/embed/YOUR_VIDEO_ID
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
    bio: `Hi! I'm Sravya, a passionate software engineer who loves building
          clean, user-friendly applications. I enjoy turning complex problems into
          simple, elegant solutions. My skills are LangChain , LangGraph , Vector Database 
          python , Java , Spring Boot , Node.js , Angular , TypeScript , HTML5 , CSS3 / SCSS , 
          RxJS , Git , GitHub , Docker , AWS , VS Code, MySQL , PostgreSQL , MongoDB, 
          and promt engineering . 
          
          I'm always eager to learn new technologies and improve my craft. Let's connect and 
          create something amazing together!`
  };

  readonly skills: Skill[] = [
    {
      category: 'AI Skills',
      items: ['LangChain', 'LangGraph'],
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: 'Backend',
      items: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'Python'],
    },
    {
      category: 'Frontend',
      items: ['Angular', 'TypeScript', 'HTML5', 'CSS3 / SCSS', 'RxJS'],
    },
    {
      category: 'Tools & Cloud',
      items: ['Git', 'GitHub', 'Docker', 'AWS', 'VS Code'],
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
      description: 'This is AI Doc agent that takes a pdf and answers accordingly.',
      tech: ['Java', 'Spring Boot', 'MySQL'],
      demoVideoUrl: 'https://www.youtube.com/embed/dsnlOMgR158',
    },
    {
      title: 'Project Three',
      description: 'Description of your third project goes here.',
      tech: ['Node.js', 'MongoDB', 'REST API'],
    },
  ];

  readonly contact: ContactInfo = {
    email: 'sravya164164@gmail.com',
    github: 'https://github.com/sravya164164',
  };

  // Tracks which section is currently active in view
  readonly activeSection = signal<string>('about');

  setActiveSection(fragment: string): void {
    this.activeSection.set(fragment);
  }
}

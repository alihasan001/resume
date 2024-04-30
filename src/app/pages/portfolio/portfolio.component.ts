import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects: any = [
    {
      title: 'Xref',
      description: 'Improved reference checking with Angular enhancements, reducing bugs and optimizing user experiences in vital projects.',
      tags: ['web', 'frontend', 'backend', 'Django', 'Angular', 'TypeScript', 'Python'],
      image: 'https://assets-global.website-files.com/63042b65fa91d24fd6b31707/6306bd3a09d64a654f4c148f_Xref%20Logo.svg'
    },
    {
      title: 'Squibler',
      description: 'Developed real-time collaboration and screenplay modes in Angular, increasing user retention by enhancing narrative tools.',
      tags: ['web', 'frontend', 'backend', 'Django', 'Angular'],
      image: 'https://www.squibler.io/static/images/header_logo.b9edc36bd1b4.webp'
    },
    {
      title: 'Fast API Hub',
      description: 'Led API development using FastAPI, significantly improving data handling and enhancing application performance.',
      tags: ['web', 'frontend', 'backend', 'FastAPI', 'Angular', 'Python'],
      image: 'https://www.fastapihub.com/assets/images/favicon.ico'
    },
    {
      title: 'Bright Arrow',
      description: 'Enhanced front and back-end functionalities, collaborating remotely to meet diverse project goals and timelines.',
      tags: ['web', 'frontend', 'backend', 'Angular', 'Django', 'Python'],
      image: '' // Placeholder for an image URL if you have one
    },
    {
      title: 'DoWell Research',
      description: 'Delivered critical web application features rapidly, focusing on backend integration and front-end performance.',
      tags: ['web', 'backend', 'Angular', 'Python', 'FastAPI'],
      image: '' // Placeholder for an image URL if you have one
    },
    {
      title: 'Zero.inc',
      description: 'Supported multiple cloud technology projects, gaining experience in modern development practices remotely.',
      tags: ['web', 'frontend', 'backend', 'Cloud', 'Angular', 'React', 'Node.js'],
      image: '' // Placeholder for an image URL if you have one
    },
    {
      title: 'Transcript AI',
      description: 'Developed an AI-powered platform for transcribing audio to text, enhancing accessibility and utility.',
      tags: ['web', 'frontend', 'Angular', 'AI', 'transcription'],
      image: '' // Placeholder for an image URL if you have one
    }
  ]
  
  
  filteredProjects: any = this.projects;

  controls = [
    {label: 'All', value: 'all'},
    {label: 'Web', value: 'web'},
    {label: 'Front End', value: 'frontend'},
    {label: 'Back End', value: 'backend'},
  ]

  selected: any = 'all';

  filter(query: string) {
    this.selected = query;
    this.filteredProjects = this.projects.filter((project: any) => {
      if (query === 'all') {
        return true;
      }
      return project.tags.includes(query);
    });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  personalInfo = [
    { key: 'First Name', value: 'Ali' },
    { key: 'Last Name', value: 'Hasan' },
    { key: 'Age', value: '24 Years' }, // Assumed same age, adjust if needed
    { key: 'Nationality', value: 'Pakistani' },
    { key: 'Freelance', value: 'Available' }, // Assumed available, adjust if needed
    { key: 'Address', value: 'Lahore, Punjab, Pakistan' },
    { key: 'Phone', value: '+923451702003' },
    { key: 'Email', value: 'alihasan.inbox@gmail.com' },
    { key: 'Languages', value: 'English, Urdu, and Punjabi' }, // Only English mentioned, add others if applicable
  ];

  cardsInfo = [
    { key: 'Years of Experience', value: '3' },
    { key: 'Completed Projects', value: '10' },
    { key: 'Happy Clients', value: '5' },
    { key: 'Awards Won', value: '5' },
  ];

  skillInformation = [
    { key: 'Python', value: '90' },
    { key: 'JavaScript', value: '95' },
    { key: 'TypeScript', value: '95' },
    { key: 'Django', value: '80' },
    { key: 'Angular', value: '95' },
    { key: 'ReactJS', value: '90' },
    { key: 'Pytest', value: '80' },
    { key: 'JUnit', value: '80' },
    { key: 'Selenium', value: '70' },
    { key: 'Postman', value: '85' },
    { key: 'HTML5', value: '95' },
    { key: 'CSS3', value: '95' },
  ];
  

  experienceInformation = [
    {
      role: 'Full Stack Engineer',
      company: 'Xref',
      date: 'March 2023 - Present',
      description:
        'Led Angular-based enhancements for the Pulse and Trust project, significantly reducing bugs and aligning features with core objectives. Optimized UI/API performances, introducing new functionalities that elevated the Reference and Exit projects\' user experiences.'
    },
    {
      role: 'Full Stack Engineer',
      company: 'Fast API Hub',
      date: 'January 2024 - Present',
      description:
        'Engaged in developing and optimizing API solutions using FastAPI, improving data handling and server response times. Lead developer in a series of projects aimed at enhancing application scalability and performance.'
    },
    {
      role: 'Full Stack Engineer',
      company: 'Squibler',
      date: 'January 2022 - March 2023',
      description:
        'Launched a real-time collaborative feature using QUILL-JS and Angular, boosting project cohesiveness. Integrated a screenplay mode in Angular, lifting user retention by 5% through enhanced narrative-building tools.'
    },
    {
      role: 'Full Stack Engineer',
      company: 'Bright Arrow',
      date: 'November 2021 - January 2022',
      description:
        'Contributed to diverse web development projects, enhancing both front and back-end functionalities. Collaborated remotely with teams across multiple disciplines to meet project goals and timelines.'
    },
    {
      role: 'Full Stack Engineer',
      company: 'DoWell Research',
      date: 'November 2021 - December 2021',
      description:
        'Engaged in fast-paced development cycles to deliver critical features for various web applications. Focused on backend integration and front-end performance improvements.'
    },
    {
      role: 'Software Intern',
      company: 'Zero.inc',
      date: 'July 2021 - November 2021',
      description:
        'Supported multiple software development projects, gaining hands-on experience with cloud technologies and modern development practices in a remote setting.'
    }
  ];
  
  
  
}

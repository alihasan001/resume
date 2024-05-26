import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contacts = [
    { key: 'Phone', value: '+92 345 1702003', icon:'phone' },
    { key: 'Email', value: 'alihassan.inbox@gmail.com',  icon:'mail'},
    { key: 'LinkedIn', value: 'https://www.linkedin.com/in/ali-hasan-49abaa19b/',  icon:'linkedin' },
    { key: 'Github', value: 'https://github.com/alihasan0123',  icon:'github' }
  ]

  constructor(private http: HttpClient){}

  downloadResume() {
    const url = 'assets/Ali_Hasan_Full_Stack_Engineer.pdf'; // Path to your resume in the assets folder
    this.http.get(url, { responseType: 'blob' }).subscribe(blob => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'Ali_Hasan_Full_Stack_Engineer.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });

  }
}

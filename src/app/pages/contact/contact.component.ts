import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contacts = [
    { key: 'Phone', value: '+21621184010', icon:'phone' },
    { key: 'Email', value: 'alihassan.inbox@gmail.com',  icon:'mail'},
    { key: 'LinkedIn', value: 'https://www.linkedin.com/in/ali-hassan-1b1b1b1b1/',  icon:'linkedin' },
    { key: 'Github', value: 'https://github.com/alihasan0123',  icon:'github' }
  ]
}

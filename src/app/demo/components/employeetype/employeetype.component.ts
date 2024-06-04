import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeetype',
  templateUrl: './employeetype.component.html',
  styleUrls: ['./employeetype.component.scss']
})
export class EmployeetypeComponent {
  options: any[] = [
    { name: 'Saleried Employee', route: '/qualifying-form' },
    { name: 'Bussiness', route: '/option2' },
    { name: 'Self Employeed', route: '/option3' }
  ];
  selectedOption: any;

  constructor(private router: Router) { }

  selectOption(option: any): void {
    this.router.navigate([option.route]);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'NgxDuallistboxMaterialLibApp';

  inputData = [
    {
      label: 'Carole Cline',
      selected: true,
      value: { company: 'Zoxy', dob: '1994-05-07', roles: 'admin' },
    },
    {
      label: 'Manning Ferrell',
      selected: true,
      value: { company: 'Kengen', dob: '1988-05-12', roles: 'member' },
    },
    {
      label: 'Carver Mcmillan',
      selected: false,
      value: { company: 'Nutralab', dob: '1990-08-31', roles: 'owner' },
    },
  ];

  getSelVal(data: any) {
    console.log('data', data);
  }
}

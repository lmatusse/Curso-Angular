import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ngswitch',
  templateUrl: './directiva-ngswitch.component.html',
  styleUrls: ['./directiva-ngswitch.component.scss']
})
export class DirectivaNgswitchComponent implements OnInit {
aba:string='home';
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-succes-alert',
  templateUrl: './succes-alert.component.html',
  // styleUrls: ['./succes-alert.component.css']
  styles: [`
    .alert{
      font-size: 18px;
    }
  `]
})
export class SuccesAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

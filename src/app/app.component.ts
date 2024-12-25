import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pipes28Component } from './pipes-28/pipes-28.component';

@Component({
  selector: 'app-root',
  //standalone: true,
  imports: [CommonModule, FormsModule,Pipes28Component],//bei *ngSwitchCase we should import CommonModule
  //imports: [RouterOutlet],
  //templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: `
  <app-pipes-28></app-pipes-28>
  <h1>{{title}} </h1>
  <label for="paId" > Enter Packeg ID</label>
  <input type="text" id="paId"[(ngModel)]="paId" />
  <br/>
  <div [ngSwitch]="paId" >
    <div *ngSwitchCase="'123'" > Package 123 : In Transit.(*ngSwitchCase) </div>
    <div *ngSwitchCase="'456'" > Package 456 : In Deliverd . (*ngSwitchCase) </div>
    <div *ngSwitchCase="'789'" > Package 789 : Out for delivery   . (*ngSwitchCase)</div>
    <div *ngSwitchDefault > Package not found check the ID . (*ngSwitchCase)</div>
  </div>
  <br/>
  <p>===================</p>
  <label > Enter Packeg ID    :  </label>
  <input type="text" id="paId2"[(ngModel)]="paId2" >
  <br/>
  @switch (paId2) {
    @case ('123') {
      Package 123 : In Transit.(Switch)
    }
    @case ('456') {
      Package 456 : In Deliverd . (Switch)
    }
    @case ('789') {
      Package 789 : Out for delivery   . (Switch)
    }
    @default {
      Package not found check the ID .(Switch)
    }
  }
  <p>{{ today | date:'fullDate'}}</p>

  `
})



export class AppComponent {
  title = 'NgSwitch';
  paId: string='';
  paId2: string='';
  today=new Date();


}

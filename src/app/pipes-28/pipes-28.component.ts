import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-28',
  imports: [],
  standalone: true,
  templateUrl: './pipes-28.component.html',
  styleUrl: './pipes-28.component.scss',
  template: `
  <br>
  <hr>
  <h1>{{title}} </h1>
  <p>Willkommen!</p>
  `
})

export class Pipes28Component {
title:string='Pipes ab 28';
}

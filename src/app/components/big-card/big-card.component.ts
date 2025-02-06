import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: false,
  
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent implements OnInit {

  @Input()
  bigCardPhoto: string = '';
  
  @Input()
  bigCardTitle: string = '';
  
  @Input()
  bigCardDescription: string = '';

  constructor() { }

  ngOnInit(): void { }
}

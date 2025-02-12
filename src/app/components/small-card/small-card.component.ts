import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: false,
  
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent implements OnInit {

  @Input()
  smallCardPhoto: string = '';

  @Input()
  smallCardTitle: string = '';

  @Input()
  Id: string = '0';

  constructor() { }

  ngOnInit(): void { }

}

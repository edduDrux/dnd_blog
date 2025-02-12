import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: false,
  
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {
  
  photoCover: string = ""
  contentTitle: string = ""
  contentDescription: string = ""

  constructor(
    private route: ActivatedRoute,
  ) {}

    ngOnInit() {
      this.route.paramMap.subscribe( value =>
        console.log(value.get('id')
      )
    )
  }
}

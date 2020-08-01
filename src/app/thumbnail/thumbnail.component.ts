import { Component, OnInit,  Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  @Input() event: any
  @Output() eventClick = new EventEmitter()

  someproperty: any = 'some value';

  constructor() { }

  ngOnInit(): void {
  }

  logFoo(){
    console.log('log foo')
  }

  

}

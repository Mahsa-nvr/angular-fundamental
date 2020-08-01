import { Component, OnInit , EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
@Input() count: number;
@Input() set voted(val) {
  this.iconColor = val ? 'red' : 'white';
}
@Output() vote = new EventEmitter();
public iconColor: string;

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.vote.emit({});
  }

}

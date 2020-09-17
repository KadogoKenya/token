import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-token-form',
  templateUrl: './token-form.component.html',
  styleUrls: ['./token-form.component.css']
})
export class TokenFormComponent implements OnInit {

  @Output() emitSearch = new EventEmitter<any>()

  searchbar: string;

  constructor() {}

  search() {
    this.emitSearch.emit(this.searchbar);    
  }
  
  ngOnInit(){
  }

}

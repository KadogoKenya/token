import { Component, OnInit } from '@angular/core';
import { Github } from '../github';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  githubs:Github[];
  constructor() { }

  ngOnInit(): void {
  }

}

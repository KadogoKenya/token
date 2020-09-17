import { Component, OnInit } from '@angular/core';
import { Github } from '../github';
import { GithubServiceService } from '../github-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  githubs:Github[];
  constructor(public service:GithubServiceService) { }

  ngOnInit() {
    this.searchGitHub("KadogoKenya");

  }

  searchGitHub(searchbar){
    this.service
  }

}

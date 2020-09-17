import { Component, OnInit } from '@angular/core';
// import { Github } from '../github';
import { GithubServiceService } from '../github-service.service';
import { User } from '../user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  users:User[];
  constructor(public service:GithubServiceService) { }

  ngOnInit() {
    this.searchGitHub("KadogoKenya");

  }

  searchGitHub(searchbar){
    this.service.searchGithub(searchbar).then(
      ()=>{
        this.users=this.service.users;
        console.log(this.users);
      },
      (error)=>{ 
        console.log(error)
      }
      
    )
  }

}

import { Component, OnInit } from '@angular/core';
import {profileService} from 'src/app/profile.service'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  userRepos:any;
  username: string = 'KadogoKenya'
  imageWidth: number = 150;
  imageHeight: number = 150;

  constructor(private profileService: profileService) { 
    
  }

  findUser () {
    this.profileService.UpdateUser(this.username);

    this.profileService.getUser().subscribe(user => {
      // console.log(user);
      this.user = user;
    });

    this.profileService.getUserRepos().subscribe(repos => {
      // console.log(repos);
      this.userRepos = repos;
    })
  }

  ngOnInit() {
    this.findUser()
  }

}
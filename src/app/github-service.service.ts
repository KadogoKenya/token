import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user';
// import { Github } from './github';


@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  users:User[]=[];
  // users:User;
  constructor(private http: HttpClient) {}

  searchGithub(searchbar:String) {
    interface data {
      login:string;
      username:string;
      avatar:string;
      html_url:string;
      name:string;
    }
    let promise=new Promise((resolve, reject)=>{
      this.http.get('https://api.github.com/users/' + searchbar + '?access_token=' + environment.apiKey).toPromise().then(
        (results) => {
          this.users = [];
          this.users.push();
          console.log (results)
          resolve()
        },
        (error) => {
          console.log(error)
          reject()
        }
      )      
    })
    return promise;
  }
}

    

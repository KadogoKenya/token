import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user';
import { Github } from './github';


@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  githubs:Github[]=[];

  constructor(
    private http: HttpClient) {
      searchGithub(searchbar:String) {
        interface data {
          login:string;
          username:string;
          avatar:string;
          html_url:string;
          name:string;
        }
        let promise=new Promise((resolve, reject)=>{
          this.http.get<data>('https://api.github.com/users/' + searchbar + '?access_token=' + environment.apiKey).toPromise().then(response=>{
          
          })
        })
      }
     }
}

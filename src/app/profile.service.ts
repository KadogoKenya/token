import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class profileService{
    username: string="mykeck";
    clientId: string = "e41cf9f2036c23df9858";
    repoName: string;
    clientSecret: string = "9e09f13ad8ab63b94828268c2b05b7b86c041f02";
    apikey: string = '3f90a5d05ab77d52abb284cb26ccc2c2ef90e891';

    constructor(private http: HttpClient){
      console.log ('service is now ready');
    }

getUser() {
      return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
    }

getUserRepos() {
      return this.http.get('https://api.github.com/users/' + this.username + '/repos'+ "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
    }
searchrepos() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
      headers: new HttpHeaders({Authorization: `token ${this.apikey}`})
    }))
  }


UpdateUser(username:string) {
    this.username = username;
  }
UpdateRepo(repo:string) {
    this.repoName = repo;
  }
}

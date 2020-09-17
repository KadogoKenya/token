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
      searchGithub(searchbar)
     }
}

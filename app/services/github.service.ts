import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:String;
  private client_id = '5d5a373305226ca84c97';
  private client_secret = '1e1156f46c894b8df40d659b54b097435324b3bc';

  constructor(private _http: Http) {
    console.log('Github service ready...');
    this.username = 'lyv990';
  }

  getUser() {
    return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret'+this.client_secret)
      .map(res => res.json());
  }

  getRepos() {
    return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret'+this.client_secret)
      .map(res => res.json());
  }

  updateUser(username:string) {
    this.username = username;
  }
}

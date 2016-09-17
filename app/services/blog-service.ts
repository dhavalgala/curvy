import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
  
export class BlogService {  
    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http) {
         
    }
  
    getFreshlyPressed() {
        var url = 'https://public-api.wordpress.com/rest/v1.1/sites/discover.wordpress.com/posts?number=50';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getFreshlyPressed(): Observable<any> {
    const url = 'https://public-api.wordpress.com/rest/v1.1/sites/discover.wordpress.com/posts?number=50';
    return this.http.get(url).pipe(map((res: any) => res));
  }

  getBlogDetail(blogId: string): Observable<any> {
    const url = 'https://public-api.wordpress.com/rest/v1.1/sites/discover.wordpress.com/posts/' + blogId;
    return this.http.get(url).pipe(map((res: any) => res));
  }
}

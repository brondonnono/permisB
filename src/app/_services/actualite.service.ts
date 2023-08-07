import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { actualiteGrp, apiGet } from '../api/apiRoutes';
import { article } from '../_models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  articleData = {} as article;
  listActus : article[];
  actus;
  total: number;
  constructor(private http : HttpClient) { 
    this.total = 0;
  }

  getActualites() {
    //recupere toutes les actualites de la base de donnees
    const url = environment.API_URL + actualiteGrp + apiGet;
    // return this.http.get(url).toPromise();
    this.http.get(url).subscribe((res:any) => {
      if(res) {
        this.actus = res.data;
        this.total = this.actus.length;
      }
      return this.actus;
    });
  }

}

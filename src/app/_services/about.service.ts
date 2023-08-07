import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { apiGet, aproposGrp } from '../api/apiRoutes';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  about;
  total: number;

  constructor(private http : HttpClient) { }

  getAbout() {
    //recupere toutes les donnees de l'apropos de la base de donnees
    const url = environment.API_URL + aproposGrp + apiGet;
    // return this.http.get(url).toPromise();
    this.http.get(url).subscribe((res:any) => {
      if(res) {
        this.about = res.data;
        this.total = this.about.length;
      }
      return this.about;
    });
  }

}
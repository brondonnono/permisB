import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { panneau } from 'src/app/_models/panneau.model';
import { environment } from 'src/environments/environment';
import { apiGet, panneauGrp } from '../api/apiRoutes';

@Injectable({
  providedIn: 'root'
})
export class PanneauService {

  public panneauData: panneau;

  constructor(private http : HttpClient) { }

  getItemCourse() {
    //recupere toutes les panneaux de la base de donnees
    const url = environment.API_URL + panneauGrp + apiGet;
    return this.http.get(url).toPromise();
  }
}

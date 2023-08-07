import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { courGrp, apiGet } from '../api/apiRoutes';

@Injectable({
  providedIn: 'root'
})
export class ItemCourService {

  public ItemCourse: any = {};

  constructor(private http : HttpClient) { }

  initCourse() {
    this.ItemCourse.title1 = 'cours 1 paragraphe 1';
    this.ItemCourse.img1 = 'assets/images/18.jpg';
    this.ItemCourse.description1 = 'cours 1 paragraphe 1';
    this.ItemCourse.title2 = 'cours 1 paragraphe 2';
    this.ItemCourse.description2 = 'cours 1 paragraphe 2';
    this.ItemCourse.img2 = 'assets/images/5.jpeg';
  }

  getCourse() {
    this.initCourse();
    return this.ItemCourse;
  }

  getItemCourse() {
    //recupere toutes les paragraphes de la base de donnees
    const url = environment.API_URL + courGrp + apiGet;
    return this.http.get(url).toPromise();
  }

}

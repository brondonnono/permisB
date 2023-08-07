import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cour } from 'src/app/_models/cour.model';
import { environment } from 'src/environments/environment';
import { apiGet, courGrp } from '../api/apiRoutes';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CourService {

  private cours = [];

  private coursFr = [];

  private coursEn = [];

  private selectedcourses = [];

  constructor(
    private user : UserService,
    private http : HttpClient
  ) { 
    this.initCourse();
    this.DivideCoursesAccordingLanguage();
  }

  initCourse() {
    this.cours = [
      {
        parent: 1,
        key: 1,
        title1: 'Cours 1',
        img1: 'assets/images/18.jpg',
        description1: 'description du cours',
        lang: 'fr',
        title2: 'Cours 1',
        img2: 'assets/images/18.jpg',
        description2: 'description du cours',
      },
      {
        parent: 1,
        key: 2,
        title1: 'Cours 2',
        img1: 'assets/images/18.jpg',
        description1: 'description du cours',
        lang: 'fr',
        title2: 'Cours 2',
        img2: 'assets/images/18.jpg',
        description2: 'description du cours',
      },
      {
        parent: 3,
        key: 3,
        title1: 'Course 3',
        img1: 'assets/images/18.jpg',
        description1: 'description du cours',
        lang: 'en',
        title2: 'Course 3',
        img2: 'assets/images/18.jpg',
        description2: 'description du cours',
      },
      {
        parent: 4,
        key: 4,
        title1: 'Course 4',
        img1: 'assets/images/18.jpg',
        description1: 'description du cours',
        lang: 'en',
        title2: 'Course 4',
        img2: 'assets/images/18.jpg',
        description2: 'description du cours',
      },
      {
        parent: 5,
        key: 5,
        title1: 'Course 4',
        img1: 'assets/images/18.jpg',
        description1: 'description du cours',
        lang: 'en',
        title2: 'Course 4',
        img2: 'assets/images/18.jpg',
        description2: 'description du cours',
      },
      {
        parent: 6,
        key: 6,
        title1: 'Course 4',
        img1: 'assets/images/18.jpg',
        description1: 'description du cours',
        lang: 'fr',
        title2: 'Course 4',
        img2: 'assets/images/18.jpg',
        description2: 'description du cours',
      },
      {
        parent: 7,
        key: 7,
        title1: 'Course 4',
        img1: 'assets/images/18.jpg',
        description1: 'description du cours',
        lang: 'fr',
        title2: 'Course 4',
        img2: 'assets/images/18.jpg',
        description2: 'description du cours',
      },
      {
        parent: 8,
        key: 8,
        title1: 'Course 4',
        img1: 'assets/images/18.jpg',
        description1: 'description du cours',
        lang: 'fr',
        title2: 'Course 4',
        img2: 'assets/images/18.jpg',
        description2: 'description du cours',
      },
      {
        parent: 9,
        key: 9,
        title1: 'Course 4',
        img1: 'assets/images/18.jpg',
        description1: 'description du cours',
        lang: 'en',
        title2: 'Course 4',
        img2: 'assets/images/18.jpg',
        description2: 'description du cours',
      },
      {
        parent: 10,
        key: 10,
        title1: 'Course 4',
        img1: 'assets/images/18.jpg',
        description1: 'description du cours',
        lang: 'en',
        title2: 'Course 4',
        img2: 'assets/images/18.jpg',
        description2: 'description du cours',
      },
      {
        parent: 11,
        key: 11,
        title1: 'Course 11',
        img1: 'assets/images/18.jpg',
        description1: 'description du cours',
        lang: 'en',
        title2: 'Course 11',
        img2: 'assets/images/18.jpg',
        description2: 'description du cours',
      },
      {
        parent: 12,
        key: 12,
        title1: 'Cours 12',
        img1: 'assets/images/18.jpg',
        description1: 'description du cours',
        lang: 'fr',
        title2: 'Cours 12',
        img2: 'assets/images/18.jpg',
        description2: 'description du cours',
      },
  
    ];
  }

  getCoursesFromSub_SubMenuKey( s_subMenuKey ) {
    this.selectedcourses = [];
    const course = this.getCoursesFromUserLanguage();
    course.forEach(cour => {
      if ( cour.parent === s_subMenuKey ) {
        this.selectedcourses.push(cour);
      }
    });
  }

  getCoursesFromUserLanguage() {
    if ( this.user.userData.language === 'fr' ) {
      return this.coursFr;
    }
    else {
      return this.coursEn;
    }
  }

  DivideCoursesAccordingLanguage() {
    this.cours.forEach(course => {
      if ( course.lang === 'en' ) {
        this.coursEn.push(course);
      }
      else {
        this.coursFr.push(course);
      }
    });
  }

  getSelectedCourse() {
    return this.selectedcourses;
  }

  getCours() {
    return this.cours;
  }

  getCoursFr() {
    return this.coursFr;
  }

  getCoursEn() {
    return this.coursEn;
  }

  getAllCourses() {
    //recupere toutes les cours de la base de donnees
    const url = environment.API_URL + courGrp + apiGet;
    return this.http.get(url).toPromise();
  }

}

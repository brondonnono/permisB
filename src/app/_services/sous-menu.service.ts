import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SousMenu } from 'src/app/_models/sous-menu.model';
import { environment } from 'src/environments/environment';
import { courGrp, apiGet } from '../api/apiRoutes';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SousMenuService {

  private sub_menus = [];

  private sub_menusFr = [];

  private sub_menusEn = [];

  private selectedSubMenu = [];

  constructor(
    private user : UserService,
    private http : HttpClient
  ) { 
    this.initSubMenu();
    this.DivideSubMenuAccordingLanguage();
  }

  initSubMenu() {
    this.sub_menus = [
      {
        parent: 1,
        key: 1,
        title: 'Sous-Menu 1',
        nb: '03',
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 1,
        key: 2,
        title: 'Sous-Menu 2',
        nb: 15,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 3,
        key: 3,
        title: 'Under Menu 1',
        nb: 17,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 3,
        key: 4,
        title: 'Under Menu 2',
        nb: '08',
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 3,
        key: 5,
        title: 'Under Menu 3',
        nb: 12,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 1,
        key: 6,
        title: 'Sous-Menu 3',
        nb: '08',
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 1,
        key: 7,
        title: 'Sous-Menu 4',
        nb: 30,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 1,
        key: 8,
        title: 'Sous-Menu 5',
        nb: 11,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 3,
        key: 9,
        title: 'Under Menu 4',
        nb: 17,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 4,
        key: 10,
        title: 'Under Menu 5',
        nb: '07',
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 4,
        key: 11,
        title: 'Under Menu 1',
        nb: 12,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 2,
        key: 12,
        title: 'Sous-Menu 1',
        nb: 10,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 4,
        key: 13,
        title: 'Under Menu 2',
        nb: 12,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 2,
        key: 14,
        title: 'Sous-Menu 2',
        nb: 10,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 4,
        key: 15,
        title: 'Under Menu 3',
        nb: 12,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 2,
        key: 16,
        title: 'Sous-Menu 3',
        nb: 10,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 4,
        key: 17,
        title: 'Under Menu 4',
        nb: 12,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 2,
        key: 18,
        title: 'Sous-Menu 4',
        nb: 10,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 4,
        key: 19,
        title: 'Under Menu 5',
        nb: 12,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 2,
        key: 20,
        title: 'Sous-Menu 5',
        nb: 10,
        
        description: 'description du cours',
        lang: 'fr'
      },
  
  ///////////////////////////////////////////////
  
      {
        parent: 6,
        key: 21,
        title: 'Sous-Menu 1',
        nb: '03',
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 6,
        key: 22,
        title: 'Sous-Menu 2',
        nb: 15,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 5,
        key: 23,
        title: 'Under Menu 1',
        nb: 17,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 5,
        key: 24,
        title: 'Under Menu 2',
        nb: '08',
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 5,
        key: 25,
        title: 'Under Menu 3',
        nb: 12,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 6,
        key: 26,
        title: 'Sous-Menu 3',
        nb: '08',
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 6,
        key: 27,
        title: 'Sous-Menu 4',
        nb: 30,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 6,
        key: 28,
        title: 'Sous-Menu 5',
        nb: 11,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 5,
        key: 29,
        title: 'Under Menu 4',
        nb: 17,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 5,
        key: 30,
        title: 'Under Menu 5',
        nb: '07',
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 9,
        key: 31,
        title: 'Under Menu 1',
        nb: 12,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 7,
        key: 32,
        title: 'Sous-Menu 1',
        nb: 10,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 9,
        key: 33,
        title: 'Under Menu 2',
        nb: 12,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 7,
        key: 34,
        title: 'Sous-Menu 2',
        nb: 10,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 9,
        key: 35,
        title: 'Under Menu 3',
        nb: 12,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 7,
        key: 36,
        title: 'Sous-Menu 3',
        nb: 10,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 9,
        key: 37,
        title: 'Under Menu 4',
        nb: 12,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 7,
        key: 38,
        title: 'Sous-Menu 4',
        nb: 10,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 9,
        key: 39,
        title: 'Under Menu 5',
        nb: 12,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 7,
        key: 40,
        title: 'Sous-Menu 5',
        nb: 10,
        
        description: 'description du cours',
        lang: 'fr'
      },
  
      ////////////////////////////////////////
      ///////////////////////////////////////
  
      {
        parent: 8,
        key: 41,
        title: 'Sous-Menu 1',
        nb: '03',
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 8,
        key: 42,
        title: 'Sous-Menu 2',
        nb: 15,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 10,
        key: 43,
        title: 'Under Menu 1',
        nb: 17,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 10,
        key: 44,
        title: 'Under Menu 2',
        nb: '08',
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 10,
        key: 45,
        title: 'Under Menu 3',
        nb: 12,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 8,
        key: 46,
        title: 'Sous-Menu 3',
        nb: '08',
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 8,
        key: 47,
        title: 'Sous-Menu 4',
        nb: 30,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 8,
        key: 48,
        title: 'Sous-Menu 5',
        nb: 11,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 10,
        key: 49,
        title: 'Under Menu 4',
        nb: 17,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 10,
        key: 50,
        title: 'Under Menu 5',
        nb: '07',
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 11,
        key: 51,
        title: 'Under Menu 1',
        nb: 12,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 12,
        key: 52,
        title: 'Sous-Menu 1',
        nb: 10,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 11,
        key: 53,
        title: 'Under Menu 2',
        nb: 12,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 12,
        key: 54,
        title: 'Sous-Menu 2',
        nb: 10,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 11,
        key: 55,
        title: 'Under Menu 3',
        nb: 12,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 12,
        key: 56,
        title: 'Sous-Menu 3',
        nb: 10,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 11,
        key: 57,
        title: 'Under Menu 4',
        nb: 12,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 12,
        key: 58,
        title: 'Sous-Menu 4',
        nb: 10,
        
        description: 'description du cours',
        lang: 'fr'
      },
      {
        parent: 11,
        key: 59,
        title: 'Under Menu 5',
        nb: 12,
        
        description: 'description du cours',
        lang: 'en'
      },
      {
        parent: 12,
        key: 60,
        title: 'Sous-Menu 5',
        nb: 10,
        
        description: 'description du cours',
        lang: 'fr'
      }
  
    ];
  }

  getSubMenuFromMenuKey( menuKey ) {
    this.selectedSubMenu = [];
    const subMenu = this.getSubMenuFromUserLanguage();
    subMenu.forEach(submenu => {
      if ( submenu.parent === menuKey ) {
        this.selectedSubMenu.push(submenu);
      }
    });
  }

  getSubMenuFromUserLanguage() {
    if ( this.user.userData.language === 'fr' ) {
      return this.sub_menusFr;
    }
    else {
      return this.sub_menusEn;
    }
  }

  DivideSubMenuAccordingLanguage() {
    this.sub_menus.forEach(submenu => {
      if ( submenu.lang === 'en' ) {
        this.sub_menusEn.push(submenu);
      }
      else {
        this.sub_menusFr.push(submenu);
      }
    });
  }

  getSelectedSubMenu() {
    return this.selectedSubMenu;
  }

  getSub_menus() {
    return this.sub_menus;
  }

  getSub_menuFr() {
    return this.sub_menusFr;
  }

  getSub_menuEn() {
    return this.sub_menusEn;
  }

  getChapterCourse() {
    //recupere toutes les chapitres de la base de donnees
    const url = environment.API_URL + courGrp + apiGet;
    return this.http.get(url).toPromise();
  }

}

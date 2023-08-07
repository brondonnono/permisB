import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cour } from 'src/app/_models/cour.model';
import { CourService } from 'src/app/_services/cour.service';
import { SousMenuService } from 'src/app/_services/sous-menu.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-les-cours',
  templateUrl: './les-cours.page.html',
  styleUrls: ['./les-cours.page.scss'],
})
export class LesCoursPage implements OnInit {

  constructor(
    private user: UserService,
    private Cour: CourService,
    private subMenu: SousMenuService,
    private router: Router
  ) {

    // s'il n'est pas connecte on le redirige vers la page de connexion
    // if(!user.userData.isconnected)
    //   this.router.navigate(['/signin']);

    // recuperation a la creation de l'objet de tout les cours
    this.getCours();

  }
  courses = [];
  coursFr = [];
  cours = [
    {
      key: 1,
      title: 'Menu 1',
      nb: '03',
      img: 'assets/images/18.jpg',
      description: 'description du cours',
      lang: 'fr'
    },
    {
      key: 2,
      title: 'Menu 2',
      nb: 15,
      img: 'assets/images/18.jpg',
      description: 'description du cours',
      lang: 'fr'
    },
    {
      key: 3,
      title: 'Menu 3',
      nb: 17,
      img: 'assets/images/18.jpg',
      description: 'description du cours',
      lang: 'en'
    },
    {
      key: 4,
      title: 'Menu 4',
      nb: '08',
      img: 'assets/images/18.jpg',
      description: 'description du cours',
      lang: 'en'
    },
    {
      key: 5,
      title: 'Menu 5',
      nb: 12,
      img: 'assets/images/18.jpg',
      description: 'description du cours',
      lang: 'en'
    },
    {
      key: 6,
      title: 'Menu 6',
      nb: '08',
      img: 'assets/images/18.jpg',
      description: 'description du cours',
      lang: 'fr'
    },
    {
      key: 7,
      title: 'Menu 7',
      nb: 30,
      img: 'assets/images/18.jpg',
      description: 'description du cours',
      lang: 'fr'
    },
    {
      key: 8,
      title: 'Menu 8',
      nb: 11,
      img: 'assets/images/18.jpg',
      description: 'description du cours',
      lang: 'fr'
    },
    {
      key: 9,
      title: 'Menu 9',
      nb: 17,
      img: 'assets/images/18.jpg',
      description: 'description du cours',
      lang: 'en'
    },
    {
      key: 10,
      title: 'Menu 10',
      nb: '07',
      img: 'assets/images/18.jpg',
      description: 'description du cours',
      lang: 'en'
    },
    {
      key: 11,
      title: 'Menu 11',
      nb: 12,
      img: 'assets/images/18.jpg',
      description: 'description du cours',
      lang: 'en'
    },
    {
      key: 12,
      title: 'Menu 12',
      nb: 10,
      img: 'assets/images/18.jpg',
      description: 'description du cours',
      lang: 'fr'
    }

  ];
  ngOnInit() {}


  // faire un substring de la description des cours pour afficher pour chacun une description limitée 
  getCours() {
    // recupere tout les cours dan sla base de donnees
    //   this.afDB.list('Cours/').snapshotChanges(['child_added', 'child_removed']).subscribe(actions => {
    //    this.cours = [];
    //    actions.forEach(action => {
    //       if(action.payload.exportVal().lang == this.user.userData.language) {
    //         let course : cour;
    //         course.key = action.key;
    //         course.Title = action.payload.exportVal().title
    //         course.nb = action.payload.exportVal().nb;
    //         course.lang = action.payload.exportVal().lang;
    //         course.img = action.payload.exportVal().img;
    //         this.cours.push(course);
    //       }
    //    });
    //  });
    //      return this.cours;
    console.log(this.cours);
    this.cours.forEach(lecour => {
      if (lecour.lang === 'en') {
        this.courses.push(lecour);
      }
      else {
        this.coursFr.push(lecour);
      }
    });
  }

  showSubMenu(menuKey) {
    console.log(menuKey);
    // recuperation par le service SousMenu de la liste des sous menus du menu ayant pour cle menuKey qui vient d'etre selectionne
    this.subMenu.getSubMenuFromMenuKey(menuKey);
    // rediriger ver la page des sousMenu    
    this.router.navigate(['/sous-menu']);
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { TypePanneau } from 'src/app/_models/typePanneau.model';
import { panneau } from 'src/app/_models/panneau.model';
import { UserService } from 'src/app/_services/user.service';
import { PanneauService } from 'src/app/_services/panneau.service';
import { Router } from '@angular/router';
import { DarkModeService } from 'src/app/_services/dark.service';

@Component({
  selector: 'app-les-panneaux',
  templateUrl: './les-panneaux.page.html',
  styleUrls: ['./les-panneaux.page.scss'],
})
export class LesPanneauxPage implements OnInit, OnDestroy {

  typePanneaux: any;
  type: any;
  
  currentType: number;
  SameLangTypePan: any;

  panneaux = [] as panneau[];
  allPan: panneau[];

  constructor(
    private user: UserService,
    private pan: PanneauService,
    private darkMode: DarkModeService,
    private router: Router
  ) {
    this.getPanels();
    this.getFirstTypeFromUserLanguage();
    this.getSameLangTypePan();
    this.initializePanels();
  }

  ngOnInit() {
    // initialisatin du premier type de panneaux à afficher
    // this.type = this.typePanneaux[0];
    // recupération de l'indice du premier type de panneaux
    // this.currentType = 0;
    //this.getSameLangTypePan();
    this.getFirstTypeFromUserLanguage();

    // initialisation du tableau de panneaux
    this.initializePanels();
  }

  getFirstTypeFromUserLanguage() {
    this.type = null;
    this.getSameLangTypePan();
    this.type = this.SameLangTypePan[0];
    this.currentType = 0 ;     
  }

  // fonction qui permet d'afficher le type de panneaux précédent
  previous() {
    if (this.currentType > 0 ) {
      console.log('next =>' + this.currentType);
        this.currentType = this.currentType - 1;
        this.type = this.SameLangTypePan[this.currentType];
        console.log('actual =>' + this.currentType);
      console.log('previous => ' + (this.currentType - 1));
      this.initializePanels();
    }
  }

  // fonction qui permet d'afficher le type de panneaux suivant
  next() {
    console.log('samlang =>' + (this.SameLangTypePan.length - 1));
    if (this.currentType < this.SameLangTypePan.length -1) {
      console.log('previous =>' + this.currentType);
        this.currentType = this.currentType + 1;
        this.type = this.SameLangTypePan[this.currentType];
        console.log('actual =>' + this.currentType);
      console.log('next => ' + (this.currentType + 1));
      this.initializePanels();
    }
  }

  showPanels(type) {
  }

  getSameLangTypePan() {
    this.SameLangTypePan = [];
    this.typePanneaux.forEach(typePan => {
      if (typePan.lang === this.user.userData.language) {
        this.SameLangTypePan.push(typePan);
      }
    });
  }

  showDetails(selectedPan) {
    this.pan.panneauData = selectedPan;
    this.router.navigate(['/signification']);
  }

  initializePanels() {

    this.panneaux = [] as panneau[];
    for ( let i = 0; i < this.allPan.length; i++) {
      if (this.allPan[i].parent === this.SameLangTypePan[this.currentType].key) {
        this.panneaux.push(this.allPan[i]);
      }
    }
  }

  getPanels() {
    this.typePanneaux = [
      {
        key: '1',
        title: 'type de panneaux 1',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        key: '2',
        title: 'type de panneaux 2',
        img: 'assets/logo-pdf0.png',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        key: '3',
        title: 'profil 3',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      },
      {
        key: '4',
        title: 'profil 4',
        img: 'assets/logo-pdf0.png',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      }
    ];
    this.allPan = [
      {
        parent: '1',
        key: '1',
        title: 'Titre du panneau',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        parent: '1',
        key: '2',
        title: 'Titre du panneau',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        parent: '2',
        key: '3',
        title: 'Titre du panneau',
        img: 'assets/logo-pdf0.png',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        parent: '2',
        key: '4',
        title: 'Titre du panneau',
        img: 'assets/logo-pdf0.png',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        parent: '3',
        key: '1',
        title: 'Titre du panneau',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      },
      {
        parent: '3',
        key: '2',
        title: 'Titre du panneau',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      },
      {
        parent: '4',
        key: '3',
        title: 'Titre du panneau',
        img: 'assets/logo-pdf0.png',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      },
      {
        parent: '4',
        key: '4',
        title: 'Titre du panneau',
        img: 'assets/logo-pdf0.png',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      },
      {
        parent: '1',
        key: '5',
        title: 'Titre du panneau',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        parent: '1',
        key: '6',
        title: 'Titre du panneau',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        parent: '2',
        key: '7',
        title: 'Titre du panneau',
        img: 'assets/logo-pdf0.png',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        parent: '2',
        key: '8',
        title: 'Titre du panneau',
        img: 'assets/logo-pdf0.png',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        parent: '3',
        key: '5',
        title: 'Titre du panneau',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      },
      {
        parent: '3',
        key: '6',
        title: 'Titre du panneau',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      },
      {
        parent: '4',
        key: '7',
        title: 'Titre du panneau',
        img: 'assets/logo-pdf0.png',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      },
      {
        parent: '4',
        key: '8',
        title: 'Titre du panneau',
        img: 'assets/logo-pdf0.png',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      },
      {
        parent: '1',
        key: '9',
        title: 'Titre du panneau',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        parent: '1',
        key: '10',
        title: 'Titre du panneau',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        parent: '2',
        key: '11',
        title: 'Titre du panneau',
        img: 'assets/logo-pdf0.png',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        parent: '2',
        key: '12',
        title: 'Titre du panneau',
        img: 'assets/logo-pdf0.png',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        parent: '3',
        key: '9',
        title: 'Titre du panneau',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      },
      {
        parent: '3',
        key: '10',
        title: 'Titre du panneau',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      },
      {
        parent: '4',
        key: '11',
        title: 'Titre du panneau',
        img: 'assets/logo-pdf0.png',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      },
      {
        parent: '4',
        key: '12',
        title: 'Titre du panneau',
        img: 'assets/logo-pdf0.png',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      },
      {
        parent: '1',
        key: '13',
        title: 'Titre du panneau',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        parent: '1',
        key: '14',
        title: 'Titre du panneau',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        parent: '2',
        key: '15',
        title: 'Titre du panneau',
        img: 'assets/logo-pdf0.png',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        parent: '2',
        key: '16',
        title: 'Titre du panneau',
        img: 'assets/logo-pdf0.png',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        parent: '3',
        key: '13',
        title: 'Titre du panneau',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      },
      {
        parent: '3',
        key: '14',
        title: 'Titre du panneau',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      },
      {
        parent: '4',
        key: '15',
        title: 'Titre du panneau',
        img: 'assets/logo-pdf0.png',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      },
      {
        parent: '4',
        key: '16',
        title: 'Titre du panneau',
        img: 'assets/logo-pdf0.png',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      },
      {
        parent: '1',
        key: '17',
        title: 'Titre du panneau',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        parent: '1',
        key: '18',
        title: 'Titre du panneau',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        parent: '2',
        key: '19',
        title: 'Titre du panneau',
        img: 'assets/logo-pdf0.png',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'fr'
      },
      {
        parent: '3',
        key: '17',
        title: 'Titre du panneau',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      },
      {
        parent: '3',
        key: '18',
        title: 'Titre du panneau',
        img: 'assets/defaultProfil.jpeg',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      },
      {
        parent: '4',
        key: '19',
        title: 'Titre du panneau',
        img: 'assets/logo-pdf0.png',
        description: 'Description du panneau, description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau , description du panneau,  description du panneau  ',
        lang: 'en'
      }

    ];
  }

  ngOnDestroy() {
    this.allPan = null;
    this.currentType = null;
    this.pan = null;
    this.typePanneaux = null;
    this.type = null;
    this.panneaux = null;
    this.SameLangTypePan = null;
    console.log('destroyed');
  }

}

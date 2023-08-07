import { Component } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from './_services/user.service';
import { Router } from '@angular/router';
import { DarkModeService } from './_services/dark.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  menuItemsFr = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Actualités',
      url: '/les-actualites',
      icon: 'newspaper'
    },
    {
      title: 'Les Cours',
      url: '/les-cours',
      icon: 'book'
    },
    {
      title: 'A propos',
      url: '/a-propos',
      icon: 'information-circle'
    },
    {
      title: 'Les panneaux',
      url: '/les-panneaux',
      icon: 'trail-sign'
    },
    {
      title: 'Les tests',
      url: '/les-tests',
      icon: 'speedometer'
    },
    {
      title: 'Editer mon profil',
      url: '/edit-profil',
      icon: 'person'
    },
    {
      title: 'Chat',
      url: '/simple-chat',
      icon: 'chatbubble'
    },
    {
      title: 'Paramètres',
      url: '/parametres',
      icon: 'settings'
    }
  ];

  menuItemsEn = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'News',
      url: '/les-actualites',
      icon: 'newspaper'
    },
    {
      title: 'Courses',
      url: '/les-cours',
      icon: 'book'
    },
    {
      title: 'About',
      url: '/a-propos',
      icon: 'information-circle'
    },
        {
      title: 'Signs',
      url: '/les-panneaux',
      icon: 'trail-sign'
    },
    {
      title: 'tests',
      url: '/les-tests',
      icon: 'speedometer'
    },
    {
      title: 'Parameters',
      url: '/parametres',
      icon: 'settings'
    }
  ];

  menuItems = [];

  langText = 'Par';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private menu: MenuController,
    private router: Router,
    private user: UserService,
    private darkMode: DarkModeService,
    private statusBar: StatusBar
    ) {
    this.splashScreen.show();
    this.initializeApp();
    this.AdapteMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  AdapteMenu() {
    this.user.userData.nom = 'Nono Mabou';
    if (this.user.userData.language === 'fr') {
      this.menuItems = this.menuItemsFr;
      this.langText = 'Par';
    }
    else {
      this.menuItems = this.menuItemsEn;
      this.langText = 'By';
    }
  }

  goTo(item) {
    this.menu.enable(false);
    this.router.navigate([item.url]);
    this.menu.enable(true);
  }

}

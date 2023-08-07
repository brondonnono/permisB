import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService } from '../../_services/user.service';
import { article } from 'src/app/_models/article.model';
import { DarkModeService } from 'src/app/_services/dark.service';
import { ActualiteService } from 'src/app/_services/actualite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slider: any;
  slideOptions = {
      initialSlide: 0,
      slidesPerView: 1,
      autoplay: true
  };

  actus = [] as article[];

  AERulesImgFr = [
    {
      title: 'Prudence',
      img: 'assets/images/prudence.png'
    },
    {
      title: 'Respect du code',
      img: 'assets/images/respect_du_code.png'
    },
    {
      title: 'Conduite defensive',
      img: 'assets/images/conduite_defensive.png'
    }
  ];

  AERulesImgEn = [
    {
      title: 'Prudence',
      img: 'assets/images/prudence.png'
    },
    {
      title: 'Respect du code',
      img: 'assets/images/respect_du_code.png'
    },
    {
      title: 'Conduite defensive',
      img: 'assets/images/conduite_defensive.png'
    }
  ];

  AEImg = [
    {
      title: 'titre 1',
      img: 'assets/images/4.jpeg'
    },
    {
      title: 'titre 2',
      img: 'assets/images/5.jpeg'
    },
    {
      title: 'titre 3',
      img: 'assets/images/6.jpeg'
    },
    {
      title: 'titre 4',
      img: 'assets/images/18.jpg'
    },
    {
      title: 'titre 5',
      img: 'assets/t.jpeg'
    }
  ];

  TempActus = [] as article[];

  constructor(
    private alertController: AlertController,
    private user: UserService,
    private router: Router,
    private actualite: ActualiteService,
    private darkMode: DarkModeService
  ) { this.getLastActus(); }

  slideChanged()
  {
    this.slider.stopAutoplay(); //this code for slide after page change
  }

  getLastActus() {
    this.TempActus = [] as article[];
    this.TempActus.push({
      title: 'Ici on aura le titre de cette actualite',
      key: '1',
      lang: 'fr',
      img: 'assets/images/4.jpeg',
      datePub: '06/10/2017',
      description: 'Ici on aura un extrait de Description de cette actualite',
    });
    this.TempActus.push({
      title: 'Ici on aura le titre de cette actualite',
      key: '2',
      lang: 'fr',
      img: 'assets/images/6.jpeg',
      datePub: '06/10/2017',
      description: 'Ici on aura un extrait de Description de cette actualite',
    });
    this.TempActus.push({
      title: 'Ici on aura le titre de cette actualite',
      key: '2',
      lang: 'fr',
      img: 'assets/images/5.jpeg',
      datePub: '06/10/2017',
      description: 'Ici on aura un extrait de Description de cette actualite',
    });
    this.TempActus.push({
      title: 'Ici on aura le titre de cette actualite',
      key: '2',
      lang: 'fr',
      img: 'assets/images/18.jpg',
      datePub: '06/10/2017',
      description: 'Ici on aura un extrait de Description de cette actualite',
    });
    this.TempActus.push({
      title: 'Ici on aura le titre de cette actualite',
      key: '2',
      lang: 'fr',
      img: 'assets/t.jpeg',
      datePub: '06/10/2017',
      description: 'Ici on aura un extrait de Description de cette actualite',
    });
    this.setMinDescription();
  }

  setMinDescription() {
    for (let item of this.TempActus) {
      let elem = item;
      if (elem.description.length > 40) {
        elem.description = elem.description.substr(0,40);
        elem.description = elem.description + '...';
      }
      this.actus.push(elem);
    }
  }

  showDetail(item: article) {
    for (let actus of this.actus) {
      if (actus.key === item.key) {
        this.actualite.articleData = actus;
        console.log(this.actus);
        this.router.navigate(['/actualite-detail']);
        return;
      }
    }
  }

}

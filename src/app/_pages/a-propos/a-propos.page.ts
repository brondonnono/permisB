import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { AboutService } from 'src/app/_services/about.service';
import { UserService } from 'src/app/_services/user.service';
import { aproposGrp, apiGet } from 'src/app/api/apiRoutes';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { DarkModeService } from 'src/app/_services/dark.service';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.page.html',
  styleUrls: ['./a-propos.page.scss'],
})
export class AProposPage implements OnInit {

  aboutData: any = {};
  slider: any;
  rejected: boolean = false;
  errorMessage: any;
  BASE_URL = 'http://localhost:8000/';
  total: number;
  sliderImg: any;

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor(
    private user: UserService,
    private toastCtrl: ToastController,
    private aboutService: AboutService,
    private darkMode: DarkModeService,
    private http: HttpClient,
    private document: DocumentViewer,
    private router: Router,
    private actionSheetCtrl: ActionSheetController
  ) { }

  slideChanged() {
    this.slider.stopAutoplay(); // this code for slide after page change
  }

  ngOnInit() {
    this.getAbout();
    this.fakeData();
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    };
    this.document.viewDocument('assets/pdf/pdf.pdf', 'application/pdf', options);
  }


  getAbout() {
    //recupere toutes les donnees de l'apropos de la base de donnees
    const url = environment.API_URL + aproposGrp + apiGet;
    this.http.get(url).toPromise().then((res:any)=> {
      if(res) {
        if(res.data && res.data[0]){
          this.aboutData = res.data[0];
          console.log(this.aboutData);
          this.total = this.aboutData.length;
        }
      }
      console.log(this.aboutData);
    }).catch((reason:any) => {
      this.rejected = true;
      this.errorMessage = reason;
    }).finally();
    
    // this.http.get(url).subscribe((res:any) => {
    //   if(res) {
    //     if(res.data && res.data[0]){
    //       this.aboutData = res.data[0];
    //       console.log(this.aboutData);
    //       this.total = this.aboutData.length;
    //     }
    //   }
    //   console.log(this.aboutData);
    //  // return this.aboutData;
    // });
  }

  async openContact(tel) {
    const mode = 'ios'; // this.config.get('mode');
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contacter l\'auto ecole',
      buttons: [
        {
          text: `Appeler ( ${tel} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + tel);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
      await actionSheet.present();
  }

  async sendMail(email) {
    const mode = 'ios'; // this.config.get('mode');
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Envoyer un mail à l\'auto ecole',
      buttons: [
        {
          text: `Ecrire ( ${email} )`,
          icon: mode !== 'ios' ? 'write' : null,
          handler: () => {
            window.open('mail:' + email);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

      await actionSheet.present();
  }

  async getAboutData() {
    this.aboutData = null;
  }

  showToast(Message: string) {
    this.toastCtrl.create({
      message: Message,
      duration: 3000
    }).then(toastData => toastData.present);
  }

  fakeData() {
    // this.aboutData = {
    //   key: 1,
    //   nom: 'Auto Ecole Justine',
    //   email: 'autoecole@gmail.com',
    //   tel: '+237 655429550',
    //   presentation: 'Ce cours s’adresse à des utilisateurs souhaitant se perfectionner sur le logiciel Word ' +
    //   'dans la version 2007. Il est important de préciser que ce cours ne traite pas ' +
    //   'exhaustivement de toutes les fonctions du logiciel Word, mais présente les fonctions, ' +
    //   'qui semblent les plus utiles dans le contexte d’une entreprise individuelle.',
    //   services:  'Ce cours s’adresse à des utilisateurs souhaitant se perfectionner sur le logiciel Word ' +
    //   'dans la version 2007. Il est important de préciser que ce cours ne traite pas ' +
    //   'exhaustivement de toutes les fonctions du logiciel Word, mais présente les fonctions, ' +
    //   'qui semblent les plus utiles dans le contexte d’une entreprise individuelle.',
    //   localisation: 'Dschang, Cameroun'
    //   };
    this.sliderImg = {
      img1: '../../../assets/images/4.jpeg',
      img2: '../../../assets/images/5.jpeg',
      img3: '../../../assets/images/6.jpeg',
      img4: '../../../assets/images/18.jpg'
    };
  }

}

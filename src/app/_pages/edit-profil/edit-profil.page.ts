import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { User } from 'src/app/_models/user.model';
import { UserService } from 'src/app/_services/user.service';
import { Camera, CameraOptions, DestinationType } from '@ionic-native/camera/ngx';
import { ProfilValidator } from './profilFormsValidators';
@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.page.html',
  styleUrls: ['./edit-profil.page.scss'],
})
export class EditProfilPage extends ProfilValidator implements OnInit {
  location = 'madison';
  conferenceDate = '2047-05-17';
  userNewdata = {} as User;
  img: string;
  imagePath: string;
  upload: any;
  image = '';
  imgUrl = '';
  val = '';

  constructor(
    private user: UserService,
    private alertCrtl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private camera: Camera,
    protected formBuilder: FormBuilder
  ) {
      super(formBuilder);
    }

    ngOnInit() {
    }
    async addPicture(){
      // if (this.user.userData.language === 'fr') {
      //   const alert = await this.alertCrtl.create({
      //   header: '',
      //   message: '',
      //   buttons: [
      //     {
      //       text: 'Prendre une Photo',
      //       handler: () => {
      //         this.addPhoto('camera');
      //       }
      //     },
      //     {
      //       text: 'Ouvrir la galerie',
      //       handler: () => {
      //         this.addPhoto('library');
      //       }
      //     },
      //   ]
      // });
      //   await alert.present();
      // }
      // else {
      //   const alert = await this.alertCrtl.create({
      //     header: '',
      //     message: '',
      //     buttons: [
      //       {
      //         text: 'Take a Picture',
      //         handler: () => {
      //           this.addPhoto('camera');
      //         }
      //       },
      //       {
      //         text: 'Open gallery',
      //         handler: () => {
      //           this.addPhoto('library');
      //         }
      //       },
      //     ]
      //   });
      //   await alert.present();
      // }
    }

    async addPhoto(source: string) {
      if (source === 'camera') {
          const cameraImage = await  this.openCamera();
          this.image = 'data:image/jpg;base64,' + cameraImage;
          //this.user.userData.img = this.image;
      }
      else {
        const libraryImage = await  this.openLibrary();
        this.image = 'data:image/jpg;base64,' + libraryImage;
        // this.user.userData.img = this.img;
        // this.uploadFirebase();
        //this.user.userData.img = this.image;
      }
    }

    async openCamera(){
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetHeight: 1000,
        targetWidth: 1000,
        sourceType: this.camera.PictureSourceType.CAMERA
      };
      return await this.camera.getPicture(options);
    }

    async openLibrary() {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetHeight: 1000,
        targetWidth: 1000,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      };
      return await this.camera.getPicture(options);
    }

    showToast(Message: string) {
      this.toastCtrl.create({
        message: Message,
        duration: 3000
      }).then(toastData => toastData.present);
    }

    async valider() {
      // upload de la variable user.userData sur le serveur pour remplacer les precedentes informations  
      let loader = this.loadingCtrl.create({
        message: 'Veuillez patientez..'
      });
      (await loader).present();
      try {
        // this.uploadFirebase();
        // this.userNewdata = this.user.userData;
        // await this.firestore.collection('users').add(this.userNewdata);
        // this.showToast('Profil mis à jour');
        // (await loader).dismiss();
      } catch (e) {
        this.showToast(e);
      }
    }

    // uploadFirebase(){
    //   console.log('debut');
    //   this.imagePath = this.user.userData.email + new Date().getTime() + '.jpg';
    //   this.upload = this.afSG.ref(this.imagePath).putString(this.image, 'data_url');
    //   this.afSG.ref(this.imagePath).getDownloadURL().subscribe(url => {
    //     this.imgUrl = url;
    //     console.log(this.imgUrl);
    //   });
    //   console.log('fin');
    //   if (this.imgUrl !== '') {
    //     this.user.userData.img = this.imgUrl;
    //   }
    // }

    async uploadFirebase(){ 
      const loading= await this.loadingCtrl.create({
        message:'attendez',
        duration:10000
      });
      await loading.present();
      this.imagePath = new Date().getTime() + '.jpg';
      // this.upload = this.afSG.ref(this.imagePath).putString(this.image,'data_url');
      // this.upload.then(async () => {
      //   this.afSG.ref(this.imagePath).getDownloadURL().subscribe(url => {
      //     this.imgUrl = url;
      //     console.log(this.imgUrl);
      //   });
      //   await loading.dismiss();
      //   const alert= await this.alertCrtl.create({
      //     header: 'FElICITATION',
      //     message: 'l envoie est terminer',
      //     buttons: ['OK']
      //   })
      // });
    }

}

import { Component } from '@angular/core';
import { FormValidator } from './connexionFormsValidators';

import { FormBuilder } from '@angular/forms';

import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

import { UserService } from 'src/app/_services/user.service';
import { AlertController,ToastController } from '@ionic/angular';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage extends FormValidator {

  static cmpt = 0;
  state = true;
  connected: boolean;

  public constructor(
    protected formBuilder: FormBuilder,
    private user: UserService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private tts: TextToSpeech,
  ) {
    super(formBuilder);
    this.speek();
  }

  speek(){
    this.tts.speak('Hello World Hello World Hello World Hello World Hello World Hello World')
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
    this.tts.stop();
    this.tts.speak('bienvenue au cameroun permis b.').then(() => console.log('lecture reussie')).catch((motif:any) =>console.log(motif));
}
 signin() {

   if (this.user.userData.email.trim() !=='') {
      console.log(this.user.userData.email.trim() + " " + this.user.userData.password.trim());
      let errMsg = '';
        let credentials = {
          email: this.user.userData.email,
          password: this.user.userData.password
        };
   }
 }


  showToast(Message: string) {
    this.toastCtrl.create({
      message: Message,
      duration: 3000
    }).then(toastData => toastData.present);
  }

  async presentMessage(message) {
    const alert = await this.alertCtrl.create(message);
    await alert.present();
  }

}

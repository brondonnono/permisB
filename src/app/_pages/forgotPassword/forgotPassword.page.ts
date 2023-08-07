import { Component, OnInit } from '@angular/core';
import { ForgotValidator } from './forgotValidators';
import { FormBuilder } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user.model';


@Component({
  selector: 'app-forgotPassword',
  templateUrl: './forgotPassword.page.html',
  styleUrls: ['./forgotPassword.page.scss'],
})
export class ForgotPasswordPage extends ForgotValidator implements OnInit {

  lang: any;
  connected: boolean;

  public ngOnInit() {}

  public constructor(

    protected formBuilder: FormBuilder,
    private alertCrtl: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    private user: UserService
  ) {
    super(formBuilder);
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.lang = JSON.parse(params.special);
        // console.log("language => "+ this.lang);
      }
    });
    console.log('language => ' + user.userData.language);
  }

  forgot(email: string) {
    this.router.navigate(['/signin']);
  }

  async presentMessage(message) {
    const alert = await this.alertCrtl.create(message);
    await alert.present();
  }

}

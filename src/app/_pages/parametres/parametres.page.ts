import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { DarkModeService } from 'src/app/_services/dark.service';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.page.html',
  styleUrls: ['./parametres.page.scss'],
})
export class ParametresPage implements OnInit {

  constructor(
    private user: UserService,
    private router: Router,
    private darkMode: DarkModeService 
  ) { }

  ngOnInit() {}

  logout() {}
}

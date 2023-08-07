import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SousMenuService } from 'src/app/_services/sous-menu.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-sous-menu',
  templateUrl: './sous-menu.page.html',
  styleUrls: ['./sous-menu.page.scss'],
})
export class SousMenuPage implements OnInit {

  subMenulist = [];

  constructor(
    private user : UserService,
    private subMenu: SousMenuService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subMenulist = this.subMenu.getSelectedSubMenu();
  }

  showCourse() {
    // rediriger ver la page des detail du cours   
    this.router.navigate(['/detail-page']);
  }

}

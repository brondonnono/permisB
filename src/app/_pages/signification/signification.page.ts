import { Component, OnInit } from '@angular/core';
import { PanneauService } from '../../_services/panneau.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-signification',
  templateUrl: './signification.page.html',
  styleUrls: ['./signification.page.scss'],
})
export class SignificationPage implements OnInit {

  pan: any;
  constructor(
    private selectedPan: PanneauService,
    private user: UserService
    ) { }

  ngOnInit() {
    // recuperation du cours envoye depuis la page les-cours
    this.pan = this.selectedPan.panneauData;
  }

}

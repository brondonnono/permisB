import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActualiteService } from 'src/app/_services/actualite.service';
import { UserService } from 'src/app/_services/user.service';
import { article } from 'src/app/_models/article.model';

@Component({
  selector: 'app-actualite-detail',
  templateUrl: './actualite-detail.page.html',
  styleUrls: ['./actualite-detail.page.scss'],
})
export class ActualiteDetailPage implements OnInit {

  article = {} as article;
  constructor(
    private actualite: ActualiteService,
    private user: UserService,
    // private transfer: FileTransfer,
    // private file: File,
    private router: Router
  ) {
    // recuperation de l'article selectionne sur la page actualite
      this.article = this.actualite.articleData;
   }

  ngOnInit() {}

}

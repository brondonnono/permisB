import { Component, OnInit } from '@angular/core';
import { ItemCourService } from 'src/app/_services/itemCour.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.page.html',
  styleUrls: ['./detail-page.page.scss'],
})

/**cette page recevra les donnees venant d'une categorie de cours
 * pour l'affichage d'un cours precis
 * (elle pourra etre reutilise et adapte pour les panneaux et les tests
 * et/ou les actualites)
 */

export class DetailPagePage implements OnInit {

  public mycourse: any = {};
  actualPage = 0;
  totalPage = 0;
  tmpData : any = {};
  constructor(
    private item: ItemCourService,
    private user: UserService
  ) {
    // recuperation des detailles du cours selectionne sur la page course 
      this.mycourse = this.item.getCourse();
   }

  ngOnInit() {
    this.initPage();
  }

  initPage() {
    this.actualPage = 1;
    this.tmpData.title = this.mycourse.title1;
    this.tmpData.img = this.mycourse.img1;
    this.tmpData.description = this.mycourse.description1;
    this.totalPage = 2;
  }

  next() {
    if(this.totalPage > this.actualPage) {
      this.actualPage = this.actualPage + 1;
      this.mycourse.title1 = this.mycourse.title2;
      this.mycourse.img1 = this.mycourse.img2;
      this.mycourse.description1 = this.mycourse.description2;
      console.log("n");
    }

  }

  previous() {
    if(this.actualPage > 1) {
      this.actualPage = this.actualPage - 1;
      this.mycourse.img1 = this.tmpData.img;
      this.mycourse.description1 = this.tmpData.description;
      console.log("p");
    }
  }

}

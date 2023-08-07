import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActualiteService } from 'src/app/_services/actualite.service';
import { article } from 'src/app/_models/article.model';
import { UserService } from 'src/app/_services/user.service';
import { DarkModeService } from 'src/app/_services/dark.service';
import { HttpClient } from '@angular/common/http';
import { actualiteGrp, apiGet } from 'src/app/api/apiRoutes';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-les-actualites',
  templateUrl: './les-actualites.page.html',
  styleUrls: ['./les-actualites.page.scss'],
})
export class LesActualitesPage implements OnInit {

  listActualites = [] as article[];
  actualites = [];
  search: string;
  actu: any;
  errorMessage: any;
  total: number;
  URL = environment.BASE_URL;
  rejected: boolean = false;

  constructor(
    private user: UserService,
    private actualite: ActualiteService,
    private darkMode: DarkModeService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.initialiseStaticActus();
  }

  initialiseStaticActus() {
    this.getActualites();
    this.setMinDescription();
  }

// verifier le decoupage pour l'affichage de la description
// realiser un passage par valeur et non par reference

  setMinDescription() {
    for (let item of this.listActualites) {
      let elem = item;
      if (elem.title.length > 60) {
        elem.title = elem.title.substr(0,60);
        elem.title = elem.title + '...';
      }
      this.actualites.push(elem);
    }
  }

  getActualites() {
    //recupere toutes les actualites de la base de donnees
    const url = environment.API_URL + actualiteGrp + apiGet;
    this.http.get(url).toPromise().then((res:any)=> {
      if(res) {
        this.rejected = false;
        this.actualites = res.data;
        console.log(res);
        console.log(this.actualites);
      }
    }).catch((reason:any) => {
      this.rejected = true;
      this.errorMessage = reason;
    }).finally();
    // this.http.get(url).subscribe((res:any) => {
    //   if(res) {
    //     this.actualites = res.data;
    //     console.log(res);
    //     console.log(this.actualites);
    //   }
    //   // return this.actus;
    // });
  }

  showDetail(item: article) {
    for (let actus of this.actualites) {
      if (actus.key === item.key) {
        this.actualite.articleData = actus;
        console.log(this.actualites);
        console.log(this.actualite.articleData);
        this.router.navigate(['/actualite-detail']);
        return;
      }
    }
  }

  filtreActualites(ev: any) {
    // this.listActualites = actualite.getActualites();
    // const val = ev.target.value;
    // // tslint:disable-next-line: triple-equals
    // if (val && val.trim() != '') {
    //   this.listActualites = this.listActualites.filter((item) => {
    //     return ((item.title.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.datePub.toLowerCase().indexOf(val.toLowerCase()) > -1));
    //   });
    // }
    //this.initialiseStaticActus();
    const val = ev.target.value;
    // tslint:disable-next-line: triple-equals
    if (val && val.trim() != '') {
      this.actualites = this.actualites.filter((item) => {
        return ((item.titre.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.created_at.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
  }

}

import { Injectable } from '@angular/core';
import { User } from 'src/app/_models/user.model'
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any[];

  userData = {} as User;

  userDataClean = {}  as User;

  language: string;

  constructor(
    private http : HttpClient
  ) { this.setDefaultValue(); }

  // fonction de deconnexion
  logout() {}
  // fonction de definition de la langue par defaut
  setDefaultValue() {
    this.userData.language = 'fr';
    this.userDataClean.language = 'fr';
    this.language = this.userData.language;
    this.userData.img = '../../assets/defaultProfil.jpeg';
    this.userData.email = 'brondonnono3@gmail.com';
  }
  // fonction de suppression des donnees de l'utilisateur courant
  clean() {
    this.language = this.userData.language;
    this.userData = this.userDataClean;
    this.userData.language = this.language;
    this.userData.img = '../../assets/defaultProfil.jpeg';
  }
  // fonction qui permet de mettre a jour les donnees interne de l'utilisateur
  updateData(userNewData: User, id: number) {
    userNewData.uid = this.userData.uid;
    userNewData.language = this.userData.language;
    userNewData.isconnected = true;
    this.clean();
    this.userData.uid = userNewData.uid;
    this.userData.nom = userNewData.nom;
    this.userData.pre = userNewData.pre;
    if (userNewData.img === '') {
      this.userData.img = '../../assets/defaultProfil.jpeg';
    }
    else {
      this.userData.img = userNewData.img;
    }
    this.userData.tel = userNewData.tel;
    this.userData.email = userNewData.email;
    this.userData.language = userNewData.language;
    this.userData.isconnected = userNewData.isconnected;

    let url= environment.API_URL + "users/" + id;
    let headers = new HttpHeaders({'Content-Type':'application/json'});
      
    return this.http.put(url, userNewData, {headers : headers}).toPromise();
  }
}

//// refaire se service et

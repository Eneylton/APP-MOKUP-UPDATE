import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public contatos: Array<Object> = [];

  constructor(public navCtrl: NavController) {


    this.contatos = [
      {
        "nome": "Maria Heaver Barros",
        "img": "https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/venkman.jpg",
        "msn": " Olá tudo bem"
      },
      {
        "nome": "Rafissa Araujo Silva",
        "img": "https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/spengler.jpg",
        "msn": "O vasco e melhor"
      },
      {
        "nome": "Jose Andrade",
        "img": "https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/tully.jpg",
        "msn": "Não Brinca"
      },
      {
        "nome": "Carlos Jose Silva",
        "img": "https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/tully.jpg",
        "msn": "Não Brinca"
      },
      {
        "nome": "Raimundo Nonato Oliveira",
        "img": "https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/tully.jpg",
        "msn": "Não Brinca"
      }
    ];

  }


}

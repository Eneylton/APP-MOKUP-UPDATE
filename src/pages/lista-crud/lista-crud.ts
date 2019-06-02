import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({})
@Component({
  selector: 'page-lista-crud',
  templateUrl: 'lista-crud.html',
})
export class ListaCrudPage {

  public contatos: Array<Object> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.contatos = [
      {
        "nome": "Maria Isabell",
        "img": "https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/venkman.jpg",
        "msn": " Olá tudo bem"
      },
      {
        "nome": "Rafissa Moteiro",
        "img": "https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/spengler.jpg",
        "msn": "O vasco e melhor"
      },
      {
        "nome": "Jose Achieta",
        "img": "https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/tully.jpg",
        "msn": "Não Brinca"
      }

    ];


  }

  openEditarPage(contato: any) {

    this.navCtrl.push('UpdatePage', { "contato": contato });
    
  }
}

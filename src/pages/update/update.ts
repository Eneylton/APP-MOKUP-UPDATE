import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';


@IonicPage({})
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {

  contatoGroup: FormGroup;

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {

  }

  ionViewDidLoad(){
    let contato = this.navParams.get('contato');

    console.log(contato.nome);
    console.log("===========");
    console.log(contato.msn);
  }

}

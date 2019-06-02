import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaCrudPage } from './lista-crud';

@NgModule({
  declarations: [
    ListaCrudPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaCrudPage),
  ],
})
export class ListaCrudPageModule {}

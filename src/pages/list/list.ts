import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  builds:any [] = [
    {img:'assets/imgs/montreal.jpg', name:'Montreal', description:'Edificio com suite e piscina'},
    {img:'assets/imgs/bordeaux.jpg', name:'Bordeaux', description:'Edificio com duas vagas'},
  ];

  constructor(public navCtrl: NavController) {

  }

  insert(){
    
  }

}

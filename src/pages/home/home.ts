import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ListPage } from '../../pages/list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  works:any [] = [
    {img:'ios-briefcase-outline', name:'Projeto', page:ListPage, color:'cyan'},
    {img:'ios-calculator-outline', name:'Calculadora', page:'', color:'red'},
    {img:'ios-calendar-outline', name:'Revisão', page:'', color:'green'},
    {img:'ios-camera-outline', name:'Fotos', page:'', color:'purple'},
    {img:'ios-clipboard-outline', name:'Tarefas', page:'', color:'maroon'},
    {img:'ios-construct-outline', name:'Config', page:'', color:'gray'},
    {img:'ios-map-outline', name:'Locais', page:'', color:'yellow'},
    {img:'ios-mail-outline', name:'Mensagens', page:'', color:'orange'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  openMenu(page){
    if (page == '') {
      this.navCtrl.setRoot(HomePage);
    }else{
      this.navCtrl.setRoot(page);
    }
    
  }
 
}

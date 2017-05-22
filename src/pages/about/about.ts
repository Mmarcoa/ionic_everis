import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PeopleServiceProvider } from '../../providers/people-service/people-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public people: any;
  constructor(public peopleService: PeopleServiceProvider, public navCtrl: NavController) {
      this.getIceCream();
  }

  getIceCream() {
    console.log('Helado');
    this.peopleService.getData().
    then(data => {
      this.people = data;
    });
  }

}

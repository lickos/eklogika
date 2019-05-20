import { Component, OnInit } from '@angular/core';
import { EklogikaDataService } from './../../services/eklogika-data.service';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-eklogika',
  templateUrl: './eklogika.page.html',
  styleUrls: ['./eklogika.page.scss'],
})
export class EklogikaPage implements OnInit {
  datas: any;
  name: string;

  constructor(public dataService: EklogikaDataService, private router: Router, public geolocation: Geolocation) { }

  ngOnInit() {
    this.datas = this.dataService.data;
    console.log(this.datas)
    this.name = this.dataService.name;
    this.geolocation.getCurrentPosition().then((resp) => {
      let lat = resp.coords.latitude;
      let lng = resp.coords.longitude;
      let myloc = { 'lat': lat, 'lng': lng }
      this.dataService.myLoc = myloc;
      console.log(this.dataService.myLoc)
    });
  }

  openMap(data) {
    let lat = parseFloat(data.Latitude);
    let lng = parseFloat(data.Longitude);
    let cords = { 'lat': lat, 'lng': lng };
    this.dataService.cords = cords
    this.dataService.eklogiko_diamerisma = data.eklogiko_diamerisma
    this.dataService.eklogeis = data.eklogeis;
    this.dataService.tmima = data.eklogiko_tmima;
    this.dataService.katastima = data.katastima;
    this.router.navigate(['/maps'])
  }
}

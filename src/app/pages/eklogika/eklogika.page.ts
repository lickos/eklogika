import { Component, OnInit } from '@angular/core';
import { EklogikaDataService } from './../../services/eklogika-data.service';
import { geodata } from './../../constants/geodata';
import { genika } from './../../constants/genika'

@Component({
  selector: 'app-eklogika',
  templateUrl: './eklogika.page.html',
  styleUrls: ['./eklogika.page.scss'],
})
export class EklogikaPage implements OnInit {
  datas: any;
  name: string;
  geodata: any;
  genika: any;

  constructor(public dataService: EklogikaDataService) { }

  ngOnInit() {
    this.geodata = geodata;
    this.datas = this.dataService.data;
    this.genika = genika
    this.name = this.dataService.name;
    for (let x of this.geodata) {
      for (let y of this.genika) {
        if (x.Name == y.eklogiko_tmima) {
          y.Latitude = x.Latitude;
          y.Longitude = x.Longitude
        }
      }
    }
    console.log(this.genika)
  }
}

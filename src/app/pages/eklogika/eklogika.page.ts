import { Component, OnInit } from '@angular/core';
import { EklogikaDataService } from './../../services/eklogika-data.service'

@Component({
  selector: 'app-eklogika',
  templateUrl: './eklogika.page.html',
  styleUrls: ['./eklogika.page.scss'],
})
export class EklogikaPage implements OnInit {
  data: any;

  constructor(public dataService: EklogikaDataService) { }

  ngOnInit() {
    this.data = this.dataService.data;
    console.log(this.data)
  }

}

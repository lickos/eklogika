import { Component, OnInit } from '@angular/core';
import { diamerismata } from './../constants/diamerismata';
import { EklogikaDataService } from './../services/eklogika-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {
  diamerismata: any = diamerismata;
  constructor(public dataService: EklogikaDataService, private router: Router) { }

  ngOnInit() {
  }

  openDiamerisma(data: string, name: string) {
    this.dataService.data = data;
    this.dataService.name = name;
    this.router.navigate(['/eklogika'])
  }

}

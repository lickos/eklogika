import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EklogikaDataService {

  public data: any;
  public name: string;
  public latitude: number;
  public longitude: number;
  public cords: any;
  public eklogeis: string;
  public tmima: string;
  public eklogiko_diamerisma: string;
  public myLoc: any;
  public katastima: string;

  constructor() { }
}

import { Component, OnInit, AfterContentInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { EklogikaDataService } from './../../services/eklogika-data.service';


declare var google: any;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements AfterContentInit {
  map: any;
  @ViewChild('mapElement') mapElement;
  mapOptions: any;
  location = null;
  markerOptions: any = { position: null, map: null, title: null };
  name: string;
  eklogeis: string;
  tmima: string;
  eklogiko_diamerisma: string;
  myloc: any;

  constructor(public dataService: EklogikaDataService) {
    this.location = this.dataService.cords
    this.myloc = this.dataService.myLoc
    this.name = this.dataService.name
    this.eklogeis = this.dataService.eklogeis;
    this.tmima = this.dataService.tmima;
    this.eklogiko_diamerisma = this.dataService.eklogiko_diamerisma
  }

  ngAfterContentInit(): void {

    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      {
        center: this.location,
        zoom: 12,
        mapTypeId: 'hybrid'
      });

    let myContent = 'You are here';

    let myInfowindow = new google.maps.InfoWindow({
      content: myContent
    });

    let myMarker = new google.maps.Marker({
      position: this.myloc,
      map: this.map,
      title: 'My marker'
    })

    myMarker.addListener('click', function () {
      myInfowindow.open(this.map, myMarker);
    });

    let content = '<h4>Εκλογικό Τμήμα: ' + this.tmima + '</h4>' +
      '<h4>Δημοτική Ενότητα: ' + this.name + '</h4>' +
      '<h4>Εκλογικό Διαμέρισμα: ' + this.eklogiko_diamerisma + '</h4>' +
      '<p> Εκλογείς:</p><p>' + this.eklogeis + '</p>'


    let infowindow = new google.maps.InfoWindow({
      content: content
    });

    let marker = new google.maps.Marker({
      position: this.location,
      map: this.map,
      title: this.tmima
    })

    marker.addListener('click', function () {
      infowindow.open(this.map, marker);
    });

  }

  calculateRoute(mode: string) {
    let myLat = this.myloc.lat.toString();
    let myLng = this.myloc.lng.toString();
    let myPostition = myLat + ',' + myLng;
    let destLat = this.location.lat.toString();
    let destLng = this.location.lng.toString();
    let destPosition = destLat + ',' + destLng
    let request = {
      origin: myPostition,
      destination: destPosition,
      travelMode: mode
    };
    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(this.map);
    directionsService.route(request, function (result, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections(result);
      }
    });
  }

}

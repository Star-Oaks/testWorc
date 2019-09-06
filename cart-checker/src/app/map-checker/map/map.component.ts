import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {
public latitude = 50.448612;
public  longitude = 30.522453;
public  mapType = 'roadmap';
public  zoom = 14;
public  selectedMarker

  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'true',
     
		  draggable: true,
      icon:{
          url: 'https://cdn.merixstudio.com/media/uploads/svg-logo-text-550x526.png',
          scaledSize: {
          width: 40,
          height:40
              }
          }
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
       icon:{
          url: 'https://cdn.merixstudio.com/media/uploads/svg-logo-text-550x526.png',
          scaledSize: {
          width: 40,
          height:40
              }
          },
		  draggable: false,
 
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
       icon:{
          url: 'https://cdn.merixstudio.com/media/uploads/svg-logo-text-550x526.png',
          scaledSize: {
          width: 40,
          height:40
              }
          },
		  draggable: true,
 
	  }
  ]


// just an interface for type safety.

  constructor() { }

  ngOnInit() {
  }
  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
  }
  
}
interface marker {
  lat: number;
  lng: number;
  icon?:Object;
  label?: string;
  draggable: boolean;
}
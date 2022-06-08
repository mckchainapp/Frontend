import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado-mineral',
  templateUrl: './estado-mineral.component.html',
  styleUrls: []
})
export class EstadoMineralComponent implements OnInit {

  p : number = 1 ;

  objeto : any = [
    {},
    {},
    {},
    {}
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}

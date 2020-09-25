import { Component, OnInit } from '@angular/core';
import { Flat } from '../../models/flat';
import dataJson from './entities';

@Component({
  selector: 'app-flats',
  templateUrl: './flats.component.html',
  styleUrls: ['./flats.component.scss']
})
export class FlatsComponent implements OnInit {

  flats: Flat[] = [];

  constructor() { }

  ngOnInit(): void {
    const data = JSON.parse(dataJson);
    this.flats = data['response'].map(item => new Flat().deserialize(item));
  }

}

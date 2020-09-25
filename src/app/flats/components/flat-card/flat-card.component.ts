import { Component, Input, OnInit } from '@angular/core';
import { Flat } from '../../models/flat';

@Component({
  selector: 'app-flat-card',
  templateUrl: './flat-card.component.html',
  styleUrls: ['./flat-card.component.scss']
})
export class FlatCardComponent implements OnInit {

  @Input() flat: Flat;
  isLiked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  likeClick() {
    this.isLiked = !this.isLiked;
  }

}

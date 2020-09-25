import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Flat } from '../../models/flat';

@Component({
  selector: 'app-flat-card',
  templateUrl: './flat-card.component.html',
  styleUrls: ['./flat-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlatCardComponent implements OnInit {

  @Input() flat: Flat;
  isLiked: boolean = false;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  likeClick() {
    this.isLiked = !this.isLiked;
    this.cd.markForCheck();
  }

}

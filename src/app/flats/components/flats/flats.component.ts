import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ComponentDestroyObserver, whileComponentNotDestroyed } from 'src/app/shared/decorators/component-destroy-observer/component-destroy-observer';
import { Flat } from '../../models/flat';
import { FlatsService } from '../../services/flats.service';

@Component({
  selector: 'app-flats',
  templateUrl: './flats.component.html',
  styleUrls: ['./flats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentDestroyObserver
export class FlatsComponent implements OnInit, OnDestroy {

  flats: Flat[] = [];

  constructor(private flatsService: FlatsService,
              private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadFlats();
  }

  ngOnDestroy(): void {
  }

  loadFlats() {
    this.flatsService.getFlats()
      .pipe(whileComponentNotDestroyed(this))
      .subscribe(
        result => {
          this.flats = result;
          this.cd.markForCheck();
        },
        (error) => {
          console.log(error);
        });
  }
}

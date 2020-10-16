import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlidesshowTvShowPosterComponent } from './slidesshow-tv-show-poster.component';

describe('SlidesshowTvShowPosterComponent', () => {
  let component: SlidesshowTvShowPosterComponent;
  let fixture: ComponentFixture<SlidesshowTvShowPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesshowTvShowPosterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlidesshowTvShowPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

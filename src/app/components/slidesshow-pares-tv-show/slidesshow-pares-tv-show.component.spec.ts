import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlidesshowParesTvShowComponent } from './slidesshow-pares-tv-show.component';

describe('SlidesshowParesTvShowComponent', () => {
  let component: SlidesshowParesTvShowComponent;
  let fixture: ComponentFixture<SlidesshowParesTvShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesshowParesTvShowComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlidesshowParesTvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

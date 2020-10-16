import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlidesshowPosterParesComponent } from './slidesshow-poster-pares.component';

describe('SlidesshowPosterParesComponent', () => {
  let component: SlidesshowPosterParesComponent;
  let fixture: ComponentFixture<SlidesshowPosterParesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesshowPosterParesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlidesshowPosterParesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

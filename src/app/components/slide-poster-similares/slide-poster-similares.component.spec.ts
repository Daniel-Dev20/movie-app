import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlidePosterSimilaresComponent } from './slide-poster-similares.component';

describe('SlidePosterSimilaresComponent', () => {
  let component: SlidePosterSimilaresComponent;
  let fixture: ComponentFixture<SlidePosterSimilaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidePosterSimilaresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlidePosterSimilaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlideBackdropSimilaresComponent } from './slide-backdrop-similares.component';

describe('SlideBackdropSimilaresComponent', () => {
  let component: SlideBackdropSimilaresComponent;
  let fixture: ComponentFixture<SlideBackdropSimilaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideBackdropSimilaresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlideBackdropSimilaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

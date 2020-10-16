import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallestvShowComponent } from './detallestv-show.component';

describe('DetallestvShowComponent', () => {
  let component: DetallestvShowComponent;
  let fixture: ComponentFixture<DetallestvShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallestvShowComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallestvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

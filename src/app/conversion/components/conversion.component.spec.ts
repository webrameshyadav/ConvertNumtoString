import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConversionComponent } from './conversion.component';
import { State, Store } from '@ngrx/store';
import { ConvertNumtoStgService } from '../service/convert-numto-stg.service';
import { Observable  } from 'rxjs';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Conversion } from '../store/conversion.model';

describe('ConversionComponent', () => {
  let component: ConversionComponent;
  let fixture: ComponentFixture<ConversionComponent>;
  let store: MockStore;
  const conversion: Conversion = { currentNumber: '', transformedValue : '' };
  const initialState = conversion;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionComponent ],
      providers: [ ConvertNumtoStgService,   provideMockStore({ initialState }), ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
  xit('should getTheInput', () => {
    expect(component.getTheInput(1));
  });

  xit('should removeLastTypedValue', () => {
    expect(component.removeLastTypedValue());
  });
});

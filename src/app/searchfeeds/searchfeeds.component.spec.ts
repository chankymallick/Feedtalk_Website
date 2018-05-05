import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfeedsComponent } from './searchfeeds.component';

describe('SearchfeedsComponent', () => {
  let component: SearchfeedsComponent;
  let fixture: ComponentFixture<SearchfeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchfeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchfeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

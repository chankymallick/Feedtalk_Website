import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksreaderComponent } from './linksreader.component';

describe('LinksreaderComponent', () => {
  let component: LinksreaderComponent;
  let fixture: ComponentFixture<LinksreaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksreaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

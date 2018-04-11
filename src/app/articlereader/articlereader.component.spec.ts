import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlereaderComponent } from './articlereader.component';

describe('ArticlereaderComponent', () => {
  let component: ArticlereaderComponent;
  let fixture: ComponentFixture<ArticlereaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlereaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlereaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

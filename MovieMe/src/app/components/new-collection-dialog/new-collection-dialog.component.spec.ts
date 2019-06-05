import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCollectionDialogComponent } from './new-collection-dialog.component';

describe('NewCollectionDialogComponent', () => {
  let component: NewCollectionDialogComponent;
  let fixture: ComponentFixture<NewCollectionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCollectionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCollectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBtnDialogComponent } from './edit-btn-dialog.component';

describe('EditBtnDialogComponent', () => {
  let component: EditBtnDialogComponent;
  let fixture: ComponentFixture<EditBtnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBtnDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBtnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

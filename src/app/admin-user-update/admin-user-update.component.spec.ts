import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserUpdateComponent } from './admin-user-update.component';

describe('AdminUserUpdateComponent', () => {
  let component: AdminUserUpdateComponent;
  let fixture: ComponentFixture<AdminUserUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUserUpdateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserUpdateComponent);
    component = fixture.componentInstance;
    component.chosenAdmin = { email: 'test', id: 0 };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the email adress change event', () => {
    spyOn(component.updateAdmin, 'emit');
    component.updateChosenAdmin('foo');
    expect(component.updateAdmin.emit).toHaveBeenCalledWith('foo');
  });
});

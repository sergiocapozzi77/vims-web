import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceTreeComponent } from './resource-tree.component';

describe('ResourceTreeComponent', () => {
  let component: ResourceTreeComponent;
  let fixture: ComponentFixture<ResourceTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule],
      declarations: [ListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const todoInputElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#todoInput')
      todoInputElement.value = 'peinar el niño';

      todoInputElement.dispatchEvent(new Event('input'));

      let button = fixture.debugElement.nativeElement.querySelector('button-addon2');
      button.click();

      fixture.whenStable().then(() => {
        console.log('component.todos[0]',component.todos[0]);
        
        expect(component.todos[0]).toEqual('peinar el niño');
      })
    })

  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef, Injectable, Component, DebugElement } from '@angular/core';

import { DialogComponent } from './dialog.component';
import { By } from '@angular/platform-browser';

@Injectable()
export class MockElementRef extends ElementRef {
  nativeElement = new MockElementRef( document.createElement('btn') );
}
@Component({
  template: `
    <app-dialog>
      <div dialog-title>
        Test Dialog
      </div>
      <div dialog-body>
        Test Content
      </div>
    </app-dialog>
  `,
})
export class TestDialog {}

describe('reusable dialog', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ DialogComponent, TestDialog ],
      providers: [
        {provide: ElementRef, useClass: MockElementRef}
      ]
    }).compileComponents();
  });

  it('should show correct dialog content', () => {
    const testFixture = TestBed.createComponent(TestDialog);

    const de: DebugElement = testFixture.debugElement.query(
      By.css('div')
    );
    const el: Element = de.nativeElement;

    expect(el.textContent).toEqual(' Test Dialog X Test Content ');
  });
});

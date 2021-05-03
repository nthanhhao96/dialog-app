import { Component, OnInit, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit  {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.querySelector('.btn').addEventListener('click', () => {
      this.close();
    });
  }

  close(): void {
      this.el.nativeElement.classList.remove('show');
      this.el.nativeElement.classList.add('hidden');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dialog-app';

  showDialog(modal: HTMLElement): void{
    modal.classList.remove('hidden');
    modal.classList.add('show');
  }

  showTextDialog(): void{
    const modal  = document.getElementById('modal_text');
    this.showDialog(modal);
  }

  showFormDialog(): void{
    const modal  = document.getElementById('modal_form');
    this.showDialog(modal);
  }

  showComponentDialog(): void{
    const modal  = document.getElementById('modal_component');
    this.showDialog(modal);
  }
}

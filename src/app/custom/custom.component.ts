import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  eventForm: FormGroup;
  location: FormGroup;
  name: FormControl = new FormControl('', Validators.required);
  address: FormControl = new FormControl('', Validators.required);
  city: FormControl = new FormControl('', Validators.required);

  constructor() {
  }

  ngOnInit(): void {
    this.location = new FormGroup({
      address: this.address,
      city: this.city
    });

    this.eventForm = new FormGroup({
      name: this.name,
      location: this.location
    });
  }
}

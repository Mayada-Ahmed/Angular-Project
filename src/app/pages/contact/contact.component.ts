import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  alert:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  send()
  {
    this.alert=true
  }

}


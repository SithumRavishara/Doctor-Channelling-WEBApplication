import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-channel-form',
  templateUrl: './channel-form.component.html',
  styleUrls: ['./channel-form.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class ChannelFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

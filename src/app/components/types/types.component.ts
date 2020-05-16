import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
})
export class TypesComponent implements OnInit {
  constructor() {}

  @Input() type: String;
  ngOnInit(): void {}
}

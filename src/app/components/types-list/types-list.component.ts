import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'types-list',
  templateUrl: './types-list.component.html',
  styleUrls: ['./types-list.component.scss'],
})
export class TypesListComponent implements OnInit {
  constructor() {}

  @Input() types: Array<String>;
  ngOnInit(): void {}
}

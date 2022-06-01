import { Component, OnInit } from '@angular/core';

@Component({
  selector : 'app-header',
  templateUrl : './header.component.html'

})
export class Header implements OnInit {

  public collapsed : boolean = true;

  constructor() {}

  ngOnInit() : void {}

}

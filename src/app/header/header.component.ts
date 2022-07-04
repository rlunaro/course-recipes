import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector : 'app-header',
  templateUrl : './header.component.html'

})
export class Header implements OnInit {

  @Output() selection = new EventEmitter<string>();

  public collapsed : boolean = true;

  constructor() {}

  ngOnInit() : void {}

  public onSelect( selection : string ){
    this.selection.emit( selection );
  }

}

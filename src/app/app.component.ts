import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-recipes';

  selection = 'recipes';

  public onNavigate( selection : string ){
    this.selection = selection;
  }
}

import { NgModule } from "@angular/core";


import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { DrowpdownDirective } from "./dropdown.directive";
import { AlertComponent } from "./alert/alert.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    DrowpdownDirective, 
    AlertComponent, 
    PlaceholderDirective
  ],
  imports:[
    CommonModule
  ],
  exports:[
    AlertComponent, 
    DrowpdownDirective, 
    LoadingSpinnerComponent,
    PlaceholderDirective,
    CommonModule
  ]
})
export class SharedModule {}


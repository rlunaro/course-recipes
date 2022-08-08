import { Directive, 
        Renderer2, 
        HostListener, 
        ElementRef} from "@angular/core";

@Directive({
  selector : '[appDropdown]'
})
export class DrowpdownDirective {

  private isOpen : boolean = false;

  constructor( private elementRef : ElementRef,
               private renderer : Renderer2 ){}

  @HostListener('click') click( event : Event ){
    if( !this.isOpen ){
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
      this.isOpen = true;
    }else{
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
      this.isOpen = false;
    }
  }


}
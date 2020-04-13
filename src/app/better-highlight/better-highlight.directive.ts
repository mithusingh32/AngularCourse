import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit{

  // This allows the external components to pass in the colors to this directive. 
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  //Decorator that marks a DOM property as a host-binding property and supplies configuration metadata. 
  // Angular automatically checks host property bindings during change detection, and if a binding changes it updates the host element of the directive.
  // Think of the ElementRef.nativeElement.[what goes here] is passed into the HostBinding
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

    //By default, Angular renders a template into DOM. You can use custom rendering to intercept rendering calls, or to render to something other than DOM.
  // allows us to manipulate elements of your app without having to touch the DOM directly
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color","blue");
    this.backgroundColor = this.defaultColor
  }

  // Decorator that declares a DOM event to listen for, and provides a handler method to run when that event occurs.
  // Input is the event type, mouseenter is supported mouse event by the DOM 
  // We can also get the event data. We can also receive custom event data (aka emit)
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color","blue");
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color","transparent");
    this.backgroundColor = this.defaultColor;
  }


}

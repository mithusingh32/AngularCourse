import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // The set allows us to execute a function whenever the property (unless) changes
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // We create the templateRef at the viewContainerRef 
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    else {
      this.viewContainerRef.clear();
    }
  }

  // We're inject the * for structural directives
  // TemplateRef is similar to ElementRef except it gives is the template refrence
  // TemplateRef is that what; viewContainerRef is the where
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef)  {

  }
}

import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]' // Now angular will recognize this as an attribute directive. You don't need square brackets when calling this

})
export class BasicHighlightDirective implements OnInit{
    
    // Angular will provide us with the element refrence when we use this directive. So we need to get it in the constructor
    // the 'private' modifier tells the constructor that its a variable of the class, and it will intialize it as well
    constructor(private elementRef: ElementRef) {
    } 

    // Directly accessing elements is bad
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
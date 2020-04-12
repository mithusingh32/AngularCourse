import { Component, OnInit, Input, OnChanges, SimpleChanges, ContentChild, ElementRef } from '@angular/core';
import { ConditionalExpr } from '@angular/compiler';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css']
    //encapsulation: ViewEncapsulation.Native // This will apply this components .css globally. // Emulated is default. This components css will applied only to this components // Native is same as emulated but its outdated
    
})
export class ServerElementComponent implements OnInit, OnChanges {

    //@Input("alias name") is an angular decorate. It exposes the variable element to other components; and allows other components to set the element variable
    // The alias name is what the external componenets will call. So external components will have to use [srvElement]
    @Input("srvElement") element: { type: string, name: string, content: string }; // We are indicating here that the element is of type JSON ({})

    // @ContentChild('alias') Use to get the first element or the directive matching the selector from the content DOM
    // Gets the header you 'alias' in the ng-content
    // Content queries are set before the ngAfterContentInit callback is called.
    // Does not retrieve elements or directives that are in other components' templates, since a component's template is always a black box to its ancestors.
    @ContentChild('contentParagraph') paragraphContentChild: ElementRef; 

    constructor() { 
        console.log("Constructor called!")
    }

    // LifeCycle:
    // ngOnChange: called on start and when a bound input property changes such as @Input properties
    // ngOnInit: called when component is initilized. ALways should run after the constructor
    // ngDoCheck: called when change detection runs. Whenever a change occurs
    // ngAfterContentInit: called after content (ng0content) has been projected into view. "The view of the parent has been initalized"
    // ngAfterContentChecked: called everytime the projected content has been checked. The default change detector has completed checking all content of a directive
    // ngAfterViewInit: called after the components view and child views has been initalized
    // ngAfterViewedChecked: called every time view and child views have been checked
    //ngOnDestroy: called when component gets destroyed. Best place to do clean up
    
    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        // console.log("ngOnChanges called");
        // console.log(changes);
    }
    
    ngOnInit(): void {
        console.log("ngOnInit called");
        console.log("paragraphContentCHild: " + this.paragraphContentChild.nativeElement);
    }

    ngDoCheck(): void {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        console.log("DoCheck called")
    }

    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        console.log("ngAfterContentInit called");
        console.log("paragraphContentCHild: " + this.paragraphContentChild.nativeElement.textContent);
    }

}


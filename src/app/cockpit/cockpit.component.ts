import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    // newServerName = '';
    newServerContent = '';

    // EventEmitter object emits the signal. This is similar to how slot-signals work in Qt
    // @Output("alias") tells the this.components that its outputting the data. So parent components can see it
    @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
    @Output() blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();

    // Property decorator that configures a view query
    // This gives us access to the element that its pointing. 
    // If you are planning on access the element in ngOnInit, then {static: true},
    // otherwise if you do not need to access it in ngOnInit then {static: false}
    @ViewChild("contentInput", {static: true}) contentInput: ElementRef;

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
    ngOnInit(): void {
        console.log("ngOnInit called");
    }

    



    // We emit the event
    onAddServer(nameInput: HTMLInputElement) {
        console.log(this.contentInput);
        this.serverCreated.emit({serverName: nameInput.value, serverContent: this.contentInput.nativeElement.value});
    }

    onAddBlueprint(nameInput: HTMLInputElement) {
        this.blueprintCreated.emit({blueprintName:  nameInput.value, blueprintContent: this.contentInput.nativeElement.value});
    }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loadedView = "recipe";
  
  onNavigate(inSelected: string) {
    console.log("inSelected = " + inSelected);
    this.loadedView = inSelected;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featureSelected = 'recipe';
  featureChosen(feature: string) {
    this.featureSelected = feature;
  }
}

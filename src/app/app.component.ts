import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, CommonModule, RouterOutlet]
})
export class AppComponent {
  loadedFeature = 'recipe';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

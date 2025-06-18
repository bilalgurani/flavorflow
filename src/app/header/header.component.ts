import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeFeature: string = 'recipe';
  
  @Output() featureSelected = new EventEmitter<string>;

  onSelect(feature: string) {
    this.activeFeature = feature;
    this.featureSelected.emit(feature);
  }
}

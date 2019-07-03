import { Component } from '@angular/core';
import { languages } from './languages'
import { deviconInterface } from './devicon.interface';
import { toolbelt } from './toolbelt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public languages = languages;
  public toolbelt = toolbelt;

  public showNavBar: boolean = false
  public toggleNavBar() {
    this.showNavBar = !this.showNavBar
  }
  public closeNavBar() {
    this.showNavBar = false
  }

  public isHovering(icon: deviconInterface): boolean {
    return icon.hovering;
  }
  public isClicked(icon: deviconInterface): boolean {
    return icon.clicked;
  }

  public enter(icon: deviconInterface): void {
    icon.hovering = true;
  }

  public leave(icon: deviconInterface): void {
    icon.hovering = false;
  }

  public clicked(icon: deviconInterface): void {
    icon.clicked = !icon.clicked
  }
}

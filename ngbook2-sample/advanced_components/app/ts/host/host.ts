import { Component, Directive, ElementRef } from '@angular/core';


@Component({
  selector: 'sample',
  template: `
  <div class="ui card">
    <div class="content">
      <a class="header">Dr. Peter Venkman</a>
      <div class="meta">
        <span class="date">Joined in 1984</span>
      </div>
      <div class="description">
        Three former parapsychology professors
        set up shop as a unique ghost removal
        service.
      </div>
    </div>
    <div class="extra content">
      <a>
        <i class="user icon"></i>
        22 Friends
      </a>
    </div>
  </div>
  `
})
class Sample {
}

@Directive({
  selector: '[popup]',
  inputs: ['message'],
  exportAs: 'popup',
  host: {
    '(click)': 'onClick()'
  }
})
class Popup {
  message: string;

  ngOnInit(): void {
    console.log('message', this.message);
  }

  onClick(): void {
    alert(this.message);
  }
}

@Component({
  selector: 'host-sample-app',
  directives: [Sample, Popup],
  template: `
  <div class="ui grid">
    <div class="two column row">
      <div class="column">
        <sample popup message="Clicked me!" #p1="popup"></sample>
        <button (click)="p1.onClick()" class="ui fluid button">Trigger popup</button>
      </div>

      <div class="column">
        <sample popup message="Another click!" #p2="popup"></sample>
        <button (click)="p2.onClick()" class="ui fluid button">Trigger popup</button>
      </div>
    </div>
  </div>
  `
})
export class HostSampleApp {
}



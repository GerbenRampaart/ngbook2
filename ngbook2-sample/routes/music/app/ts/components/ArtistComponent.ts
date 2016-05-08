/*
 * Angular
 */
import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {RouteParams} from '@angular/router-deprecated';
import {LocationStrategy} from '@angular/common';

/*
 * Services
 */
import {SpotifyService} from 'services/SpotifyService';

@Component({
  selector: 'artist',
  directives: [CORE_DIRECTIVES],
  template: `
  <div *ngIf="artist">
    <h1>{{ artist.name }}</h1>

    <p>
      <img src="{{ artist.images[0].url }}">
    </p>

    <p><a href (click)="back()">Back</a></p>
  </div>
  `
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Object;

  constructor(public routeParams: RouteParams, public spotify: SpotifyService,
              public locationStrategy: LocationStrategy) {
    this.id = routeParams.get('id');
  }

  ngOnInit(): void {
    this.spotify
      .getArtist(this.id)
      .subscribe((res: any) => this.renderArtist(res));
  }

  back(): void {
    this.locationStrategy.back();
  }

  renderArtist(res: any): void {
    this.artist = res;
  }
}

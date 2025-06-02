
import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Article } from '../services/api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  favorites: Article[] = [];

  constructor(private storageService: StorageService) {}

  ionViewWillEnter() {
    this.loadFavorites();
  }

  async loadFavorites() {
    this.favorites = await this.storageService.getFavorites();
  }
}
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal<boolean>(true);

  constructor() {
    this.loadTrendingGifs();
    console.log('Service loaded');
  }

  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.apiURL}/gifs/trending`, {
        params: {
          api_key: environment.apiKey,
          limit: 10,
        },
      })
      .subscribe((response) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(response.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
      });
  }

  searchGifs(query: string) {
    return this.http
      .get<GiphyResponse>(`${environment.apiURL}/gifs/search`, {
        params: {
          api_key: environment.apiKey,
          limit: 10,
          q: query,
        },
      })
      .pipe(
        map((response) => {
          const gifs = GifMapper.mapGiphyItemsToGifArray(response.data);
          return gifs;
        })
      );
  }
}

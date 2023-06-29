import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SentenceInterface, WordInterface } from '@shared';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SentenceBuilderService {
  private _baseurl = environment.baseUrl;

  constructor(private _httpClient: HttpClient) {}

  public getWordsByType(): Observable<WordInterface[]> {
    return of([{}]);
  }

  public addSentence(sentence: SentenceInterface): Observable<boolean> {
    return of(true);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  RandomWordListInterface,
  SentenceInterface,
  SentenceListInterface,
  WordInterface,
  WordListInterface,
} from '@shared';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SentenceBuilderService {
  private _baseurl = environment.baseUrl;

  constructor(private _httpClient: HttpClient) {}

  public getWords(): Observable<WordInterface[]> {
    return this._httpClient.get<WordInterface[]>(`${this._baseurl}/words`);
  }

  public getWordsByType(type: string): Observable<WordListInterface> {
    return this._httpClient.get<WordListInterface>(
      `${this._baseurl}/words/${type}`
    );
  }

  public getSentences(): Observable<SentenceListInterface> {
    return this._httpClient.get<SentenceListInterface>(
      `${this._baseurl}/sentences`
    );
  }

  public addSentence(sentence: SentenceInterface): Observable<boolean> {
    return this._httpClient.post<boolean>(
      `${this._baseurl}/sentence`,
      sentence
    );
  }

  public getRandomWords(length: number = 10): Observable<RandomWordListInterface> {
    return this._httpClient.get<RandomWordListInterface>(
      `${this._baseurl}/random-words/${length}`
    );
  }
}

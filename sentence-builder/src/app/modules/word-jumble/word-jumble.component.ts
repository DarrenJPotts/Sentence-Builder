import { Component, OnInit } from '@angular/core';
import {
  WordType,
  SentenceInterface,
  SentenceBuilderService,
  WordInterface,
} from '@shared';
import { ToastrService } from 'ngx-toastr';
import { filter, first, tap } from 'rxjs';

@Component({
  selector: 'app-word-jumble',
  templateUrl: './word-jumble.component.html',
  styleUrls: ['./word-jumble.component.scss'],
})
export class WordJumbleComponent implements OnInit {
  public wordTypeEnum = WordType;

  public currentSentence: string = '';
  public wordList: WordInterface[] = [];
  public sentenceList?: SentenceInterface[];

  constructor(
    private _apiService: SentenceBuilderService,
    private _toastr: ToastrService
  ) {}

  private initialize(): void {
    this._apiService
      .getRandomWords(15)
      .pipe(
        filter((v) => !!v),
        first()
      )
      .subscribe((v) => {
        this.currentSentence = '';
        this.wordList = v.words;
      });

    this._apiService
      .getSentences()
      .pipe(
        filter((v) => !!v),
        first()
      )
      .subscribe((v) => (this.sentenceList = v.sentences));
  }

  public addWord(word: string): void {
    this.currentSentence += ' ' + word.trim();
  }

  public removeWord(): void {
    const words = this.currentSentence.split(' ');
    if (words.length > 0) {
      words.pop();
      this.currentSentence = words.join(' ');
    }
  }

  public restart(): void {
    this.initialize();
  }

  public addSentence(): void {
    if (this.currentSentence.trim() !== '') {
      this._apiService
        .addSentence({
          sentence: this.currentSentence,
        })
        .pipe(
          filter((v) => !!v),
          first(),
          tap(() => this._toastr.success('Successfully added sentence'))
        )
        .subscribe(() => {
          this.initialize();
        });
    }
  }

  public ngOnInit(): void {
    this.initialize();
  }
}

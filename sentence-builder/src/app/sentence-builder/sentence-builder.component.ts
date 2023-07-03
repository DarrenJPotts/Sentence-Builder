import { Component, OnInit } from '@angular/core';
import { SentenceBuilderService, SentenceInterface, WordType } from '@shared';
import { ToastrService } from 'ngx-toastr';
import { filter, first, tap } from 'rxjs';

@Component({
  selector: 'app-sentence-builder',
  templateUrl: './sentence-builder.component.html',
  styleUrls: ['./sentence-builder.component.scss'],
})
export class SentenceBuilderComponent implements OnInit {
  public wordTypeEnum = WordType;

  public currentSentence: string = '';
  public selectedWordType: string = '';
  public selectedWord: string = '';
  public wordsList: string[] = [];
  public sentenceList?: SentenceInterface[];

  constructor(
    private _apiService: SentenceBuilderService,
    private _toastr: ToastrService
  ) {}

  private initialize(): void {
    this._apiService
      .getSentences()
      .pipe(
        filter((v) => !!v),
        first()
      )
      .subscribe((v) => (this.sentenceList = v.sentences));
  }
  public onWordTypeChange(value: string): void {
    this._apiService
      .getWordsByType(value)
      .pipe(
        filter((v) => !!v),
        first()
      )
      .subscribe((v) => (this.wordsList = v.words));
  }

  public addWord(): void {
    if (this.selectedWord.trim() !== '') {
      this.currentSentence += ' ' + this.selectedWord.trim();
    }
  }

  public removeWord(): void {
    const words = this.currentSentence.split(' ');
    if (words.length > 0) {
      words.pop();
      this.currentSentence = words.join(' ');
    }
  }

  public clearSentence(): void {
    this.currentSentence = '';
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

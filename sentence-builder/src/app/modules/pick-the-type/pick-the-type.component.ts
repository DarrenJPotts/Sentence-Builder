import { Component, OnInit } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { SentenceBuilderService, WordInterface, WordType } from '@shared';
import { ToastrService } from 'ngx-toastr';
import { filter, first } from 'rxjs';

@Component({
  selector: 'app-pick-the-type',
  templateUrl: './pick-the-type.component.html',
  styleUrls: ['./pick-the-type.component.scss'],
})
export class PickTheTypeComponent implements OnInit {
  public wordTypeEnum = WordType;

  public currentWord?: WordInterface;
  public currentWordIndex: number = 0;
  public wordList: WordInterface[] = [];
  public progressCorrect: number = 0;
  public selectedWordTypeChip:string = '';

  constructor(
    private _apiService: SentenceBuilderService,
    private _toastr: ToastrService
  ) {}

  private initialize(): void {
    this._apiService
      .getRandomWords()
      .pipe(
        filter((v) => !!v),
        first()
      )
      .subscribe((v) => {
        this.wordList = v.words;
        this.progressCorrect = 0;
        this.currentWordIndex = 0;
        this.currentWord = this.wordList[this.currentWordIndex];
      });
  }

  public restart(): void {
    this.initialize();
  }

  public confirmWord(type: string): void {
    this.selectedWordTypeChip = type;

    if (type !== this.currentWord!.type) {
      this._toastr.error('Oh No! That was wrong, try again');
      this.selectedWordTypeChip = '';
      return;
    }

    this.selectedWordTypeChip = '';
    this.progressCorrect += 10;
    this.currentWordIndex += 1;
    this.currentWord = this.wordList[this.currentWordIndex];
    this._toastr.success('Well done!');

  }

  public ngOnInit(): void {
    this.initialize();
  }
}

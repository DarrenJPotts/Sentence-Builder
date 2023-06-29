import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sentence-builder',
  templateUrl: './sentence-builder.component.html',
  styleUrls: ['./sentence-builder.component.scss'],
})
export class SentenceBuilderComponent implements OnInit {
  public currentSentence: string = '';
  // Todo set to word type enum
  public selectedWordType: any;
  // Todo set to word loaded from backend
  public selectedWord: string = '';

  public onWordTypeChange(value: any): void {
    // Todo load word using api service
    console.log('Changed...');
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
    // Todo save sentence to backend
  }

  public ngOnInit(): void {}
}

import { Component, Input } from '@angular/core';
import { SentenceInterface, SentenceListInterface } from '@shared';

@Component({
  selector: 'app-sentence-list',
  templateUrl: './sentence-list.component.html',
  styleUrls: ['./sentence-list.component.scss'],
})
export class SentenceListComponent {
  @Input() public sentences?: SentenceInterface[];
}

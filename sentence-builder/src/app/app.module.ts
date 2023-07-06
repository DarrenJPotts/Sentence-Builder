import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { PickTheTypeComponent } from './modules/pick-the-type/pick-the-type.component';
import { SentenceListComponent } from './modules/sentence-builder/components/sentence-list/sentence-list.component';
import { SentenceBuilderComponent } from './modules/sentence-builder/sentence-builder.component';
import { WordJumbleComponent } from './modules/word-jumble/word-jumble.component';

@NgModule({
  declarations: [
    AppComponent,
    SentenceBuilderComponent,
    SentenceListComponent,
    WordJumbleComponent,
    PickTheTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    NgbModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatDividerModule,
    MatExpansionModule,
    MatTabsModule,
    MatProgressBarModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

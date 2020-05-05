import { NgModule } from '@angular/core';
import { NgCardComponent } from './ng-card.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// ngx highlight
import {
  HighlightModule,
  HighlightOptions,
  HIGHLIGHT_OPTIONS,
} from 'ngx-highlightjs';

@NgModule({
  declarations: [NgCardComponent],
  imports: [CommonModule, NgbModule, HighlightModule],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true,
      },
    },
  ],
  exports: [NgCardComponent],
})
export class NgCardModule {}

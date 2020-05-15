import { NgModule } from '@angular/core';
import { NgbCardComponent } from './ngb-card.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// ngx highlight
import {
  HighlightModule,
  HighlightOptions,
  HIGHLIGHT_OPTIONS,
} from 'ngx-highlightjs';

@NgModule({
  declarations: [NgbCardComponent],
  imports: [CommonModule, NgbModule, HighlightModule],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true,
      },
    },
  ],
  exports: [NgbCardComponent],
})
export class NgbCardModule {}

import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

// CodeSnippet interface
export interface CodeSnippet {
  isCollapsed?: boolean;
  active?: string;
  html?: string;
  ts?: string;
  scss?: string;
  css?: string;
  json?: string;
  service?: string;
  module?: string;
}
@Component({
  selector: 'ngb-card',
  templateUrl: './ngb-card.component.html',
  styleUrls: ['./ngb-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgbCardComponent implements OnInit {
  @Input('cardClass') cardClass: string;
  @Input('headerClass') headerClass: string;
  @Input('bodyClass') bodyClass: string;
  @Input('footerClass') footerClass: string;

  @Input('codeSnippet') codeSnippet: CodeSnippet;

  // public
  public copyCodeStatus: boolean = false;

  // private
  private _defaultSnippetCode: CodeSnippet = {
    isCollapsed: true, // default collapsed is true
  };

  constructor() {}

  // Public Methods
  // --------------
  /**
   * copyCode
   *
   * @param code
   */
  copyCode(code) {
    const selectBox = document.createElement('textarea');
    selectBox.style.position = 'fixed';
    selectBox.value = code;
    document.body.appendChild(selectBox);
    selectBox.focus();
    selectBox.select();
    document.execCommand('copy');
    document.body.removeChild(selectBox);
    setTimeout(() => {
      this.copyCodeStatus = false;
    }, 500);
    this.copyCodeStatus = true;
  }

  // Lifecycle Hooks
  // ---------------
  /**
   * On init
   */
  ngOnInit(): void {
    this.codeSnippet = { ...this._defaultSnippetCode, ...this.codeSnippet };
  }
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('meal-elem')
export class MealElem extends LitElement {
  static override styles = css`
    h1 {
        color:blue;
    }
  `;

  override render() {
    return html`
        <h1>Test</h1>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meal-elem': MealElem;
  }
}

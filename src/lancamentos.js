/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/iron-ajax/iron-ajax';

class Lancamentos extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        .card {
          overflow: auto;
        }
        img {
          width:100%;
        }
        .poster {
          border: 1px solid #fafafa;
          width: 100%;
          float: right;
          margin-left: 20px;
          margin-bottom: 16px;
        }
        .poster {
          float: left;
          margin-right: 20px;
          margin-left: 0;
        }
        @media (min-width: 700px) {
          .card {
            width: 60%;
            margin-right: auto;
            margin-left: auto;
          }
          .poster {
            width: 30%;
          }
        }
      </style>
      <iron-ajax
        auto
        url="https://api.themoviedb.org/3/movie/popular?api_key=0d56c290adcda5b4f4e2e89be49fc9e4&language=pt-BR"
        handle-as="json"
        last-response="{{filmes}}">
      </iron-ajax>

      <template is="dom-repeat" items="{{filmes.results}}" as="filme">
        <div class="card">
          <img src="https://image.tmdb.org/t/p/w500[[filme.poster_path]]" class="poster">
          <h2>[[filme.title]]</h2>
          <hr>
          <p>[[filme.overview]]</p>
          <p>[[filme.vote_average]]</p>
        </div>
      </template>
    `;
  }
  static get properties() {
    return {
      greeting: {
        type: String
      },
      oi: function(index) {
        return 'tchau'
      }
    }
  }
  
  constructor() {
    super();
  }
}



window.customElements.define('ultimos-lancamentos', Lancamentos);
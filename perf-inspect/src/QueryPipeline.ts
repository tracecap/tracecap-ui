import { LitElement, html, css, property } from 'lit-element';

export interface QueryPipelineItem {
  command: string
  args: string[]
}

export class QueryPipeline extends LitElement {
  @property({ type: String }) query = '';

  constructor() {
    super();

    window.addEventListener("popstate", e => {
      if (e.state)
        this.setQuery(e.state.q);
        this.runQueryDelayed(false);
    });
  }

  firstUpdated() {
    let urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('q')) {
      this.setQuery(urlParams.get('q')!);
      this.runQuery();
    }
  }

  getParsedQuery(): QueryPipelineItem[] {
    let query = this.inputElement().value;
    return query.split('|').map(command => {
      let commandParts = command.trim().split(' ');

      return {
        command: commandParts[0],
        args: commandParts.slice(1),
      };
    });
  }

  inputElement(): HTMLTextAreaElement {
    return this.shadowRoot!.querySelector('textarea')!;
  }

  _handleRunQuery(e: (Event | null)) {
    this.setQuery(this.inputElement().value);
    this.runQuery();
  }

  setQuery(query: string) {
    let el = this.inputElement();
    if (el)
      el.value = query;
    else
      this.query = query;
  }

  appendQueryPipe(pipeCommand: string) {
    let el = this.inputElement();
    el.value = el.value + ' | ' + pipeCommand;
    this.runQueryDelayed();
  }

  runQueryDelayed(saveState:boolean = true) {
    setTimeout(() => {
      this.runQuery(saveState)
    }, 0);
  }

  runQuery(saveState:boolean = true) {
    let event = new CustomEvent('run-query', {
      detail: {
        parsedQuery: this.getParsedQuery()
      }
    });
    this.dispatchEvent(event);

    if (saveState) {
      let q = this.inputElement().value;
      window.history.pushState({ q: q }, q, window.location.pathname + '?q=' + encodeURIComponent(q));
    }
  }

  static styles = css`
    .query-pipeline {
      padding: 20px;
    }

    .query-pipeline button {
      float: right;
      padding: 7px;
      font-size: 14px;
      height: 32px;
      width: 90px;
    }

    .query-pipeline textarea {
      width: 100%;
      padding: 8px;
      font-size: 14px;
      height: 32px;
      box-sizing: border-box;
      
      resize: vertical;
    }
  `;
  
  render() {
    return html`
    <div class="query-pipeline">
      <button @click=${this._handleRunQuery}>Run Query</button>
      <div style="margin-right: 100px;">
        <textarea>${this.query}</textarea>
      </div>
    </div>
    `;
  }
}

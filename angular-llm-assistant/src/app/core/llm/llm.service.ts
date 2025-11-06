import { Injectable, signal } from '@angular/core';
import { environment } from '../../../environment/environment';
export type ChatMsg = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

@Injectable({ providedIn: 'root' })
export class LlmService {
  loading = signal(false);
  private apiUrl = environment.apiEndpoint;

  async respond(opts: { system: string; messages: ChatMsg[]; model?: string }) {
    this.loading.set(true);
    const messages = [
      { role: 'system', content: opts.system },
      ...opts.messages,
    ];

    try {
      const r = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: opts.model || environment.modelName,
          messages: messages,
          stream: false,
        }),
      });

      if (!r.ok) {
        const errorText = await r.text();
        throw new Error(`Erro na API do Ollama: ${r.status} - ${errorText}`);
      }

      const json = await r.json();
      console.log(json);
      const text = json.message?.content ?? '';
      return text;
    } finally {
      this.loading.set(false);
    }
  }
}

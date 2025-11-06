import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LlmService } from '../../core/llm/llm.service';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  input = '';
  inputRole = '';
  output = signal('');
  darkMode = false;

  constructor(public llm: LlmService) {}

  async send() {
    const system = this.inputRole || environment.role;
    const resp = await this.llm.respond({
      system,
      messages: [{ role: 'user', content: this.input }],
    });
    this.output.set(resp);
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
  }

  toggleImage(){
    this.darkMode = !this.darkMode;
  }
}

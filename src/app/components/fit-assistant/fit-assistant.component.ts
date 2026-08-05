import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-fit-assistant',
  imports: [],
  templateUrl: './fit-assistant.component.html',
  styleUrl: './fit-assistant.component.scss'
})
export class FitAssistantComponent {
  @Output() closeModal = new EventEmitter<void>();

  close(): void {
    this.closeModal.emit();
  }
}

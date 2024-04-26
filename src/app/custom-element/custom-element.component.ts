import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-element',
  standalone: true,
  imports: [],
  templateUrl: './custom-element.component.html',
  styleUrl: './custom-element.component.css'
})
export class CustomElementComponent {

  @Output() example_button_event = new EventEmitter<string>();
    
  custom_array = ['inside', 'custom', 'element']

  example_button_click(value: string) {
    console.log(value)
    this.custom_array.push(value)
    this.example_button_event.emit(value)
  }
}

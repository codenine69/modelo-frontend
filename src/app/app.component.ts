import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlService } from './services/control.service';
import { Caso } from './model/caso';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

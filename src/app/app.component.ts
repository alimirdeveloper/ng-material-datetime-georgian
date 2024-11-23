import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MindboardDatetimeGeorgianComponent as MaterialDatetimeGeorgianComponent } from '../material-datetime-georgian/material-datetime-georgian.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule , MaterialDatetimeGeorgianComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-material-datetime-georgian';

  georgianDate:any;
}



# ng-material-datetime-georgian

A customizable Georgian datetime picker for Angular applications, built with Angular Material and Moment.js. This library supports both Reactive Forms and Template-Driven Forms, offering features like time selection, custom validation, and locale support.

## Features

- Georgian datetime selection with Material Design.
- Time selection (hours and minutes).
- Locale-aware date handling using Moment.js.
- Compatibility with Angular Reactive and Template-Driven Forms.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alimirdeveloper/ng-material-datetime-georgian.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ng-material-datetime-georgian
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Import the datetime picker component into your Angular application:

```ts
import { MindboardDatetimeGeorgianComponent } from 'path-to-component';
```

Add it to your template:

```html
<material-datetime-georgian
  [placeholder]="'Select Date and Time'"
  [minDate]="minDate"
  [maxDate]="maxDate"
  [(ngModel)]="selectedDate"
></material-datetime-georgian>
```

### Inputs

| Input         | Type    | Description                        |
|---------------|---------|------------------------------------|
| `placeholder` | `string` | Placeholder text for the input.   |
| `minDate`     | `Date`  | Minimum selectable date.          |
| `maxDate`     | `Date`  | Maximum selectable date.          |

### Outputs

| Output         | Type        | Description               |
|----------------|-------------|---------------------------|
| `ngModel`      | `Moment`    | Selected date and time.   |

## Development

1. Run the development server:
   ```bash
   ng serve
   ```
2. Navigate to `http://localhost:4200`.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.

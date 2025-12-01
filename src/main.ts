import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// src/main.ts
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// ...existing imports (Angular bootstrap)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  jumpToSection(section: string | number | null) {
    if (section === null) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (typeof section === 'number') {
      window.scrollTo({ top: section, behavior: 'smooth' });
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

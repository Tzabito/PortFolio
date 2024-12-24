import {Component, HostListener} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafoliov1';
  isSpanish = false; // Estado del checkbox
  isMobileView: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang() ?? 'en';
    this.translate.use(browserLang);
  }

  ngOnInit(): void {
    // Sincroniza el estado del checkbox con el idioma actual
    this.isSpanish = this.translate.currentLang === 'es';
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isMobileView = window.innerWidth <= 768;
  }

  switchLanguage(isSpanish: boolean) {
    const language = isSpanish ? 'es' : 'en';
    this.translate.use(language);
    this.isSpanish = isSpanish;
  }

}

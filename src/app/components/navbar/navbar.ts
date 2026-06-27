import { Component, inject, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
  private portfolio = inject(PortfolioService);

  navItems = this.portfolio.navItems;
  activeSection = this.portfolio.activeSection;
  menuOpen = false;
  scrolled = false;

  private observer!: IntersectionObserver;

  ngOnInit(): void {
    this.initScrollSpy();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled = window.scrollY > 20;
  }

  scrollTo(fragment: string): void {
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
    this.portfolio.setActiveSection(fragment);
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  private initScrollSpy(): void {
    const options = { rootMargin: '-40% 0px -55% 0px', threshold: 0 };
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.portfolio.setActiveSection(entry.target.id);
        }
      }
    }, options);

    document.querySelectorAll('section[id]').forEach(sec => this.observer.observe(sec));
  }
}

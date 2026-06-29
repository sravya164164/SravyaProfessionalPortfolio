import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  projects = inject(PortfolioService).projects;
  private sanitizer = inject(DomSanitizer);

  activeVideoUrl = signal<SafeResourceUrl | null>(null);

  openVideo(url: string): void {
    this.activeVideoUrl.set(
      this.sanitizer.bypassSecurityTrustResourceUrl(url + '?autoplay=1&rel=0')
    );
    document.body.style.overflow = 'hidden';
  }

  closeVideo(): void {
    this.activeVideoUrl.set(null);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.activeVideoUrl()) this.closeVideo();
  }
}

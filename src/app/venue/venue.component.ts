import { Component } from '@angular/core';
import { WeddingCountdownComponent } from '../wedding-countdown/wedding-countdown.component';



@Component({
    selector: 'app-venue',
    standalone: true,
    templateUrl: './venue.component.html',
    styleUrl: './venue.component.css',
})
export class VenueComponent {
    pdfUrl = 'assets/weddingprog.pdf';

    downloadPdf() {
      const link = document.createElement('a');
      link.href = this.pdfUrl;
      link.download = 'weddingprog.pdf';
      link.click();
    }
}

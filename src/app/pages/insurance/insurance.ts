import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DEFAULT_ABSL_VIEW_DATA, AbslViewFormData } from '../../model/form-modal';
import { Modalform } from '../modalform/modalform';
import { Router } from '@angular/router';

// PDF deps via ESM (install: npm i jspdf html2canvas)
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-insurance',
  imports: [CommonModule, Modalform],
  templateUrl: './insurance.html',
  styleUrl: './insurance.css'
})
export class Insurance {
  abslViewFormData: AbslViewFormData = { ...DEFAULT_ABSL_VIEW_DATA };
  todayDate = '';
  expiryDate = '';

  // modal flags
  showModal = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.refreshDates();
  }

  private refreshDates() {
    const today = new Date();
    const expiry = new Date(today);
    expiry.setFullYear(today.getFullYear() + 1);
    // “1 year - 1 day”
    expiry.setDate(expiry.getDate() - 1);

    const fmt = (d: Date) =>
      `${String(d.getDate()).padStart(2,'0')}-${String(d.getMonth()+1).padStart(2,'0')}-${d.getFullYear()}`;

    this.todayDate = fmt(today);
    this.expiryDate = fmt(expiry);
  }

  public openModal() { 
    // this.abslViewFormData = { ...DEFAULT_ABSL_VIEW_DATA }; // clear all fields
    this.showModal = true; 
  }

  public closeModal() { this.showModal = false; }

  // called by child on Save
  public handleSave(data: AbslViewFormData) {
    this.abslViewFormData = { ...data };
    this.showModal = false;
  }

  // Multi-page PDF
  // async downloadPDF() {
  //   if (!this.abslViewFormData?.insuredPerson) {
  //     alert('Please click on Add Detail and fill data before download');
  //     return;
  //   }

  //   const pageEl = document.querySelector('.page') as HTMLElement;
  //   if (!pageEl) return;

  //   const A4_WIDTH = 210; // mm
  //   const A4_HEIGHT = 297; // mm

  //   const canvas = await html2canvas(pageEl, { scale: 2, useCORS: true, scrollY: -window.scrollY });
  //   const imgData = canvas.toDataURL('image/png');

  //   const pdf = new jsPDF('p', 'mm', 'a4');
  //   const imgProps = (pdf as any).getImageProperties(imgData);
  //   const pdfWidth = A4_WIDTH;
  //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  //   let position = 0;
  //   let heightLeft = pdfHeight;

  //   pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
  //   heightLeft -= A4_HEIGHT;

  //   while (heightLeft > 0) {
  //     pdf.addPage();
  //     position = heightLeft - pdfHeight; // shift up
  //     pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
  //     heightLeft -= A4_HEIGHT;
  //   }

  //   pdf.save(`${this.abslViewFormData.insuredPerson}-Insurance.pdf`);
  // }

  async downloadPDF() {
    if (!this.abslViewFormData?.insuredPerson) {
      alert('Please click on Add Detail and fill data before download');
      return;
    }

    const pageEl = document.querySelector('.page') as HTMLElement;
    if (!pageEl) return;

    const A4_WIDTH = 210;  // mm
    const A4_HEIGHT = 297; // mm
    const PX_PER_MM = 96 / 25.4; // ~3.78 px per mm at 96dpi

    const canvas = await html2canvas(pageEl, { scale: 1, useCORS: true });
    const pageHeightPx = A4_HEIGHT * PX_PER_MM;
    const pageWidthPx = A4_WIDTH * PX_PER_MM;

    const pdf = new jsPDF('p', 'mm', 'a4');

    let y = 0;
    while (y < canvas.height) {
      const pageCanvas = document.createElement('canvas');
      pageCanvas.width = canvas.width;
      pageCanvas.height = Math.min(pageHeightPx, canvas.height - y);

      const ctx = pageCanvas.getContext('2d')!;
      ctx.drawImage(canvas, 0, y, canvas.width, pageCanvas.height, 0, 0, canvas.width, pageCanvas.height);

      const imgData = pageCanvas.toDataURL('image/jpeg', 0.7);
      const imgProps = (pdf as any).getImageProperties(imgData);
      const pdfWidth = A4_WIDTH;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      if (y > 0) pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);

      y += pageHeightPx;
    }

    pdf.save(`${this.abslViewFormData.insuredPerson}-Insurance.pdf`);
  }


  public logout() {
  // Clear local/session storage
    localStorage.clear();
    sessionStorage.clear();

    // If you use Angular Router for login navigation
    this.router.navigate(['/login']);
  }
}

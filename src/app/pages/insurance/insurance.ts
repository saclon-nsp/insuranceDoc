import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DEFAULT_ABSL_VIEW_DATA, AbslViewFormData } from '../../model/form-modal';
import { Modalform } from '../modalform/modalform';

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
    this.abslViewFormData = { ...DEFAULT_ABSL_VIEW_DATA }; // clear all fields
    this.showModal = true; 
  }

  public closeModal() { this.showModal = false; }

  // called by child on Save
  public handleSave(data: AbslViewFormData) {
    this.abslViewFormData = { ...data };
    this.showModal = false;
  }

  // Multi-page PDF
  async downloadPDF() {
    if (!this.abslViewFormData?.insuredPerson) {
      alert('Please click on Add Detail and fill data before download');
      return;
    }

    const pageEl = document.querySelector('.page') as HTMLElement;
    if (!pageEl) return;

    const A4_WIDTH = 210; // mm
    const A4_HEIGHT = 297; // mm

    const canvas = await html2canvas(pageEl, { scale: 2, useCORS: true, scrollY: -window.scrollY });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = (pdf as any).getImageProperties(imgData);
    const pdfWidth = A4_WIDTH;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    let position = 0;
    let heightLeft = pdfHeight;

    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
    heightLeft -= A4_HEIGHT;

    while (heightLeft > 0) {
      pdf.addPage();
      position = heightLeft - pdfHeight; // shift up
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
      heightLeft -= A4_HEIGHT;
    }

    pdf.save(`${this.abslViewFormData.insuredPerson}-Insurance.pdf`);
  }
}

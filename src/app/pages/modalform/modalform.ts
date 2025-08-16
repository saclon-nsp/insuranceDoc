import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AbslViewFormData } from '../../model/form-modal';

@Component({
  selector: 'app-modalform',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modalform.html',
  styleUrl: './modalform.css'
})
export class Modalform {
  @Input() initial?: AbslViewFormData;        // when used as modal, seed values
  @Output() save = new EventEmitter<AbslViewFormData>(); // emit data to parent
  @Output() cancel = new EventEmitter<void>();          // close without save

  abslForm!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.abslForm = this.fb.group({
      insuredPerson: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      addressLine3: [''],
      city: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      state: ['', Validators.required],
      country: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      nominee: ['', Validators.required],
      relationship: ['', Validators.required]
    });
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initial']?.currentValue) {
      this.abslForm.patchValue(this.initial as AbslViewFormData);
    }
  }

  public submitForm() {
    if (this.abslForm.invalid) {
      this.abslForm.markAllAsTouched();
      return;
    }
    this.save.emit(this.abslForm.value as AbslViewFormData);
  }

  public onCancel() { this.cancel.emit(); }

}

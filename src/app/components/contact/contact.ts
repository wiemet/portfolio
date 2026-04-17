import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService, ContactForm } from '../../services/contact.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
})
export class ContactComponent {
  isModalOpen = false;
  isSubmitting = false;
  isSuccess = false;

  form: ContactForm = { name: '', email: '', message: '' };

  constructor(private contactService: ContactService, private ngZone: NgZone) {}

  openModal() { this.isModalOpen = true; }

  closeModal() {
    this.isModalOpen = false;
    this.isSuccess = false;
    this.form = { name: '', email: '', message: '' };
  }

  /*onSubmit() {
    this.isSubmitting = true;

    this.contactService.sendMessage(this.form).subscribe({
      next: (res) => {
        this.ngZone.run(() => {
          this.isSubmitting = false;
          this.isSuccess = true;
          this.form = { name: '', email: '', message: '' };
          setTimeout(() => this.closeModal(), 3000);
        });
      },
      error: (err) => {
        this.ngZone.run(() => {
          this.isSubmitting = false;
          alert('Erreur lors de l\'envoi.');
        });
      }
    });
  }*/


  async onSubmit() {
    if (this.isSubmitting) return;
    this.isSubmitting = true;
    console.log('1 - isSubmitting:', this.isSubmitting);

    try {
      await firstValueFrom(
        this.contactService.sendMessage(this.form)
      );
      console.log('2 - avant false - isSubmitting:', this.isSubmitting);
      this.isSubmitting = false;
      console.log('3 - après false - isSubmitting:', this.isSubmitting);
      this.isSuccess = true;
      this.form = { name: '', email: '', message: '' };
      setTimeout(() => this.closeModal(), 3000);
    } catch (err) {
      console.error('Erreur:', err);
      this.isSubmitting = false;
      alert('Erreur lors de l\'envoi.');
    }
  }



  /*onSubmit() {
    if (this.isSubmitting) return; // ✅ garde-fou
    this.isSubmitting = true;

    this.contactService.sendMessage(this.form).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.isSuccess = true;
        this.form = { name: '', email: '', message: '' };
        setTimeout(() => this.closeModal(), 3000);
      },
      error: (err) => {
        this.isSubmitting = false;
        alert('Erreur lors de l\'envoi.');
      }
    });
  }*/

  /*onSubmit() {
    this.isSubmitting = true;

    this.contactService.sendMessage(this.form).subscribe({
      next: (res) => {
        console.log("Succès", res);
        this.isSubmitting = false; // IMPORTANT
        this.isSuccess = true;
        //this.form = { name: '', email: '', message: '' };
        //
        setTimeout(() => this.closeModal(), 3000);
        },
      error: (err) => {
        console.log("Erreur", err);
        this.isSubmitting = false; // IMPORTANT
      }
    });
  }*/


}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditCategoryComponent } from './add-edit-category.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    AddEditCategoryComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    BrowserAnimationsModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    ToastModule
  ],
  exports:[AddEditCategoryComponent]
})
export class AddEditCategoryModule { }

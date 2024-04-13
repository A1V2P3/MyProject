import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { AddEditCategoryComponent } from './add-edit-category/add-edit-category.component';
import { AddEditCategoryModule } from './add-edit-category/add-edit-category.module';
import { ToastModule } from "primeng/toast";
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



@NgModule({
  declarations: [
    CategoryComponent,
  
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ToastModule,
    TableModule,
    ButtonModule,
    AddEditCategoryModule,
    ConfirmDialogModule
  ],
  exports:[
    CategoryComponent
  ],
  providers: [MessageService,ConfirmationService]
})
export class CategoryModule { }

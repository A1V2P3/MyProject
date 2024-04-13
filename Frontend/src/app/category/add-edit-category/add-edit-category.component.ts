
import { Component, EventEmitter,Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { MessageService } from "primeng/api";
import { error } from 'node:console';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrl: './add-edit-category.component.css'
})
export class AddEditCategoryComponent implements OnInit,OnChanges {
@Input() displayAddEditModal:boolean =true;
@Input() selectedCategory : any = null;
@Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
@Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();
modalType = "Add";

  categoryForm = this.fb.group({
     id:[0, Validators.required],
     CategoryName: ["",Validators.required],
     
  });
  constructor (private fb: FormBuilder,private categoryServevice:CategoryService,
    private messageService:MessageService ) { }
  ngOnInit(): void {
      
  }
  ngOnChanges(changes: SimpleChanges): void {
      if(this.selectedCategory){
        this.modalType= 'Edit';
        this.categoryForm.patchValue(this.selectedCategory);
      }else{
        this.categoryForm.reset();
        this.modalType='Add';
      }
  }

  closeModal() {
    this.categoryForm.reset();
   this.clickClose.emit(true);
  }

  addEditCategory() {
   this.categoryServevice.addEditCategory(this.categoryForm.value,this.selectedCategory).subscribe(
    response => {
      this.clickAddEdit.emit(response);
      this.closeModal();
      const msg=this.modalType === 'Add' ? 'Category' : 'Category Updated';
      this.messageService.add({severity:'Success',summary:'Success', detail:'Added Category'})
    },
    error =>{
      this.messageService.add({severity:'Success',summary:'Success', detail:error})
     
    console.log('Error occured');
    
    }
   )
   }
 
  
 
}

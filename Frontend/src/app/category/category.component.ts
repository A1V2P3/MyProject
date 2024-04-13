import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';
import { response } from 'express';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
     
    categories:Category[]=[];

    displayAddEditModal = false;
    selectedCategory:any = null;

    constructor (private categoryService: CategoryService,
 private confirmationService:ConfirmationService,
 private messageService:MessageService ) { }

    ngOnInit(): void {
        this.getCategoryList();
    }

    getCategoryList(){
      this.categoryService.getCategory().subscribe(
         response => {
            this.categories=response
         },
         
      )
    }



    showAddModal(){
    this.displayAddEditModal = true;
    this.selectedCategory=null;
    }

    hideAddModal(isClosed:boolean){
       this.displayAddEditModal=!isClosed;
    }

    saveorUpadateCategoryList(newData:any){
      if (this.selectedCategory && newData.id=== this.selectedCategory.id) {
         const categoryIndex= this.categories.findIndex(data => data.id === newData.id);
         this.categories[categoryIndex]=newData;
      }else {
         this.categories.unshift(newData);
      }

      
    }

    showEditModal(category : Category){
       this.displayAddEditModal=true;
       this.selectedCategory=category;    
    }
  

    deleteCategory(category:Category){
       this.confirmationService.confirm({
         message: 'Are you sure that you want to delete this category',
         accept: ()=> {
           this.categoryService.deleteCategory(category.id).subscribe(
            response =>{
               this.categories = this.categories.filter(data => data.id !== category.id)
              this.messageService.add({severity:'Success',summary:'Success', detail:'Deleted Successfully'})
            },
            error => {
               this.messageService.add({severity:'error',summary:'Error', detail:error})
            }
           )
         }
       })
    }
}

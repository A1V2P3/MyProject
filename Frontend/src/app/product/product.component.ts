import { Component, OnInit } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './product';
import { ConfirmationService, MessageService } from 'primeng/api';
import { response } from 'express';
import { error } from 'console';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent  implements OnInit{
  products: Product[] = [];
   displayAddEditModal =false;
   selectorProduct:any =null;


  constructor(private productService:ProductService,
    private confirmationService:ConfirmationService,
    private messageService:MessageService)  { }

  ngOnInit(): void {
      this.getProductList();

  }

  getProductList(){
    this.productService.getProducts().subscribe(
      response =>{
        this.products=response;
        
      }
    )
  }

   showAddModal(){
      this.displayAddEditModal=true;
      this.selectorProduct=null;
   }
   hideAddModal(isClosed:boolean){
    this.displayAddEditModal=true;
   }

   saveorUpdateProductList(newData:any){
    if(this.selectorProduct && newData.id === this.selectorProduct.id){
      const productIndex = this.products.findIndex(data => data.id === newData.id);
      this.products[productIndex]=newData;
    
   } else {
    this.products.unshift(newData);
   }

  }


   showEditModal(product:Product){
     this.displayAddEditModal=true;
     this.selectorProduct=product;
   }

   deleteProduct(product:Product){
     this.confirmationService.confirm({
      message:'Are you sure that you want to delete this product? ',
      accept: () => {
          this.productService.deleteProduct(product.id).subscribe(
            response => {
                this.products=this.products.filter(data => data.id !== product.id)
              this.messageService.add({ severity: 'success', summary:'Success', detail:'Deleted SuccessFully' });

            },
            () => {
              this.messageService.add({ severity: 'success', summary:'Success', detail:'Deleted SuccessFully' });
            }
          )
      }
     });
   }
}

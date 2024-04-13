import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:8080/api/products/getAllCategory');
  }


  addEditCategory(postData:any,selectedCategory:any){
    if(selectedCategory === 'Add '){
      return this.http.post('http://localhost:8080/api/products/addEditCategory',postData);
    }else {
      return this.http.put(`http://localhost:8080/api/products/${selectedCategory.id}`,postData);
    }
  
  }

  deleteCategory(categoryId: number){
     return this.http.delete(`http://localhost:8080/api/products/${categoryId}`)
  }

}

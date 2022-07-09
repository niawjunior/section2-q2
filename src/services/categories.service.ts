import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  url="https://api.publicapis.org/categories";
  constructor(private http:HttpClient) { }

  getCategories():Observable <ICategory> {
    return this.http.get<ICategory>(this.url);
  }
}

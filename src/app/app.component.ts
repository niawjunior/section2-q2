import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/interfaces/category';
import { CategoryService } from 'src/services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Categories App';
  @Input() search: string | null;
  categories:ICategory
  searchCategories: ICategory
  constructor(private categoryService:CategoryService) {
    this.search = null;
    this.categories = {
      count: 0,
      categories: []
    }

    this.searchCategories = {
      count: 0,
      categories: []
    }
  }

  ngOnInit():void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
      this.searchCategories = this.categories
    })
  }

  searchChange(searchText: any) {
      this.searchCategories = this.filterCategories(searchText)
  }

  filterCategories(searchText: string): ICategory {
    const result = !searchText ? this.categories : {
      ...this.categories,
      categories: this.categories.categories.filter(category => category.toUpperCase().includes(searchText.toUpperCase())),
    }

    console.log(result)

    return result
  }
}

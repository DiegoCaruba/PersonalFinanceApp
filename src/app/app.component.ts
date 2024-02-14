import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryListComponent } from './pages/categories/category-list/category-list.component';
import { CategoryFormComponent } from './pages/categories/category-form/category-form.component';
import { CategoriesRoutingModule } from './pages/categories/categories-routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategoriesRoutingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'personalFinanceApp';
}

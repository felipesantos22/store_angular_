import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ApiService } from '../../services/api.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  data: Product[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data: Product[]) => {
      this.data = data;
    });
  }
}

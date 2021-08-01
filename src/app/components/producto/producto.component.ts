import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  constructor() { 
    this.agregadoCarrito = new EventEmitter();
  }

  ngOnInit(): void {
    
  }

  @Input() producto: Product;

  @Output() agregadoCarrito: EventEmitter<any>;

  agregarCarrito() {
    console.log('Agregado al carrito');
    this.agregadoCarrito.emit(this.producto.id);
  }

}

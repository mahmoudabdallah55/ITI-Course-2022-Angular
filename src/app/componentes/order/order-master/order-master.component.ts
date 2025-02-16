import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/models/i-category';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit, AfterViewInit  {
  catList: ICategory[];
  slectedCatId:number= 0;
  recivedChangesTotalPrice!:number;
  @ViewChild('clientInp') clientInp!:ElementRef;
  @ViewChild(ProductListComponent) ProductListComponentObject!:ProductListComponent;
 


  constructor() {
    this.catList = [
      {
      id:1,
      name:"labtop"
    },
      {
      id:2,
      name:"tab"
    },
      {
      id:3,
      name:"pc"
    },
    ]
   }

  ngOnInit(): void {
    // Initialization logic here
  }
  onTotalPriceChanged(data:number) {
    this.recivedChangesTotalPrice = data
  }
  ngAfterViewInit(): void {
    this.clientInp.nativeElement.style.border = "2px solid red";
    // console.log(this.ProductListComponentObject.productList);
    // this.ProductListComponentObject.filteredProductsArray()
 
    
    
  }


}

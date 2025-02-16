// import { StaticProductListDataService } from '../../../services/static-product-list-data.service';
import { Component, EventEmitter, Inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/models/i-category';
import { IProduct } from 'src/app/models/i-product';
import { StaticProductListDataServiceService } from '../../../services/static-product-list-data-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnChanges {
  filteredArray:IProduct[]=[];
  productsByCatId:IProduct[]=[];
  // productList:IProduct[];
  @Input() sentCatIdOfProducts:number=0;
  @Output() onPriceChanged:EventEmitter<number>;
 
  totalProductPrice:number = 0;
  constructor( private staticProductListDataService: StaticProductListDataServiceService ){
    this.onPriceChanged = new EventEmitter<number>();


  //   this.productList=[{
  //     id:1,
  //     name:'Product 1',
  //     price:100,
  //     quantity:10,
  //     imgUrl:'https://picsum.photos/200/100',
  //     categoryId:1
  //   },{
  //     id:2,
  //     name:'Product 1',
  //     price:200,
  //     quantity:0,
  //     imgUrl:'https://picsum.photos/200/100',
  //     categoryId:1
  //   },
  //   {
  //     id:3,
  //     name:'Product 2',
  //     price:300,
  //     quantity:30,
  //     imgUrl:'https://picsum.photos/200/100',
  //     categoryId:2
  //   },
  //   {
  //     id:3,
  //     name:'Product 2',
  //     price:400,
  //     quantity:1,
  //     imgUrl:'https://picsum.photos/200/100',
  //     categoryId:2
  //   },
  //   {
  //     id:3,
  //     name:'Product 3',
  //     price:500,
  //     quantity:2,
  //     imgUrl:'https://picsum.photos/200/100',
  //     categoryId:3
  //   },
  //   {
  //     id:3,
  //     name:'Product 3',
  //     price:600,
  //     quantity:100,
  //     imgUrl:'https://picsum.photos/200/100',
  //     categoryId:3
  //   },
  // ]

 
  
  }
  ngOnChanges(): void {
    // this.filteredProductsArray()
    this.productsByCatId = this.staticProductListDataService.getProductsByCatId(this.sentCatIdOfProducts)
  
  }

//  private filteredProductsArray() {
//   if (this.sentCatIdOfProducts==0) {
//     this.filteredArray = this.productList
    
//   }
//   else
//   {

//     this.filteredArray = this.productList.filter(prd=>this.sentCatIdOfProducts==prd.categoryId)
//   }
  
  
//   }

  

  buy(productPrice:number,productCont: string,productQuantity:number ){
    if(parseInt (productCont) <= productQuantity )  {
      this.totalProductPrice += productPrice * parseInt(productCont)
      this.onPriceChanged.emit(this.totalProductPrice)

    }
    else {
      window.alert("you enter number over than product quentity")
    }
    if(parseInt (productCont) > 0 )  {
      this.totalProductPrice += productPrice * parseInt(productCont)
      this.onPriceChanged.emit(this.totalProductPrice)

    }
    else {
      window.alert("you shoud enter postive number")
      
    }
    

  }


 


  

}



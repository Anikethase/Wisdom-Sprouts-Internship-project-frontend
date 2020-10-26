
import { Component, OnInit, ViewChild, ElementRef,EventEmitter, Output } from '@angular/core';
import { ProductServices } from '../product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import { CartServices } from '../cart.service';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-mainscreen-category',
  templateUrl: './mainscreen-category.component.html',
  styleUrls: ['./mainscreen-category.component.css']
})
export class MainscreenCategoryComponent implements OnInit {
  id: number;
  products : any;
  @ViewChild('ingre_qty') ingre_qty : ElementRef;

  constructor( private route: ActivatedRoute,
    private  router: Router,private http:HttpClient,private cartServi:CartServices) { }

    ngOnInit() {
      let id2 = this.route.snapshot.paramMap.get('id');
      this.http.get("http://localhost:3010/api/productcat/5eeb7ecddd72f81e8c30a5e4").subscribe(posts =>{
        console.log("array"+posts);
  
       this.products =  posts;
     });  
     
    }
}


//"http://localhost:3010/api/productcat/5eeb7ee4dd72f81e8c30a5e5"
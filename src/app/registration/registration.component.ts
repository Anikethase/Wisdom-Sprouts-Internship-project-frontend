import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { ProductServices } from '../product.service';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user : User;
  constructor(private productServi :ProductServices,private http:HttpClient) { }

  ngOnInit(): void {
  }

  onCreatePost(postData: { full_name: string; email: string; mobile_no : number; address: string; DOB: Date; password: string;})
  {

    console.log(postData);

    this.http.post('http://localhost:3010/api/signUp',postData).subscribe(responseData => {
        console.log(responseData);
        alert("Welcome Account has been Created.");
      });
  }

}

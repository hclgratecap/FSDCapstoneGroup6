import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/model/restaurant';
import { SearchService } from 'src/app/service/search.service';
import restaurants from '../../jsonFile/restaurant.json'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    restaurant:Restaurant[];
    dish:string="";
 
    constructor(public service:SearchService) { 
    this.restaurant=restaurants;
    this.dish=this.service.getData();  
   }

   ngOnInit(): void {
   }

}  


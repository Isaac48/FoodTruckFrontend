import { Component, OnInit } from '@angular/core';
import { FoodTrucRequestkModel } from '../../models/food-truck-model';
import { FoodTruckService } from '../../services/food-truck.service'

@Component({
  selector: 'app-food-truck',
  templateUrl: './food-truck.component.html',
  styleUrls: ['./food-truck.component.scss']
})
export class FoodTruckComponent implements OnInit {
  FoodTruckService: any;
  day: string ='';
  constructor(public foodTruckService: FoodTruckService) { 
    this.day = "Monday"
  }

  ngOnInit(): void {
  }
  
  Selected: string ='Selecciona un día'
 
  daysOfTheWeek = [
    { name: "Monday" },
    { name: "Tuesday" },
    { name: "Wednesday" },
    { name: "Thursday" },
    { name: "Friday" },
    { name: "Saturday" },
    { name: "Sunday" }
  ];

  time = {hour: 13, minute: 30};
    meridian = true;
  
    toggleMeridian() {
        this.meridian = !this.meridian;
    }
    newValue: any;
    onChange(): any {
        console.log(this.time.hour);
        console.log(this.time.minute);
        console.log(this.day);
    }

    enviar(){
      console.log('send');
      const foodtruck: FoodTrucRequestkModel = {
        hora : this.time.hour,
        minutos : this.time.minute,
        dia : this.day
      }
      this.foodTruckService.obtenerFoodTrucks(foodtruck);
      console.log(foodtruck);
    }



    

}

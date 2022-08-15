import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodTruckModel, FoodTrucRequestkModel } from '../models/food-truck-model';

@Injectable({
  providedIn: 'root'
})
export class FoodTruckService {
  //FoodTruckModel

  urlBase ='https://localhost:44370/api/FoodTruck/GetFoodTruck';
  //method ='api/foodTrucks';

  listFoodTruck!: FoodTruckModel[];

  constructor(private http: HttpClient) { }

  obtenerFoodTrucks(model: FoodTrucRequestkModel){
    this.http.get(this.urlBase+'?hora='+model.hora+'&min='+model.minutos+'&dia='+model.dia).toPromise()
                  .then(data =>{
                    this.listFoodTruck = data as FoodTruckModel[];
                  })
  }

//   search(model: FoodTrucRequestkModel) {
//     let promise = new Promise((resolve, reject) => {
//       let apiURL = `${this.urlBase}?term=${term}&media=music&limit=20`;
//       this.http
//         .get(apiURL)
//         .toPromise()
//         .then(
//           res => {
//             // Success
//             this.results = res.results.map(item => {
//               return new SearchItem(
//                 item.trackName,
//                 item.artistName,
//                 item.trackViewUrl,
//                 item.artworkUrl30,
//                 item.artistId
//               );
//             });
//             resolve();
//           },
//           msg => {
//             // Error
//             reject(msg);
//           }
//         );
//     });
//     return promise;
//   }
// }

  // obtenerFoodTrucks2(model: FoodTrucRequestkModel){
  //   return this.http.get<FoodTruckModel[]>(this.urlBase, model)
  //   .subscribe(data: FoodTruckModel[]) =>{
  //     this.listFoodTruck = data
  //   };
  // }

}

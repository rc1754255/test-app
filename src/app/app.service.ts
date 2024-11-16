import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    private productLists = [
        {
            "pk": 1,
            "name": "Cafe Coffee Day E-Gift Card Rs 100",
            "points": 50,
            "display_img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyV-cVoruzOO1v8HHHXVqkAzm7iLGpJBrVxA&s",
            "quantity": 4,
            "valid_until": "2024-12-31T00:00:00",
            "low_quantity": 10,
        },
        {
            "pk": 2,
            "name": "Peter England E-Gift Card Rs 1000",
            "points": 500,
            "display_img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSfHbOoC_QOsTYzO9Ufb7Xv591zmADbfrlIw&s",
            "quantity": 0,
            "valid_until": "2024-12-31T00:00:00",
            "low_quantity": 10,
        },
        {
            "pk": 3,
            "name": "Nike E-Gift Card Rs 1000",
            "points": 700,
            "display_img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfdbmcwxOGNJpIncH4RuLgWzQjNGnXJgzFzsSyRxFfIUzdgQCwHDbLbfeWlIc_3D70KmE&usqp=CAU",
            "quantity": 11,
            "valid_until": "2024-12-31T00:00:00",
            "low_quantity": 10,
        },
        {
            "pk": 4,
            "name": "SWIGGY E-Gift Card Rs 100",
            "points": 50,
            "display_img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgBrK3RyyrqSLVJSN6ocUlbKLNN82cFPA-w&s",
            "quantity": 8,
            "valid_until": "2024-12-31T00:00:00",
            "low_quantity": 5,
        }
    ];

    constructor() { }

    getProductLists() {
        return this.productLists;
    }


}

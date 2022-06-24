import { Injectable } from '@angular/core';
import { Currency } from './../interface/currency';
import { PaidWay } from './../interface/paid-way';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }

  Countries: Array<any> = [
    { name:'Egypt',cities:['Cairo','Alexandria','Dakahlia','Aswan','Asyut','Gharbia','Giza']},
		{ name: 'Germany', cities: ['Berlin', 'Bayern', 'Hessen','Hamburg','Bremen']},
		{ name: 'Spain',  cities: ['Barcelona','madried','Malga','Valincia','Larada']},
		{ name: 'USA',  cities: ['California','Florida','Georgia','New York','Texas']},
		{ name: 'Mexico',  cities: ['Puebla','Mexico','Campecha','Chiapes']},
		{ name: 'India', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore']},
	];

  currencies:Array<Currency> = [
    { name:'Egyption pound'},
    { name:'Europen euro'},
    { name:'Indian rupee'},
    { name:'United State dollar'},
    { name:'Mexican peso'}
  ];

  paidWay:Array<PaidWay> = [
    {value:'MasterCard',image:'./././assets/4_18.png'},
    {value:'Visa',image:'./././assets/images.png'},
    {value:'Pay',image:'./././assets/download.png'},
    {value:'Cirrus',image:'./././assets/Cirrus_logo.svg.png'},
    {value:'Paypal',image:'./././assets/pay.jpg'},
    {value:'Net Banking',image:'./././assets/netbanking-credit-debit-card-bank-transaction-32302.webp'},
    {value:'Discover',image:'./././assets/FVPRZEqXEAAKVXB.jpg'},
    {value:'Diners Club',image:'./././assets/1519952586871.jpg'},
  ];
}

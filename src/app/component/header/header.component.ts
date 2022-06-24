import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { CountriesService } from './../../service/countries.service';
import { States } from './../../interface/states';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _CountriesService:CountriesService , private _ApiService:ApiService) { }
  Countries  = this._CountriesService.Countries
  currencies = this._CountriesService.currencies
  paidWay = this._CountriesService.paidWay
  states: Array<States> =[];
  isClicked:boolean = false
  isClicked2:boolean = true
  incre:number = 0



//change state dependancy which country you will selected
	changeCountry(country: any) {
		this.states = this._CountriesService.Countries.find((cntry: any) => cntry.name == country.target.value).cities;
	}

  // switch button paid and free
  switchToggle(){
    this.isClicked=!this.isClicked
    this.isClicked2=!this.isClicked2
  }

  //increment rows when click in plus
  increment(){
    if(this.incre>=0){
      this.incre+=1
    }
    this.addFormControl()
  }

  //decrement rows when click in minus
  decrement(){
    if(this.incre){
      this.incre-=1
    }
    this.removeFormControl()
}

//form group for all input
  detalitsForm:FormGroup = new FormGroup({
    country:new FormControl(null,[Validators.required]),
    city:new FormControl(null,[Validators.required]),
    address:new FormControl(null,[Validators.required]),
    Ticket_Name:new FormArray([]),
    price: new FormArray([]),
    cuncrancy:new FormArray([]),
    paid:new FormArray([]),
  })

  //return ticket_name as array to doing push
  get userFormGroups () {
    return this.detalitsForm.get('Ticket_Name') as FormArray
  }

    //return price as array to doing push
  get userPrice () {
    return this.detalitsForm.get('price') as FormArray
  }

    //return cuncrancy as array to doing push
  get userCuncrancy () {
    return this.detalitsForm.get('cuncrancy') as FormArray
  }
    //for checkbox input after selected it push to array form
  CheckBox(event:any){
    const formArray: FormArray = this.detalitsForm.get('paid') as FormArray;
    if(event.target.checked){
      formArray.push(new FormControl(event.target.value));
    }else{
      let i: number = 0;
      formArray.controls.forEach((ctrl) => {
        if(ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  //add form control when adding by plus
  addFormControl():any{
  ((<FormArray> this.detalitsForm.get('Ticket_Name')).push(new FormControl(null,[Validators.required , Validators.minLength(2) , Validators.pattern(/^[A-Z a-z]{2,}$/)]))),
  ((<FormArray> this.detalitsForm.get('price')).push(new FormControl(null,[Validators.required]))),
  ((<FormArray> this.detalitsForm.get('cuncrancy')).push(new FormControl(null,[Validators.required])))
  }

  //remove form control when adding by minus
  removeFormControl(){
  (this.userFormGroups.controls).splice(this.userFormGroups.length-1),
  (this.userPrice.controls).splice(this.userPrice.length-1),
  (this.userCuncrancy.controls).splice(this.userCuncrancy.length-1)
}

  //send data to api when click in save button
submitlogin(detalitsForm:FormGroup){
  this._ApiService.sendData(detalitsForm.value).subscribe()
  if(!detalitsForm.invalid){
    alert('success')
  }else{
    alert('must enter all input')
  }
}
  ngOnInit(): void {
}

}






import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { resturentdata } from './resturent.model';

@Component({
  selector: 'app-resturent',
  templateUrl: './resturent.component.html',
  styleUrls: ['./resturent.component.scss']
})
export class ResturentComponent implements OnInit{
  formValue!:FormGroup
 resturentModelobj: resturentdata=new resturentdata
 allresturentdata: any
  constructor(private formBuilder:FormBuilder,private api:ApiService) { }
  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      service: ['']
    })
    this.getAllData()
  }
//from value initilize....
//now subcribe our data which is maped via serciceas.....
addresto(){
  this. resturentModelobj.name = this.formValue.value.name;
  this. resturentModelobj.email = this.formValue.value.email;
  this. resturentModelobj.mobile = this.formValue.value.mobile;
  this. resturentModelobj.address = this.formValue.value.address;
  this. resturentModelobj.service = this.formValue.value.service;

  this.api.postResturent(this.resturentModelobj).subscribe(res => {
    console.log(res);
    alert("Restaurent Added Successfully");
    this.formValue.reset();
     this.getAllData();  //when u put any data
},
)
}
//get all  data
getAllData(){
  this.api.getResturent().subscribe(res=>{
    this.allresturentdata = res;
  })
}
//delete record....
deleteresto(data:any){
this.api.deleteResturent(data.id).subscribe(res=>{
  alert("Restaurent Deleted Successfully")
  this.getAllData(); // again data come...
})
}


//edit all data .....
oneditresto(data:any){
  this.formValue.controls['name'].setValue(data.name);
  this.formValue.controls['email'].setValue(data.email);
  this.formValue.controls['mobile'].setValue(data.mobile);
  this.formValue.controls['address'].setValue(data.address);
  this.formValue.controls['service'].setValue(data.service);


}

}


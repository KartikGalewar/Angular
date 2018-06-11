import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }


  btn_name:boolean=false;
    /*
  bulbs_path=['/assets/bulb_on.jpg','/assets/bulb_off.jpg','/assets/bulb_on.jpg','/assets/bulb_off.jpg'];

  bulb=this.bulbs_path[0];
  
  toggleButton():void{
  
  this.btn_name = !this.btn_name;

  if(this.btn_name == true){
    this.img_path =  '/assets/bulb_off.jpg';
  }else{
    this.img_path = '/assets/bulb_on.jpg';
  
  }
  
  }
*/
bulbspath= ['/assets/bulb_on.jpg','/assets/bulb_on.jpg','/assets/bulb_on.jpg','/assets/bulb_on.jpg' ];
button=['ON','ON','ON','ON'];

  //myHero = this.bulbspath[0];

  toggleButton(i):void{
    
    if (this.bulbspath[i]=='/assest/bulb_on.jpg'){

    }
    
    }




}

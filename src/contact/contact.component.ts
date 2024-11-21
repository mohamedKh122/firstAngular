import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @ViewChild('labelName') nameLabel!: ElementRef;
  @ViewChild('labelAge') labelAge!: ElementRef;
  @ViewChild('labelEmail') labelEmail!: ElementRef;
  @ViewChild('labelPass') passLabel!: ElementRef;
  apperingText(typeOfLabel:string){
    if(typeOfLabel === 'labelPass' ){
      this.passLabel.nativeElement.style.top = "0"
    }else if(typeOfLabel === 'labelEmail'){
    this.labelEmail.nativeElement.style.top = "0"
    }else if(typeOfLabel === "labelAge"){
      this.labelAge.nativeElement.style.top = "0"
    } else if(typeOfLabel === "labelName"){
      this.nameLabel.nativeElement.style.top = "0"
    }
}
}

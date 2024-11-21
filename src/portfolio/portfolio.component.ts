import { Component, ViewChildren, ElementRef, ViewChild, QueryList} from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  @ViewChild('mainLayer') layer!: ElementRef;
  @ViewChild('theBg') thebg!:ElementRef;

  displayLayer(e:any){
    this.layer.nativeElement.classList.replace("d-none", "d-block")
    this.thebg.nativeElement.style.backgroundImage = `url(${e.src})`
  }
  closeLayer(){
    this.layer.nativeElement.classList.replace("d-block", "d-none")
  }
  stopPropagatiomFun(e:any){
    e.stopPropagation()
  }
}




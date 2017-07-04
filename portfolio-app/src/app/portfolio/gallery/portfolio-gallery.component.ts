import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-gallery',
  templateUrl: './portfolio-gallery.component.html',
  styleUrls: ['./portfolio-gallery.component.css']
})
export class PortfolioGallery implements OnInit {
  @Input() images: string;

  ngOnInit() {
   
  }
}

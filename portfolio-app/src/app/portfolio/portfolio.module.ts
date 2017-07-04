import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PortfolioGallery } from './gallery/portfolio-gallery.component';
import { Portfolio } from './portfolio.component';

@NgModule({
    declarations: [
        Portfolio,
        PortfolioGallery
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        PortfolioGallery,
        Portfolio
    ],
    providers: [],
    bootstrap: [
        Portfolio 
    ]
})

export class PortfolioModule {}
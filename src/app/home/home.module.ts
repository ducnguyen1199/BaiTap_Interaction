import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PromotionComponent } from './promotion/promotion.component';
import { LapTopComponent } from './lap-top/lap-top.component';
import { SmartPhoneComponent } from './smart-phone/smart-phone.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [HomeComponent, HeaderComponent, CarouselComponent, PromotionComponent, LapTopComponent, SmartPhoneComponent, ProductItemComponent, ModalComponent],
  exports:[HomeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopNewsPage } from './shop-news';

@NgModule({
  declarations: [
    ShopNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopNewsPage),
  ],
})
export class ShopNewsPageModule {}

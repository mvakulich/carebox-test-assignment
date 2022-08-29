import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaPipe } from './na.pipe';



@NgModule({
  declarations: [
    NaPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [NaPipe]
})
export class PipesModule { }

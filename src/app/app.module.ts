import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the PivotViewModule for the pivot table component
import { PivotViewModule, ConditionalFormattingService } from '@syncfusion/ej2-angular-pivotview';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PivotViewModule 
  ],
  providers: [ConditionalFormattingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

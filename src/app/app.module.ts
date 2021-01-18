import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { EntryGridComponent } from './entry-grid/entry-grid.component';
import { ChartistModule } from 'ng-chartist';
import { DailyChartComponent } from './daily-chart/daily-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { EntryService } from './providers/entry.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    EntryGridComponent,
    DailyChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    ChartistModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    EntryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, Input, OnChanges } from '@angular/core';
import { IBarChartOptions, IChartistData } from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';
import { ListaControleLancamentoModel } from '../models/api-models/lista-controle-lancamento.model';

@Component({
  selector: 'app-daily-chart',
  templateUrl: './daily-chart.component.html',
  styleUrls: ['./daily-chart.component.scss']
})
export class DailyChartComponent implements OnChanges {

  @Input() entryData: ListaControleLancamentoModel[];

  type: ChartType;
  options: IBarChartOptions;
  events: ChartEvent;
  data: IChartistData;

  constructor() {
    this.setupChart();
  }

  ngOnChanges(): void {
    this.processDataChart();
  }

  /**
   * setupChart()
   * Configuração do componente chartist
   */
  private setupChart(): void {
    this.type = 'Bar';
    this.options = {
      axisX: {
        showGrid: false
      },
      height: 248
    };
    this.events = {
      draw: (data) => {
        if (data.type === 'bar') {
          data.element.animate({
            y2: {
              dur: '0.5s',
              from: data.y1,
              to: data.y2,
              easing: 'easeOutQuad'
            }
          });
        }
      }
    };
  }

  /**
   * processDataChart()
   * Realiza o processamento dos dados para adequação ao gráfico de barras.
   * Sumariza por dia para exibir o Volume Diário das transações.
   */
  private processDataChart(): void {
    const chartSeries = new Array(31).fill(0);

    chartSeries.forEach((serie, index, list) => {
      const dayEntries = this.entryData.filter(entry => {
        const day = +entry.dataEfetivaLancamento.split('/')[0];
        return (day === index + 1);
      });

      const dayTotal = dayEntries.reduce((total, item) => {
        return total + item.valorLancamentoRemessa;
      }, 0);

      list[index] = dayTotal;
    });

    this.data = {
      series: [chartSeries]
    };
  }
}

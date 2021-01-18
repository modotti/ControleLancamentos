import { Component, Input, OnChanges } from '@angular/core';
import { IChartistData, IChartistSeriesData, IPieChartOptions } from 'chartist';
import { ChartType } from 'ng-chartist';
import { ListaControleLancamentoModel } from '../models/api-models/lista-controle-lancamento.model';
import { StatusEnum } from '../models/status.enum';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnChanges {

  @Input() entryData: ListaControleLancamentoModel[];

  type: ChartType;
  options: IPieChartOptions;
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
    this.type = 'Pie';
    this.options = {
      donut: true,
      donutWidth: 35,
      donutSolid: true,
      startAngle: 270,
      showLabel: true,
      height: 150,
      width: 150
    };
  }

  /**
   * processDataChart()
   * Realiza o processamento dos dados para adequação ao gráfico de pizza.
   */
  private processDataChart(): void {
    const getStatusCount = (status) => {
      return this.entryData.filter(entry => {
        return (entry.lancamentoContaCorrenteCliente.nomeSituacaoRemessa === status);
      }).length;
    };

    const paidCount = getStatusCount(StatusEnum.PAID);
    const unpaidCount = getStatusCount(StatusEnum.UNPAID);
    const unavailableCount = getStatusCount(StatusEnum.UNAVAILABLE);

    this.data = {
      series: [{
        className: 'donut-serie-1',
        value: paidCount
      }, {
        className: 'donut-serie-2',
        value: unpaidCount
      }, {
        className: 'donut-serie-0',
        value: unavailableCount
      }]
    };
  }

  /**
   * getStateClass()
   * Retorna a classe para exibir o gráfico somente se houverem dados associados
   */
  getStateClass(): string {
    const series = this.data.series as IChartistSeriesData[];
    const totalCount = series.reduce((total, item) => {
      return total + item.value;
    }, 0);

    if (totalCount) {
      return 'show';
    }

    return 'hide';
  }

}

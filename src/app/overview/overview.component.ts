import { Component, OnInit } from '@angular/core';
import { LancamentoDtoModel } from '../models/api-models/lancamento-dto.model';
import { ListaControleLancamentoModel } from '../models/api-models/lista-controle-lancamento.model';
import { EntryService } from '../providers/entry.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  data: LancamentoDtoModel;
  entryData: ListaControleLancamentoModel[] = [];

  entryCount: string;
  shipmentCount: string;
  totalValue: string;

  constructor(private entryService: EntryService) { }

  ngOnInit(): void {
    this.requestEntries();
  }

  /**
   * requestEntries()
   * Realiza a busca dos lançamentos na API
   */
  private requestEntries(): void {
    this.entryService.getAllEntries().subscribe(
      response => {
        this.data = response;
        this.entryData = this.data.listaControleLancamento;
        this.entryCount = this.data.totalControleLancamento.quantidadeLancamentos.toString();
        this.shipmentCount = this.data.totalControleLancamento.quantidadeRemessas.toString();
        this.totalValue = (+this.data.totalControleLancamento.valorLancamentos)
          .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
      },
      error => console.error('Could not retrieve entries 😩: ', error)
    );
  }
}

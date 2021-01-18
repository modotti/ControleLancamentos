import { Component, Input, OnChanges } from '@angular/core';
import { ListaControleLancamentoModel } from '../models/api-models/lista-controle-lancamento.model';
import { EntryGridDataModel } from '../models/entry-grid-data.model';
import { StatusEnum } from '../models/status.enum';

@Component({
  selector: 'app-entry-grid',
  templateUrl: './entry-grid.component.html',
  styleUrls: ['./entry-grid.component.scss']
})
export class EntryGridComponent implements OnChanges {

  @Input() data: ListaControleLancamentoModel[];
  entryList: EntryGridDataModel[] = [];

  constructor() { }

  ngOnChanges(): void {
    this.processData();
  }

  /**
   * processData()
   * Realiza o adequamento dos dados para mostrar na Grid de Lançamentos
   */
  private processData(): void {
    this.entryList = this.data.map(entry => {
      const agency = entry.lancamentoContaCorrenteCliente.dadosDomicilioBancario.numeroAgencia;
      const account = (entry.lancamentoContaCorrenteCliente.dadosDomicilioBancario.numeroContaCorrente).replace(/^0+/, '');
      const finalValue = entry.valorLancamentoRemessa.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
      return {
        entryDate: entry.dataEfetivaLancamento,
        description: entry.lancamentoContaCorrenteCliente.nomeTipoOperacao,
        eventNumber: entry.numeroEvento.toString(),
        status: entry.lancamentoContaCorrenteCliente.nomeSituacaoRemessa,
        confirmationDate: entry.dataLancamentoContaCorrenteCliente,
        accountData: entry.nomeBanco + ' Ag ' + agency + ' CC ' + account,
        value: finalValue
      };
    });
  }

  /**
   * getStatusTagClass()
   * Retorna a classe da tag na coluna Situação.
   *
   * @param <String> status
   */
  getStatusTagClass(status: string): string {
    switch (status) {
      case StatusEnum.UNAVAILABLE: return 'tag-color-0';
      case StatusEnum.PAID: return 'tag-color-1';
      case StatusEnum.UNPAID: return 'tag-color-2';
      default: return '';
    }
  }

}

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LancamentoDtoModel } from '../models/api-models/lancamento-dto.model';

@Injectable()
export class EntryService {
    private httpClient: HttpClient;
    private url = '/api/entries';

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    public getAllEntries(): Observable<LancamentoDtoModel> {
        return this.httpClient.get<LancamentoDtoModel>(this.url);
    }
}

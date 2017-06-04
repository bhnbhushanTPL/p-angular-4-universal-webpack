import { Subject, Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
    private loading: Subject<Boolean> = new Subject<Boolean>()
    on(){
        this.loading.next(true)
    }
    off(){
        this.loading.next(false)
    }
    get() : Observable<any> {
        return this.loading.asObservable();
    }
}
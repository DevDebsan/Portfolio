import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UiStateService {
    private mouseSource = new BehaviorSubject<{ x: number, y: number }>({ x: 0, y: 0 });
    mouse$ = this.mouseSource.asObservable();

    private scrollSource = new BehaviorSubject<number>(0);
    scroll$ = this.scrollSource.asObservable();

    constructor(private ngZone: NgZone) {
        this.initListeners();
    }

    private initListeners() {
        this.ngZone.runOutsideAngular(() => {
            // Mouse Move Listener
            fromEvent<MouseEvent>(window, 'mousemove')
                .pipe(throttleTime(16)) // ~60fps cap
                .subscribe(e => {
                    const x = (e.clientX / window.innerWidth) * 2 - 1;
                    const y = -(e.clientY / window.innerHeight) * 2 + 1;
                    this.mouseSource.next({ x, y });
                });

            // Scroll Listener
            fromEvent(window, 'scroll')
                .pipe(throttleTime(16))
                .subscribe(() => {
                    this.scrollSource.next(window.scrollY);
                });
        });
    }
}

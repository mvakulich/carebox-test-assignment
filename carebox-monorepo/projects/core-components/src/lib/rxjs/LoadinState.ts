import { Observable, of } from "rxjs";
import { catchError, startWith, map } from "rxjs/operators";


export interface LadingState {
  state: 'loading';
}

export interface ErrorState {
  state: 'error';
  error: Error;
}

export interface SuccessState<T> {
  state: 'success';
  data: T;
}

export type IAPIState<T> = LadingState | ErrorState | SuccessState<T>

export type ObservableState<T> = Observable<IAPIState<T>>;

export const wrapObservableState = <T>(observable: Observable<T>): ObservableState<T> => {
  return observable.pipe(
    map(data => ({
      state: 'success',
      data
    } as SuccessState<T>)),
    catchError(error => of({
      state: 'error',
      error: new Error(error)
    } as ErrorState)),
    startWith({state: 'loading'} as LadingState)
  )
}
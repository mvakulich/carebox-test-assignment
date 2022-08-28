import { Observable, of } from "rxjs";
import { catchError, startWith, map } from "rxjs/operators";


interface LadingState {
  state: 'loading';
}

interface ErrorState {
  state: 'error';
  error: Error;
}

interface SuccessState<T> {
  state: 'success';
  data: T;
}

export type ObservableState<T> = Observable<LadingState | ErrorState | SuccessState<T>>;

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
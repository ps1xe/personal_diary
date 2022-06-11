import { all, Effect } from "redux-saga/effects";
import { sagaWatcherAuth } from "./auth/authSagas";
import { sagaWatcherPages } from "./page/pageSagas";

export function* rootSagaWatcher(): Generator<Effect, void> {
    yield all([sagaWatcherPages(), sagaWatcherAuth()]);
}
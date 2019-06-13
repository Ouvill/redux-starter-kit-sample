import { combineReducers } from "redux-starter-kit";
import counterModule from "./counterModule";
import todosModules, { TodosState } from "./todosModule";

export interface RootState {
    todos: TodosState;
    counter: number;
}

export const rootReducer = combineReducers({
    todos: todosModules.reducer,
    counter: counterModule.reducer
});

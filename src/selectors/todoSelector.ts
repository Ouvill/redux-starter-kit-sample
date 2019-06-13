import { RootState } from "../modules/rootState";

export const todoListSelector = (state: RootState) => {
    return state.todos.list;
};

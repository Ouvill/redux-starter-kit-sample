import { createSlice, PayloadAction } from "redux-starter-kit";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export type TodosState = {
    nextTodoId: number;
    list: Todo[];
};

const todoInitialState: TodosState = {
    nextTodoId: 0,
    list: []
};

const todosModules = createSlice({
    slice: "todos",
    initialState: todoInitialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const todo = {
                id: state.nextTodoId++,
                text: action.payload,
                completed: false
            };
            state.list.push(todo);
        },

        toggleTodo: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            state.list.forEach(todo => {
                todo.completed =
                    todo.id === id ? !todo.completed : todo.completed;
            });
        }
    }
});

export default todosModules;

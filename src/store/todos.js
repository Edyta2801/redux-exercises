const ADD_TODO = 'ADD_TODO';
const FILTER_TODO = 'FILTER_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const DELETE_TODO = 'DELETE_TODO'

const INITIAL_STATE = {
    allTodos: [],
    visibleTodos: [],
    filter: '',
}


export const addTodo = text => ({
    type: ADD_TODO,
    text
});


export const filterTodos = text => ({
    type: FILTER_TODO,
    input: text
})

export const toggleTodo = index => ({
    type: TOGGLE_TODO,
    index
})
export const deleteTodo = index => ({
    type: DELETE_TODO,
    index
})



export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = { text: action.text, completed: false };
            const newVisibleTodos =
                newTodo.text.includes(state.filter)
                    ?
                    [...state.visibleTodos, newTodo]
                    : state.visibleTodos;

            return {
                ...state,
                allTodos: [...state.allTodos, newTodo],
                visibleTodos: newVisibleTodos
            }
        case 'FILTER_TODO':
            return {
                ...state,
                filter: action.input,
                visibleTodos: getVisibleTodos(state, action)
            }
        case 'TOGGLE_TODO':
            return {
                ...state,
                allTodos: state.allTodos.map((todo, index) => {
                    if (index === action.index) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    } else {
                        return todo;

                    }
                }
                ),
                visibleTodos: getVisibleTodos(state, action)
            }
        case 'DELETE_TODO':
            return {
                ...state,
                allTodos: state.allTodos.filter((todo, index) => !(index === action.index)),
                visibleTodos:getVisibleTodos(state, action)
            }

        default:
            return state;
    }
}

function getVisibleTodos(state) {
    return state.allTodos.filter(
        todo => todo.text.includes(state.filter)
    )
}


const ADD_TODO='ADD_TODO';

export const addTodo=text=>({
    type:ADD_TODO,
    text
})



export default (state=[],action)=>{
    switch (action.type){
        case 'ADD_TODO':
        const newTodo= { text:action.text, completed:false};
        return [...state, newTodo];
        default:
        return state;
    }
}



export default function (state = null, action) {
    switch (action.type) {
        case 'TODO_ADDED':
            return action.payload;
            break;
    }
    return state;
}
export default function (state = null, action) {
    switch (action.type) {
        case 'TODO_REMOVED':
            return action.payload;
            break;
    }
    return state;
}
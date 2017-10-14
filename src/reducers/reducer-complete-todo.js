export default function (state = null, action) {
    switch (action.type) {
        case 'TODO_DONE':
            return action.payload;
            break;
    }
    return state;
}
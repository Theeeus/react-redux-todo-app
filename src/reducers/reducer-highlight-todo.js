export default function (state = null, action) {
    switch (action.type) {
        case 'TODO_HIGHLIGHTED':
            return action.payload;
            break;
    }
    return state;
}
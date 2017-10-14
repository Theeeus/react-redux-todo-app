/*
 * The todos reducer will always return an array of to-dos no matter what
 * You need to return something, so if there are no todos then just return an empty array
 * */

export default function () {

    var initialList = (typeof localStorage["todos"] !== "undefined") ? JSON.parse(localStorage.getItem('todos')) : [
        {
            id: 0,
            name: 'Get my shit together',
            isDone: false,
            isDaily: false,
        	lastDone: null
        },
        {
            id: 1,
            name: 'List my daily todos',
            isDone: false,
            isDaily: false,
        	lastDone: null
        },
        {
            id: 2,
            name: 'This is a daily task',
            isDone: false,
            isDaily: true,
        	lastDone: null
        },
        {
            id: 3,
            name: 'Daily tasks reset at 6am and turn red when not done for more than a day',
            isDone: false,
            isDaily: true,
        	lastDone: null
        }
    ];

    return initialList;
}
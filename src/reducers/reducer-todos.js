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
            lastDone: null,
            isUrgent: false
        },
        {
            id: 1,
            name: 'List my daily todos',
            isDone: false,
            isDaily: false,
            lastDone: null,
            isUrgent: false
        },
        {
            id: 2,
            name: 'This is a daily task',
            isDone: false,
            isDaily: true,
            lastDone: null,
            isUrgent: false
        },
        {
            id: 3,
            name: 'Daily tasks reset at the end of the day',
            isDone: false,
            isDaily: true,
            lastDone: null,
            isUrgent: false
        }
    ];

    return initialList;
}
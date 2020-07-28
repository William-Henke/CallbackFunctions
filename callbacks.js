function firstFunction (callback1, callback2) {
    callback1('This is the first callback.');
    if (callback2) callback2 ('This is the second callback.'); 
}

function secondFunction() {
    console.log('I am the second function! \nI am way better than the third function.');
}

function thirdFunction() {
    console.log('I am the third function! \nI am way better than the second function.');
}

firstFunction(secondFunction, thirdFunction);
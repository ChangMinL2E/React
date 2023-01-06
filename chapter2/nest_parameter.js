function nest(...args) {
    let [first, ...remain] = args;
    let [finish, ...stops] = remain.reverse();

    console.log(`${args.length} 개`);
    console.log(`첫번째 인자 : ${first}`);
    console.log(`마지막 인자 : ${finish}`);
    console.log(`나머지 인자 갯수 : ${stops.length}`);
}

nest(1,2,3,4,5,6,7)
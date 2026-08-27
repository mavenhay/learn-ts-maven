let a:[number,number,number][] = [
    [85,80,83],
    [59,58,47],
    [75,20,57]
];

function oi(a:number,b:number,c:number){
    return a+b+c;
}

console.log(oi(...a[0]))


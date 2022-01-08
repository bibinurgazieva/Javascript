let tree = Number(prompt("How many levels high should be your christmas tree?"))

for (let i=0; i < tree; i++) {
    let star = '*';
    let space = ' ';

    for (let k = 1; k <= i; k++){
        star = star + '**';
    }

    let spacebetween = space.repeat(tree-i-1);
    star = spacebetween + star;
    console.log(star);
}
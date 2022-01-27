function drawTree(height) {
    for ( let i = 0; i < height ; i++ ) {
        var star = '*';
        var space = ' ';

        for ( var j = 1; j <= i; j++ ) {
            star = star + '**';            
        }
           
        var spacesBefore = space.repeat(height-i-1);
        star = spacesBefore + star;
        console.log(star);
    }
}

var levels = prompt('How many levels high should be the tree?');

drawTree(levels);
//Console.log shorthand

function c(...log){
    console.log(...log);
}

// ----

// THE PROBLEM

// The Shell Game" involves three shells/cups/etc upturned on a playing surface, with a ball placed underneath one of them. The shells are then rapidly swapped round, and the game involves trying to track the swaps and, once they are complete, identifying the shell containing the ball.

// This is usually a con, but you can assume this particular game is fair...

// Your task is as follows. Given the shell that the ball starts under, and list of swaps, return the location of the ball at the end. All shells are indexed by the position they are in at the time.

// For example, given the starting position 0 and the swap sequence [(0, 1), (1, 2), (1, 0)]:

// The first swap moves the ball from 0 to 1
// The second swap moves the ball from 1 to 2
// The final swap doesn't affect the position of the ball.

// So

// swaps = [[0,1], [1,2], [1, 0]]
// find_the_ball(0, swaps) == 2
// There aren't necessarily only three cups in this game, but there will be at least two. You can assume all swaps are valid, and involve two distinct indices.

// THE CODE

function find_the_ball(start, swaps){

    let currentPos = start;

    for (let i = 0; i < swaps.length; i++){
        let pos = swaps[i];
        if(pos[0] === currentPos){
            currentPos = pos[1];
        } else if (pos[1] === currentPos){
            currentPos = pos[0];
        }
    }

    return currentPos;

}
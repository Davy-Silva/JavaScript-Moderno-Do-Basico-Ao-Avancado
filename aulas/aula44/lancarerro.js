try
{
    console.log ( naoExisto )
}
catch ( err )
{
    console.log ( 'naoExisto não existe' )
}

function soma ( x ,y )
{
    if ( typeof x !== 'number' || typeof y !== 'number' )
    {
        throw new Error ( 'x e y precisam ser números' )
    }

    return x + y
}

try
{
console.log ( soma ( 4, 93 ) )
console.log ( soma ( '4', 93 ) )
}
catch ( error )
{
    console.log ( 'Alguma coisa mais amigável' )
}

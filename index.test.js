var {somar}  = require('./index')

test ('somar dois números', function() {
    var resultado = somar(10,10); 

    expect(resultado).toBe(20); 
})

var {subtrair}  = require('./index')

test ('subtrair dois números', function() {
    var resultado = subtrair(10,8); 

    expect(resultado).toBe(2); 
})

var {multiplicar}  = require('./index')

test ('multiplicar dois números', function() {
    var resultado = multiplicar(5,5); 

    expect(resultado).toBe(25); 
})

var {divir}  = require('./index')

test ('dividir dois números', function() {
    var resultado = divir(10,2); 

    expect(resultado).toBe(5); 
})

var {maiorDeIdade}  = require('./index')

test ('verificar se a pessoa é a maior de idade', function() {
    var resultado = maiorDeIdade(21); 
    expect(resultado).toBe('Você é maior')
})
   



document.getElementsByTagName('input')
// é usado para retornar uma coleção de todos os elementos com um nome de tag especificado
let inputs = document.getElementsByTagName('input')
undefined
inputs [1]
<input type=​"number" id=​"numero-conta" required placeholder=​"Número da conta">​
document.getElementById('nome-beneficiario')
<input type=​"text" id=​"nome-beneficiario" required placeholder=​"Nome completo do beneficiário">​
document.getElementById('btn-depositar')
<button id=​"btn-depositar" type=​"submit">​Depositar​</button>​
document.getElementsByTagName('form')[0].getElementsByTagName('button')
HTMLCollection [button#btn-depositar, btn-depositar: button#btn-depositar]
document.getElementsByName('container')
NodeList []
document.querySelector('button')
<button id=​"btn-depositar" type=​"submit">​Depositar​</button>​
document.querySelectorAll('input[type=number]')
NodeList(2) [input#numero-conta, input#valor-deposito]
document.querySelector('input#numero-conta')
<input type=​"number" id=​"numero-conta" required placeholder=​"Número da conta">​
document.querySelector('h3')
null
document.body
<body>​…​</body>​
document.head
<head>​…​</head>​
const barra = document.querySelector('#barra-progresso')

function atualizarBarra(){
const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
const progresso = (window.scrollY/alturaTotal)*100
barra.style.width = progresso + '%';
}

window.addEventListener('scroll', atualizarBarra);

const titulo = document.querySelector('.texto-principal')
const texto = titulo.textContent;
titulo.textContent = '';

texto.split('').forEach((letra,i) => {
    const span = document.createElement('span');
    span.textContent = letra;
    span.style.opacity = 0;
    span.style.transition = 'opacity 0.5s'
    titulo.appendChild(span);

    setTimeout(() =>
    {
        span.style.opacity = '1';
    
    }, i*50);
});

const sub = document.querySelector('.subtitulo')
const text = sub.textContent;
sub.textContent = '';

text.split('').forEach((letra, i) => {
    const span = document.createElement('span')
    span.textContent = letra
    span.style.display = 'inline-block'; 
    span.style.opacity = 0;
    span.style.transition = 'opacity 0.5s, transform 0.5s'
    span.style.transform = 'translateY(5px)'
    sub.appendChild(span);

    setTimeout(() => {
        span.style.opacity = '1'
        span.style.transform = 'translateY(0)';
          
    }, i*30);
});

document.querySelectorAll('.container-stats').forEach(cards => {
    cards.style.opacity = '0';
    cards.style.transform = 'translateY(40px)'
    cards.style.transition = 'opacity 0.6s, transform 0.6s'
})

const observing = new IntersectionObserver((entries)=> {
entries.forEach(entry => {
    if(entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observing.unobserve(entry.target);
    }
})
})

document.querySelectorAll('.container-stats').forEach(card => {
  observing.observe(card);
});

document.querySelectorAll('.cards-container').forEach(cards => {
    cards.style.opacity = '0';
    cards.style.transform = 'translateY(40px)'
    cards.style.transition = 'opacity 0.6s, transform 0.6s'
})

const observingcards = new IntersectionObserver((entries)=> {
entries.forEach(entry => {
    if(entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observingcards.unobserve(entry.target);
    }
})
})

document.querySelectorAll('.cards-container').forEach(card => {
  observingcards.observe(card);
});


document.querySelectorAll('.card-token').forEach(cards => {
    cards.style.opacity = '0';
    cards.style.transform = 'translateY(40px)'
    cards.style.transition = 'opacity 0.6s, transform 0.6s'
})

const observingtoken = new IntersectionObserver((entries)=> {
entries.forEach(entry => {
    if(entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observingtoken.unobserve(entry.target);
    }
})
})

document.querySelectorAll('.card-token').forEach(card => {
  observingtoken.observe(card);
});

document.querySelectorAll('.social-links').forEach(cards => {
    cards.style.opacity = '0';
    cards.style.transform = 'translateY(40px)'
    cards.style.transition = 'opacity 0.6s, transform 0.6s'
})

const observingcommunity = new IntersectionObserver((entries)=> {
entries.forEach(entry => {
    if(entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observingcommunity.unobserve(entry.target);
    }
})
})

document.querySelectorAll('.social-links').forEach(card => {
  observingcommunity.observe(card);
});

const foto = document.querySelector('.foto');

foto.animate(
  [
    { offsetDistance: '0%', opacity: 0 },
    { offsetDistance: '55%', opacity: 0.5 },
    { offsetDistance: '100%', opacity: 1 }
  ],
  { duration: 1200, easing: 'ease-out', fill: 'forwards' }
);

const btnCopiar = document.querySelector('.contract-box .copy');
const enderecoContrato = "0xSEU_ENDERECO_AQUI";

btnCopiar.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(enderecoContrato);
    btnCopiar.textContent = "Copiado!";
    setTimeout(() => { btnCopiar.textContent = "Copiar endereço"; }, 1500);
  } catch (error) {
    console.error("Falha ao copiar:", error);
  }
});

const btnsConectar = document.querySelectorAll('.btn-primary, .links .btn-destaque');
let contaConectada = null;

async function conectarCarteira() {
  if (typeof window.ethereum === 'undefined') {
    alert("MetaMask não encontrado. Instale a extensão.");
    return;
  }

  try {
    const contas = await window.ethereum.request({ method: 'eth_requestAccounts' });
    contaConectada = contas[0];
    atualizarBotoes(contaConectada);
    carregarSaldo();
  } catch (err) {
    console.error("Usuário recusou ou deu erro:", err);
  }
}

function atualizarBotoes(conta) {
  const curto = conta.slice(0, 6) + "..." + conta.slice(-4);
  btnsConectar.forEach(btn => { btn.textContent = curto; });
}

if (typeof window.ethereum !== 'undefined') {
  window.ethereum.on('accountsChanged', (contas) => {
    if (contas.length === 0) {
      contaConectada = null;
      btnsConectar.forEach(btn => { btn.textContent = "Conectar carteira"; });
    } else {
      atualizarBotoes(contas[0]);
    }
  });
}

btnsConectar.forEach(btn => {
  btn.addEventListener('click', conectarCarteira);
});

const abi = [
	{
		"inputs": [
			{ "internalType": "uint256", "name": "_initialSupply", "type": "uint256" },
			{ "internalType": "address", "name": "_carteiraTaxas", "type": "address" }
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{ "internalType": "address", "name": "spender", "type": "address" },
			{ "internalType": "uint256", "name": "allowance", "type": "uint256" },
			{ "internalType": "uint256", "name": "needed", "type": "uint256" }
		],
		"name": "ERC20InsufficientAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{ "internalType": "address", "name": "sender", "type": "address" },
			{ "internalType": "uint256", "name": "balance", "type": "uint256" },
			{ "internalType": "uint256", "name": "needed", "type": "uint256" }
		],
		"name": "ERC20InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [{ "internalType": "address", "name": "approver", "type": "address" }],
		"name": "ERC20InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [{ "internalType": "address", "name": "receiver", "type": "address" }],
		"name": "ERC20InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [{ "internalType": "address", "name": "sender", "type": "address" }],
		"name": "ERC20InvalidSender",
		"type": "error"
	},
	{
		"inputs": [{ "internalType": "address", "name": "spender", "type": "address" }],
		"name": "ERC20InvalidSpender",
		"type": "error"
	},
	{
		"inputs": [{ "internalType": "address", "name": "owner", "type": "address" }],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [{ "internalType": "address", "name": "account", "type": "address" }],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
			{ "indexed": true, "internalType": "address", "name": "spender", "type": "address" },
			{ "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" },
			{ "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{ "indexed": true, "internalType": "address", "name": "from", "type": "address" },
			{ "indexed": true, "internalType": "address", "name": "to", "type": "address" },
			{ "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{ "internalType": "address", "name": "owner", "type": "address" },
			{ "internalType": "address", "name": "spender", "type": "address" }
		],
		"name": "allowance",
		"outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{ "internalType": "address", "name": "spender", "type": "address" },
			{ "internalType": "uint256", "name": "value", "type": "uint256" }
		],
		"name": "approve",
		"outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{ "internalType": "address", "name": "account", "type": "address" }],
		"name": "balanceOf",
		"outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{ "internalType": "address", "name": "account", "type": "address" },
			{ "internalType": "uint256", "name": "value", "type": "uint256" }
		],
		"name": "burnFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "carteiraTaxas",
		"outputs": [{ "internalType": "address", "name": "", "type": "address" }],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{ "internalType": "uint256", "name": "_novaTaxa", "type": "uint256" }],
		"name": "definirTaxa",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [{ "internalType": "string", "name": "", "type": "string" }],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [{ "internalType": "address", "name": "", "type": "address" }],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [{ "internalType": "string", "name": "", "type": "string" }],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "taxaPorcentagem",
		"outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{ "internalType": "address", "name": "to", "type": "address" },
			{ "internalType": "uint256", "name": "value", "type": "uint256" }
		],
		"name": "transfer",
		"outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{ "internalType": "address", "name": "from", "type": "address" },
			{ "internalType": "address", "name": "to", "type": "address" },
			{ "internalType": "uint256", "name": "value", "type": "uint256" }
		],
		"name": "transferFrom",
		"outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "verSaldo",
		"outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
		"stateMutability": "view",
		"type": "function"
	}
];

async function carregarSaldo() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contrato = new ethers.Contract(enderecoContrato, abi, signer);

  const saldo = await contrato.balanceOf(contaConectada);
  const saldoFormatado = ethers.formatUnits(saldo, 18);

  document.getElementById('saldo').textContent = saldoFormatado;
}

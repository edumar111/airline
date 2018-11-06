# The Airline - An Ethereum learning DAPP

### iniciando proyecto truffle

	truffle init

### compilando los contratos con truffle
crea la carpeta build te crea el abi y su bytecode en un archivo json

	truffle compile

### desplegando el contrato 
antes de desplegar nuestro contrato debemos hacer un migracion
aqui lo ubicamos en la carpeta migrations
debemos indicar en que red vamos a deplegar nuestro contrato 
en el truffle-config vamos a configurar nuestra red

	truffle deploy --network development

si trabajas con ganache para poder volver a trabajar despues de reiniciar ganache 
o tambien si hemos reiniciado el ordenador debemos hacer truffle deploy reset
	truffle deploy --reset --network development
	truffle deploy --reset

### consola de truflle
	
	truffle console --network development

### test
Creamos el archivo Airline.test.js
se ejecutara con traffle los test del contrato

	truffle test

## iniciar aplicacion en modo dev
recuerde siempre antes desplegar el proyecto en ganache
	npm run start

### la ultima dependencia instalada
	
	npm i truffle-hdwallet-provider@0.0.6 --save-dev


###Paginas tool
- https://faucet.rinkeby.io/

-  rinkeby.etherscan.io 

-   https://infura.io/

### verificando 
	
	truffle networks


### contract in  rinkeby.etherscan.io 

address:0x034b06eb090a4014f00e047f481b33c19dbcb18f
tx: 0x8f73e9fd00fb890a54ffaa21615ef1662142d69f6fd92bc4a5db170e74208241


### deplegando en produccion

	truffle deploy --reset --network rinkeby
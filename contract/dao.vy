from vyper.interfaces import ERC20

struct info:
	
	endtime:timestamp
	voter: map(address, uint256)
	erctoken:address
	ercdex:address
	tokenQty:uint256
	counter:uint256
	value:wei_value
	de:address
	to:address
	spender:address
	type:uint256
	

units: {
	currency_value: "a currency"
}





# interaction avec DEX

contract Dex:
	
	def ethToTokens():modifying
	def tokensToEth(sell_quantity: uint256(currency_value)):modifying





# interaction avec methode spéciale sequestrer du token ERC20 de l'ecosystème

contract Tok:
	
	def sequestre(_address:address, _endtime:timestamp):modifying




# events

Sel: event({_ipfs:string[256], _token:indexed(address), _dex:indexed(address), _tokenQty:uint256, _endtime:timestamp})

Buy: event({_ipfs:string[256], _token:indexed(address), _dex:indexed(address), _value:wei_value, _endtime:timestamp})
	
Transfer: event({_ipfs:string[256], _token:indexed(address), _to:indexed(address), _tokenQty:uint256, _endtime:timestamp})

Transferfrom: event({_ipfs:string[256], _token:indexed(address), _de:indexed(address), _to:indexed(address), _tokenQty:uint256, _endtime:timestamp})

Approve: event({_ipfs:string[256], _token:indexed(address), _spender:indexed(address), _tokenQty:uint256, _endtime:timestamp})

Sendeth: event({_ipfs:string[256], _to:indexed(address), _value:wei_value, _endtime:timestamp})




# variables

token: public(address) # address du token de l'ecosystème géré par la DAO, ce token constitue le droit de vote au szin de la DAO

eco: ERC20 # eco est le token de l'ecosystème géré par la DAO, ce token constitue le droit de vote au sein de la DAO

erc: ERC20 # erc peut etre n'importe quel token erc20 possédé par la DAO

proposal: public(map(string[256], info)) # Proposition de vote

asso: public(address) # address de l'asso

dex: Dex

tok: Tok



@public
def __init__():
	
	self.token = 0x65492392E71A35E3a5b5FeA7e249B31f29E83BBA 
	
	self.asso = 0xd7e5E1C8f1F5983B28e7A8B6d219939DF58bb24C
	
	self.eco = ERC20(self.token)
	


@public
@payable
def accepteth():

	assert msg.value > 0


@public
def vote(_ipfs:string[256]):

	assert self.eco.balanceOf(msg.sender) > 0
	
	assert self.proposal[_ipfs].endtime > block.timestamp
	
	assert self.proposal[_ipfs].voter[msg.sender] < self.eco.balanceOf(msg.sender)
	
	
	self.tok = Tok(self.token) #on importe le token de vote ainsi ici car la methode sequestre n'est pas un standard erc20

	self.tok.sequestre(msg.sender, self.proposal[_ipfs].endtime)
	
	
	self.proposal[_ipfs].counter -= self.proposal[_ipfs].voter[msg.sender]
	
	self.proposal[_ipfs].voter[msg.sender] = self.eco.balanceOf(msg.sender)
	
	self.proposal[_ipfs].counter += self.proposal[_ipfs].voter[msg.sender]
	
	



	
	

	


		
	
######### Transfer proposal #########
	


@public
def transfer(_token:address, _to:address, _tokenQty:uint256, _ipfs:string[256], _delta:timedelta):
	
	assert self.eco.balanceOf(msg.sender) > 0
	assert self.proposal[_ipfs].type == 0
	assert _delta >= 604800  # 7  jours
	assert _delta <= 5184000 # 60 jours
	
	self.proposal[_ipfs].endtime = block.timestamp + _delta	
	self.proposal[_ipfs].erctoken = _token
	self.proposal[_ipfs].to = _to
	self.proposal[_ipfs].tokenQty = _tokenQty
	self.proposal[_ipfs].type = 1
	
	log.Transfer(_ipfs, _token, _to, _tokenQty, self.proposal[_ipfs].endtime)
	
		
	
			
######### Approve proposal #########


@public
def approve(_token:address, _spender:address, _tokenQty:uint256, _ipfs:string[256], _delta:timedelta):
	
	assert self.eco.balanceOf(msg.sender) > 0
	assert self.proposal[_ipfs].type == 0
	assert _delta >= 604800  # 7  jours
	assert _delta <= 5184000 # 60 jours
	
	self.proposal[_ipfs].endtime = block.timestamp + _delta	
	self.proposal[_ipfs].erctoken = _token
	self.proposal[_ipfs].spender = _spender
	self.proposal[_ipfs].tokenQty = _tokenQty
	self.proposal[_ipfs].type = 2
	
	log.Approve(_ipfs, _token, _spender, _tokenQty, self.proposal[_ipfs].endtime)
	
	


######### TransferFrom proposal #########
	


@public
def transferFrom(_token:address, _de:address, _to:address, _tokenQty:uint256, _ipfs:string[256], _delta:timedelta):
	
	assert self.eco.balanceOf(msg.sender) > 0
	assert self.proposal[_ipfs].type == 0
	assert _delta >= 604800  # 7  jours
	assert _delta <= 5184000 # 60 jours
	
	self.proposal[_ipfs].endtime = block.timestamp + _delta	
	self.proposal[_ipfs].erctoken = _token
	self.proposal[_ipfs].de = _de
	self.proposal[_ipfs].to = _to
	self.proposal[_ipfs].tokenQty = _tokenQty
	self.proposal[_ipfs].type = 3

	log.Transferfrom(_ipfs, _token, _de, _to, _tokenQty, self.proposal[_ipfs].endtime)
	




######### Send ether #########

@public
def send(_to:address, _value:wei_value, _ipfs:string[256], _delta:timedelta):
	
	assert self.eco.balanceOf(msg.sender) > 0
	assert self.proposal[_ipfs].type == 0
	assert _delta >= 604800  # 7  jours
	assert _delta <= 5184000 # 60 jours
	
	self.proposal[_ipfs].endtime = block.timestamp + _delta	
	self.proposal[_ipfs].to = _to
	self.proposal[_ipfs].value = _value
	self.proposal[_ipfs].type = 4

	log.Sendeth(_ipfs, _to, _value, self.proposal[_ipfs].endtime)



######### DEX call #########

@public
def buy(_token:address, _dex:address, _value:wei_value, _ipfs:string[256], _delta:timedelta):

	assert self.eco.balanceOf(msg.sender) > 0	
	assert self.proposal[_ipfs].type == 0
	assert _delta >= 604800  # 7  jours
	assert _delta <= 5184000 # 60 jours
	
	self.proposal[_ipfs].erctoken = _token
	self.proposal[_ipfs].ercdex = _dex
	self.proposal[_ipfs].endtime = block.timestamp + _delta	
	self.proposal[_ipfs].value = _value
	self.proposal[_ipfs].type = 5

	log.Buy(_ipfs, _token, _dex, _value, self.proposal[_ipfs].endtime)


@public
def sel(_token:address, _dex:address, _tokenQty:uint256, _ipfs:string[256], _delta:timedelta):

	assert self.eco.balanceOf(msg.sender) > 0	
	assert self.proposal[_ipfs].type == 0
	assert _delta >= 604800  # 7  jours
	assert _delta <= 5184000 # 60 jours
	
	self.proposal[_ipfs].erctoken = _token
	self.proposal[_ipfs].ercdex = _dex
	self.proposal[_ipfs].endtime = block.timestamp + _delta	
	self.proposal[_ipfs].tokenQty = _tokenQty
	self.proposal[_ipfs].type = 6

	log.Sel(_ipfs, _token, _dex, _tokenQty, self.proposal[_ipfs].endtime)






######### valid #########


@public
def valid(_ipfs:string[256]):
	
	assert self.proposal[_ipfs].endtime < block.timestamp
	
	assert msg.sender == self.asso
	
	assert self.proposal[_ipfs].endtime != 0
	
	assert self.proposal[_ipfs].counter > (51/100) * (self.eco.totalSupply() - self.eco.balanceOf(self))
		
	
	self.proposal[_ipfs].endtime = 0
	
	
	if self.proposal[_ipfs].type == 1: # valid transfer
				
		self.erc = ERC20(self.proposal[_ipfs].erctoken)

		self.erc.transfer(self.proposal[_ipfs].to, as_unitless_number(self.proposal[_ipfs].tokenQty))
		
		
	if self.proposal[_ipfs].type == 2: # valide approve
			
		self.erc = ERC20(self.proposal[_ipfs].erctoken)

		self.erc.approve(self.proposal[_ipfs].spender, as_unitless_number(self.proposal[_ipfs].tokenQty))
			
		
	if self.proposal[_ipfs].type == 3: # valid transferFrom
			
		self.erc = ERC20(self.proposal[_ipfs].erctoken)

		self.erc.transferFrom(self.proposal[_ipfs].de, self.proposal[_ipfs].to, as_unitless_number(self.proposal[_ipfs].tokenQty))
		
		
	if self.proposal[_ipfs].type == 4: # valid send ether
	
		send(self.proposal[_ipfs].to, self.proposal[_ipfs].value)
		
		
	if self.proposal[_ipfs].type == 5: # buy token from dex
	
		self.dex = Dex(self.proposal[_ipfs].ercdex)
		
		self.dex.ethToTokens(value=self.proposal[_ipfs].value)
		
		
	if self.proposal[_ipfs].type == 6: # sel token to dex
		
		self.erc = ERC20(self.proposal[_ipfs].erctoken)
		
		self.erc.approve(self.proposal[_ipfs].ercdex, as_unitless_number(self.proposal[_ipfs].tokenQty))
		
		self.dex = Dex(self.proposal[_ipfs].ercdex)

		self.dex.tokensToEth(as_unitless_number(self.proposal[_ipfs].tokenQty))
	
		
		
		
	self.proposal[_ipfs].type = 0
	self.proposal[_ipfs].tokenQty = 0
	self.proposal[_ipfs].value = 0
	
	

@public
@constant
def getStat(_ipfs:string[256]) -> uint256:
	
	return self.proposal[_ipfs].counter

	

@public
def setAsso(_new:address):
	
	assert msg.sender == self.asso
	
	self.asso = _new


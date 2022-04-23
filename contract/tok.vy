# ERC20



Transfer: event({_from: indexed(address), _to: indexed(address), _value: uint256})

Approval: event({_owner: indexed(address), _spender: indexed(address), _value: uint256})




name: public(string[64])

symbol: public(string[32])

decimals: public(uint256)

balanceOf: public(map(address, uint256))

sequestred: public(map(address, timestamp))

allowances: map(address, map(address, uint256))

total_supply: public(uint256)

minter: public(address)

dao: public(address)

airdrop: public(address)

ipfs: public(string[256])




@public
def __init__():
	
	self.name = "mytoken" 

	self.symbol = "tok"
	
	self.decimals = 4
	
	self.total_supply = 10000 * 10 ** 4
	
	self.minter = 0xd7e5E1C8f1F5983B28e7A8B6d219939DF58bb24C
	
	self.balanceOf[self.minter] = self.total_supply
	
	self.ipfs = ''
	
	log.Transfer(ZERO_ADDRESS, msg.sender, self.total_supply)


@public
@constant
def totalSupply() -> uint256:
	
	return self.total_supply


@public
@constant
def allowance(_owner : address, _spender : address) -> uint256:
	
	return self.allowances[_owner][_spender]


@public
def transfer(_to : address, _value : uint256) -> bool:
	
	assert block.timestamp > self.sequestred[msg.sender]
	
	self.balanceOf[msg.sender] -= _value
	self.balanceOf[_to] += _value
	
	log.Transfer(msg.sender, _to, _value)
	
	return True


@public
def transferFrom(_from : address, _to : address, _value : uint256) -> bool:
	
	assert block.timestamp > self.sequestred[_from]
	
	self.balanceOf[_from] -= _value
	
	self.balanceOf[_to] += _value
	
	self.allowances[_from][msg.sender] -= _value
	
	log.Transfer(_from, _to, _value)
	
	return True


@public
def approve(_spender : address, _value : uint256) -> bool:
	
	self.allowances[msg.sender][_spender] = _value
	
	log.Approval(msg.sender, _spender, _value)
	
	return True


@public
def mint(_to: address, _value: uint256):
	
	assert msg.sender == self.minter
	
	assert _to != ZERO_ADDRESS
	
	self.total_supply += _value
	
	self.balanceOf[_to] += _value
	
	log.Transfer(ZERO_ADDRESS, _to, _value)


@public
def setMinter(_newMinter: address) -> bool:
	
	assert msg.sender == self.minter
	
	assert _newMinter != ZERO_ADDRESS
	
	self.minter = _newMinter
	
	return True


@public
def setIpfs(_newIpfs: string[256]) -> bool:
	
	assert msg.sender == self.minter
	
	self.ipfs = _newIpfs
	
	return True


@public
def setDao(_newDao:address) -> bool:
	
	assert msg.sender == self.minter
	
	self.dao = _newDao
	
	return True

		
@public
def setAirdrop(_newAirdrop:address) -> bool:
	
	assert msg.sender == self.minter
	
	self.airdrop = _newAirdrop
	
	return True


@public
def sequestre(_address:address, _endtime:timestamp):
	
	assert msg.sender == self.dao or msg.sender == self.minter or msg.sender == self.airdrop
	
	if self.sequestred[_address] < _endtime:
	
		self.sequestred[_address] = _endtime

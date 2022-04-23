# decentralised exchange

from vyper.interfaces import ERC20

units: {
	currency_value: "a currency"
}

totalEthQty: public(wei_value)

totalTokenQty: public(uint256(currency_value))

invariant: public(uint256(wei * currency_value))

token_address: ERC20

owner: public(address)

fee: public(uint256) # ou wei_value ??

feeBal: wei_value


@public
def __init__():
	
	self.owner = 0xd7e5E1C8f1F5983B28e7A8B6d219939DF58bb24C 

@public
@payable
def initiate(token_addr: address, token_quantity: uint256(currency_value)):
	
	assert self.invariant == 0
	assert msg.sender == self.owner
	
	self.token_address = ERC20(token_addr)
	self.token_address.transferFrom(msg.sender, self, as_unitless_number(token_quantity))
	
	self.totalEthQty = msg.value
	self.totalTokenQty = token_quantity
	self.invariant = msg.value * token_quantity


	self.fee = 500
	
	assert self.invariant > 0



@public
@payable
def ethToTokens():
	
	Fee: wei_value = msg.value / self.fee
	
	self.feeBal += Fee
	
	eth_in_purchase: wei_value = msg.value - Fee
	
	new_total_eth: wei_value = self.totalEthQty + eth_in_purchase
	new_total_tokens: uint256(currency_value) = self.invariant / new_total_eth
	
	self.token_address.transfer(msg.sender, as_unitless_number(self.totalTokenQty - new_total_tokens))
	self.totalEthQty = new_total_eth
	self.totalTokenQty = new_total_tokens



@public
def tokensToEth(sell_quantity: uint256(currency_value)):
	
	self.token_address.transferFrom(msg.sender, self, as_unitless_number(sell_quantity))
	
	new_total_tokens: uint256(currency_value) = self.totalTokenQty + sell_quantity
	new_total_eth: wei_value = self.invariant / new_total_tokens
	
	eth_to_send: wei_value = self.totalEthQty - new_total_eth
	
	send(msg.sender, eth_to_send)
	
	self.totalEthQty = new_total_eth
	self.totalTokenQty = new_total_tokens



	
	
	

@public
@constant
def estimateETT(_value:wei_value) -> uint256(currency_value):
	
	Fee: wei_value = _value / self.fee
	
	eth_in_purchase: wei_value = _value - Fee
	
	new_total_eth: wei_value = self.totalEthQty + eth_in_purchase
	new_total_tokens: uint256(currency_value) = self.invariant / new_total_eth
	
	return self.totalTokenQty - new_total_tokens





@public
@constant
def estimateTTE(sell_quantity: uint256(currency_value)) -> wei_value:
	
	
	new_total_tokens: uint256(currency_value) = self.totalTokenQty + sell_quantity
	new_total_eth: wei_value = self.invariant / new_total_tokens
	
	return self.totalEthQty - new_total_eth
	
	


@public
def setOwner(new:address):
	
	assert msg.sender == self.owner
	
	self.owner = new
	
@public
def getfeebal() -> wei_value:

	assert self.owner == msg.sender
	
	return self.feeBal

		
@public
@payable
def cashfeebal():
	
	assert self.owner == msg.sender
	
	send(self.owner, self.feeBal)
	
	self.feeBal = 0
	
	
@public
def setFee(new_fee:uint256):
	
	assert self.owner == msg.sender
	
	self.fee = new_fee


@public
def ownerWithdraw():
	
	assert self.owner == msg.sender
	
	self.token_address.transfer(self.owner, as_unitless_number(self.totalTokenQty))
	
	selfdestruct(self.owner)


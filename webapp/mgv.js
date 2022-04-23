// Copyright (c) 2019 Yann BOUYERON
//
//
// licensed under GNU Affero General Public License 

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published
// by the Free Software Foundation, either version 3 of the License, or any later version.
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.




// fonctions des boutons liens principaux




function news() {

	var fileName = "news";
	
	var txtFile;
		if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
		txtFile = new XMLHttpRequest();
		}
	
	else
		{// code for IE6, IE5
		txtFile = new ActiveXObject("Microsoft.XMLHTTP");
		}
	
	txtFile.open("GET",fileName,false);
	txtFile.send();
	
	var txtDoc=txtFile.responseText;
	
	document.getElementById("result").innerHTML = txtDoc


}




function contract() {

	document.getElementById("result").innerHTML = "<div class='grillemethod'><div class='method'><a href='#' class='button' onClick='totransfer()'><span>Transfer</span></a></div><div class='method'><a href='#' class='button' onClick='tobalance()'><span>Balance Of</span></a></div><div class='method'><a href='#' class='button' onClick='totransferfrom()'><span>Transfer From</span></a></div><div class='method'><a href='#' class='button' onClick='toapprove()'><span>Approve</span></a></div><div class='method'><a href='#' class='button' onClick='toallowance()'><span>Allowance</span></a></div></div><div class='bas' id='bas'></div>";

	document.getElementById("bas").innerHTML = "<h4>Token Interface</h4><p>0x65492392E71A35E3a5b5FeA7e249B31f29E83BBA </p><p>Attention, les champs des formulaires attendent des unit tok (1 tok = 10000 unit tok) ou des wei.</p>";
}




function exchange() {

	document.getElementById("result").innerHTML = "<div class='grillemethodDEX'><div class='method'><a href='#' class='button' onClick='tobuy()'><span>Buy</span></a></div><div class='method'><a href='#' class='button' onClick='tosel()'><span>Sel</span></a></div></div><div class='bas' id='bas'></div>";

	document.getElementById("bas").innerHTML = "<h4>DEX Interface</h4><p>0xc3a422E816444341Fcc88dCec9bc9462266be969</p>";
	
	ratio();

}


function thedao() {

	document.getElementById("result").innerHTML = "<div class='grillemethod'><div class='method'><a href='#' class='button' onClick='toproposal()'><span>Proposal</span></a></div><div class='method'><a href='#' class='button' onClick='tovote()'><span>Vote</span></a></div><div class='method'><a href='https://ropsten.etherscan.io/address/0x7a280dCf533eE02f22a1F08B077131CaBFe2BAd8' class='button'><span>DAO account</span></a></div><div class='method'><a href='cgu' class='button'<span>Informations</span></a></div><div class='method'><a href='cgu' class='button' ><span>Forum</span></a></div></div><div class='bas' id='bas'></div>";

	document.getElementById("bas").innerHTML = "<h4>DAO Interface</h4><p>0x7a280dCf533eE02f22a1F08B077131CaBFe2BAd8</p>";


}





	

	
		

	

	
// fonctions des boutons liens contract token

function totransfer() {

	document.getElementById("bas").innerHTML = "<form name='transfer'><h4>Transfer:</h4>To: <input type='text' name='to' id='to' placeholder='0x212a4521b1a4dc9c49b34aaabad511dfbcc0bdcb'>Quantity: <input type='text' name='quantity' placeholder='2000000'><br><br><input type='button' class='button' onClick='transferer()' value='Sign & Send'></form>";

}



function totransferfrom() {

	document.getElementById("bas").innerHTML = "<form name='transferFrom'><h4>Transfer From:</h4>From: <input type='text' name='from' placeholder='0x212a4521b1a4dc9c49b34aaabad511dfbcc0bdcb'>To: <input type='text' name='to' placeholder='0x212a4521b1a4dc9c49b34aaabad511dfbcc0bdcb'><br>Quantity: <input type='text' name='quantity' placeholder='200'><br><br><input type='button' class='button' onClick='transfererFrom()' value='Sign & Send'></form>";
	
}


function toapprove() {

	document.getElementById("bas").innerHTML = "<form name='approve'><h4>Approve:</h4>Spender: <input type='text' name='spender' placeholder='0x212a4521b1a4dc9c49b34aaabad511dfbcc0bdcb'>Quantity: <input type='text' name='quantity' placeholder='300000'><br><br><input type='button' class='button' onClick='approver()' value='Sign & Send'></form>";

}

function tobalance() {

	document.getElementById("bas").innerHTML = "<form name='balanceof'><h4>Balance Of:</h4>User: <input type='text' name='user' placeholder='0x212a4521b1a4dc9c49b34aaabad511dfbcc0bdcb'><br><br><input type='button' class='button' onClick='balance()' value='Send'></form>";

}

function toallowance() {

	document.getElementById("bas").innerHTML = "<form name='allowance'><h4>Allowance:</h4>Owner: <input type='text' name='owner' placeholder='0x212a4521b1a4dc9c49b34aaabad511dfbcc0bdcb'>Spender: <input type='text' name='spender' placeholder='0x212a4521b1a4dc9c49b34aaabad511dfbcc0bdcb'><br><br><input type='button' class='button' onClick='allowancee()' value='Send'></form>";

}




// functions des boutons liens contract DEX

function tobuy() {

	document.getElementById("bas").innerHTML = "<form name='buyer'><h4>Buy token from DEX</h4><p> 0x65492392E71A35E3a5b5FeA7e249B31f29E83BBA from 0xc3a422E816444341Fcc88dCec9bc9462266be969</p>Ether (wei) To Token (unit tok): <input type='text' name='ett' placeholder='0'><br><br><input type='button' class='button' onClick='ETTbuy()' value='Send'></form>";

}

function tosel() {

	document.getElementById("bas").innerHTML = "<form name='seler'><h4>Sel token to DEX</h4><p> 0x65492392E71A35E3a5b5FeA7e249B31f29E83BBA to 0xc3a422E816444341Fcc88dCec9bc9462266be969</p>Token (unit token) To Ether (wei): <input type='text' name='tte' placeholder='0'><p>Attention, approuvez le Dex pour un montant suffisant avant de faire la vente.</p><input type='button' class='button' onClick='TTEsel()' value='Send'></form>";

}



// functions des boutons liens contract DAO

function toproposal() {

	document.getElementById("bas").innerHTML = "<form name='propose'><h4>Proposer un projet:</h4><h5>Décrivez votre projet dans un fichier et postez le sur ipfs pour obtenir son Hash. Si vous ne disposez pas de noeud ipfs, vous pouvez utiliser <a href='https://ipfs.io/ipfs/QmZFJkMEEE9HNUrUYLLJVaw6mWoYYwdoDtXhXmWV2AeNiX'>cette application</a> en ligne.</h5><h5>Choisissez ensuite l'action ci dessous que vous voulez soumettre au vote pour financer ou réaliser votre projet.</h5><div class='grillemethod'><div class='methoddao'><a href='#' class='button' onClick='toapprovedao()'><span>Approve ERC20</span></a></div><div class='methoddao'><a href='#' class='button' onClick='tobuydao()'><span>Buy ERC20</span></a></div><div class='methoddao'><a href='#' class= 'button' onClick='toseldao()'><span>Sel ERC20</span></a></div><div class='methoddao'><a href='#' class='button' onClick='tosendeth()'><span>Send Ether</span></a></div><div class='methoddao'><a href='#' class='button' onClick='torien()'><span>Rien</span></a></div></div></form>";

}


function toapprovedao() {

	document.getElementById("bas").innerHTML = "<form name='approvedao'><h4>DAO Approve:</h4>Project IPFS Hash: <input type='text' name='hashh' placeholder='Qm...'><br>Token address: <input type='text' name='tokaddress' placeholder='0x'>Spender: <input type='text' name='spender' placeholder='0x212a4521b1a4dc9c49b34aaabad511dfbcc0bdcb'><br>Quantity: <input type='text' name='quantity' placeholder='300000'>Delta: <input type='text' name='delta' placeholder='2592000'><br><br><input type='button' class='button' onClick='approverDAO()' value='Sign & Send'></form>";

} 

function tobuydao() {

	document.getElementById("bas").innerHTML = "<form name='buydao'><h4>DAO Buy Token ERC20 from DEX:</h4>Project IPFS Hash: <input type='text' name='hashh' placeholder='Qm...'>DEX address: <input type='text' name='dexaddress' placeholder='0x'><br>Token address: <input type='text' name='tokaddress' placeholder='0x'><br>Amount: <input type='text' name='amount' placeholder='300000'>Delta: <input type='text' name='delta' placeholder='2592000'><br><br><input type='button' class='button' onClick='buyDAO()' value='Sign & Send'></form>";

} 


function toseldao() {

	document.getElementById("bas").innerHTML = "<form name='seldao'><h4>DAO Sel ERC20 to DEX:</h4>Project IPFS Hash: <input type='text' name='hashh' placeholder='Qm...'><br>DEX address: <input type='text' name='dexaddress' placeholder='0x'>Token address: <input type='text' name='tokaddress' placeholder='0x'><br>Quantity: <input type='text' name='quantity' placeholder='300000'>Delta: <input type='text' name='delta' placeholder='2592000'><br><br><input type='button' class='button' onClick='selDAO()' value='Sign & Send'></form>";

} 


function tosendeth() {

	document.getElementById("bas").innerHTML = "<form name='sendeth'><h4>DAO send Ether:</h4>Project IPFS Hash: <input type='text' name='hashh' placeholder='Qm...'>To: <input type='text' name='to' placeholder='0x212a4521b1a4dc9c49b34aaabad511dfbcc0bdcb'><br>Amount: <input type='text' name='amount' placeholder='300000'>Delta: <input type='text' name='delta' placeholder='2592000'><br><br><input type='button' class='button' onClick='sendETH()' value='Sign & Send'></form>";

} 





// recuperation des infos


// recuperation de l'address du contract - verification status


if (typeof(web3) === "undefined") {
	
		document.getElementById("status").innerHTML = "<p class='petit'>Unable to find web3.<br><br>Please run MetaMask (or something else that injects web3).</p>";

		document.getElementById("result").innerHTML = "<div class='intro'><h3>My DAO est une application Ethereum décentralisée (dapp)</h3><h3>Un client web3 tel que <a href='https://metamask.io'>metamask</a> ou <a href='https://www.cipherbrowser.com'>cipher browser</a> est nécessaire pour accéder aux fonctionnalités de cette dapp.</h3></div>";
	}
	
	
if (web3.version.network != '3') {
	
		document.getElementById("status").innerHTML = "<p>Wrong network detected. Please switch to the Ropsten test network.</p>";
		
		document.getElementById("result").innerHTML = "<div class='intro'><h3>My DAO est une application Ethereum décentralisée (dapp)</h3><h3>Attention, cette version de démonstration est déployée sur le Ropsten testnet. Passez sur le Ropsten testnet pour pouvoir utiliser les fonctionnalités de cette dapp.</h3></div>";

	}
		

if (web3.version.network === "3") {

		document.getElementById("result").innerHTML = "<div class='intro'><h1>Welcome to My DAO</h1></div>";

}




// recuperation du nom du contract

ccc.name(function(error, success){

	if(error) {

		alert("Something went wrong: " + error);
	}

	else { 

		document.getElementById("name").innerHTML += "<br><br>" + success;
		
	}

});



// recuperation du symbol

ccc.symbol(function(error, success){

	if(error) {

		alert("Something went wrong: " + error);
	}

	else { 

		document.getElementById("symbol").innerHTML += "<br><br>" + success;
		
	}

});




// recuperation total Supply

ccc.totalSupply(function(error, success){

	if(error) {

		alert("Something went wrong: " + error);
	}

	else { 

		document.getElementById("totalsupply").innerHTML += "<br><br>" + success*10**-4;
		
	}

});


// recuperation des decimals

ccc.decimals(function(error, success){

	if(error) {

		alert("Something went wrong: " + error);
	}

	else { 

		document.getElementById("decimals").innerHTML += "<br><br>" + success;
		
	}

});




// recuperation de l'address et de la balance de l'user

function status () {

ccc.balanceOf(web3.eth.accounts[0], function(error, success){

	if(error) {

		alert("Something went wrong: " + error);
	}

	else { 
		var succ = success*10**-4
		document.getElementById("status").innerHTML = "<p class='green'>• Conected to Web3</p>";
		document.getElementById("status").innerHTML += web3.eth.accounts[0] + "<br/>" + succ.toFixed(4).toString(10) + " tok";

	}

});

}

status()



// la function account n'est plus utilisée

function account () {

ccc.balanceOf(web3.eth.accounts[0], function(error, success){

	if(error) {

		alert("Something went wrong: " + error);
	}

	else { 

		document.getElementById("result").innerHTML = "<div class='account'><h4>Account</h4><p>User address: " + web3.eth.accounts[0] + "</p><p>User balance: " + success.toString(10) + " mgv1</p></div>";

	}

});

}



function tovote() {

// recuperation des events de dao

var eve = dao.allEvents({fromBlock: 3092520, toBlock: 'latest'});
					
eve.get(function(err, result) {
	
		if (err) {
		
			alert("watch error " + err);
			return;
		};
		
		//alert(JSON.stringify(result));
		
		
		var timestamp = Math.floor(Date.now() / 1000);
		
		document.getElementById("bas").innerHTML = "<div class='votin' id='votin'></div>";

		document.getElementById("votin").innerHTML = '';
		
		
		
		//restructuration des event
		
		for(var i=0; i<result.length; i++) {
			
			if (result[i].event == 'Transfer') {
			
				
				
				var ipfs = result[i].args._ipfs;
				var token = result[i].args._token;
				var to = result[i].args._to;
				var qty = result[i].args._tokenQty;

				// convertion du timestamp en seconde en timestamp milliseconde puis date 
				var end = new Date(Number(1000 * result[i].args._endtime));
				
				
				
			
				if (result[i].args._endtime > timestamp) {
			
					document.getElementById("votin").innerHTML += "<div class='invote'>IPFS: <a href='https://ipfs.io/ipfs/" + ipfs + "'>" + ipfs + "</a><br><br>Mode: Transfer<br>Token: " + token + "<br>To: " + to + "<br>Quantity: " + qty + "<br>End: " + end.toGMTString() + "<br><br><form><input type='button' class='button' onClick='givevote(\""+ipfs+"\");' value='Vote'></form><form><input type='button' class='button' onClick='statvote(\""+ipfs+"\");' value='Stat'></form></div>";

				}			
				
				else {
				
					document.getElementById("votin").innerHTML += "<div class='outvote'>IPFS: <a href='https://ipfs.io/ipfs/" + ipfs + "'>" + ipfs + "</a><br><br>Mode: Transfer<br>Token: " + token + "<br>To: " + to + "<br>Quantity: " + qty + "<br>End: " + end.toGMTString() + "<br><br><form><input type='button' class='button' onClick='statvote(\""+ipfs+"\");' value='Stat'></form> </div>";
				}
			
			}
			
			
			
			
			
			if (result[i].event == 'Approve') {
			
				var ipfs = result[i].args._ipfs;
				var token = result[i].args._token;
				var spender = result[i].args._spender;
				var qty = result[i].args._tokenQty;
				var end = new Date(Number(1000 * result[i].args._endtime));
								
				if (result[i].args._endtime > timestamp) {
					document.getElementById("votin").innerHTML += "<div class='invote'>IPFS: <a href='https://ipfs.io/ipfs/" + ipfs + "'>" + ipfs + "</a><br><br>Mode: Approve<br>Token: " + token + "<br>Spender: " + spender + "<br>Quantity: " + qty + "<br>End: " + end.toGMTString()  + "<br><br><form><input type='button' class='button' onClick='givevote(\""+ipfs+"\");' value='Vote'></form> <form><input type='button' class='button' onClick='statvote(\""+ipfs+"\");' value='Stat'></form></div>";
				}
				
				else  {
					document.getElementById("votin").innerHTML += "<div class='outvote'>IPFS: <a href='https://ipfs.io/ipfs/" + ipfs + "'>" + ipfs + "</a><br><br>Mode: Approve<br>Token: " + token + "<br>Spender: " + spender + "<br>Quantity: " + qty + "<br>End: " + end.toGMTString() + "<br><br><form><input type='button' class='button' onClick='statvote(\""+ipfs+"\");' value='Stat'></form> </div>";
				
				}			
			}
			
			
			if (result[i].event == 'Transferfrom') {
			
				var ipfs = result[i].args._ipfs;
				var token = result[i].args._token;
				var de = result[i].args._de;
				var to = result[i].args._to;
				var qty = result[i].args._tokenQty;
				var end = new Date(Number(1000 * result[i].args._endtime));
								
				if (result[i].args._endtime > timestamp) {
					document.getElementById("votin").innerHTML += "<div class='invote'>IPFS: <a href='https://ipfs.io/ipfs/" + ipfs + "'>" + ipfs + "</a><br><br>Mode: TransferFrom<br>Token: " + token + "<br>From: " + de + "<br>To: " + to + "<br>Quantity: " + qty + "<br>End: " + end.toGMTString()  + "<br><br><form><input type='button' class='button' onClick='givevote(\""+ipfs+"\");' value='Vote'></form> <form><input type='button' class='button' onClick='statvote(\""+ipfs+"\");' value='Stat'></form></div>";
				}
				
				else  {
					document.getElementById("votin").innerHTML += "<div class='outvote'>IPFS: <a href='https://ipfs.io/ipfs/" + ipfs + "'>" + ipfs + "</a><br><br>Mode: TransferFrom<br>Token: " + token + "<br>From: " + de + "<br>To: " + to + "<br>Quantity: " + qty + "<br>End: " + end.toGMTString() + "<br><br><form><input type='button' class='button' onClick='statvote(\""+ipfs+"\");' value='Stat'></form> </div>";
				
				}			
			}
			
			
			if (result[i].event == 'Sendeth') {
			
				var ipfs = result[i].args._ipfs;
				var to = result[i].args._to;
				var value = result[i].args._value;
				var end = new Date(Number(1000 * result[i].args._endtime));
								
				if (result[i].args._endtime > timestamp) {
					document.getElementById("votin").innerHTML += "<div class='invote'>IPFS: <a href='https://ipfs.io/ipfs/" + ipfs + "'>" + ipfs + "</a><br><br>Mode: Send Eth <br>To: " + to + "<br>Value: " + value + "<br>End: " + end.toGMTString()  + "<br><br><form><input type='button' class='button' onClick='givevote(\""+ipfs+"\");' value='Vote'></form><form><input type='button' class='button' onClick='statvote(\""+ipfs+"\");' value='Stat'></form></div>";
				}
				
				else  {
					document.getElementById("votin").innerHTML += "<div class='outvote'>IPFS: <a href='https://ipfs.io/ipfs/" + ipfs + "'>" + ipfs + "</a><br><br>Mode: Send Eth <br>To: " + to + "<br>Value: " + value + "<br>End: " + end.toGMTString() + "<br><br><form><input type='button' class='button' onClick='statvote(\""+ipfs+"\");' value='Stat'></form> </div>";
				
				}			
			}
			
			
			
			if (result[i].event == 'Buy') {
			
				var ipfs = result[i].args._ipfs;
				var token = result[i].args._token;
				var dex = result[i].args._dex;
				var value = result[i].args._value;
				var end = new Date(Number(1000 * result[i].args._endtime));
								
				if (result[i].args._endtime > timestamp) {
					document.getElementById("votin").innerHTML += "<div class='invote'>IPFS: <a href='https://ipfs.io/ipfs/" + ipfs + "'>" + ipfs + "</a><br><br>Mode: Buy<br>Token: " + token + "<br>Dex: " + dex + "<br>Value: " + value + "<br>End: " + end.toGMTString()  + "<br><br><form><input type='button' class='button' onClick='givevote(\""+ipfs+"\");' value='Vote'></form><form><input type='button' class='button' onClick='statvote(\""+ipfs+"\");' value='Stat'></form></div>";
				}
				
				else  {
					document.getElementById("votin").innerHTML += "<div class='outvote'>IPFS: <a href='https://ipfs.io/ipfs/" + ipfs + "'>" + ipfs + "</a><br><br>Mode: Buy<br>Token: " + token + "<br>Dex: " + dex + "<br>Value: " + value + "<br>End: " + end.toGMTString() + "<br><br><form><input type='button' class='button' onClick='statvote(\""+ipfs+"\");' value='Stat'></form> </div>";
				
				}			
			}
			
			
			
			if (result[i].event == 'Sel') {
			
				var ipfs = result[i].args._ipfs;
				var token = result[i].args._token;
				var dex = result[i].args._dex;
				var qty = result[i].args._tokenQty;
				var end = new Date(Number(1000 * result[i].args._endtime));
								
				if (result[i].args._endtime > timestamp) {
					document.getElementById("votin").innerHTML += "<div class='invote'>IPFS: <a href='https://ipfs.io/ipfs/" + ipfs + "'>" + ipfs + "</a><br><br>Mode: Sel<br>Token: " + token + "<br>Dex: " + dex + "<br>Quantity: " + qty + "<br>End: " + end.toGMTString()  + "<br><br><form><input type='button' class='button' onClick='givevote(\""+ipfs+"\");' value='Vote'></form><form><input type='button' class='button' onClick='statvote(\""+ipfs+"\");' value='Stat'></form></div>";
				}
				
				else  {
					document.getElementById("votin").innerHTML += "<div class='outvote'>IPFS: <a href='https://ipfs.io/ipfs/" + ipfs + "'>" + ipfs + "</a><br><br>Mode: Sel<br>Token: " + token + "<br>Dex: " + dex + "<br>Quantity: " + qty + "<br>End: " + end.toGMTString() + "<br><br><form><input type='button' class='button' onClick='statvote(\""+ipfs+"\");' value='Stat'></form> </div>";
				
				}			
			}
			
			
		}

	});
}




// wait for receipt

function waitForReceipt(hash, cb) {
	
			web3.eth.getTransactionReceipt(hash, function (err, receipt) {
		
				if (err) {
					alert(err);
				}

				if (receipt !== null) {

					if (cb) {
						cb(receipt);
					}
				} 
		
				else {

					window.setTimeout(function () {
				
						waitForReceipt(hash, cb);
					}, 1000);

				}
			});
		}
		
	











// call contract token methods..

function allowancee() {

			if(web3.eth.defaultAccount === undefined) {

				alert("No accounts found. If you're using MetaMask, " + "please unlock it first and reload the page.");

			}
			
			
			alert("Calling smart contract...");
			
			var owner = document.allowance.owner.value;
			
			var spender = document.allowance.spender.value;

			
			
			ccc.allowance(owner, spender, function(error, success){

				if(error) {

					alert("Something went wrong: " + error);
				}

				else { 

					document.getElementById("bas").innerHTML = success.toString(10) + " unit tok";

				}

			});

}



function balance() {
		
			if(web3.eth.defaultAccount === undefined) {

				alert("No accounts found. If you're using MetaMask, " + "please unlock it first and reload the page.");

			}
			
			
			alert("Calling smart contract...");
			
			var user = document.balanceof.user.value;

			
			
			ccc.balanceOf(user, function(error, success){

				if(error) {

					alert("Something went wrong: " + error);
				}

				else { 

					success = success;

					document.getElementById("bas").innerHTML = success.toString(10) + " unit tok";

				}

			});

			
		}



function transferer() {
		
			if(web3.eth.defaultAccount === undefined) {

				alert("No accounts found. If you're using MetaMask, " + "please unlock it first and reload the page.");

			}
			
			
			alert("Calling smart contract...");
			
			var quantity = document.transfer.quantity.value;
			var to = document.transfer.to.value;
			

			ccc.transfer(to, quantity, {gas: 300000, from: web3.eth.accounts[0]}, function (err, hash) {

				if (err) {
				
					alert(err)
					return(err);
				}
				
				document.getElementById("bas").innerHTML = "<p>Waiting transaction...</p>";

				waitForReceipt(hash, function () {
					
					alert("Transaction succeeded.");
					contract();
					status();
				});
			});
		
		}



function transfererFrom() {
		
			if(web3.eth.defaultAccount === undefined) {

				alert("No accounts found. If you're using MetaMask, " + "please unlock it first and reload the page.");

			}
			
			
			alert("Calling smart contract...");
			
			var from = document.transferFrom.from.value;
			var quantity = document.transferFrom.quantity.value;
			var to = document.transferFrom.to.value;
			
			
			ccc.transferFrom(from, to, quantity, {gas: 300000, from: web3.eth.accounts[0]}, function (err, hash) {

				if (err) {
				
					alert(err)
					return(err);
				}
				document.getElementById("bas").innerHTML = "<p>Waiting transaction...</p>";

				waitForReceipt(hash, function () {
				
					alert("Transaction succeeded.");
					contract();
					status();
				});
			});
		
		}




function approver() {
		
			if(web3.eth.defaultAccount === undefined) {

				alert("No accounts found. If you're using MetaMask, " + "please unlock it first and reload the page.");

			}
			
			
			alert("Calling smart contract...");
			
			var quantity = document.approve.quantity.value;
			var spender = document.approve.spender.value;
			
			
			ccc.approve(spender, quantity, {gas: 300000, from: web3.eth.accounts[0]}, function (err, hash) {

				if (err) {
				
					alert(err)
					return(err);
				}
				
				document.getElementById("bas").innerHTML = "<p>Waiting transaction...</p>";

				waitForReceipt(hash, function () {
				
					alert("Transaction succeeded.");
					contract();
					
				});
			});
		
		}




// call contract DEX methods


function ETTbuy() {

			var eth = document.buyer.ett.value;
			
			dex.estimateETT(eth, function (err, success) {

                    success = success

			document.getElementById("bas").innerHTML = "<p>Approximative token amount for " + eth.toString(10) + " wei</p>";
			document.getElementById("bas").innerHTML += "<p>" + success.toString(10) + " unit tok</p>";
			document.getElementById("bas").innerHTML += "<p><input type='button' class='button' onClick='buy(" + eth + ")' value='Send'></p>";

			});


}

function buy(eth) {

			if(web3.eth.defaultAccount === undefined) {

				alert("No accounts found. If you're using MetaMask, " + "please unlock it first and reload the page.");

			}
			
			
			alert("Calling smart contract...");
			
			dex.ethToTokens({gas: 300000, from: web3.eth.accounts[0], value:eth}, function (err, hash) {

				if (err) {
				
					alert(err)
					return(err);
				}
				
				document.getElementById("bas").innerHTML = "<p>Waiting transaction...</p>";

				waitForReceipt(hash, function () {
					
					alert("Transaction succeeded.");
					exchange();
					status();
				});
			});
			
		
		}
		

function TTEsel() {

			var qty = document.seler.tte.value;
			
			dex.estimateTTE(qty, function (err, success) {

			document.getElementById("bas").innerHTML = "<p>Approximative wei amount for " + qty.toString(10) + " unit tok</p>";
			document.getElementById("bas").innerHTML += "<p>" + success.toString(10) + " wei</p>";
			document.getElementById("bas").innerHTML += "<p><input type='button' class='button' onClick='sel(" + qty + ")' value='Send'></p>";

			});


}

function sel(qty) {

			if(web3.eth.defaultAccount === undefined) {

				alert("No accounts found. If you're using MetaMask, " + "please unlock it first and reload the page.");

			}
			
			
			alert("Calling smart contract...");
			
			
			dex.tokensToEth(qty, {gas: 300000, from: web3.eth.accounts[0]}, function (err, hash) {

				if (err) {
				
					alert(err)
					return(err);
				}
				
				document.getElementById("bas").innerHTML = "<p>Waiting transaction...</p>";

				waitForReceipt(hash, function () {
				
					alert("Transaction succeeded.");
					exchange();
					status();
				});
			});
			
			
		
		}

function ratio() {

	if(web3.eth.defaultAccount === undefined) {

		alert("No accounts found. If you're using MetaMask, " + "please unlock it first and reload the page.");

	}
			

	dex.estimateTTE(10000, function(err, success) {
	
		if (success) {
			
			var succ = success*10**-18

			document.getElementById("bas").innerHTML += "<p>Approximative price: 1 tok (10000 unit tok) = " + succ.toFixed(18).toString(10) + " Ether</p><p></p><p>Attention, les champs des formulaires attendent des unit tok (1 tok = 10000 unit tok) ou des wei.</p>";

	
		}
	
	});

}


// call contract DAO methodes


function approverDAO() {
		
			if(web3.eth.defaultAccount === undefined) {

				alert("No accounts found. If you're using MetaMask, " + "please unlock it first and reload the page.");

			}
			
			
			alert("Calling smart contract...");
			
			var quantity = document.approvedao.quantity.value;
			var spender = document.approvedao.spender.value;
			var hashh = document.approvedao.hashh.value;
			var tokaddress = document.approvedao.tokaddress.value;
			var delta = document.approvedao.delta.value;
			
			dao.approve(tokaddress, spender, quantity, hashh, delta, {gas: 300000, from: web3.eth.accounts[0]}, function (err, hash) {

				if (err) {
				
					alert(err)
					return(err);
				}
				
				document.getElementById("bas").innerHTML = "<p>Waiting transaction...</p>";

				waitForReceipt(hash, function () {
				
					alert("Transaction succeeded.");
					thedao();
					
				});
			});
		
		}



function buyDAO() {
		
			if(web3.eth.defaultAccount === undefined) {

				alert("No accounts found. If you're using MetaMask, " + "please unlock it first and reload the page.");

			}
			
			
			alert("Calling smart contract...");
			
			var hashh = document.buydao.hashh.value;
			var tokaddress = document.buydao.tokaddress.value;
			var dexaddress = document.buydao.dexaddress.value;
			var amount = document.buydao.amount.value;
			var delta = document.buydao.delta.value;
			
			dao.buy(tokaddress, dexaddress, amount, hashh, delta, {gas: 300000, from: web3.eth.accounts[0]}, function (err, hash) {

				if (err) {
				
					alert(err)
					return(err);
				}
				
				document.getElementById("bas").innerHTML = "<p>Waiting transaction...</p>";

				waitForReceipt(hash, function () {
				
					alert("Transaction succeeded.");
					thedao();
					
				});
			});
		
		}
		




function selDAO() {
		
			if(web3.eth.defaultAccount === undefined) {

				alert("No accounts found. If you're using MetaMask, " + "please unlock it first and reload the page.");

			}
			
			
			alert("Calling smart contract...");
			
			var hashh = document.seldao.hashh.value;
			var tokaddress = document.seldao.tokaddress.value;
			var dexaddress = document.seldao.dexaddress.value;
			var quantity = document.seldao.quantity.value;
			var delta = document.seldao.delta.value;
			
			dao.sel(tokaddress, dexaddress, quantity, hashh, delta, {gas: 300000, from: web3.eth.accounts[0]}, function (err, hash) {

				if (err) {
				
					alert(err)
					return(err);
				}
				
				document.getElementById("bas").innerHTML = "<p>Waiting transaction...</p>";

				waitForReceipt(hash, function () {
				
					alert("Transaction succeeded.");
					thedao();
					
				});
			});
		
		}
		
		
		

function sendETH() {
		
			if(web3.eth.defaultAccount === undefined) {

				alert("No accounts found. If you're using MetaMask, " + "please unlock it first and reload the page.");

			}
			
			
			alert("Calling smart contract...");
			
			var hashh = document.sendeth.hashh.value;
			var to = document.sendeth.to.value;
			var amount = document.sendeth.amount.value;
			var delta = document.sendeth.delta.value;
			
			dao.send(to, amount, hashh, delta, {gas: 300000, from: web3.eth.accounts[0]}, function (err, hash) {

				if (err) {
				
					alert(err);
					return(err);
				}
				
				document.getElementById("bas").innerHTML = "<p>Waiting transaction...</p>";

				waitForReceipt(hash, function () {
				
					alert("Transaction succeeded.");
					thedao();
					
				});
			});
		
		}

//function pour voter 

function givevote(ipfs) {
		
		alert("Voter pour la proposition: " + ipfs);

		if(web3.eth.defaultAccount === undefined) {

			alert("No accounts found. If you're using MetaMask, " + "please unlock it first and reload the page.");

			}
			
			alert("Calling smart contract...");
			
			dao.vote(ipfs, {gas: 300000, from:web3.eth.accounts[0]}, function (err, hash) {
			
			
			if (err) {
			
				alert(err);
				return(err);
			
			}
			
			waitForReceipt(hash, function () {
			
				alert("Transaction succeeded.");
				
			});
			
		});
		
		}



function statvote(ipfs) {


	dao.getStat(ipfs, function (err, success) {
	
	if (success) {
	
		var nvote = success;
	}

	
	ccc.balanceOf(dao.address, function(error, success){

	if (success) { 
		
		var daobal = success;
	}

	var stat = (nvote / (10000*10**4 - daobal))*100;

	alert("Statistiques de vote: " + stat.toString(10) + " %");


	});
	});
	}
	
	
			
		


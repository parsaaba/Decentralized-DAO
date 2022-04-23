# Ethereum-DAO

DAO (decentralized autonomous organization) Ethereum 100 % decentralized.

## IPFS links

Latest IPFS hash: QmQEYftPDScFjgpSSYVYJVmDcE153F62uu9btvQu6rsFkm

[Test on Ropsten via IPFS](https://ipfs.io/ipfs/QmQEYftPDScFjgpSSYVYJVmDcE153F62uu9btvQu6rsFkm/mgv.html)

IPNS hash: k2k4r8mysbwr95decm1aljrwo24vo2ayohaeusngalvvbud28nby7iqj

[Test on Ropsten via IPNS](https://ipfs.io/ipns/k2k4r8mysbwr95decm1aljrwo24vo2ayohaeusngalvvbud28nby7iqj/mgv.html)

## Requirement

Cette dapp requiert un client web3 ([metamask](https://metamask.io) or [cipher browser](https://www.cipherbrowser.com))

Le CSS est pour l'instant optimisé uniquement pour ipad format landscape

## Screenshots

<p align="center">

<a href=https://ipfs.io/ipfs/QmUGT994rpaKGQ1oinyfQPHRDzjcKpfVftDHdbQoZrffZe>	
<img src="https://ipfs.io/ipfs/QmUGT994rpaKGQ1oinyfQPHRDzjcKpfVftDHdbQoZrffZe" height=460>
</a>
</p>

<p align="center">

<a href=https://ipfs.io/ipfs/QmTdQN6JaSvgoEAaMesy97tdCgxaPF3XMnZEa6EgvmCWWE>	
<img src="https://ipfs.io/ipfs/QmTdQN6JaSvgoEAaMesy97tdCgxaPF3XMnZEa6EgvmCWWE" height=460>
</a>
</p>

<p align="center">

<a href=https://ipfs.io/ipfs/QmY2mTi4mRU46XKukZrWH4T8hZjMgB74THyCMiPRot5Bms>	
<img src="https://ipfs.io/ipfs/QmY2mTi4mRU46XKukZrWH4T8hZjMgB74THyCMiPRot5Bms" height=460>
</a>
</p>

<p align="center">

<a href=https://ipfs.io/ipfs/Qmc19QDQ6T1kJTGbpXWNEoYevBqG4oT5FD21RH1SUfqq4i>	
<img src="https://ipfs.io/ipfs/Qmc19QDQ6T1kJTGbpXWNEoYevBqG4oT5FD21RH1SUfqq4i" height=460>
</a>
</p>



<p align="center">

<a href=https://ipfs.io/ipfs/QmfXw1unCxCsgcv4L1dbLnruu4sbcbz7kHxMLb1nnZi1Ab>	
<img src="https://ipfs.io/ipfs/QmfXw1unCxCsgcv4L1dbLnruu4sbcbz7kHxMLb1nnZi1Ab" height=460>
</a>
</p>

<p align="center">

<a href=https://ipfs.io/ipfs/QmQDmtUJkdDu7kfG912Rsrqm64VYkaqJSuqyj1JufoQLjx>	
<img src="https://ipfs.io/ipfs/QmQDmtUJkdDu7kfG912Rsrqm64VYkaqJSuqyj1JufoQLjx" height=460>
</a>
</p>


## Fonctionnement

MyDAO est une dapp (application décentralisée) hébérgée sur IPFS et intéragissant avec des smart contracts Ethereum (déployés sur le Ropsten testnet pour cette version de démonstration)

MyDAO interagit avec 3 smart contracts (tok.vy, dex.vy, dao.vy) qui intéragissent eux-mêmes entre eux.

#### Smart Contract tok.vy

Le smart contract tok.vy est un token ERC20. 

La possession de ce token confère un droit de vote et un droit à proposer des projets dans la DAO. Le poids du vote d’un possesseur de ce token est pondéré par la quantité de tokens qu’il possède.

Ce token possède toutes les fonctions d’un token ERC20:

- transfer 
- transferFrom
- approve 
- allowance 
- balanceOf
- totalSupply
- name
- symbol
- decimal 

Toutes ces fonctions sont accessibles via l’interface Token de la dapp MyDAO

Le smart contract tok.vy possède des fonctions supplémentaires:

La fonction `sequestre` permet de séquestrer les tokens d’un utilisateur pendant un temps donné. Cette fonction ne peut être exécutée que par:

- le minter du smart contract tok.vy : pour éventuellement séquestrer les tokens d’un utilisateur ne remplissant pas les conditions d’un KYC.
- le smart contract dao.vy : pour séquestrer les tokens d’un votant le temps du vote.
- un smart contract AirDrop.

Les fonctions `setDao` et `setAirdrop` ne peuvent être exécutées que par le minter du contract, elles permettent d’autoriser le smart contract dao.vy (ou un smart contract airdrop) à séquestrer les tokens des utilisateurs pendant un temps donné.

La fonction `sequestred` attend comme argument une adresse (Ethereum address) et retourne le timestamp de fin du séquestre.


#### Smart contract dex.vy

Le smart contract dex.vy est un exchange décentralisé permettant d’acheter ou vendre des tokens contre des Ether.

Des frais de change peuvent être appliqués (uniquement lors d’un achat). Par défaut les frais sont de 0,2 %. Ces frais peuvent être modifiés par le owner du smart contract dex.vy via la fonction `setFee`.

Le taux de change token Ether dépend de la quantité relative Ether token présents à un instant donné dans le smart contract dex.vy.
Le taux de change approximatif est affiché dans l’interface DEX de la dapp. Ce taux est susceptible de changer entre le moment ou un utilisateur initie une transaction et la fin de cette transaction si d’autres utilisateurs effectuent des transactions pendant cet intervalle de temps.

Les fonctions `cashfeebal` et `ownerWithdraw` permettent respectivement au owner du contract d’encaisser les taxes et de liquider le contract en récupérant l’ensemble des Ether et token restants.


#### Smart contract dao.vy

Le smart contract dao.vy est la DAO proprement dite.

Ce contract dont les fonctions sont accessibles via l’interface DAO de la dapp, permet de voter, et de proposer des projets ainsi que les actions à réaliser pour les financer :

- envoyer des Ether
- vendre ou acheter des tokens de la DAO sur le DEX
- vendre ou acheter des tokens ERC20 via des DEX compatibles
- transférer des tokens de la DAO (transfer, transferFrom,  approve)
- transférer d’autres tokens ERC20 possédés par la DAO (transfer, transferFrom,  approve)

Le poids du vote d’un possesseur du token est pondéré par la quantité de tokens qu’il possède.

Tout possesseur du token peut proposer un projet via les formulaires de l’interface DAO de la dapp. La référence de chaque projet est le hash IPFS de sa déscription.

L’association qui possède le smart contract DAO joue le rôle de curateur: elle est la seule à pouvoir valider un projet ayant obtenu plus de 51% des votes. Cette validation entraîne l’exécution de la fonction permettant le financement.

Les tokens possédés par le smart contract DAO ne sont pas comptabilisés lors du calcul des résultats d’un vote.


## Contact

Parsa.ba.a@gmail.com
 



// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Launchpad is Ownable, ReentrancyGuard {

	ERC20 public token;

	// EVENTS
	event LaunchpoolCreated(address indexed sender, string nameTokenToDistribute, uint256 totalTokenToDistribute, uint256 stackingLength);
	event TokensDeposited(address sender, uint256 amount, uint256 balance, uint256 daysStaking);
	event Deposit(address indexed sender, uint amount, uint balance);

	uint256 totalTokenToDistribute;						// contatore Token ancora da distribuire
	string nameTokenToDistribute;						// nome Token ERC-20 da distribuire
	string symbolTokenToDistribute;						// symbolo Token ERC-20 da distribuire
	uint256 decimalsTokenToDistribute;					// decimali Token ERC-20 da distribuire
	uint256 stakingLength;								// lunghezza in secondi del periodo di staking
	uint256 startLP;									// timestamp inizio launchpool
	uint256 endLP;										// timestamp inizio launchpool
	uint256 TotalPower = 0;  							// ad ogni commit TotalPower = TotalPower + orderPower;

	mapping(uint256 => address ) public orderIDs;		// associa ogni ordine di staking all'address che lo ha effettuato

	struct order {
		uint32 tokenQuantity;
		uint256 orderTime;								// timestamp
		uint256 power;									// power = tokenQuantity * ( orderTime - startLP)
		bool isClaimed;									// true se è già stato fatto il claim di questo ordine
	}

	order[] public orders;				// array dinamico di tutti gli ordini effettuati


	constructor(ERC20 _token, uint _amount, uint256 _startLP, uint256 _endLP) {

		require(_amount > 0, "Amount must be greater than zero");
		require(_startLP > 0, "StartLP must be greater than zero");
		require(_endLP > 0, "EndLP must be greater than zero");
		require(_startLP < _endLP, "StartLP must be less than EndLP");

		token = _token;
		totalTokenToDistribute = _amount;

		startLP = _startLP;
		endLP = _endLP;
		stakingLength = endLP - startLP;

		nameTokenToDistribute = _token.name();
		symbolTokenToDistribute = _token.symbol();
		decimalsTokenToDistribute = _token.decimals();

		emit LaunchpoolCreated(msg.sender, nameTokenToDistribute, totalTokenToDistribute, stakingLength);

		//emit Deposit(msg.sender, msg.value, address(this).balance);
	}

/*
	function depositStaker(address _staker, uint256 _amount) public payable {
		require(_amount > 0, "Amount must be greater than zero");
		msg.sender == _staker;
		(msg.sender, address(this), _amount);
		emit Deposit(msg.sender, msg.value, address(this).balance);
	}
*/
	
}

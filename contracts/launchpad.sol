// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Launchpad is Ownable, ReentrancyGuard {
    IERC20 public token;

    event TokensDeposited(
        address sender,
        uint256 amount,
        uint256 balance,
        uint256 daysStaking
    );

    //general events
    event Deposit(address indexed sender, uint amount, uint balance);

    constructor(IERC20 _token, uint amount, uint daysStaking) payable {
        token = _token;
        amount = amount;
        daysStaking = daysStaking;

        emit Deposit(msg.sender, msg.value, address(this).balance);
    }

    function depositStaker(address staker, uint256 amount) public payable {
        require(amount > 0, "Amount must be greater than zero");
        msg.sender == staker;
        (msg.sender, address(this), amount);
        emit Deposit(msg.sender, msg.value, address(this).balance);
    }
}

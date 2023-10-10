// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.10;

import {FlashLoanSimpleReceiverBase} from "@aave/core-v3/contracts/flashloan/base/FlashLoanSimpleReceiverBase.sol";
import {IPoolAddressesProvider} from "@aave/core-v3/contracts/interfaces/IPoolAddressesProvider.sol";
import {IERC20} from "@aave/core-v3/contracts/dependencies/openzeppelin/contracts/IERC20.sol";

contract SparkToFlash is FlashLoanSimpleReceiverBase {
    address payable owner;

    constructor(
        address _addressProvider
    ) FlashLoanSimpleReceiverBase(IPoolAddressesProvider(_addressProvider)) {
        owner = payable(msg.sender);
    }

    modifier onlyOwner {
        require(msg.sender == owner , "Only contract owner can call this function !");
        _;
    }

    function executeOperation(
        address asset,
        uint256 amount,
        uint256 premium,
        address initiator,
        bytes calldata params
    ) external override returns (bool) {
        //Add the arbitrage logic here.

        uint256 amountBackToPool = amount + premium;
        IERC20(assset).approove(address(POOL) , amountBackToPool);

        return true;
    };

    function flashLoanRequest(address _token , uint _amount) public {
        POOL.flashLoanSimple(
            address(this), //receiverAddress
            _token , //asset
            _amount , //amount
            "", //params (placeholder value)
            0 // refferalCode(placeholder value)
        );

    }

    function getBalance(address _tokenAddress) external view returns{
        return IERC20(_tokenAddress).balanceOf(address(this));
    }

    function withdraw(address _tokenAddress) external onlyOwner{
        IERC20 token = IERC20(_tokenAddress);
        token.transfer(msg.sender , token.balanceOf(address(this)));
    }
}

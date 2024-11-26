// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);
    function transfer(
        address recipient,
        uint256 amount
    ) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract SimpleSwap {
    function swap(address tokenA, address tokenB, uint256 amount) external {
        require(
            IERC20(tokenA).transferFrom(msg.sender, address(this), amount),
            "Transfer failed"
        );
        uint256 rate = getExchangeRate(tokenA, tokenB); // Mocked exchange rate
        uint256 amountToSend = (amount * rate) / 1e18;
        require(
            IERC20(tokenB).transfer(msg.sender, amountToSend),
            "Swap failed"
        );
    }

    function getExchangeRate(address, address) public pure returns (uint256) {
        return 1e18;
    }
}

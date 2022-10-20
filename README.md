# INRx Token

INRx Stablecoin public smart contract repository.

## Contract Specification

INRx is an ERC20 token that is  Minted and Burned by DEOReservoir, representing the trusted party backing the token with USD.

### ERC20 Token
The public interface of Binance USD is the ERC20 interface specified by EIP-20.

- `name()`
- `symbol()`
- `decimals()`
- `totalSupply()`
- `balanceOf(address account)`
- `transfer(address to, uint256 value)`
- `approve(address spender, uint256 value)`
- `allowance(address owner, address spender)`
- `transferFrom(address from, address to, uint256 value)`
And the usual events.

-  `event Transfer(address indexed from, address indexed to, uint256 value)`
-  `event Approval(address indexed owner, address indexed spender, uint256 value)`




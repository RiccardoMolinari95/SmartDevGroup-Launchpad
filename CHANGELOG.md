
# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).
 
## [Unreleased] - yyyy-mm-dd
 
Here we write upgrading notes for brands. It's a team effort to make them as
straightforward as possible.
 
### Added
- [PROJECTNAME-XXXX](http://tickets.projectname.com/browse/PROJECTNAME-XXXX)
  MINOR Ticket title goes here.
- [PROJECTNAME-YYYY](http://tickets.projectname.com/browse/PROJECTNAME-YYYY)
  PATCH Ticket title goes here.

---------------------------------------------------------------------------------------------------------
# [0.0.8] - 09-07-2023
### Added
	- [launchpool.sol]
		- Getters functions: getMyOrders(), getMyTotalStaked(), getUserOrders(), getUserTotalStaked()
### Changed
	- [launchpool.sol]
		- Modificato mapping orderIDs da (uint256, address) a (address, uint256[])

# [0.0.7] - 09-07-2023
### Changed
	- [.envExample] e [hardhat.config.ts]
		- minor fix
	- [launchpool.sol], [tokenTest.sol], [testLaunchpad.ts], [deploy_Launchpad.ts]
		- Indentation with tabs

# [0.0.6] - 09-07-2023
### Added
	[.envExample]
	-URI_ALCHEMY_SEPOLIA .env support
	-URL_ALCHEMY_MUMBAI .env support
	[testLaunchpad.ts]
		-describe("deposit token owner function")
	
### Changed
	[hardhat.config.ts]
		- url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_KEY}` in url: process.env.URL_AlCHEMY_SEPOLIA
		_ url: `https://eth-sepolia.g.mumbai.com/v2/${ALCHEMY_KEY}` in url: process.env.URL_AlCHEMY_MUMBAI
	[deploy_Launchpad.ts]
		//parametri costruttore
		- amount in const startLP
		- daysStaking in const endLP
	[testTokenToDeposit.ts] in [testLaunchpad.ts]


## [0.0.5] - 08-07-2023
### Added
	- [launchpool.sol] 
		- function stake()

## [0.0.4] - 08-07-2023 
### Added
	- [launchpool.sol] 
		- function depositTokenToDistribute()
	- [README.md]
		- Operation list

## [0.0.3] - 08-07-2023 
### Added
	- [launchpool.sol] 
		- Data Structures: totalTokenToDistribute, nameTokenToDistribute, symbolTokenToDistribute, decimalsTokenToDistribute, stakingLength, startLP, endLP, TotalPower, order, orders, orderIDs
		- event LaunchpoolCreated

### Changed
	- [launchpool.sol] 
		- IERC20 to ERC20 to support of .name(), .symbol(), .decimals() functions
		- daysStaking in stakingTime to support seconds precision
	- [deploy_TestToken.ts]
		Renamed TokenTest in TokenTestFactory

## [0.0.2] - 08-07-2023 
### Added
	- PUBLIC_ADDRESS .env support
	- CHANGELOG.md
### Fixed
	- Fix prevent bug "ProviderError: invalid opcode: opcode 0x5f not defined" deploying on Mumbai
### Changed
	- Changed delpoyed TestToken contract address on Mumbai

## [0.0.1] - 07-07-2023 
Initial release
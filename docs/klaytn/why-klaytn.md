---
description: >-
  This document explains the key design principles of Klaytn and illustrates how Klaytn differentiates itself from others. 
---

# Why Klaytn <a id="why-klaytn"></a>

Ever since the first bitcoin transaction in 2009, numerous blockchain applications have been developed, but few of them gain meaningful traction in the market. The major roadblocks to blockchain adoption are; 

- Difficulty of use: Blockchain applications force end-users to understand cryptographic terms and the inner workings of the system. There are too many steps in making transactions, and hex-strings pop up all over.
- Poor user experience: The burden of technical immaturity is simply passed to the users. In many blockchain systems, a transaction is not confirmed until significant time passes. Use of application often requires password inputs repeatedly (while there are no password recoveries), and charges a fee for each interaction (where the amount of fee can be highly fluctuating each time). 
- Uncertain sustainability: Lack of long-term sustainable business models for public blockchains slows down enterprise adoption. The operation heavily relies on the token economy that incentivizes the stakeholders to act in a sustainable manner, but the model is not proven in commercial areas yet.

## Klaytn is aiming at Mass-adoption of Blockchain <a id="klaytn-is-aiming-at-mass-adoption-of-blockchain"></a>

The goal of Klaytn is blockchain mass adoption. The foremost design principle is;

{% hint style="success" %}
Giving the same user experience that matches the expectation set on the web/mobile applications, eventually making the technology invisible to the users.
{% endhint %}

As per this principle, Klaytn has been designed to meet the following requirements.

### High Performance  <a id="high-performance"></a>

- Main chain should handle at least 4,000 TPS. 
- Main chain should guarantee immediate transaction finality with one-second block generation time.
- See [Consensus Mechanism].

### Low Cost  <a id="low-cost"></a>

- End-users should not be burdened with any higher transaction fee that is beyond the cost that the traditional systems require.
- Transaction fee should be stable and be determined by the transaction complexity itself, not by surrounding factors.
- See [Affordable Smart Contract Execution Cost] and [Transaction Fees]. At the time of writing, sending KLAY requires a fixed fee of 0.000625 KLAY. 

### Usability in User Account Management <a id="usability-in-user-account-management"></a>

- User should be able to choose own account address in a human-readable format.
- User can change the private key of an account without changing the address. 
- See [Human-Readable Address] and [Decoupling of Key Pairs from Addresses].

### Usability in Transaction <a id="usability-in-transaction"></a>

- Ability to delegate the user's transaction fee to the application operator. 
- See [Fee Delegation]. Application operator can decide the amount of subsidy for each transaction and can implement more flexible business models such as freemium or subscription. Fee delegation can effectively lower the user acquisition barrier. 

***

Removing usability hurdles in the platform layer is not enough to drive the mass-adoption. To find attractive blockchain applications, fostering global developer communities along the strategic partnership with business owners is a crucial step. 

{% hint style="success" %}
Making a business-friendly environment to encourage the birth of compelling applications.
{% endhint %}

This entails the following requirements to support application development. 

### Rapid Development <a id="rapid-development"></a>

- The development of application on Klaytn must be straightforward, and the technologies used must follow the open standard to reduce the learning curve.
- See [Solidity-Smart Contract Language], [Truffle], and [Migrating Ethereum App to Klaytn]. As Klaytn Virtual Machine (KLVM) supports Ethereum’s Solidity contract, it becomes much easier to port PoC product on Ethereum to Klaytn for commercial use. It is much easier as well to find development tools and to get some help from the well-established developer community. 

### Service-specific Private Chains with Data Anchoring <a id="service-specific-private-chains-with-data-anchoring"></a>

- Klaytn should provide a dedicated solution for private blockchain. The private chain can have its own governance and connect to the Klaytn main chain for data anchoring and asset transfer. 
- See [Service Chain]. Enterprises often want to have their own dedicated execution environment to meet the SLA. With the service chain, an enterprise can maintain an isolated high-performing execution environment that is not affected by other blockchain applications, and also keep their business-sensitive data private. 

### Application Service Layer <a id="application-service-layer"></a>

- Klaytn provides an additional off-chain service layer called Enterprise Proxy (EP) to ease blockchain application development and operation. Enterprise Proxy will reduce the technical hurdles in using blockchain, and support seamless integration with traditional database and security systems. 
- One of the first EP product will launch in early 2020. It will have APIs that can be used without much blockchain knowledge and provide business intelligence insights through data analysis. 
- See [Enterprise Proxy] to learn about its strategic direction and the problems it aims to address. 

### Contribution Reward <a id="contribution-reward"></a>

- Applications that contribute to growing Klaytn ecosystem should be fairly rewarded.
- See [Incentive Program]. 

***

Lastly, the grounding rules, 

{% hint style="success" %}
Klaytn does not sacrifice blockchain’s core characteristics to achieve the above-mentioned enhancement, and the platform stays stable with strongly committed stakeholders.
{% endhint %}

### Transparency, Security and Decentralization <a id="transparency-security-and-decentralization"></a>

- Everyone can request transactions and retrieve and validate every transaction execution result on the blockchain.
- Klaytn is a decentralized network and no single malicious node breaks the data integrity.

### Governance by Enterprises <a id="governance-by-enterprises"></a>

- The development and use of Klaytn is backed by Kakao, the massaging giant in Korea. Trusted entities, global listed enterprises that manage the business of hundreds of thousands to billions of dollars, operate Klaytn node and participate in decision making for the development of Klaytn. 



[Decoupling of Key Pairs from Addresses]: design/accounts.md#decoupling-key-pairs-from-addresses
[Multiple Key Pairs and Role-Based Keys]: design/accounts.md#multiple-key-pairs-and-role-based-keys
[Human-Readable Address]: design/accounts.md#human-readable-address-hra
[Consensus Mechanism]: design/consensus-mechanism.md
[Affordable Smart Contract Execution Cost]: design/computation/klaytn-smart-contract.md#affordable-smart-contract-execution-cost
[Transaction Fees]: design/transaction-fees.md
[Fee Delegation]: design/transactions/README.md#fee-delegation
[Service Chain]: scaling-solutions.md#service-chain
[Solidity-Smart Contract Language]: ../smart-contract/solidity-smart-contract-language.md
[Truffle]: ../toolkit/truffle.md
[Migrating Ethereum App to Klaytn]: ../bapp/tutorials/migrating-ethereum-app-to-klaytn.md
[Incentive Program]: design/token-economy.md#incentive-programs
[Enterprise Proxy]: enterprise-proxy.md
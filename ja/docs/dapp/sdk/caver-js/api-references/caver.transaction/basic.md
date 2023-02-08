# 基本型トランザクションクラス <a id="basic-type-transaction-class"></a>

## 従来の取引 <a id="legacytransaction"></a>

```javascript
caver.transaction.legacyTransaction.create(transactionObject)
```

`LegacyTransaction` は [レガシートランザクション](../../../../../klaytn/design/transactions/basic.md#txtypelegacytransaction) を表します。 [Klaytn アカウント](../../../../../klaytn/design/accounts.md#klaytn-accounts) は `AccountKeyLegacy` でのみ [レガシートランザクション][] を実行できます。 `transactionObject` は、 `LegacyTransaction` を作成するために以下のプロパティを持つことができます。

`LegacyTransaction` は、メンバー変数として以下のプロパティを持ちます。 オプション `としてマークされたプロパティ` は、ユーザーが `LegacyTransaction` を作成したときに `transactionObject` で任意に与えられるプロパティを参照します。

{% hint style="success" %}
注意: RLP でエンコードされた文字列から `LegacyTransaction` のインスタンスを作成できます。 以下の例をご参照ください。 注意: `caver.transaction.legacyTransaction.create` は caver-js [v1.6.1](https://www.npmjs.com/package/caver-js/v/1.6.1) からサポートされています。

注意: caver-js [v1.8.1-rc.4](https://www.npmjs.com/package/caver-js/v/1.8.1-rc.4)では、トランザクションの作成は `create` 関数を使用してのみサポートされます。 If you've been creating transactions using a constructor like `new caver.transaction.legacyTransaction({...})`, please change it to `caver.transaction.legacyTransaction.create({...})`.
{% endhint %}

**プロパティ**

| 名前         | タイプ | Description                                                                                                                                     |
| ---------- | --- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ガス         | 文字列 | 取引が使用できる取引手数料の最大額です。                                                                                                                            |
| 値          | 文字列 | (オプション、デフォルト: `'0x0'`) peb 内の KLAYの転送量。 `caver.utils.toPeb` を使用できます。                                                                            |
| from       | 文字列 | (オプション) 送信者のアドレス。 省略すると、署名に使用されるキーリングアドレスが設定されます。                                                                                               |
| to         | 文字列 | （オプション、） デフォルト: `'0x'`) レガシートランザクションがスマートコントラクトを実行した場合、転送された値またはスマートコンタクトアドレスを受信するアカウントアドレス。 従来のトランザクションがスマートコントラクトを展開する場合、 `to` を定義する必要はありません。 |
| input      | 文字列 | (オプション) トランザクションに添付されたデータ。スマートコントラクトの展開/実行に使用されます。                                                                                              |
| signatures | 行列  | (オプション) 署名の配列。 レガシートランザクションには1つの署名しかありません。                                                                                                      |
| nonce      | 文字列 | (オプション) 送信者のトランザクションを一意に識別するために使用される値。 省略した場合、 `caver.rpc.klay.getTransactionCount(address, '保留中')` は nonce を設定するために使用されます。                     |
| gasPrice   | 文字列 | (オプション) トークンで送信者が支払う金額を取得する倍数です。 省略した場合、 `caver.rpc.klay.getGasPrice` は gasPrice を設定するために使用されます。                                                |
| chainId    | 文字列 | (オプション) KlaytnネットワークのチェーンID。 省略した場合、 `caver.rpc.klay.getChainId` は chainId を設定するために使用されます。                                                      |

**例**

```javascript
// Create a legacyTransaction for sending KLAY
> caver.transaction.legacyTransaction.create({
    to: '0x9957dfd92e4b70f91131c573293343bc5f21f215',
    value: caver.utils.toPeb(1, 'KLAY'),
    gas: 25000,
})

// Create a legacyTransaction to deploy smart contract
> caver.transaction.legacyTransaction.create({
    input: '0x60806...',
    gas: 200000,
})

// Create a legacyTransaction to execute smart contract
> caver.transaction.legacyTransaction.create({
    to: '0xfe6c9118e56a42cbc77aa3b7ee586455e3dc5b6d', // Smart contact address
    input: '0xa9059...',
    gas: 200000,
})

// Create a legacyTransaction from RLP-encoded string
> caver.transaction.legacyTransaction.create('0xf8668204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a843132333425a0b2a5a15550ec298dc7dddde3774429ed75f864c82caeb5ee24399649ad731be9a029da1014d16f2011b3307f7bbe1035b6e699a4204fc416c763def6cefd976567')
LegacyTransaction {
    _type: 'TxTypeLegacyTransaction',
    _from: '0x',
    _gas: '0xf4240',
    _nonce: '0x4d2',
    _gasPrice: '0x19',
    _signatures: SignatureData { _v: '0x25', _r: '0xb2a5a...', _s:  '0x29da1...' },
    _to: '0x7b65b75d204abed71587c9e519a89277766ee1d0',
    _input: '0x31323334',
    _value: '0xa'
}
```

## ValueTransfer <a id="valuetransfer"></a>

```javascript
caver.transaction.valueTransfer.create(transactionObject)
```

`ValueTransfer` は [の転送トランザクション](../../../../../klaytn/design/transactions/basic.md#txtypevaluetransfer) を表します。 `transactionObject` には以下のプロパティがあり、 `ValueTransfer` トランザクションを作成できます。

`ValueTransfer` は以下のプロパティをメンバー変数として持っています。 オプション `` としてマークされたプロパティは、ユーザーが `ValueTransfer` トランザクションを作成するときに任意に `transactionObject` で与えられるプロパティを参照します。

{% hint style="success" %}
注意: RLPエンコードされた文字列から `ValueTransfer` のインスタンスを作成できます。 以下の例をご参照ください。 注意: `caver.transaction.valueTransfer.create` は caver-js [v1.6.1](https://www.npmjs.com/package/caver-js/v/1.6.1) からサポートされています。

注意: caver-js [v1.8.1-rc.4](https://www.npmjs.com/package/caver-js/v/1.8.1-rc.4)では、トランザクションの作成は `create` 関数を使用してのみサポートされます。 If you've been creating transactions using a constructor like `new caver.transaction.valueTransfer({...})`, please change it to `caver.transaction.valueTransfer.create({...})`.
{% endhint %}

**プロパティ**

| 名前         | タイプ | Description                                                                                                                 |
| ---------- | --- | --------------------------------------------------------------------------------------------------------------------------- |
| 値          | 文字列 | ペブ内のKLAYの転送量。 `caver.utils.toPeb` を使用できます。                                                                                  |
| from       | 文字列 | 送信者のアドレス                                                                                                                    |
| to         | 文字列 | 転送された値を受け取るアカウントアドレス。                                                                                                       |
| ガス         | 文字列 | 取引が使用できる取引手数料の最大額です。                                                                                                        |
| signatures | 行列  | (オプション) 署名の配列。                                                                                                              |
| nonce      | 文字列 | (オプション) 送信者のトランザクションを一意に識別するために使用される値。 省略した場合、 `caver.rpc.klay.getTransactionCount(address, '保留中')` は nonce を設定するために使用されます。 |
| gasPrice   | 文字列 | (オプション) トークンで送信者が支払う金額を取得する倍数です。 省略した場合、 `caver.rpc.klay.getGasPrice` は gasPrice を設定するために使用されます。                            |
| chainId    | 文字列 | (オプション) KlaytnネットワークのチェーンID。 省略した場合、 `caver.rpc.klay.getChainId` は chainId を設定するために使用されます。                                  |

**例**

```javascript
// Create a valueTransfer
> caver.transaction.valueTransfer.create({
    from: '0x{address in hex}',
    to: '0x9957dfd92e4b70f91131c573293343bc5f21f215',
    value: caver.utils.toPeb(1, 'KLAY'),
    gas: 25000,
})

// Create a valueTransfer from RLP-encoded string
> caver.transaction.valueTransfer.create('0x08f87f3a8505d21dba0083015f90948723590d5d60e35f7ce0db5c09d3938b26ff80ae01947d0104ac150f749d36bb34999bcade9f2c0bd2e6f847f845820feaa03d820b27d0997baf16f98df01c7b2b2e9734ad05b2228c4d403c2facff8397f3a01f4a44eeb8b7f0b0019162d1d6b90c401078e56fcd7495e74f7cfcd37e25f017')
ValueTransfer {
    _type: 'TxTypeValueTransfer',
    _from: '0x7d0104ac150f749d36bb34999bcade9f2c0bd2e6',
    _gas: '0x15f90',
    _nonce: '0x3a',
    _gasPrice: '0x5d21dba00',
    _signatures: [ SignatureData { _v: '0x0fea', _r: '0x3d820...', _s: '0x1f4a4...' } ],
    _to: '0x8723590d5d60e35f7ce0db5c09d3938b26ff80ae',
    _value: '0x1'
}
```

## ValueTransferMemo <a id="valuetransfermemo"></a>

```javascript
caver.transaction.valueTransferMemo.create(transactionObject)
```

`ValueTransferMemo` は [値転送メモ取引](../../../../../klaytn/design/transactions/basic.md#txtypevaluetransfermemo) を表します。 `transactionObject` は、 `ValueTransferMemo` トランザクションを作成するために以下のプロパティを持つことができます。

`ValueTransferMemo` は以下のプロパティをメンバー変数として持ちます。 オプション `` としてマークされたプロパティは、ユーザーが `ValueTransferMemo` トランザクションを作成するときに任意に `transactionObject` で与えられるプロパティを参照します。

{% hint style="success" %}
注意: RLPエンコードされた文字列から `ValueTransferMemo` のインスタンスを作成することができます。 以下の例をご参照ください。 注意: `caver.transaction.valueTransferMemo.create` は caver-js [v1.6.1](https://www.npmjs.com/package/caver-js/v/1.6.1) からサポートされています。

注意: caver-js [v1.8.1-rc.4](https://www.npmjs.com/package/caver-js/v/1.8.1-rc.4)では、トランザクションの作成は `create` 関数を使用してのみサポートされます。 If you've been creating transactions using a constructor like `new caver.transaction.valueTransferMemo({...})`, please change it to `caver.transaction.valueTransferMemo.create({...})`.
{% endhint %}

**プロパティ**

| 名前         | タイプ | Description                                                                                                                 |
| ---------- | --- | --------------------------------------------------------------------------------------------------------------------------- |
| 値          | 文字列 | ペブ内のKLAYの転送量。 `caver.utils.toPeb` を使用できます。                                                                                  |
| from       | 文字列 | 送信者のアドレス                                                                                                                    |
| to         | 文字列 | 転送された値を受け取るアカウントアドレス。                                                                                                       |
| input      | 文字列 | トランザクションに添付されたデータ メッセージはこのプロパティに渡す必要があります。                                                                                  |
| ガス         | 文字列 | 取引が使用できる取引手数料の最大額です。                                                                                                        |
| signatures | 行列  | (オプション) 署名の配列。                                                                                                              |
| nonce      | 文字列 | (オプション) 送信者のトランザクションを一意に識別するために使用される値。 省略した場合、 `caver.rpc.klay.getTransactionCount(address, '保留中')` は nonce を設定するために使用されます。 |
| gasPrice   | 文字列 | (オプション) トークンで送信者が支払う金額を取得する倍数です。 省略した場合、 `caver.rpc.klay.getGasPrice` は gasPrice を設定するために使用されます。                            |
| chainId    | 文字列 | (オプション) KlaytnネットワークのチェーンID。 省略した場合、 `caver.rpc.klay.getChainId` は chainId を設定するために使用されます。                                  |

**例**

```javascript
// Create a valueTransferMemo
> caver.transaction.valueTransferMemo.create({
    from: '0x{address in hex}',
    to: '0x9957dfd92e4b70f91131c573293343bc5f21f215',
    value: caver.utils.toPeb(1, 'KLAY'),
    gas: 25000,
    input: '0x68656c6c6f',
})

// Create a valueTransferMemo from RLP-encoded string
> caver.transaction.valueTransferMemo.create('0x10f8808204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0b8568656c6c6ff845f84325a07d2b0c89ee8afa502b3186413983bfe9a31c5776f4f820210cffe44a7d568d1ca02b1cbd587c73b0f54969f6b76ef2fd95cea0c1bb79256a75df9da696278509f3')
ValueTransferMemo {
    _type: 'TxTypeValueTransferMemo',
    _from: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
    _gas: '0xf4240',
    _nonce: '0x4d2',
    _gasPrice: '0x19',
    _signatures: [ SignatureData { _v: '0x25', _r: '0x7d2b0...', _s: '0x2b1cb...' } ],
    _to: '0x7b65b75d204abed71587c9e519a89277766ee1d0',
    _value: '0xa',
    _input: '0x68656c6c6f'
}
```

## アカウント更新 <a id="accountupdate"></a>

```javascript
caver.transaction.accountUpdate.create(transactionObject)
```

`AccountUpdate` は、 [口座更新取引](../../../../../klaytn/design/transactions/basic.md#txtypeaccountupdate) を表します。 `transactionObject` には以下のプロパティがあり、 `AccountUpdate` トランザクションを作成できます。

`AccountUpdate` は、メンバー変数として以下のプロパティを持ちます。 オプション `としてマークされたプロパティ` は、ユーザーが `AccountUpdate` トランザクションを作成するときに任意に `transactionObject` で与えられるプロパティを指します。


{% hint style="success" %}
注意: RLP でエンコードされた文字列から `AccountUpdate` のインスタンスを作成できます。 以下の例をご参照ください。 注意: `caver.transaction.accountUpdate.create` は caver-js [v1.6.1](https://www.npmjs.com/package/caver-js/v/1.6.1) からサポートされています。

注意: caver-js [v1.8.1-rc.4](https://www.npmjs.com/package/caver-js/v/1.8.1-rc.4)では、トランザクションの作成は `create` 関数を使用してのみサポートされます。 If you've been creating transactions using a constructor like `new caver.transaction.accountUpdate({...})`, please change it to `caver.transaction.accountUpdate.create({...})`.
{% endhint %}

**プロパティ**

| 名前         | タイプ       | Description                                                                                                                 |
| ---------- | --------- | --------------------------------------------------------------------------------------------------------------------------- |
| from       | 文字列       | 送信者のアドレス                                                                                                                    |
| アカウント      | [アカウント][] | アカウントを更新するために必要な情報を含む [アカウント][] インスタンス。                                                                                     |
| ガス         | 文字列       | 取引が使用できる取引手数料の最大額です。                                                                                                        |
| signatures | 行列        | (オプション) 署名の配列。                                                                                                              |
| nonce      | 文字列       | (オプション) 送信者のトランザクションを一意に識別するために使用される値。 省略した場合、 `caver.rpc.klay.getTransactionCount(address, '保留中')` は nonce を設定するために使用されます。 |
| gasPrice   | 文字列       | (オプション) トークンで送信者が支払う金額を取得する倍数です。 省略した場合、 `caver.rpc.klay.getGasPrice` は gasPrice を設定するために使用されます。                            |
| chainId    | 文字列       | (オプション) KlaytnネットワークのチェーンID。 省略した場合、 `caver.rpc.klay.getChainId` は chainId を設定するために使用されます。                                  |

For how to create an [Account][] instance for each `AccountKey`, refer to [Getting Started - Account Update](../../getting-started.md#account-update) or [caver.account.create](../caver.account.md#caver-account-create).

**例**

```javascript
// Create a accountUpdate
> caver.transaction.accountUpdate.create({
    from: '0x{address in hex}',
    gas: 50000,
    account: caver.account.createWithAccountKeyLegacy('0x{address in hex}'),
})

// Create a accountUpdate from RLP-encoded string
> caver.transaction.accountUpdate.create('0x20f88d808505d21dba0083030d4094ffb52bc54635f840013e142ebe7c06c9c91c1625a302a102c93fcbdb2b9dbef8ee5c4748ffdce11f1f5b06d7ba71cc2b7699e38be7698d1ef847f845820fe9a09c2ca281e94567846acbeef724b1a7a5f882d581aff9984755abd92272592b8ea0344fd23d7774ae9c227809bb579387dfcd69e74ae2fe3a788617f54a4001e5ab')
AccountUpdate {
    _type: 'TxTypeAccountUpdate',
    _from: '0xffb52bc54635f840013e142ebe7c06c9c91c1625',
    _gas: '0x30d40',
    _nonce: '0x0',
    _gasPrice: '0x5d21dba00',
    _signatures: [ SignatureData { _v: '0x0fe9', _r: '0x9c2ca...', _s: '0x344fd...' } ],
    _account: Account {
        _address: '0xffb52bc54635f840013e142ebe7c06c9c91c1625',
        _accountKey: AccountKeyPublic { _publicKey: '0x02c93...' } 
    }
}
```

## SmartContractDeploy <a id="smartcontractdeploy"></a>

```javascript
caver.transaction.smartContractDeploy.create(transactionObject)
```

`SmartContractDeploy` は、 [スマートコントラクトデプロイトランザクション](../../../../../klaytn/design/transactions/basic.md#txtypesmartcontractdeploy) を表します。 `transactionObject` は、 `SmartContractDeploy` トランザクションを作成するために以下のプロパティを持つことができます。

`SmartContractDeploy` は、そのメンバー変数として以下のプロパティを持ちます。 `optional` としてマークされたプロパティは、ユーザーが `SmartContractDeploy` トランザクションを作成するときに任意に `transactObject` で与えられるプロパティを参照します。

{% hint style="success" %}
注意: RLP でエンコードされた文字列から `SmartContractDeploy` のインスタンスを作成できます。 以下の例をご参照ください。 注意: `caver.transaction.smartContractDeploy.create` は caver-js [v1.6.1](https://www.npmjs.com/package/caver-js/v/1.6.1) からサポートされています。

注意: caver-js [v1.8.1-rc.4](https://www.npmjs.com/package/caver-js/v/1.8.1-rc.4)では、トランザクションの作成は `create` 関数を使用してのみサポートされます。 If you've been creating transactions using a constructor like `new caver.transaction.smartContractDeploy({...})`, please change it to `caver.transaction.smartContractDeploy.create({...})`.
{% endhint %}

**プロパティ**

| 名前            | タイプ     | Description                                                                                                                           |
| ------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| from          | 文字列     | 送信者のアドレス                                                                                                                              |
| input         | 文字列     | トランザクションに添付されたデータ デプロイされるスマートコントラクトのバイトコードとその引数。 これは [caver.abi.encodeContractDeploy](../caver.abi.md#encodecontractdeploy) から取得できます。 |
| ガス            | 文字列     | 取引が使用できる取引手数料の最大額です。                                                                                                                  |
| 値             | 文字列     | （オプション、） デフォルト: `'0x0'`) コントラクトが初期化されたときに、peb内のKLAYがスマートコントラクトアドレスの残高に転送され、保存される金額。 `caver.utils.toPeb` を使用できます。                      |
| to            | 文字列     | (オプション、デフォルト: `'0x'`) スマートコントラクトが展開されるアドレス。 現在、この値は定義できません。 アドレスの指定は今後サポートされる予定です。                                                    |
| humanReadable | boolean | (オプション、デフォルト: `false`) 人間が読めるアドレスはまだサポートされていないため、これは偽でなければなりません。                                                                      |
| codeFormat    | 文字列     | (オプション、デフォルト: `'EVM'`) スマートコントラクトコードのコード形式。 今のところサポートされている値はEVMのみです。 この値は代入後に16進文字列に変換されます (例:> `EVM` は `0x0`に変換されます) 。               |
| signatures    | 行列      | (オプション) 署名の配列。                                                                                                                        |
| nonce         | 文字列     | (オプション) 送信者のトランザクションを一意に識別するために使用される値。 省略した場合、 `caver.rpc.klay.getTransactionCount(address, '保留中')` は nonce を設定するために使用されます。           |
| gasPrice      | 文字列     | (オプション) トークンで送信者が支払う金額を取得する倍数です。 省略した場合、 `caver.rpc.klay.getGasPrice` は gasPrice を設定するために使用されます。                                      |
| chainId       | 文字列     | (オプション) KlaytnネットワークのチェーンID。 省略した場合、 `caver.rpc.klay.getChainId` は chainId を設定するために使用されます。                                            |

**例**

```javascript
// Create a smartContractDeploy
> caver.transaction.smartContractDeploy.create({
    from: '0x{address in hex}',
    input: '0x60806...',
    gas: 100000,
})

// Create a smartContractDeploy from RLP-encoded string
> caver.transaction.smartContractDeploy.create('0x28f9027e1f8505d21dba00830dbba0808094d91aec35bea25d379e49cfe2dff5f5775cdac1a3b9020e60806040526000805534801561001457600080fd5b506101ea806100246000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306661abd1461007257806342cbb15c1461009d578063767800de146100c8578063b22636271461011f578063d14e62b814610150575b600080fd5b34801561007e57600080fd5b5061008761017d565b6040518082815260200191505060405180910390f35b3480156100a957600080fd5b506100b2610183565b6040518082815260200191505060405180910390f35b3480156100d457600080fd5b506100dd61018b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561012b57600080fd5b5061014e60048036038101908080356000191690602001909291905050506101b1565b005b34801561015c57600080fd5b5061017b600480360381019080803590602001909291905050506101b4565b005b60005481565b600043905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b50565b80600081905550505600a165627a7a7230582053c65686a3571c517e2cf4f741d842e5ee6aa665c96ce70f46f9a594794f11eb00298080f847f845820fe9a0018a9f680a74e275f1f83a5c2c45e1313c52432df4595e944240b1511a4f4ba7a02d762c3417f91b81db4907db832cb28cc64df7dca3ea9be64899ab3f4812f016')
SmartContractDeploy {
    _type: 'TxTypeSmartContractDeploy',
    _from: '0xd91aec35bea25d379e49cfe2dff5f5775cdac1a3',
    _gas: '0xdbba0',
    _nonce: '0x1f',
    _gasPrice: '0x5d21dba00',
    _signatures: [ SignatureData { _v: '0x0fe9', _r: '0x018a9...', _s: '0x2d762...' } ],
    _to: '0x',
    _value: '0x0',
    _input: '0x60806...',
    _humanReadable: false,
    _codeFormat: '0x0'
}
```

## SmartContractExecution <a id="smartcontractexecution"></a>

```javascript
caver.transaction.smartContractExecution.create(transactionObject)
```

`SmartContractExecution` は、 [スマートコントラクト実行トランザクション](../../../../../klaytn/design/transactions/basic.md#txtypesmartcontractexecution) を表します。 `transactionObject` は、 `SmartContractExecution` トランザクションを作成するために以下のプロパティを持つことができます。

`SmartContractExecution` は、そのメンバー変数として以下のプロパティを持ちます。 オプション `としてマークされたプロパティ` は、ユーザーが `SmartContractExecution` トランザクションを作成するときに任意に `transactionObject` で与えられるプロパティを参照します。

{% hint style="success" %}
注意: RLPエンコードされた文字列から `SmartContractExecution` のインスタンスを作成できます。 以下の例をご参照ください。 注意: `caver.transaction.smartContractExecution.create` は caver-js [v1.6.1](https://www.npmjs.com/package/caver-js/v/1.6.1) からサポートされています。

注意: caver-js [v1.8.1-rc.4](https://www.npmjs.com/package/caver-js/v/1.8.1-rc.4)では、トランザクションの作成は `create` 関数を使用してのみサポートされます。 If you've been creating transactions using a constructor like `new caver.transaction.smartContractExecution({...})`, please change it to `caver.transaction.smartContractExecution.create({...})`.
{% endhint %}

**プロパティ**

| 名前         | タイプ | Description                                                                                                                                                    |
| ---------- | --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| from       | 文字列 | 送信者のアドレス                                                                                                                                                       |
| to         | 文字列 | 実行するスマートコントラクトアカウントのアドレス。                                                                                                                                      |
| input      | 文字列 | トランザクションの実行に使用されるトランザクションに添付されたデータ。 入力はエンコードされた文字列で、この関数に渡される関数とパラメータを示します。 これは [caver.abi.encodeFunctionCall](../caver.abi.md#encodefunctioncall) で得ることができます。 |
| ガス         | 文字列 | 取引が使用できる取引手数料の最大額です。                                                                                                                                           |
| 値          | 文字列 | (オプション、デフォルト: `'0x0'`) peb 内の KLAYの転送量。 `caver.utils.toPeb` を使用できます。                                                                                           |
| signatures | 行列  | (オプション) 署名の配列。                                                                                                                                                 |
| nonce      | 文字列 | (オプション) 送信者のトランザクションを一意に識別するために使用される値。 省略した場合、 `caver.rpc.klay.getTransactionCount(address, '保留中')` は nonce を設定するために使用されます。                                    |
| gasPrice   | 文字列 | (オプション) トークンで送信者が支払う金額を取得する倍数です。 省略した場合、 `caver.rpc.klay.getGasPrice` は gasPrice を設定するために使用されます。                                                               |
| chainId    | 文字列 | (オプション) KlaytnネットワークのチェーンID。 省略した場合、 `caver.rpc.klay.getChainId` は chainId を設定するために使用されます。                                                                     |

**例**

```javascript
// Create a smartContractExecution
> caver.transaction.smartContractExecution.create({
    from: '0x{address in hex}',
    to: '0x{address in hex}',
    input: '0xa9059...',
    gas: 90000,
})

// Create a smartContractExecution from RLP-encoded string
> caver.transaction.smartContractExecution.create('0x30f8c5038505d21dba00830dbba094e3cd4e1cd287235cc0ea48c9fd02978533f5ec2b80946b604e77c0fbebb5b2941bcde3ab5eb09d99ad24b844a9059cbb0000000000000000000000008a4c9c443bb0645df646a2d5bb55def0ed1e885a0000000000000000000000000000000000000000000000000000000000003039f847f845820feaa066e1650b5779f152489633f343581c07938f8b2fc92c919d4dd7c7295d0beacea067b0b79383dbcd42a3aa8ebb1aa4bcb1fc0623ef9e97bc1e9b82d96fe37b5881')
SmartContractExecution {
    _type: 'TxTypeSmartContractExecution',
    _from: '0x6b604e77c0fbebb5b2941bcde3ab5eb09d99ad24',
    _gas: '0xdbba0',
    _nonce: '0x3',
    _gasPrice: '0x5d21dba00',
    _signatures: [ SignatureData { _v: '0x0fea', _r: '0x66e16...', _s: '0x67b0b...' } ],
    _to: '0xe3cd4e1cd287235cc0ea48c9fd02978533f5ec2b',
    _value: '0x0',
    _input: '0xa9059...'
}
```

## キャンセル <a id="cancel"></a>

```javascript
caver.transaction.cancel.create(transactionObject)
```

`キャンセル` は [トランザクションをキャンセルする](../../../../../klaytn/design/transactions/basic.md#txtypecancel) を表します。 `transactionObject` は、 `キャンセル` トランザクションを作成するために以下のプロパティを持つことができます。

`` トランザクションをキャンセルすると、トランザクションプールで同じノンスを持つトランザクションの実行がキャンセルされます。

`キャンセル` はそのメンバ変数として以下のプロパティを持ちます。 オプション `` としてマークされたプロパティ `transactionObject` 内で任意に与えられるプロパティを参照します。ユーザーが `トランザクションをキャンセル` したとき。

{% hint style="success" %}
注意: RLP でエンコードされた文字列から `キャンセル` のインスタンスを作成できます。 以下の例をご参照ください。 注意: `caver.transaction.cancel.create` は caver-js [v1.6.1](https://www.npmjs.com/package/caver-js/v/1.6.1) からサポートされています。

注意: caver-js [v1.8.1-rc.4](https://www.npmjs.com/package/caver-js/v/1.8.1-rc.4)では、トランザクションの作成は `create` 関数を使用してのみサポートされます。 If you've been creating transactions using a constructor like `new caver.transaction.xcancelxx({...})`, please change it to `caver.transaction.cancel.create({...})`.
{% endhint %}

**プロパティ**

| 名前         | タイプ | Description                                                                                                                 |
| ---------- | --- | --------------------------------------------------------------------------------------------------------------------------- |
| from       | 文字列 | 送信者のアドレス                                                                                                                    |
| ガス         | 文字列 | 取引が使用できる取引手数料の最大額です。                                                                                                        |
| nonce      | 文字列 | (オプション) 送信者のトランザクションを一意に識別するために使用される値。 省略した場合、 `caver.rpc.klay.getTransactionCount(address, '保留中')` は nonce を設定するために使用されます。 |
| signatures | 行列  | (オプション) 署名の配列。                                                                                                              |
| gasPrice   | 文字列 | (オプション) トークンで送信者が支払う金額を取得する倍数です。 省略した場合、 `caver.rpc.klay.getGasPrice` は gasPrice を設定するために使用されます。                            |
| chainId    | 文字列 | (オプション) KlaytnネットワークのチェーンID。 省略した場合、 `caver.rpc.klay.getChainId` は chainId を設定するために使用されます。                                  |

**例**

```javascript
// Create a cancel
> caver.transaction.cancel.create({
    from: '0x{address in hex}',
    nonce: 1,
    gas: 25000,
})

// Create a cancel from RLP-encoded string
> caver.transaction.cancel.create('0x38f869068505d21dba00830dbba0946b604e77c0fbebb5b2941bcde3ab5eb09d99ad24f847f845820feaa0d9994ef507951a59380309f656ee8ed685becdc89b1d1a0eb1d2f72683ae14d3a07ad5d37a89781f294fab72b254ea9266e4d039ae163db4a4c4752f1fabff023b')
Cancel {
    _type: 'TxTypeCancel',
    _from: '0x6b604e77c0fbebb5b2941bcde3ab5eb09d99ad24',
    _gas: '0xdbba0',
    _nonce: '0x6',
    _gasPrice: '0x5d21dba00',
    _signatures: [ SignatureData { _v: '0x0fea', _r: '0xd9994...', _s: '0x7ad5d...' } ]
}
```

## ChainDataAnchoring <a id="chaindataanchoring"></a>

```javascript
caver.transaction.chainDataAnchoring.create(transactionObject)
```

`ChainDataAnchoring` は、 [チェーンデータアンカートランザクション](../../../../../klaytn/design/transactions/basic.md#txtypechaindataanchoring) を表します。 `transactionObject` は、 `ChainDataAnchoring` トランザクションを作成するために以下のプロパティを持つことができます。

`ChainDataAnchoring` には、そのメンバ変数として以下のプロパティがあります。 オプション `としてマークされたプロパティ` は、ユーザーが `ChainDataAnchoring` トランザクションを作成するときにオプションで `transactionObject` で与えられるプロパティを参照します。

{% hint style="success" %}
注意: RLPエンコードされた文字列から `ChainDataAnchoring` のインスタンスを作成できます。 以下の例をご参照ください。 注意: `caver.transaction.chainDataAnchoring.create` は caver-js [v1.6.1](https://www.npmjs.com/package/caver-js/v/1.6.1) からサポートされています。

注意: caver-js [v1.8.1-rc.4](https://www.npmjs.com/package/caver-js/v/1.8.1-rc.4)では、トランザクションの作成は `create` 関数を使用してのみサポートされます。 If you've been creating transactions using a constructor like `new caver.transaction.chainDataAnchoring({...})`, please change it to `caver.transaction.chainDataAnchoring.create({...})`.
{% endhint %}

**プロパティ**

| 名前         | タイプ | Description                                                                                                                 |
| ---------- | --- | --------------------------------------------------------------------------------------------------------------------------- |
| from       | 文字列 | 送信者のアドレス                                                                                                                    |
| input      | 文字列 | サービスチェーンのデータ。                                                                                                               |
| ガス         | 文字列 | 取引が使用できる取引手数料の最大額です。                                                                                                        |
| nonce      | 文字列 | (オプション) 送信者のトランザクションを一意に識別するために使用される値。 省略した場合、 `caver.rpc.klay.getTransactionCount(address, '保留中')` は nonce を設定するために使用されます。 |
| signatures | 行列  | (オプション) 署名の配列。                                                                                                              |
| gasPrice   | 文字列 | (オプション) トークンで送信者が支払う金額を取得する倍数です。 省略した場合、 `caver.rpc.klay.getGasPrice` は gasPrice を設定するために使用されます。                            |
| chainId    | 文字列 | (オプション) KlaytnネットワークのチェーンID。 省略した場合、 `caver.rpc.klay.getChainId` は chainId を設定するために使用されます。                                  |

**例**

```javascript
// Create a chainDataAnchoring
> caver.transaction.chainDataAnchoring.create({
    from: '0x{address in hex}',
    gas: 50000,
    input: '0xf8a6a...',
})

// Create a chainDataAnchoring from RLP-encoded string
> caver.transaction.chainDataAnchoring.create('0x48f9010e8204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0bb8a8f8a6a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000002a00000000000000000000000000000000000000000000000000000000000000003a0000000000000000000000000000000000000000000000000000000000000000405f845f84325a0e58b9abf9f33a066b998fccaca711553fb4df425c9234bbb3577f9d9775bb124a02c409a6c5d92277c0a812dd0cc553d7fe1d652a807274c3786df3292cd473e09')
ChainDataAnchoring {
    _type: 'TxTypeChainDataAnchoring',
    _from: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
    _gas: '0xf4240',
    _nonce: '0x4d2',
    _gasPrice: '0x19',
    _signatures: [ SignatureData { _v: '0x25', _r: '0xe58b9...', _s: '0x2c409...' } ],
    _input: '0xf8a6a...'
}
```
## EthereumAccessList <a id="ethereumaccesslist"></a>

```javascript
caver.transaction.ethereumAccessList.create(transactionObject)
```

`EthereumAccessList` は [イーサリアムアクセスリストトランザクション](../../../../../klaytn/design/transactions/basic.md#txtypeethereumaccesslist) を表します。 [Klaytn アカウント](../../../../../klaytn/design/accounts.md#klaytn-accounts) は `AccountKeyLegacy` でのみ [EthereumAccessList][] を実行できます。 `transactionObject` には以下のプロパティがあり、 `EthereumAccessList` を作成できます。

`EthereumAccessList` には、メンバー変数として以下のプロパティがあります。 `オプションとしてマークされたプロパティ` は、ユーザーが `EthereumAccessList` を作成するときに任意に `transactionObject` で指定できるプロパティを参照します。

{% hint style="success" %}
注意: RLPエンコードされた文字列から `EthereumAccessList` のインスタンスを作成できます。 以下の例をご参照ください。 注意: `caver.transaction.ethereumAccessList` は caver-js [v1.8.0](https://www.npmjs.com/package/caver-js/v/1.8.0) からサポートされています。

注意: caver-js [v1.8.1-rc.4](https://www.npmjs.com/package/caver-js/v/1.8.1-rc.4)では、トランザクションの作成は `create` 関数を使用してのみサポートされます。 If you've been creating transactions using a constructor like `new caver.transaction.ethereumAccessList({...})`, please change it to `caver.transaction.ethereumAccessList.create({...})`.
{% endhint %}

**プロパティ**

| 名前         | タイプ | Description                                                                                                                                                          |
| ---------- | --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ガス         | 文字列 | 取引が使用できる取引手数料の最大額です。                                                                                                                                                 |
| 値          | 文字列 | (オプション、デフォルト: `'0x0'`) peb 内の KLAYの転送量。 `caver.utils.toPeb` を使用できます。                                                                                                 |
| from       | 文字列 | (オプション) 送信者のアドレス。 省略すると、署名に使用されるキーリングアドレスが設定されます。                                                                                                                    |
| to         | 文字列 | （オプション、） デフォルト: `'0x'`) イーサリアムアクセスリストトランザクションがスマートコントラクトを実行した場合、転送された値またはスマートコンタクトアドレスを受け取るアカウントアドレス。 イーサリアムのアクセスリストのトランザクションがスマートコントラクトを展開する場合、 `to` を定義する必要はありません。 |
| input      | 文字列 | (オプション) トランザクションに添付されたデータ。スマートコントラクトの展開/実行に使用されます。                                                                                                                   |
| signatures | 行列  | (オプション) 署名の配列。 イーサリアムアクセスリストトランザクションは一つの署名のみを持つことができます。                                                                                                              |
| nonce      | 文字列 | (オプション) 送信者のトランザクションを一意に識別するために使用される値。 省略した場合、 `caver.rpc.klay.getTransactionCount(address, '保留中')` は nonce を設定するために使用されます。                                          |
| gasPrice   | 文字列 | (オプション) トークンで送信者が支払う金額を取得する倍数です。 省略した場合、 `caver.rpc.klay.getGasPrice` は gasPrice を設定するために使用されます。                                                                     |
| chainId    | 文字列 | (オプション) KlaytnネットワークのチェーンID。 省略した場合、 `caver.rpc.klay.getChainId` は chainId を設定するために使用されます。                                                                           |
| accessList | 行列  | (オプション) トランザクションによって読み書きされたすべてのストレージスロットとアドレスを含むEIP-2930アクセスリストとして。                                                                                                  |

**例**

```javascript
> caver.transaction.ethereumAccessList.create({
    to: '0x9957dfd92e4b70f91131c573293343bc5f21f215',
    value: caver.utils.toPeb(1, 'KLAY'),
    gas: 40000,
    accessList: [
        {
            address: '0x5430192ae264b3feff967fc08982b9c6f5694023',
            storageKeys: [
                '0x0000000000000000000000000000000000000000000000000000000000000003',
                '0x0000000000000000000000000000000000000000000000000000000000000007',
            ],
        },
    ]
})

> caver.transaction.ethereumAccessList.create('0x7801f90109822710238505d21dba00829c4094c5fb1386b60160614a8151dcd4b0ae41325d1cb801b844a9059cbb0000000000000000000000008a4c9c443bb0645df646a2d5bb55def0ed1e885a0000000000000000000000000000000000000000000000000000000000003039f85bf859945430192ae264b3feff967fc08982b9c6f5694023f842a00000000000000000000000000000000000000000000000000000000000000003a0000000000000000000000000000000000000000000000000000000000000000701a05ac25e47591243af2d6b8e7f54d608e9e0e0aeb5194d34c17852bd7e376f4857a0095a40394f33e95cce9695d5badf4270f4cc8aff0b5395cefc3a0fe213be1f30')
EthereumAccessList {
  _type: 'TxTypeEthereumAccessList',
  _from: '0x0000000000000000000000000000000000000000',
  _gas: '0x9c40',
  _nonce: '0x23',
  _chainId: '0x2710',
  _signatures: SignatureData {
    _v: '0x01',
    _r: '0x5ac25e47591243af2d6b8e7f54d608e9e0e0aeb5194d34c17852bd7e376f4857',
    _s: '0x095a40394f33e95cce9695d5badf4270f4cc8aff0b5395cefc3a0fe213be1f30'
  },
  _to: '0xc5fb1386b60160614a8151dcd4b0ae41325d1cb8',
  _input: '0xa9059cbb0000000000000000000000008a4c9c443bb0645df646a2d5bb55def0ed1e885a0000000000000000000000000000000000000000000000000000000000003039',
  _value: '0x1',
  _accessList: AccessList(0) [],
  _gasPrice: '0x5d21dba00'
}
```

## EthereumDynamicFee <a id="ethereumdynamicfee"></a>

```javascript
caver.transaction.ethereumDynamicFee.create(transactionObject)
```

`EthereumDynamicFee` は [イーサリアム動的手数料取引](../../../../../klaytn/design/transactions/basic.md#txtypeethereumdynamicfee) を表します。 [Klaytn アカウント](../../../../../klaytn/design/accounts.md#klaytn-accounts) は `AccountKeyLegacy` でのみ [EthereumDynamicFee][] を実行できます。 `transactionObject` には以下のプロパティがあり、 `EthereumDynamicFee` を作成できます。

`EthereumDynamicFee` には、メンバー変数として以下のプロパティがあります。 `オプション` としてマークされたプロパティは、ユーザーが `EthereumDynamicFee` を作成したときに `トランザクションObject`で任意に与えられるプロパティを参照します。 `EthereumDynamicFee` は `gasPrice`を使用せず、 `maxPriorityFeePerGas` と `maxFeePerGas` を使用していることに注意してください。

{% hint style="success" %}
注意: RLPエンコードされた文字列から `EthereumDynamicFee` のインスタンスを作成できます。 以下の例をご参照ください。 注意: `caver.transaction.ethereumDynamicFee` は caver-js [v1.8.0](https://www.npmjs.com/package/caver-js/v/1.8.0) からサポートされています。

注意: caver-js [v1.8.1-rc.4](https://www.npmjs.com/package/caver-js/v/1.8.1-rc.4)では、トランザクションの作成は `create` 関数を使用してのみサポートされます。 If you've been creating transactions using a constructor like `new caver.transaction.ethereumDynamicFee({...})`, please change it to `caver.transaction.ethereumDynamicFee.create({...})`.
{% endhint %}

**プロパティ**

| 名前                   | タイプ | Description                                                                                                                                                                          |
| -------------------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ガス                   | 文字列 | 取引が使用できる取引手数料の最大額です。                                                                                                                                                                 |
| 値                    | 文字列 | (オプション、デフォルト: `'0x0'`) peb 内の KLAYの転送量。 `caver.utils.toPeb` を使用できます。                                                                                                                 |
| from                 | 文字列 | (オプション) 送信者のアドレス。 省略された場合、署名に使用されるキーリングアドレスに設定されます。                                                                                                                                  |
| to                   | 文字列 | （オプション、） デフォルト: `'0x'`) イーサリアム動的手数料取引がスマートコントラクトを実行すると、転送された値またはスマートコンタクトアドレスを受け取る口座アドレス。 イーサリアム動的手数料トランザクションがスマートコントラクトを展開する場合、 `to` を定義する必要はありません。                                 |
| input                | 文字列 | (オプション) トランザクションに添付されたデータ。スマートコントラクトの展開/実行に使用されます。                                                                                                                                   |
| signatures           | 行列  | (オプション) 署名の配列。 イーサリアム動的手数料トランザクションは1つの署名のみを持つことができます。                                                                                                                                |
| nonce                | 文字列 | (オプション) 送信者のトランザクションを一意に識別するために使用される値。 省略すると、 `caver.rpc.klay.getTransactionCount(address, 'pending')` に設定されます。                                                                      |
| maxPriorityFeePerGas | 文字列 | (オプション) ペブでの取引のガスチップキャップ。 Klaytnはガス価格が固定されているため、 `caver.rpc.klay.getGasPrice` と同じ値に設定する必要があります。 省略すると、 `caver.rpc.klay.getMaxPriorityFeePerGas()` に設定されます。                           |
| maxFeePerGas         | 文字列 | (オプション) トランザクションを実行するために支払う最大額。 Klaytnはガス価格が固定されているため、 `caver.rpc.klay.getGasPrice` と同じ値に設定する必要があります。 省略した場合、 `baseFeePerGas * 2 + maxPriorityFeePerGas` の値は `maxFeePerGas` に設定されます。 |
| chainId              | 文字列 | (オプション) KlaytnネットワークのチェーンID。 省略すると、 `caver.rpc.klay.getChainId` に設定されます。                                                                                                             |
| accessList           | 行列  | (オプション) トランザクションによって読み書きされたすべてのストレージスロットとアドレスを含むEIP-2930アクセスリストとして。                                                                                                                  |

**例**

```javascript
> caver.transaction.ethereumDynamicFee.create({
    to: '0x9957dfd92e4b70f91131c573293343bc5f21f215',
    value: caver.utils.toPeb(1, 'KLAY'),
    gas: 50000,
    accessList: [
        {
            address: '0x5430192ae264b3feff967fc08982b9c6f5694023',
            storageKeys: [
                '0x0000000000000000000000000000000000000000000000000000000000000003',
                '0x0000000000000000000000000000000000000000000000000000000000000007',
            ],
        },
    ]
})

> caver.transaction.ethereumDynamicFee.create('0x7802f9010f822710258505d21dba008505d21dba00829c40941fc92c23f71a7de4cdb4394a37fc636986a0f48401b844a9059cbb0000000000000000000000008a4c9c443bb0645df646a2d5bb55def0ed1e885a0000000000000000000000000000000000000000000000000000000000003039f85bf8599467116062f1626f7b3019631f03d301b8f701f709f842a00000000000000000000000000000000000000000000000000000000000000003a0000000000000000000000000000000000000000000000000000000000000000780a04fc52da183020a27dc4b684a45404445630e946b0c1a37edeb538d4bdae63040a07d56dbcc61f42ffcbced105f838d20b8fe71e85a4d0344c7f60815fddfeae4cc')
EthereumDynamicFee {
  _type: 'TxTypeEthereumDynamicFee',
  _from: '0x0000000000000000000000000000000000000000',
  _gas: '0x9c40',
  _nonce: '0x25',
  _chainId: '0x2710',
  _signatures: SignatureData {
    _v: '0x',
    _r: '0x4fc52da183020a27dc4b684a45404445630e946b0c1a37edeb538d4bdae63040',
    _s: '0x7d56dbcc61f42ffcbced105f838d20b8fe71e85a4d0344c7f60815fddfeae4cc'
  },
  _to: '0x1fc92c23f71a7de4cdb4394a37fc636986a0f484',
  _input: '0xa9059cbb0000000000000000000000008a4c9c443bb0645df646a2d5bb55def0ed1e885a0000000000000000000000000000000000000000000000000000000000003039',
  _value: '0x1',
  _accessList: AccessList(0) [],
  _maxPriorityFeePerGas: '0x5d21dba00',
  _maxFeePerGas: '0x5d21dba00'
}
```

[レガシートランザクション]: ../../../../../klaytn/design/accounts.md#accountkeylegacy

[EthereumAccessList]: ../../../../../klaytn/design/accounts.md#accountkeylegacy

[EthereumDynamicFee]: ../../../../../klaytn/design/accounts.md#accountkeylegacy
[アカウント]: ../caver.account.md#account
[Account]: ../caver.account.md#account
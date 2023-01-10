# Partial Fee Delegation <a id="partial-fee-delegation"></a>

## TxTypeFeeDelegatedValueTransferWithRatio <a id="txtypefeedelegatedvaluetransferwithratio"></a>

TxTypeFeeDelegatedValueTransferWithRatio is used when a user wants to send KLAY. As Klaytn provides multiple transaction types to make each transaction type serve a single purpose, TxTypeFeeDelegatedValueTransferWithRatio is limited to send KLAY to an externally owned account. Therefore, TxTypeFeeDelegatedValueTransferWithRatio is accepted only if `to` is an externally owned account. To transfer KLAY to a smart contract account, use [TxTypeFeeDelegatedSmartContractExecutionWithRatio](partial-fee-delegation.md#txtypefeedelegatedsmartcontractexecutionwithratio) instead. 次の変更は、このトランザクションタイプによって行われます。

1. The fee payer's balance decreases by the given ratio of the transaction fee.
2. The sender's balance decreases by the remaining transaction fee. e.g., If the `feeRatio` is 30, 30% of the fee will be paid by the fee payer, and the remaining 70% of the fee will be paid by the sender.
3. 送信者のノンスは一つずつ増加します。
4. `値` KLAYは送信者から受信者に転送される。

### Attributes <a id="attributes"></a>

| Attribute          | タイプ                                                    | Description                                                                                                                                    |
|:------------------ |:------------------------------------------------------ |:---------------------------------------------------------------------------------------------------------------------------------------------- |
| タイプ                | uint8 \(Go\)                                         | The type of TxTypeFeeDelegatedValueTransferWithRatio. This must be 0x0a.                                                                       |
| nonce              | uint64 \(Go\)                                        | 送信者のトランザクションを一意に識別するために使用される値。 同じノンスを持つ2つのトランザクションが送信者によって生成された場合、1つだけが実行されます。                                                                 |
| gasPrice           | \*big.Int \(Go\)                                   | 送金者が取引手数料を支払う `ペブ` のガソリン単価。 取引手数料は `gas` \* `gasPrice` として計算されます。 例えば、取引がガスの10単位を消費し、ガソリン価格が10^18の場合、取引手数料は10KLAYとなります。 KLAYの [単位][] を参照のこと。 |
| ガス                 | uint64 \(Go\)                                        | 取引が許可されるガスの最大使用量。                                                                                                                              |
| to                 | common.address \(Go\)                                | 転送された値を受け取るアカウントアドレス。                                                                                                                          |
| 値                  | \*big.Int \(Go\)                                   | 転送する `peb` 内の KLAYの量。                                                                                                                          |
| from               | common.address \(Go\)                                | 送信者のアドレス 詳細については、 [トランザクションの署名検証][] を参照してください。                                                                                                 |
| 手数料比               | uint8 \(Go\)                                         | 手数料支払者の手数料比率。 The valid range is between 1 and 99. Zero\(0\) is not allowed. 100 and above are not allowed as well.                          |
| txSignatures       | \[\]{\*big.Int, \*big.Int, \*big.Int} \(Go\) | 送信者の署名 詳細については、 [トランザクションの署名検証][] を参照してください。                                                                                                   |
| feePayer           | common.address \(Go\)                                | 手数料支払者の住所                                                                                                                                      |
| feePayerSignatures | \[\]{\*big.Int, \*big.Int, \*big.Int} \(Go\) | 手数料支払者の署名。                                                                                                                                     |

### 送信者の署名のためのRLPエンコーディング <a id="rlp-encoding-for-signature-of-the-sender"></a>

送信者の署名を行うには、次のようにRLPのシリアル化を行う必要があります。

```javascript
SigRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, feeRatio]), chainid, 0, 0])
SigHash = keccak256(SigRLP)
Signature = sign(SigHash, <the sender's private key>)
```

### 手数料支払者の署名のためのRLPエンコーディング <a id="rlp-encoding-for-signature-of-the-fee-payer"></a>

手数料支払者の署名を行うには、次のようにRLPのシリアル化を行う必要があります。

```javascript
SigFeePayerRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, feeRatio]), feePayer, chainid, 0, 0])
SigFeePayerHash = keccak256(SigFeePayerRLP)
SignatureFeePayer = sign(SigFeePayerHash, <the fee payer's private key>)
```

### SenderTxHashのためのRLPエンコード <a id="rlp-encoding-for-sendertxhash"></a>

SenderTxHashを作るには、次のようにRLPのシリアル化を行う必要があります。

```javascript
txSignatures (a single signature) = [[v, r, s]]
txSignatures (two signatures) = [[v1, r1, s1], [v2, r2, s2]]
SenderTxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, feeRatio, txSignatures])
SenderTxHash = keccak256(SenderTxHashRLP)
```

### トランザクションハッシュ用のRLPエンコーディング <a id="rlp-encoding-for-transaction-hash"></a>

トランザクションハッシュを生成するには、次のようにRLPのシリアル化を行う必要があります。

```javascript
txSignatures (a single signature) = [[v, r, s]]
txSignatures (two signatures) = [[v1, r1, s1], [v2, r2, s2]]
feePayerSignatures (a single signature) = [[v, r, s]]
feePayerSignatures (two signatures) = [[v1, r1, s1], [v2, r2, s2]]
TxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, feeRatio, txSignatures, feePayer, feePayerSignatures])
TxHash = keccak256(TxHashRLP)
```

### RLP Encoding \(Example\) <a id="rlp-encoding-example"></a>

以下に、RLPシリアル化とトランザクションオブジェクトの結果を示します。

```javascript
ChainID 0x1
PrivateKey 0x45a915e4d060149eb4365960e6a7a45f334393093061116b197e3240065ff2d8
PublicKey.X 0x3a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33d
PublicKey.Y 0x8072e77939dc03ba44790779b7a1025baf3003f6732430e20cd9b76d953391b3
SigRLP 0xf83ab6f50a8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0b1e018080
SigHash 0x0f7d520cd00034299b36004c21b571263dbb9a77edbd5920c4136f7f74050d9d
Signature f845f84325a0dde32b8241f039a82b124fe94d3e556eb08f0d6f26d07dcc0f3fca621f1090caa01c8c336b358ab6d3a2bbf25de2adab4d01b754e2fb3b9b710069177d54c1e956
FeePayerPrivateKey 0xb9d5558443585bca6f225b935950e3f6e69f9da8a5809a83f51c3365dff53936
FeePayerPublicKey.X 0x327434d4cfc66ef8857d431419e9deebdc53a3e415edcc55382e2d417b8dd102
FeePayerPublicKey.Y 0x65fc97045707faf7b8f81ac65089d4cc71f69ad0bf1bc8559bc24f13fc284ced
SigRLPFeePayer 0xf84fb6f50a8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0b1e945a0043070275d9f6054307ee7348bd660849d90f018080
SigHashFeePayer 0x38123c30a5f83db853e9ae4e8dd8d4f6aa6840415acffb8dbf18b2050463dec4
SignatureFeePayer f845f84326a0091ecf53f91bb97bb694f2f2443f3563ac2b646d651497774524394aae396360a044228b88f275aa1ec1bab43681d21dc7e3a676786ed1906f6841d0a1a188f88a
TxHashRLP 0x0af8d78204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0b1ef845f84325a0dde32b8241f039a82b124fe94d3e556eb08f0d6f26d07dcc0f3fca621f1090caa01c8c336b358ab6d3a2bbf25de2adab4d01b754e2fb3b9b710069177d54c1e956945a0043070275d9f6054307ee7348bd660849d90ff845f84326a0091ecf53f91bb97bb694f2f2443f3563ac2b646d651497774524394aae396360a044228b88f275aa1ec1bab43681d21dc7e3a676786ed1906f6841d0a1a188f88a
TxHash 83a89f4debd8e9d6374b987e25132b3a4030c9cf9ace2fc6e7d1086fcea2ce40
SenderTxHashRLP 0x0af87b8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0b1ef845f84325a0dde32b8241f039a82b124fe94d3e556eb08f0d6f26d07dcc0f3fca621f1090caa01c8c336b358ab6d3a2bbf25de2adab4d01b754e2fb3b9b710069177d54c1e956
SenderTxHash 4711ed4023e821425968342c1d50063b6bc3176b1792b7075cfeee3656d450f6

    TX(83a89f4debd8e9d6374b987e25132b3a4030c9cf9ace2fc6e7d1086fcea2ce40)
    Type:          TxTypeFeeDelegatedValueTransferWithRatio
    From:          0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B
    To:            0x7b65B75d204aBed71587c9E519a89277766EE1d0
    Nonce:         1234
    GasPrice:      0x19
    GasLimit:      0xf4240
    Value:         0xa
    Signature:     [{"V":"0x25","R":"0xdde32b8241f039a82b124fe94d3e556eb08f0d6f26d07dcc0f3fca621f1090ca","S":"0x1c8c336b358ab6d3a2bbf25de2adab4d01b754e2fb3b9b710069177d54c1e956"}]
    FeePayer:      0x5A0043070275d9f6054307Ee7348bD660849D90f
    FeeRatio:      30
    FeePayerSig:   [{"V":"0x26","R":"0x91ecf53f91bb97bb694f2f2443f3563ac2b646d651497774524394aae396360","S":"0x44228b88f275aa1ec1bab43681d21dc7e3a676786ed1906f6841d0a1a188f88a"}]
    Hex:           0af8d78204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0b1ef845f84325a0dde32b8241f039a82b124fe94d3e556eb08f0d6f26d07dcc0f3fca621f1090caa01c8c336b358ab6d3a2bbf25de2adab4d01b754e2fb3b9b710069177d54c1e956945a0043070275d9f6054307ee7348bd660849d90ff845f84326a0091ecf53f91bb97bb694f2f2443f3563ac2b646d651497774524394aae396360a044228b88f275aa1ec1bab43681d21dc7e3a676786ed1906f6841d0a1a188f88a
```

### RPC出力 \(Example\) <a id="rpc-output-example"></a>

JSON RPC経由で返されたトランザクションオブジェクトを以下に示します。

```javascript
{
  "blockHash": "0x7ad6ed1f9955be00db8fb5452125f0e9a3c0856abb5b4cc4aed91ffc134321da",
  "blockNumber": "0x1",
  "contractAddress": null,
  "feePayer": "0x029fdce0457db02f05c4be9f67b7115cb8ea15ca",
  "feePayerSignatures": [
    {
      "V": "0x25",
      "R": "0xb8583f638efefb297922aa8b8a30cf451a30e266126d52da03ba9ead0fbb1ccd",
      "S": "0x4bc5ca3756f88d857d115b128b00babe5b3c0b089f087a0b30a9ced269e00603"
    }
  ],
  "feeRatio": "0x14",
  "from": "0x0fcda0f2efbe1b4e61b487701ce4f2f8abc3723d",
  "gas": "0x174876e800",
  "gasPrice": "0x5d21dba00",
  "gasUsed": "0x8ca0",
  "logs": [],
  "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "nonce": "0x3",
  "senderTxHash": "0xac372c68d2937383d4344a2d187e70b207c76160eb407b68e08c944b919328de",
  "signatures": [
    {
      "V": "0x26",
      "R": "0x1a8d5bf583843ceba87943569a34a8a6caa18a9ab5e4cf6914d8048e607787bc",
      "S": "0x27458275c84adcb8144b4596946111f1a539643941de74f587fa69a7df98ed1b"
    }
  ],
  "status": "0x1",
  "to": "0x75c3098be5e4b63fbac05838daaee378dd48098d",
  "transactionHash": "0x670ff613022278cc2551a7e4669d8911f1658ffaa4dcc3695b14f39194a8a38c",
  "transactionIndex": "0x3",
  "type": "TxTypeFeeDelegatedValueTransferWithRatio",
  "typeInt": 10,
  "value": "0x989680"
}
```

## TxTypeFeeDelegatedValueTransferMemoWithRatio <a id="txtypefeedelegatedvaluetransfermemowithratio"></a>

TxTypeFeeDelegatedValueTransferMemoWithRatio is used when a user wants to send KLAY with a specific message. TxTypeFeeDelegatedValueTransferMemoWithRatio is accepted only if `to` is an externally owned account. To transfer KLAY to a smart contract account, use [TxTypeFeeDelegatedSmartContractExecutionWithRatio](partial-fee-delegation.md#txtypefeedelegatedsmartcontractexecutionwithratio) instead. 次の変更は、このトランザクションタイプによって行われます。

1. The fee payer's balance decreases by the fee ratio of the amount of the transaction fee.
2. The sender's balance decreases by the remaining transaction fee. e.g., If the `feeRatio` is 30, 30% of the fee will be paid by the fee payer, and the remaining 70% of the fee will be paid by the sender.k
3. 送信者のノンスは一つずつ増加します。
4. `値` KLAYは送信者から受信者に転送される。

### Attributes <a id="attributes"></a>

| Attribute          | Description                                            | タイプ                                                                                                                                            |
|:------------------ |:------------------------------------------------------ |:---------------------------------------------------------------------------------------------------------------------------------------------- |
| タイプ                | uint8 \(Go\)                                         | The type of TxTypeFeeDelegatedValueTransferMemoWithRatio. This must be 0x12.                                                                   |
| nonce              | uint64 \(Go\)                                        | 送信者のトランザクションを一意に識別するために使用される値。 同じノンスを持つ2つのトランザクションが送信者によって生成された場合、1つだけが実行されます。                                                                 |
| gasPrice           | \*big.Int \(Go\)                                   | 送金者が取引手数料を支払う `ペブ` のガソリン単価。 取引手数料は `gas` \* `gasPrice` として計算されます。 例えば、取引がガスの10単位を消費し、ガソリン価格が10^18の場合、取引手数料は10KLAYとなります。 KLAYの [単位][] を参照のこと。 |
| ガス                 | uint64 \(Go\)                                        | 取引が許可されるガスの最大使用量。                                                                                                                              |
| to                 | common.address \(Go\)                                | 転送された値を受け取るアカウントアドレス。                                                                                                                          |
| 値                  | \*big.Int \(Go\)                                   | 転送する `peb` 内の KLAYの量。                                                                                                                          |
| from               | common.address \(Go\)                                | 送信者のアドレス 詳細については、 [トランザクションの署名検証][] を参照してください。                                                                                                 |
| input              | \[\]byte \(Go\)                                    | トランザクションに添付されたデータ メッセージはこの属性に渡す必要があります。                                                                                                        |
| 手数料比               | uint8 \(Go\)                                         | 手数料支払者の手数料比率。 The valid range is between 1 and 99. Zero\(0\) is not allowed. 100 and above are not allowed as well.                          |
| txSignatures       | \[\]{\*big.Int, \*big.Int, \*big.Int} \(Go\) | 送信者の署名 詳細については、 [トランザクションの署名検証][] を参照してください。                                                                                                   |
| feePayer           | common.address \(Go\)                                | 手数料支払者の住所                                                                                                                                      |
| feePayerSignatures | \[\]{\*big.Int, \*big.Int, \*big.Int} \(Go\) | 手数料支払者の署名。                                                                                                                                     |

### 送信者の署名のためのRLPエンコーディング <a id="rlp-encoding-for-signature-of-the-sender"></a>

送信者の署名を行うには、次のようにRLPのシリアル化を行う必要があります。

```javascript
SigRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, input, feeRatio]), chainid, 0, 0])
SigHash = keccak256(SigRLP)
Signature = sign(SigHash, <the sender's private key>)
```

### 手数料支払者の署名のためのRLPエンコーディング <a id="rlp-encoding-for-signature-of-the-fee-payer"></a>

手数料支払者の署名を行うには、次のようにRLPのシリアル化を行う必要があります。

```javascript
SigFeePayerRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, input, feeRatio]), feePayer, chainid, 0, 0])
SigFeePayerHash = keccak256(SigFeePayerRLP)
SignatureFeePayer = sign(SigFeePayerHash, <the fee payer's private key>)
```

### SenderTxHashのためのRLPエンコード <a id="rlp-encoding-for-sendertxhash"></a>

SenderTxHashを作るには、次のようにRLPのシリアル化を行う必要があります。

```javascript
txSignatures (a single signature) = [[v, r, s]]
txSignatures (two signatures) = [[v1, r1, s1], [v2, r2, s2]]
SenderTxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, feeRatio, txSignatures])
SenderTxHash = keccak256(SenderTxHashRLP)
```

### トランザクションハッシュ用のRLPエンコーディング <a id="rlp-encoding-for-transaction-hash"></a>

トランザクションハッシュを生成するには、次のようにRLPのシリアル化を行う必要があります。

```javascript
txSignatures (a single signature) = [[v, r, s]]
txSignatures (two signatures) = [[v1, r1, s1], [v2, r2, s2]]
feePayerSignatures (a single signature) = [[v, r, s]]
feePayerSignatures (two signatures) = [[v1, r1, s1], [v2, r2, s2]]
TxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, feeRatio, txSignatures, feePayer, feePayerSignatures])
TxHash = keccak256(TxHashRLP)
```

### RLP Encoding \(Example\) <a id="rlp-encoding-example"></a>

以下に、RLPシリアル化とトランザクションオブジェクトの結果を示します。

```javascript
ChainID 0x1
PrivateKey 0x45a915e4d060149eb4365960e6a7a45f334393093061116b197e3240065ff2d8
PublicKey.X 0x3a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33d
PublicKey.Y 0x8072e77939dc03ba44790779b7a1025baf3003f6732430e20cd9b76d953391b3
SigRLP 0xf842b83df83b128204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0b8568656c6c6f1e018080
SigHash 0x50eef45abe0743dce17e40db185d1d85607245a545f7517a52b90f3673aff689
Signature f845f84326a0769f0afdc310289f9b24decb5bb765c8d7a87a6a4ae28edffb8b7085bbd9bc78a06a7b970eea026e60ac29bb52aee10661a4222e6bdcdfb3839a80586e584586b4
FeePayerPrivateKey 0xb9d5558443585bca6f225b935950e3f6e69f9da8a5809a83f51c3365dff53936
FeePayerPublicKey.X 0x327434d4cfc66ef8857d431419e9deebdc53a3e415edcc55382e2d417b8dd102
FeePayerPublicKey.Y 0x65fc97045707faf7b8f81ac65089d4cc71f69ad0bf1bc8559bc24f13fc284ced
SigRLPFeePayer 0xf857b83df83b128204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0b8568656c6c6f1e945a0043070275d9f6054307ee7348bd660849d90f018080
SigHashFeePayer 0x09583a871c38a4860e336bfa5f16003feec75e710cfd9186c37892cee7d9775b
SignatureFeePayer f845f84325a0c1c54bdc72ce7c08821329bf50542535fac74f4bba5de5b7881118a461d52834a03a3a64878d784f9af91c2e3ab9c90f17144c47cfd9951e3588c75063c0649ecd
TxHashRLP 0x12f8dd8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0b8568656c6c6f1ef845f84326a0769f0afdc310289f9b24decb5bb765c8d7a87a6a4ae28edffb8b7085bbd9bc78a06a7b970eea026e60ac29bb52aee10661a4222e6bdcdfb3839a80586e584586b4945a0043070275d9f6054307ee7348bd660849d90ff845f84325a0c1c54bdc72ce7c08821329bf50542535fac74f4bba5de5b7881118a461d52834a03a3a64878d784f9af91c2e3ab9c90f17144c47cfd9951e3588c75063c0649ecd
TxHash abcb0fd8ebb8f62ac899e5211b9ba47fe948a8efd815229cc4ed9cd781464f15
SenderTxHashRLP 0x12f87b8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0b1ef845f84326a0769f0afdc310289f9b24decb5bb765c8d7a87a6a4ae28edffb8b7085bbd9bc78a06a7b970eea026e60ac29bb52aee10661a4222e6bdcdfb3839a80586e584586b4
SenderTxHash 2c4e8cd3c68a4aacae51c695e857cfc1a019037ca71d8cd1e8ca56ec4eaf55b1

    TX(abcb0fd8ebb8f62ac899e5211b9ba47fe948a8efd815229cc4ed9cd781464f15)
    Type:          TxTypeFeeDelegatedValueTransferMemoWithRatio
    From:          0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B
    To:            0x7b65B75d204aBed71587c9E519a89277766EE1d0
    Nonce:         1234
    GasPrice:      0x19
    GasLimit:      0xf4240
    Value:         0xa
    Signature:     [{"V":"0x26","R":"0x769f0afdc310289f9b24decb5bb765c8d7a87a6a4ae28edffb8b7085bbd9bc78","S":"0x6a7b970eea026e60ac29bb52aee10661a4222e6bdcdfb3839a80586e584586b4"}]
    FeePayer:      0x5A0043070275d9f6054307Ee7348bD660849D90f
    FeeRatio:      30
    FeePayerSig:   [{"V":"0x25","R":"0xc1c54bdc72ce7c08821329bf50542535fac74f4bba5de5b7881118a461d52834","S":"0x3a3a64878d784f9af91c2e3ab9c90f17144c47cfd9951e3588c75063c0649ecd"}]
    Data:          36383635366336633666
    Hex:           12f8dd8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0b8568656c6c6f1ef845f84326a0769f0afdc310289f9b24decb5bb765c8d7a87a6a4ae28edffb8b7085bbd9bc78a06a7b970eea026e60ac29bb52aee10661a4222e6bdcdfb3839a80586e584586b4945a0043070275d9f6054307ee7348bd660849d90ff845f84325a0c1c54bdc72ce7c08821329bf50542535fac74f4bba5de5b7881118a461d52834a03a3a64878d784f9af91c2e3ab9c90f17144c47cfd9951e3588c75063c0649ecd
```

### RPC出力 \(Example\) <a id="rpc-output-example"></a>

JSON RPC経由で返されたトランザクションオブジェクトを以下に示します。

```javascript
{
  "blockHash": "0x7ad6ed1f9955be00db8fb5452125f0e9a3c0856abb5b4cc4aed91ffc134321da",
  "blockNumber": "0x1",
  "contractAddress": null,
  "feePayer": "0x029fdce0457db02f05c4be9f67b7115cb8ea15ca",
  "feePayerSignatures": [
    {
      "V": "0x26",
      "R": "0x1f71cc0dee26dce62a987d189650ee62a6751fcde1c7f7915abaf6c0137930da",
      "S": "0x585115c7eecb3a88e3805a90be8cb6458f245029274a781afd2b867579ff73fa"
    }
  ],
  "feeRatio": "0x1e",
  "from": "0x0fcda0f2efbe1b4e61b487701ce4f2f8abc3723d",
  "gas": "0x174876e800",
  "gasPrice": "0x5d21dba00",
  "gasUsed": "0x8e94",
  "input": "0x68656c6c6f",
  "logs": [],
  "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "nonce": "0x6",
  "senderTxHash": "0xe68e9194c5448d17137f00aae392ade4d8a143c1ae4f3c5a2340a332bce009e4",
  "signatures": [
    {
      "V": "0x25",
      "R": "0x60e5da74cc0f7d73b57dc4b2a5bb7dd05d40757b47febc079e3a43769878abc3",
      "S": "0x68e16f2a7bce21e16cebbe22a3624aa5edd814dd74a70ab8aaf850cd7a4b757f"
    }
  ],
  "status": "0x1",
  "to": "0x75c3098be5e4b63fbac05838daaee378dd48098d",
  "transactionHash": "0xda18ebcf420af8a0a7acf6636711540f71b8bb65bc86e960e6a6bbb665a062f3",
  "transactionIndex": "0x6",
  "type": "TxTypeFeeDelegatedValueTransferMemoWithRatio",
  "typeInt": 18,
  "value": "0x989680"
}
```

## TxTypeFeeDelegatedSmartContractDeployWithRatio <a id="txtypefeedelegatedsmartcontractdeploywithratio"></a>

TxTypeFeeDelegatedSmartContractDeployWithRatio deploys a smart contract. The given ratio of the transaction fee is paid by the fee payer. 次の変更は、このトランザクションタイプによって行われます。

1. The fee payer's balance decreases by the fee ratio of the amount of the transaction fee.
2. The sender's balance decreases by the remaining transaction fee. e.g., If the `feeRatio` is 30, 30% of the fee will be paid by the fee payer, and the remaining 70% of the fee will be paid by the sender.
3. 送信者のノンスは一つずつ増加します。
4. スマートコントラクトは `入力` でコードとともにデプロイされます。 デプロイされたアドレスは、領収書の `contractAddress` を介して返されます。
5. `値` KLAYは送信者から受信者に転送される。

### Attributes <a id="attributes"></a>

| Attribute          | タイプ                                                    | Description                                                                                                                                    |
|:------------------ |:------------------------------------------------------ |:---------------------------------------------------------------------------------------------------------------------------------------------- |
| タイプ                | uint8 \(Go\)                                         | The type of TxTypeFeeDelegatedSmartContractDeployWithRatio. This must be 0x2a.                                                                 |
| nonce              | uint64 \(Go\)                                        | 送信者のトランザクションを一意に識別するために使用される値。 同じノンスを持つ2つのトランザクションが送信者によって生成された場合、1つだけが実行されます。                                                                 |
| gasPrice           | \*big.Int \(Go\)                                   | 送金者が取引手数料を支払う `ペブ` のガソリン単価。 取引手数料は `gas` \* `gasPrice` として計算されます。 例えば、取引がガスの10単位を消費し、ガソリン価格が10^18の場合、取引手数料は10KLAYとなります。 KLAYの [単位][] を参照のこと。 |
| ガス                 | uint64 \(Go\)                                        | 取引が許可されるガスの最大使用量。                                                                                                                              |
| to                 | \*common.address \(Go\)                            | 転送された値を受け取るアカウントアドレス。 現在、この値は nil でなければなりません。 アドレスの指定は今後サポートされる予定です。                                                                           |
| 値                  | \*big.Int \(Go\)                                   | 転送する `peb` 内の KLAYの量。                                                                                                                          |
| from               | common.address \(Go\)                                | 送信者のアドレス 詳細については、 [トランザクションの署名検証][] を参照してください。                                                                                                 |
| input              | \[\]byte \(Go\)                                    | トランザクションの実行に使用されるトランザクションに添付されたデータ。                                                                                                            |
| humanReadable      | bool \(Go\)                                          | 人間が読めるアドレスはまだサポートされていないため、これは偽でなければなりません。 true の場合、トランザクションは拒否されます。                                                                            |
| 手数料比               | uint8 \(Go\)                                         | 手数料支払者の手数料比率。 The valid range is between 1 and 99. Zero\(0\) is not allowed. 100 and above are not allowed as well.                          |
| codeFormat         | uint8 \(Go\)                                         | スマートコントラクトコードのコード形式。 現在サポートされている値は EVM\(0x00\) のみです。                                                                                         |
| txSignatures       | \[\]{\*big.Int, \*big.Int, \*big.Int} \(Go\) | 送信者の署名 詳細については、 [トランザクションの署名検証][] を参照してください。                                                                                                   |
| feePayer           | common.address \(Go\)                                | 手数料支払者の住所                                                                                                                                      |
| feePayerSignatures | \[\]{\*big.Int, \*big.Int, \*big.Int} \(Go\) | 手数料支払者の署名。                                                                                                                                     |

### 送信者の署名のためのRLPエンコーディング <a id="rlp-encoding-for-signature-of-the-sender"></a>

送信者の署名を行うには、次のようにRLPのシリアル化を行う必要があります。

```javascript
SigRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, input, humanReadable, feeRatio, codeFormat]), chainid, 0, 0])
SigHash = keccak256(SigRLP)
Signature = sign(SigHash, <the sender's private key>)
```

### 手数料支払者の署名のためのRLPエンコーディング <a id="rlp-encoding-for-signature-of-the-fee-payer"></a>

手数料支払者の署名を行うには、次のようにRLPのシリアル化を行う必要があります。

```javascript
SigFeePayerRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, input, humanReadable, feeRatio, codeFormat]), feePayer, chainid, 0, 0])
SigFeePayerHash = keccak256(SigFeePayerRLP)
SignatureFeePayer = sign(SigFeePayerHash, <the fee payer's private key>)
```

### SenderTxHashのためのRLPエンコード <a id="rlp-encoding-for-sendertxhash"></a>

SenderTxHashを作るには、次のようにRLPのシリアル化を行う必要があります。

```javascript
txSignatures (a single signature) = [[v, r, s]]
txSignatures (two signatures) = [[v1, r1, s1], [v2, r2, s2]]
SenderTxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, humanReadable, feeRatio, codeFormat, txSignatures])
SenderTxHash = keccak256(SenderTxHashRLP)
```

### トランザクションハッシュ用のRLPエンコーディング <a id="rlp-encoding-for-transaction-hash"></a>

トランザクションハッシュを生成するには、次のようにRLPのシリアル化を行う必要があります。

```javascript
txSignatures (a single signature) = [[v, r, s]]
txSignatures (two signatures) = [[v1, r1, s1], [v2, r2, s2]]
feePayerSignatures (a single signature) = [[v, r, s]]
feePayerSignatures (two signatures) = [[v1, r1, s1], [v2, r2, s2]]
TxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, humanReadable, feeRatio, codeFormat, txSignatures, feePayer, feePayerSignatures])
TxHash = keccak256(TxHashRLP)
```

### RLP Encoding \(Example\) <a id="rlp-encoding-example"></a>

以下に、RLPシリアル化とトランザクションオブジェクトの結果を示します。

```javascript
ChainID 0x1
PrivateKey 0x45a915e4d060149eb4365960e6a7a45f334393093061116b197e3240065ff2d8
PublicKey.X 0x3a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33d
PublicKey.Y 0x8072e77939dc03ba44790779b7a1025baf3003f6732430e20cd9b76d953391b3
SigRLP 0xf90241b9023bf902382a8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0bb901fe608060405234801561001057600080fd5b506101de806100206000396000f3006080604052600436106100615763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631a39d8ef81146100805780636353586b146100a757806370a08231146100ca578063fd6b7ef8146100f8575b3360009081526001602052604081208054349081019091558154019055005b34801561008c57600080fd5b5061009561010d565b60408051918252519081900360200190f35b6100c873ffffffffffffffffffffffffffffffffffffffff60043516610113565b005b3480156100d657600080fd5b5061009573ffffffffffffffffffffffffffffffffffffffff60043516610147565b34801561010457600080fd5b506100c8610159565b60005481565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604081208054349081019091558154019055565b60016020526000908152604090205481565b336000908152600160205260408120805490829055908111156101af57604051339082156108fc029083906000818181858888f193505050501561019c576101af565b3360009081526001602052604090208190555b505600a165627a7a72305820627ca46bb09478a015762806cc00c431230501118c7c26c30ac58c4e09e51c4f0029011e80018080
SigHash 0x000db9e2246975d7242e2fb45279ff42bc0269e544e3b1589ea78e760775cc2c
Signature f845f84326a0cfe8dc29d31916b3f661a4774cb8d44d39ae700a9fb6ca04327f84bbe4de1486a01616e09ced403420cac1363d14e705b7a323518b1ce5124b16f06871c00ac424
FeePayerPrivateKey 0xb9d5558443585bca6f225b935950e3f6e69f9da8a5809a83f51c3365dff53936
FeePayerPublicKey.X 0x327434d4cfc66ef8857d431419e9deebdc53a3e415edcc55382e2d417b8dd102
FeePayerPublicKey.Y 0x65fc97045707faf7b8f81ac65089d4cc71f69ad0bf1bc8559bc24f13fc284ced
SigRLPFeePayer 0xf90256b9023bf902382a8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0bb901fe608060405234801561001057600080fd5b506101de806100206000396000f3006080604052600436106100615763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631a39d8ef81146100805780636353586b146100a757806370a08231146100ca578063fd6b7ef8146100f8575b3360009081526001602052604081208054349081019091558154019055005b34801561008c57600080fd5b5061009561010d565b60408051918252519081900360200190f35b6100c873ffffffffffffffffffffffffffffffffffffffff60043516610113565b005b3480156100d657600080fd5b5061009573ffffffffffffffffffffffffffffffffffffffff60043516610147565b34801561010457600080fd5b506100c8610159565b60005481565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604081208054349081019091558154019055565b60016020526000908152604090205481565b336000908152600160205260408120805490829055908111156101af57604051339082156108fc029083906000818181858888f193505050501561019c576101af565b3360009081526001602052604090208190555b505600a165627a7a72305820627ca46bb09478a015762806cc00c431230501118c7c26c30ac58c4e09e51c4f0029011e80945a0043070275d9f6054307ee7348bd660849d90f018080
SigHashFeePayer 0xedd4031ccfb27867cbd856192cec0a538ab25f6bc632f3075bf7be8368983cea
SignatureFeePayer f845f84325a0e29dae81defc027f059cd6a55ff74156b9c5bdb811460f09fc8d167c01aaaea1a04eba34d4d5ebbce60e4998f03b7a4658263bb21063ddf68ad3b088d670de47c8
TxHashRLP 0x2af902da8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0bb901fe608060405234801561001057600080fd5b506101de806100206000396000f3006080604052600436106100615763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631a39d8ef81146100805780636353586b146100a757806370a08231146100ca578063fd6b7ef8146100f8575b3360009081526001602052604081208054349081019091558154019055005b34801561008c57600080fd5b5061009561010d565b60408051918252519081900360200190f35b6100c873ffffffffffffffffffffffffffffffffffffffff60043516610113565b005b3480156100d657600080fd5b5061009573ffffffffffffffffffffffffffffffffffffffff60043516610147565b34801561010457600080fd5b506100c8610159565b60005481565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604081208054349081019091558154019055565b60016020526000908152604090205481565b336000908152600160205260408120805490829055908111156101af57604051339082156108fc029083906000818181858888f193505050501561019c576101af565b3360009081526001602052604090208190555b505600a165627a7a72305820627ca46bb09478a015762806cc00c431230501118c7c26c30ac58c4e09e51c4f0029011e80f845f84326a0cfe8dc29d31916b3f661a4774cb8d44d39ae700a9fb6ca04327f84bbe4de1486a01616e09ced403420cac1363d14e705b7a323518b1ce5124b16f06871c00ac424945a0043070275d9f6054307ee7348bd660849d90ff845f84325a0e29dae81defc027f059cd6a55ff74156b9c5bdb811460f09fc8d167c01aaaea1a04eba34d4d5ebbce60e4998f03b7a4658263bb21063ddf68ad3b088d670de47c8
TxHash 54b6f267c2dd508ffdd9d41fd6d04847ad975cede8fcd4d5af58ca959c534946
SenderTxHashRLP 0x2af9027e8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0bb901fe608060405234801561001057600080fd5b506101de806100206000396000f3006080604052600436106100615763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631a39d8ef81146100805780636353586b146100a757806370a08231146100ca578063fd6b7ef8146100f8575b3360009081526001602052604081208054349081019091558154019055005b34801561008c57600080fd5b5061009561010d565b60408051918252519081900360200190f35b6100c873ffffffffffffffffffffffffffffffffffffffff60043516610113565b005b3480156100d657600080fd5b5061009573ffffffffffffffffffffffffffffffffffffffff60043516610147565b34801561010457600080fd5b506100c8610159565b60005481565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604081208054349081019091558154019055565b60016020526000908152604090205481565b336000908152600160205260408120805490829055908111156101af57604051339082156108fc029083906000818181858888f193505050501561019c576101af565b3360009081526001602052604090208190555b505600a165627a7a72305820627ca46bb09478a015762806cc00c431230501118c7c26c30ac58c4e09e51c4f0029011e80f845f84326a0cfe8dc29d31916b3f661a4774cb8d44d39ae700a9fb6ca04327f84bbe4de1486a01616e09ced403420cac1363d14e705b7a323518b1ce5124b16f06871c00ac424
SenderTxHash 57dfef9c923cba182cca00fa65d45aaf619613d843d585d3c4026a3bd0797366

    TX(54b6f267c2dd508ffdd9d41fd6d04847ad975cede8fcd4d5af58ca959c534946)
    Type:          TxTypeFeeDelegatedSmartContractDeployWithRatio
    From:          0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B
    To:            0x7b65B75d204aBed71587c9E519a89277766EE1d0
    Nonce:         1234
    GasPrice:      0x19
    GasLimit:      0xf4240
    Value:         0xa
    Data:          363038303630343035323334383031353631303031303537363030303830666435623530363130316465383036313030323036303030333936303030663330303630383036303430353236303034333631303631303036313537363366666666666666663763303130303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303630303033353034313636333161333964386566383131343631303038303537383036333633353335383662313436313030613735373830363337306130383233313134363130306361353738303633666436623765663831343631303066383537356233333630303039303831353236303031363032303532363034303831323038303534333439303831303139303931353538313534303139303535303035623334383031353631303038633537363030303830666435623530363130303935363130313064353635623630343038303531393138323532353139303831393030333630323030313930663335623631303063383733666666666666666666666666666666666666666666666666666666666666666666666666666666663630303433353136363130313133353635623030356233343830313536313030643635373630303038306664356235303631303039353733666666666666666666666666666666666666666666666666666666666666666666666666666666663630303433353136363130313437353635623334383031353631303130343537363030303830666435623530363130306338363130313539353635623630303035343831353635623733666666666666666666666666666666666666666666666666666666666666666666666666666666663136363030303930383135323630303136303230353236303430383132303830353433343930383130313930393135353831353430313930353535363562363030313630323035323630303039303831353236303430393032303534383135363562333336303030393038313532363030313630323035323630343038313230383035343930383239303535393038313131313536313031616635373630343035313333393038323135363130386663303239303833393036303030383138313831383538383838663139333530353035303530313536313031396335373631303161663536356233333630303039303831353236303031363032303532363034303930323038313930353535623530353630306131363536323761376137323330353832303632376361343662623039343738613031353736323830366363303063343331323330353031313138633763323663333061633538633465303965353163346630303239
    HumanReadable: true
    Signature:     [{"V":"0x26","R":"0xcfe8dc29d31916b3f661a4774cb8d44d39ae700a9fb6ca04327f84bbe4de1486","S":"0x1616e09ced403420cac1363d14e705b7a323518b1ce5124b16f06871c00ac424"}]
    FeePayer:      0x5A0043070275d9f6054307Ee7348bD660849D90f
    FeeRatio:      30
    CodeFormat:    CodeFormatEVM
    FeePayerSig:   [{"V":"0x25","R":"0xe29dae81defc027f059cd6a55ff74156b9c5bdb811460f09fc8d167c01aaaea1","S":"0x4eba34d4d5ebbce60e4998f03b7a4658263bb21063ddf68ad3b088d670de47c8"}]
    Hex:           2af902da8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0bb901fe608060405234801561001057600080fd5b506101de806100206000396000f3006080604052600436106100615763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631a39d8ef81146100805780636353586b146100a757806370a08231146100ca578063fd6b7ef8146100f8575b3360009081526001602052604081208054349081019091558154019055005b34801561008c57600080fd5b5061009561010d565b60408051918252519081900360200190f35b6100c873ffffffffffffffffffffffffffffffffffffffff60043516610113565b005b3480156100d657600080fd5b5061009573ffffffffffffffffffffffffffffffffffffffff60043516610147565b34801561010457600080fd5b506100c8610159565b60005481565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604081208054349081019091558154019055565b60016020526000908152604090205481565b336000908152600160205260408120805490829055908111156101af57604051339082156108fc029083906000818181858888f193505050501561019c576101af565b3360009081526001602052604090208190555b505600a165627a7a72305820627ca46bb09478a015762806cc00c431230501118c7c26c30ac58c4e09e51c4f0029011e80f845f84326a0cfe8dc29d31916b3f661a4774cb8d44d39ae700a9fb6ca04327f84bbe4de1486a01616e09ced403420cac1363d14e705b7a323518b1ce5124b16f06871c00ac424945a0043070275d9f6054307ee7348bd660849d90ff845f84325a0e29dae81defc027f059cd6a55ff74156b9c5bdb811460f09fc8d167c01aaaea1a04eba34d4d5ebbce60e4998f03b7a4658263bb21063ddf68ad3b088d670de47c8
```

### RPC出力 \(Example\) <a id="rpc-output-example"></a>

JSON RPC経由で返されたトランザクションオブジェクトを以下に示します。

```javascript
{
  "blockHash": "0x82983fe294d286e76486760e6904369285554e1744af16786c2393a956fb4ec4",
  "blockNumber": "0x2",
  "codeFormat": "0x0",
  "contractAddress": "0x636f6e7472616374332e6b6c6179746e00000000",
  "feePayer": "0x029fdce0457db02f05c4be9f67b7115cb8ea15ca",
  "feePayerSignatures": [
    {
      "V": "0x25",
      "R": "0x9dbd19852ce8d1bc36389c73aa45733ccd2af0186d78952ca2b7bf3828227c02",
      "S": "0x184f60af32203d5abd0e1ac8820887cc96189d4efc1ccddb5fb966e29a07c9cf"
    }
  ],
  "feeRatio": "0x21",
  "from": "0x0fcda0f2efbe1b4e61b487701ce4f2f8abc3723d",
  "gas": "0x174876e800",
  "gasPrice": "0x0",
  "gasUsed": "0xee6e6ed5",
  "humanReadable": true,
  "input": "0x608060405234801561001057600080fd5b506101de806100206000396000f3006080604052600436106100615763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631a39d8ef81146100805780636353586b146100a757806370a08231146100ca578063fd6b7ef8146100f8575b3360009081526001602052604081208054349081019091558154019055005b34801561008c57600080fd5b5061009561010d565b60408051918252519081900360200190f35b6100c873ffffffffffffffffffffffffffffffffffffffff60043516610113565b005b3480156100d657600080fd5b5061009573ffffffffffffffffffffffffffffffffffffffff60043516610147565b34801561010457600080fd5b506100c8610159565b60005481565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604081208054349081019091558154019055565b60016020526000908152604090205481565b336000908152600160205260408120805490829055908111156101af57604051339082156108fc029083906000818181858888f193505050501561019c576101af565b3360009081526001602052604090208190555b505600a165627a7a72305820627ca46bb09478a015762806cc00c431230501118c7c26c30ac58c4e09e51c4f0029",
  "logs": [],
  "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "nonce": "0xc",
  "senderTxHash": "0xe24e58467268601dc5131fb9719ebbb4bed16244af05c37d916a92c98a6a62a5",
  "signatures": [
    {
      "V": "0x26",
      "R": "0xb9497df1dd5c37786570f26745112fb828fb7b6de851bc11562eab77a76462b1",
      "S": "0x6231f2945f01004e68388ad1103cb00fd4f3f8b782667030d99779ecd47d7462"
    }
  ],
  "status": "0x1",
  "to": "0x636f6e7472616374332e6b6c6179746e00000000",
  "transactionHash": "0x32944e85f2255b7ebc1101b136938a758295d57dca1203b997e7ee7873dd9eec",
  "transactionIndex": "0x5",
  "type": "TxTypeFeeDelegatedSmartContractDeployWithRatio",
  "typeInt": 42,
  "value": "0x0"
}
```

## TxTypeFeeDelegatedSmartContractExecutionWithRatio <a id="txtypefeedelegatedsmartcontractexecutionwithratio"></a>

TxTypeFeeDelegatedSmartContractExecutionは、指定されたデータとスマートコントラクトを `入力`で実行します。 TxTypeFeeDelegatedSmartContractExecutionWithRatio is accepted only if `to` is a smart contract account. To transfer KLAY to an externally owned account, use [TxTypeFeeDelegatedValueTransferWithRatio](partial-fee-delegation.md#txtypefeedelegatedvaluetransferwithratio) instead. 次の変更は、このトランザクションタイプによって行われます。

1. `to` がスマートコントラクト口座の場合、コードは `入力` に基づいて実行されます。 そうでなければ、このトランザクションは拒否されます。
2. The fee payer's balance decreases by the fee ratio of the amount of the transaction fee.
3. The sender's balance decreases by the remaining transaction fee. e.g., If the `feeRatio` is 30, 30% of the fee will be paid by the fee payer, and the remaining 70% of the fee will be paid by the sender.
4. 送信者のノンスは一つずつ増加します。
5. `値` が指定された場合、 `値` KLAYは送信者から `から` スマートコントラクトに転送されます。 契約には、KLAYを受け取るための支払い可能なフォールバック機能が必要です。

### Attributes <a id="attributes"></a>

| Attribute          | タイプ                                                    | Description                                                                                                                                    |
|:------------------ |:------------------------------------------------------ |:---------------------------------------------------------------------------------------------------------------------------------------------- |
| タイプ                | uint8 \(Go\)                                         | The type of TxTypeFeeDelegatedSmartContractExecutionWithRatio. This must be 0x32.                                                              |
| nonce              | uint64 \(Go\)                                        | 送信者のトランザクションを一意に識別するために使用される値。 同じノンスを持つ2つのトランザクションが送信者によって生成された場合、1つだけが実行されます。                                                                 |
| gasPrice           | \*big.Int \(Go\)                                   | 送金者が取引手数料を支払う `ペブ` のガソリン単価。 取引手数料は `gas` \* `gasPrice` として計算されます。 例えば、取引がガスの10単位を消費し、ガソリン価格が10^18の場合、取引手数料は10KLAYとなります。 KLAYの [単位][] を参照のこと。 |
| ガス                 | uint64 \(Go\)                                        | 取引が許可されるガスの最大使用量。                                                                                                                              |
| to                 | common.address \(Go\)                                | 実行するスマートコントラクトアカウントのアドレス。                                                                                                                      |
| 値                  | \*big.Int \(Go\)                                   | 転送する `peb` 内の KLAYの量。                                                                                                                          |
| from               | common.address \(Go\)                                | 送信者のアドレス 詳細については、 [トランザクションの署名検証][] を参照してください。                                                                                                 |
| input              | \[\]byte \(Go\)                                    | トランザクションの実行に使用されるトランザクションに添付されたデータ。                                                                                                            |
| 手数料比               | uint8 \(Go\)                                         | 手数料支払者の手数料比率。 The valid range is between 1 and 99. Zero\(0\) is not allowed. 100 and above are not allowed as well.                          |
| txSignatures       | \[\]{\*big.Int, \*big.Int, \*big.Int} \(Go\) | 送信者の署名 詳細については、 [トランザクションの署名検証][] を参照してください。                                                                                                   |
| feePayer           | common.address \(Go\)                                | 手数料支払者の住所                                                                                                                                      |
| feePayerSignatures | \[\]{\*big.Int, \*big.Int, \*big.Int} \(Go\) | 手数料支払者の署名。                                                                                                                                     |

### 送信者の署名のためのRLPエンコーディング <a id="rlp-encoding-for-signature-of-the-sender"></a>

送信者の署名を行うには、次のようにRLPのシリアル化を行う必要があります。

```javascript
SigRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, input, feeRatio]), chainid, 0, 0])
SigHash = keccak256(SigRLP)
Signature = sign(SigHash, <the sender's private key>)
```

### 手数料支払者の署名のためのRLPエンコーディング <a id="rlp-encoding-for-signature-of-the-fee-payer"></a>

手数料支払者の署名を行うには、次のようにRLPのシリアル化を行う必要があります。

```javascript
SigFeePayerRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, input, feeRatio]), feePayer, chainid, 0, 0])
SigFeePayerHash = keccak256(SigFeePayerRLP)
SignatureFeePayer = sign(SigFeePayerHash, <the fee payer's private key>)
```

### SenderTxHashのためのRLPエンコード <a id="rlp-encoding-for-sendertxhash"></a>

SenderTxHashを作るには、次のようにRLPのシリアル化を行う必要があります。

```javascript
txSignatures (a single signature) = [[v, r, s]]
txSignatures (two signatures) = [[v1, r1, s1], [v2, r2, s2]]
SenderTxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, feeRatio, txSignatures])
SenderTxHash = keccak256(SenderTxHashRLP)
```

### トランザクションハッシュ用のRLPエンコーディング <a id="rlp-encoding-for-transaction-hash"></a>

トランザクションハッシュを生成するには、次のようにRLPのシリアル化を行う必要があります。

```javascript
TxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, feeRatio, txSignatures, feePayer, feePayerSignatures])
TxHash = keccak256(TxHashRLP)
```

### RLP Encoding \(Example\) <a id="rlp-encoding-example"></a>

以下に、RLPシリアル化とトランザクションオブジェクトの結果を示します。

```javascript
ChainID 0x1
PrivateKey 0x45a915e4d060149eb4365960e6a7a45f334393093061116b197e3240065ff2d8
PublicKey.X 0x3a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33d
PublicKey.Y 0x8072e77939dc03ba44790779b7a1025baf3003f6732430e20cd9b76d953391b3
SigRLP 0xf861b85cf85a328204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0ba46353586b000000000000000000000000bc5951f055a85f41a3b62fd6f68ab7de76d299b21e018080
SigHash 0x1eeea77acecdd102a070ead80a00f388e039c11d813e6d4a63ec90bd0186b210
Signature f845f84326a074ccfee18dc28932396b85617c53784ee366303bce39a2401d8eb602cf73766fa04c937a5ab9401d2cacb3f39ba8c29dbcd44588cc5c7d0b6b4113cfa7b7d9427b
FeePayerPrivateKey 0xb9d5558443585bca6f225b935950e3f6e69f9da8a5809a83f51c3365dff53936
FeePayerPublicKey.X 0x327434d4cfc66ef8857d431419e9deebdc53a3e415edcc55382e2d417b8dd102
FeePayerPublicKey.Y 0x65fc97045707faf7b8f81ac65089d4cc71f69ad0bf1bc8559bc24f13fc284ced
SigRLPFeePayer 0xf876b85cf85a328204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0ba46353586b000000000000000000000000bc5951f055a85f41a3b62fd6f68ab7de76d299b21e945a0043070275d9f6054307ee7348bd660849d90f018080
SigHashFeePayer 0x8a13f42530219cddb490108e38c48e7b58bc02a82f4d797d8f4d85eb16f6d6a5
SignatureFeePayer f845f84325a04a4997524694d535976d7343c1e3a260f99ba53fcb5477e2b96216ec96ebb565a00f8cb31a35399d2b0fbbfa39f259c819a15370706c0449952c7cfc682d200d7c
TxHashRLP 0x32f8fc8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0ba46353586b000000000000000000000000bc5951f055a85f41a3b62fd6f68ab7de76d299b21ef845f84326a074ccfee18dc28932396b85617c53784ee366303bce39a2401d8eb602cf73766fa04c937a5ab9401d2cacb3f39ba8c29dbcd44588cc5c7d0b6b4113cfa7b7d9427b945a0043070275d9f6054307ee7348bd660849d90ff845f84325a04a4997524694d535976d7343c1e3a260f99ba53fcb5477e2b96216ec96ebb565a00f8cb31a35399d2b0fbbfa39f259c819a15370706c0449952c7cfc682d200d7c
TxHash b204e530f2a7f010d65b6f0f7639d1e9fc8add73e3a0ff1551b11585c36d3bdb
SenderTxHashRLP 0x32f8a08204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0ba46353586b000000000000000000000000bc5951f055a85f41a3b62fd6f68ab7de76d299b21ef845f84326a074ccfee18dc28932396b85617c53784ee366303bce39a2401d8eb602cf73766fa04c937a5ab9401d2cacb3f39ba8c29dbcd44588cc5c7d0b6b4113cfa7b7d9427b
SenderTxHash d5e22319cbf020d422d8ba3a07da9d99b9300826637af85b4e061805dcb2c1b0

    TX(b204e530f2a7f010d65b6f0f7639d1e9fc8add73e3a0ff1551b11585c36d3bdb)
    Type:          TxTypeFeeDelegatedSmartContractExecutionWithRatio
    From:          0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B
    To:            0x7b65B75d204aBed71587c9E519a89277766EE1d0
    Nonce:         1234
    GasPrice:      0x19
    GasLimit:      0xf4240
    Value:         0xa
    Data:          363335333538366230303030303030303030303030303030303030303030303062633539353166303535613835663431613362363266643666363861623764653736643239396232
    Signature:     [{"V":"0x26","R":"0x74ccfee18dc28932396b85617c53784ee366303bce39a2401d8eb602cf73766f","S":"0x4c937a5ab9401d2cacb3f39ba8c29dbcd44588cc5c7d0b6b4113cfa7b7d9427b"}]
    FeePayer:      0x5A0043070275d9f6054307Ee7348bD660849D90f
    FeeRatio:      30
    FeePayerSig:   [{"V":"0x25","R":"0x4a4997524694d535976d7343c1e3a260f99ba53fcb5477e2b96216ec96ebb565","S":"0xf8cb31a35399d2b0fbbfa39f259c819a15370706c0449952c7cfc682d200d7c"}]
    Hex:           32f8fc8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0ba46353586b000000000000000000000000bc5951f055a85f41a3b62fd6f68ab7de76d299b21ef845f84326a074ccfee18dc28932396b85617c53784ee366303bce39a2401d8eb602cf73766fa04c937a5ab9401d2cacb3f39ba8c29dbcd44588cc5c7d0b6b4113cfa7b7d9427b945a0043070275d9f6054307ee7348bd660849d90ff845f84325a04a4997524694d535976d7343c1e3a260f99ba53fcb5477e2b96216ec96ebb565a00f8cb31a35399d2b0fbbfa39f259c819a15370706c0449952c7cfc682d200d7c
```

### RPC出力 \(Example\) <a id="rpc-output-example"></a>

JSON RPC経由で返されたトランザクションオブジェクトを以下に示します。

```javascript
{
  "blockHash": "0x82983fe294d286e76486760e6904369285554e1744af16786c2393a956fb4ec4",
  "blockNumber": "0x2",
  "contractAddress": null,
  "feePayer": "0x029fdce0457db02f05c4be9f67b7115cb8ea15ca",
  "feePayerSignatures": [
    {
      "V": "0x26",
      "R": "0xfd7cbb13af34814ae5072b7078e9d98ca1806859f452c7369c88fed70150ddee",
      "S": "0x6edee3341b62a2ef1488636a9395bc236ebcdfebc76ee3c933d48a65ea89440e"
    }
  ],
  "feeRatio": "0x42",
  "from": "0x0fcda0f2efbe1b4e61b487701ce4f2f8abc3723d",
  "gas": "0x174876e800",
  "gasPrice": "0x0",
  "gasUsed": "0xc444",
  "input": "0x6353586b0000000000000000000000000fcda0f2efbe1b4e61b487701ce4f2f8abc3723d",
  "logs": [],
  "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "nonce": "0xf",
  "senderTxHash": "0x5545f40855ac02770f8738629d2e81bd3d04df3d90bb2b6e676a10e747c0d946",
  "signatures": [
    {
      "V": "0x26",
      "R": "0xaf1fdf0874424ed6d86b1408d24e2dff36046669cf9d99282bec4a50713adfa6",
      "S": "0x20f25bf30b0d906cee734396914a5497076a7f50ce83954b09c9f46415af8f1"
    }
  ],
  "status": "0x1",
  "to": "0x636f6e74726163742e6b6c6179746e0000000000",
  "transactionHash": "0xc4af8d6b3353ad3ad240a747d185a094c6e751373c3c08c669eb37c50f01b7b1",
  "transactionIndex": "0x8",
  "type": "TxTypeFeeDelegatedSmartContractExecutionWithRatio",
  "typeInt": 50,
  "value": "0xa"
}
```

## TxTypeFeeDelegatedAccountUpdateWithRatio <a id="txtypefeedelegatedaccountupdatewithratio"></a>

TxTypeFeeDelegatedAccountUpdateWithRatio updates the key of the given account. The given ratio of the transaction fee is paid by the fee payer. 次の変更は、このトランザクションタイプによって行われます。

1. The fee payer's balance decreases by the fee ratio of the amount of the transaction fee.
2. The sender's balance decreases by the remaining transaction fee. e.g., If the `feeRatio` is 30, 30% of the fee will be paid by the fee payer, and the remaining 70% of the fee will be paid by the sender.
3. 送信者のノンスは一つずつ増加します。
4. アカウントのキーは `キー` で更新されます。
5. Transactions sent from the account afterward will be validated with this `key`, once this transaction is executed.

### Attributes <a id="attributes"></a>

| Attribute          | タイプ                                                    | Description                                                                                                                                            |
|:------------------ |:------------------------------------------------------ |:------------------------------------------------------------------------------------------------------------------------------------------------------ |
| タイプ                | uint8 \(Go\)                                         | The type of TxTypeFeeDelegatedAccountUpdateWithRatio. This must be 0x22.                                                                               |
| nonce              | uint64 \(Go\)                                        | 送信者のトランザクションを一意に識別するために使用される値。 同じノンスを持つ2つのトランザクションが送信者によって生成された場合、1つだけが実行されます。                                                                         |
| gasPrice           | \*big.Int \(Go\)                                   | 送信者がトークンで支払う金額を取得する倍数。 送信者が支払うトークンの金額は、 `ガス` \* `gasPrice` で計算されます。 例えば、ガスが10でgasPriceが10^18の場合、送信者はトランザクション手数料として10KLAYを支払います。 KLAYの [単位][] を参照のこと。 |
| ガス                 | uint64 \(Go\)                                        | 取引が使用できる取引手数料の最大額です。                                                                                                                                   |
| from               | common.address \(Go\)                                | 送信者のアドレス 詳細については、 [トランザクションの署名検証][] を参照してください。                                                                                                         |
| キー                 | AccountKey \(Go\)                                    | [AccountKey][] は、アカウントに更新されます。                                                                                                                         |
| 手数料比               | uint8 \(Go\)                                         | 手数料支払者の手数料比率。 The valid range is between 1 and 99. Zero\(0\) is not allowed. 100 and above are not allowed as well.                                  |
| txSignatures       | \[\]{\*big.Int, \*big.Int, \*big.Int} \(Go\) | 送信者の署名 詳細については、 [トランザクションの署名検証][] を参照してください。                                                                                                           |
| feePayer           | common.address \(Go\)                                | 手数料支払者の住所                                                                                                                                              |
| feePayerSignatures | \[\]{\*big.Int, \*big.Int, \*big.Int} \(Go\) | 手数料支払者の署名。                                                                                                                                             |

### 送信者の署名のためのRLPエンコーディング <a id="rlp-encoding-for-signature-of-the-sender"></a>

送信者の署名を行うには、次のようにRLPのシリアル化を行う必要があります。

```javascript
SigRLP = encode([encode([type, nonce, gasPrice, gas, from, rlpEncodedKey, feeRatio]), chainid, 0, 0])
SigHash = keccak256(SigRLP)
Signature = sign(SigHash, <the sender's private key>)
```

### 手数料支払者の署名のためのRLPエンコーディング <a id="rlp-encoding-for-signature-of-the-fee-payer"></a>

手数料支払者の署名を行うには、次のようにRLPのシリアル化を行う必要があります。

```javascript
SigFeePayerRLP = encode([encode([type, nonce, gasPrice, gas, from, rlpEncodedKey, feeRatio]), feePayer, chainid, 0, 0])
SigFeePayerHash = keccak256(SigFeePayerRLP)
SignatureFeePayer = sign(SigFeePayerHash, <the fee payer's private key>)
```

### SenderTxHashのためのRLPエンコード <a id="rlp-encoding-for-sendertxhash"></a>

SenderTxHashを作るには、次のようにRLPのシリアル化を行う必要があります。

```javascript
txSignatures (a single signature) = [[v, r, s]]
txSignatures (two signatures) = [[v1, r1, s1], [v2, r2, s2]]
SenderTxHashRLP = type + encode([nonce, gasPrice, gas, from, rlpEncodedKey, feeRatio, txSignatures])
SenderTxHash = keccak256(SenderTxHashRLP)
```

### トランザクションハッシュ用のRLPエンコーディング <a id="rlp-encoding-for-transaction-hash"></a>

トランザクションハッシュを生成するには、次のようにRLPのシリアル化を行う必要があります。

```javascript
txSignatures (a single signature) = [[v, r, s]]
txSignatures (two signatures) = [[v1, r1, s1], [v2, r2, s2]]
feePayerSignatures (a single signature) = [[v, r, s]]
feePayerSignatures (two signatures) = [[v1, r1, s1], [v2, r2, s2]]
TxHashRLP = type + encode([nonce, gasPrice, gas, from, rlpEncodedKey, feeRatio, txSignatures, feePayer, feePayerSignatures])
TxHash = keccak256(TxHashRLP)
```

### RLP Encoding \(Example\) <a id="rlp-encoding-example"></a>

以下に、RLPシリアル化とトランザクションオブジェクトの結果を示します。

```javascript
ChainID 0x1
PrivateKey 0x45a915e4d060149eb4365960e6a7a45f334393093061116b197e3240065ff2d8
PublicKey.X 0x3a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33d
PublicKey.Y 0x8072e77939dc03ba44790779b7a1025baf3003f6732430e20cd9b76d953391b3
SigRLP 0xf84ab845f843228204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0ba302a1033a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33d1e018080
SigHash 0x706ba7cd01e44008077a2abeafc3aacd64cbf210f49c64983f295a2e4cc03216
Signature f845f84326a00e5929f96dec2b41343a9e6f0150eef08741fe7dcece88cc5936c49ed19051dca05a07b07017190e0baba32bdf6352f5a358a2798ed3c56e704a63819b87cf8e3f
FeePayerPrivateKey 0xb9d5558443585bca6f225b935950e3f6e69f9da8a5809a83f51c3365dff53936
FeePayerPublicKey.X 0x327434d4cfc66ef8857d431419e9deebdc53a3e415edcc55382e2d417b8dd102
FeePayerPublicKey.Y 0x65fc97045707faf7b8f81ac65089d4cc71f69ad0bf1bc8559bc24f13fc284ced
SigRLPFeePayer 0xf85fb845f843228204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0ba302a1033a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33d1e945a0043070275d9f6054307ee7348bd660849d90f018080
SigHashFeePayer 0xd2a51cefec667747890e6bd11fd068e8796b5446f77e152367eaa3cf98c96b30
SignatureFeePayer f845f84326a0cf8d102de7c6b0a41d3f02aefb7e419522341734c98af233408298d0c424c04ba00286f89cab4668f728d7c269997116a49b80cec8776fc64e60588a9268571e35
TxHashRLP 0x22f8e58204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0ba302a1033a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33d1ef845f84326a00e5929f96dec2b41343a9e6f0150eef08741fe7dcece88cc5936c49ed19051dca05a07b07017190e0baba32bdf6352f5a358a2798ed3c56e704a63819b87cf8e3f945a0043070275d9f6054307ee7348bd660849d90ff845f84326a0cf8d102de7c6b0a41d3f02aefb7e419522341734c98af233408298d0c424c04ba00286f89cab4668f728d7c269997116a49b80cec8776fc64e60588a9268571e35
TxHash 276f02c25ca4ced081dcfbb836755ced574993b047e648a583ed8d4144b3813f
SenderTxHashRLP 0x22f8898204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0ba302a1033a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33d1ef845f84326a00e5929f96dec2b41343a9e6f0150eef08741fe7dcece88cc5936c49ed19051dca05a07b07017190e0baba32bdf6352f5a358a2798ed3c56e704a63819b87cf8e3f
SenderTxHash e1d87538509549f4a1eb418f986bc53dc77b7eec3b2150f75cd787951d3e4b7f

    TX(276f02c25ca4ced081dcfbb836755ced574993b047e648a583ed8d4144b3813f)
    Type:          TxTypeFeeDelegatedAccountUpdateWithRatio
    From:          0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B
    Nonce:         1234
    GasPrice:      0x19
    GasLimit:      0xf4240
    Key:           AccountKeyPublic: S256Pubkey:{"x":"0x3a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33d","y":"0x8072e77939dc03ba44790779b7a1025baf3003f6732430e20cd9b76d953391b3"}
    Signature:     [{"V":"0x26","R":"0xe5929f96dec2b41343a9e6f0150eef08741fe7dcece88cc5936c49ed19051dc","S":"0x5a07b07017190e0baba32bdf6352f5a358a2798ed3c56e704a63819b87cf8e3f"}]
    FeePayer:      0x5A0043070275d9f6054307Ee7348bD660849D90f
    FeeRatio:      30
    FeePayerSig:   [{"V":"0x26","R":"0xcf8d102de7c6b0a41d3f02aefb7e419522341734c98af233408298d0c424c04b","S":"0x286f89cab4668f728d7c269997116a49b80cec8776fc64e60588a9268571e35"}]
    Hex:           22f8e58204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0ba302a1033a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33d1ef845f84326a00e5929f96dec2b41343a9e6f0150eef08741fe7dcece88cc5936c49ed19051dca05a07b07017190e0baba32bdf6352f5a358a2798ed3c56e704a63819b87cf8e3f945a0043070275d9f6054307ee7348bd660849d90ff845f84326a0cf8d102de7c6b0a41d3f02aefb7e419522341734c98af233408298d0c424c04ba00286f89cab4668f728d7c269997116a49b80cec8776fc64e60588a9268571e35
```

### RPC出力 \(Example\) <a id="rpc-output-example"></a>

JSON RPC経由で返されたトランザクションオブジェクトを以下に示します。

```javascript
{
  "blockHash": "0x82983fe294d286e76486760e6904369285554e1744af16786c2393a956fb4ec4",
  "blockNumber": "0x2",
  "contractAddress": null,
  "feePayer": "0x0fcda0f2efbe1b4e61b487701ce4f2f8abc3723d",
  "feePayerSignatures": [
    {
      "V": "0x25",
      "R": "0xfa3690925bae82ba662abe6d3af8993b7a7994d9f922cb1ae83c59c4a26a3b70",
      "S": "0x2bd481ddf40cb813dde5f67db0e3a6ad9ea46758ef97580a709b301c21530246"
    }
  ],
  "feeRatio": "0xb",
  "from": "0x636f6c696e332e6b6c6179746e00000000000000",
  "gas": "0x174876e800",
  "gasPrice": "0x5d21dba00",
  "gasUsed": "0xdac0",
  "key": "0x02a102c8785266510368d9372badd4c7f4a94b692e82ba74e0b5e26b34558b0f081447",
  "logs": [],
  "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "nonce": "0x0",
  "senderTxHash": "0x74be8f01f10a497dbe9ed10659ac8c4579b37f8b5022b9f7eec6362262d44845",
  "signatures": [
    {
      "V": "0x25",
      "R": "0xd17d2ae2290b35c560289797c955fa5dc1cc25606cfd198584665917da6795ff",
      "S": "0x7bc0450ff7319ccdbf50d38095501b895717cac775c6897d2381e7182aa25742"
    }
  ],
  "status": "0x1",
  "transactionHash": "0x90ccbf85ffd1f7e74620840fd9d270e030c6719e3c7b70bb8796c1cedf02fe88",
  "transactionIndex": "0x1",
  "type": "TxTypeFeeDelegatedAccountUpdateWithRatio",
  "typeInt": 34
}
```

## TxTypeFeeDelegatedCancelWithRatio <a id="txtypefeedelegatedcancelwithratio"></a>

TxTypeFeeDelegatedCancelWithRatio cancels the execution of the transaction with the same nonce in the transaction pool. 詳細については、 [TxTypeCancel](basic.md#txtypecancel) を参照してください。

次の変更は、このトランザクションタイプによって適用されます。 1. The fee payer's balance decreases by the given fee ratio of the amount of the transaction fee. 2. The sender's balance decreases by the remaining transaction fee. 3. 送信者のノンスは一つずつ増加します。

### Attributes <a id="attributes"></a>

| Attribute          | Description                                            | タイプ                                                                                                                                            |
|:------------------ |:------------------------------------------------------ |:---------------------------------------------------------------------------------------------------------------------------------------------- |
| タイプ                | uint8 \(Go\)                                         | The type of TxTypeFeeDelegatedCancelWithRatio. This must be 0x3a.                                                                              |
| nonce              | uint64 \(Go\)                                        | 送信者のトランザクションを一意に識別するために使用される値。 同じノンスを持つ2つのトランザクションが送信者によって生成された場合、1つだけが実行されます。                                                                 |
| gasPrice           | \*big.Int \(Go\)                                   | 送金者が取引手数料を支払う `ペブ` のガソリン単価。 取引手数料は `gas` \* `gasPrice` として計算されます。 例えば、取引がガスの10単位を消費し、ガソリン価格が10^18の場合、取引手数料は10KLAYとなります。 KLAYの [単位][] を参照のこと。 |
| ガス                 | uint64 \(Go\)                                        | 取引が使用できる取引手数料の最大額です。                                                                                                                           |
| from               | common.address \(Go\)                                | 送信者のアドレス 詳細については、 [トランザクションの署名検証][] を参照してください。                                                                                                 |
| 手数料比               | uint8 \(Go\)                                         | 手数料支払者の手数料比率。 The valid range is between 1 and 99. Zero\(0\) is not allowed. 100 and above are not allowed as well.                          |
| txSignatures       | \[\]{\*big.Int, \*big.Int, \*big.Int} \(Go\) | 送信者の署名 詳細については、 [トランザクションの署名検証][] を参照してください。                                                                                                   |
| feePayer           | common.address \(Go\)                                | 手数料支払者の住所                                                                                                                                      |
| feePayerSignatures | \[\]{\*big.Int, \*big.Int, \*big.Int} \(Go\) | 手数料支払者の署名。                                                                                                                                     |

### 送信者の署名のためのRLPエンコーディング <a id="rlp-encoding-for-signature-of-the-sender"></a>

送信者の署名を行うには、次のようにRLPのシリアル化を行う必要があります。

```javascript
SigRLP = encode([encode([type, nonce, gasPrice, gas, from, feeRatio]), chainid, 0, 0])
SigHash = keccak256(SigRLP)
Signature = sign(SigHash, <the sender's private key>)
```

### 手数料支払者の署名のためのRLPエンコーディング <a id="rlp-encoding-for-signature-of-the-fee-payer"></a>

手数料支払者の署名を行うには、次のようにRLPのシリアル化を行う必要があります。

```javascript
SigFeePayerRLP = encode([encode([type, nonce, gasPrice, gas, from, feeRatio]), feePayer, chainid, 0, 0])
SigFeePayerHash = keccak256(SigFeePayerRLP)
SignatureFeePayer = sign(SigFeePayerHash, <the fee payer's private key>)
```

### SenderTxHashのためのRLPエンコード <a id="rlp-encoding-for-sendertxhash"></a>

SenderTxHashを作るには、次のようにRLPのシリアル化を行う必要があります。

```javascript
txSignatures (a single signature) = [[v, r, s]]
txSignatures (two signatures) = [[v1, r1, s1], [v2, r2, s2]]
SenderTxHashRLP = type + encode([nonce, gasPrice, gas, from, feeRatio, txSignatures])
SenderTxHash = keccak256(SenderTxHashRLP)
```

### トランザクションハッシュ用のRLPエンコーディング <a id="rlp-encoding-for-transaction-hash"></a>

トランザクションハッシュを生成するには、次のようにRLPのシリアル化を行う必要があります。

```javascript
txSignatures (a single signature) = [[v, r, s]]
txSignatures (two signatures) = [[v1, r1, s1], [v2, r2, s2]]
feePayerSignatures (a single signature) = [[v, r, s]]
feePayerSignatures (two signatures) = [[v1, r1, s1], [v2, r2, s2]]
TxHashRLP = type + encode([nonce, gasPricke, gas, from, feeRatio, txSignatures, feePayer, feePayerSignatures])
TxHash = keccak256(TxHashRLP)
```

### RLP Encoding \(Example\) <a id="rlp-encoding-example"></a>

以下に、RLPシリアル化とトランザクションオブジェクトの結果を示します。

```javascript
ChainID 0x1
PrivateKey 0x45a915e4d060149eb4365960e6a7a45f334393093061116b197e3240065ff2d8
PublicKey.X 0x3a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33d
PublicKey.Y 0x8072e77939dc03ba44790779b7a1025baf3003f6732430e20cd9b76d953391b3
SigRLP 0xe4a0df3a8204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0b1e018080
SigHash 0xeccd1585e8e105bc034a72190c3e9312b5407736686aa0d34b1ad75320871014
Signature f845f84326a072efa47960bef40b536c72d7e03ceaf6ca5f6061eb8a3eda3545b1a78fe52ef5a062006ddaf874da205f08b3789e2d014ae37794890fc2e575bf75201563a24ba9
FeePayerPrivateKey 0xb9d5558443585bca6f225b935950e3f6e69f9da8a5809a83f51c3365dff53936
FeePayerPublicKey.X 0x327434d4cfc66ef8857d431419e9deebdc53a3e415edcc55382e2d417b8dd102
FeePayerPublicKey.Y 0x65fc97045707faf7b8f81ac65089d4cc71f69ad0bf1bc8559bc24f13fc284ced
SigRLPFeePayer 0xf839a0df3a8204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0b1e945a0043070275d9f6054307ee7348bd660849d90f018080
SigHashFeePayer 0xf71b0b22d72ef59a063a865ee844e1ba0a103d707f06fb7013b3372ed169c705
SignatureFeePayer f845f84326a06ba5ef20c3049323fc94defe14ca162e28b86aa64f7cf497ac8a5520e9615614a04a0a0fc61c10b416759af0ce4ce5c09ca1060141d56d958af77050c9564df6bf
TxHashRLP 0x3af8c18204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0b1ef845f84326a072efa47960bef40b536c72d7e03ceaf6ca5f6061eb8a3eda3545b1a78fe52ef5a062006ddaf874da205f08b3789e2d014ae37794890fc2e575bf75201563a24ba9945a0043070275d9f6054307ee7348bd660849d90ff845f84326a06ba5ef20c3049323fc94defe14ca162e28b86aa64f7cf497ac8a5520e9615614a04a0a0fc61c10b416759af0ce4ce5c09ca1060141d56d958af77050c9564df6bf
TxHash 63604ebf68bfee51b2e3f54ddb2f19f9ea72d32b3fc70877324531ecda25817a
SenderTxHashRLP 0x3af8658204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0b1ef845f84326a072efa47960bef40b536c72d7e03ceaf6ca5f6061eb8a3eda3545b1a78fe52ef5a062006ddaf874da205f08b3789e2d014ae37794890fc2e575bf75201563a24ba9
SenderTxHash c0818be4cffbacfe29be1134e0267e10fd1afb6571f4ccc95dcc67a788bab5e7

    TX(63604ebf68bfee51b2e3f54ddb2f19f9ea72d32b3fc70877324531ecda25817a)
    Type:          TxTypeFeeDelegatedCancelWithRatio
    From:          0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B
    Nonce:         1234
    GasPrice:      0x19
    GasLimit:      0xf4240
    Signature:     [{"V":"0x26","R":"0x72efa47960bef40b536c72d7e03ceaf6ca5f6061eb8a3eda3545b1a78fe52ef5","S":"0x62006ddaf874da205f08b3789e2d014ae37794890fc2e575bf75201563a24ba9"}]
    FeePayer:      0x5A0043070275d9f6054307Ee7348bD660849D90f
    FeeRatio:      30
    FeePayerSig:   [{"V":"0x26","R":"0x6ba5ef20c3049323fc94defe14ca162e28b86aa64f7cf497ac8a5520e9615614","S":"0x4a0a0fc61c10b416759af0ce4ce5c09ca1060141d56d958af77050c9564df6bf"}]
    Hex:           3af8c18204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0b1ef845f84326a072efa47960bef40b536c72d7e03ceaf6ca5f6061eb8a3eda3545b1a78fe52ef5a062006ddaf874da205f08b3789e2d014ae37794890fc2e575bf75201563a24ba9945a0043070275d9f6054307ee7348bd660849d90ff845f84326a06ba5ef20c3049323fc94defe14ca162e28b86aa64f7cf497ac8a5520e9615614a04a0a0fc61c10b416759af0ce4ce5c09ca1060141d56d958af77050c9564df6bf
```

### RPC出力 \(Example\) <a id="rpc-output-example"></a>

JSON RPC経由で返されたトランザクションオブジェクトを以下に示します。

```javascript
{
  "blockHash": "0x82983fe294d286e76486760e6904369285554e1744af16786c2393a956fb4ec4",
  "blockNumber": "0x2",
  "contractAddress": null,
  "feePayer": "0x029fdce0457db02f05c4be9f67b7115cb8ea15ca",
  "feePayerSignatures": [
    {
      "V": "0x25",
      "R": "0x26c8b5038e9f7ff580f3323b8a06b6eb1b6ab13cac11c30de6c9b64230bdb992",
      "S": "0x6c4be67ace8551237e675da2b7b32ec2d7d7e07abf2eb299ebec6cc444460e13"
    }
  ],
  "feeRatio": "0x58",
  "from": "0x0fcda0f2efbe1b4e61b487701ce4f2f8abc3723d",
  "gas": "0x174876e800",
  "gasPrice": "0x0",
  "gasUsed": "0x8ca0",
  "logs": [],
  "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "nonce": "0x12",
  "senderTxHash": "0xc9d2f558f6883bfea5113ce900499354fcb0004ff901dec51db7a5d80c3a7868",
  "signatures": [
    {
      "V": "0x26",
      "R": "0x88a484d1cc59824e05b933348df6ebe7b82ac68766a85e2aa5636c136ee2834c",
      "S": "0x104fee953e1a015f26b35da57acf15aa01eb5c6c0e79965200c3fe813003a4fe"
    }
  ],
  "status": "0x1",
  "transactionHash": "0x50c6840fee3297a8ff745025cb4fd27a7e662395620ad615458ea22034f37f6c",
  "transactionIndex": "0xb",
  "type": "TxTypeFeeDelegatedCancelWithRatio",
  "typeInt": 58
}
```

## TxTypeFeeDelegatedChainDataAnchoringWithRatio <a id="txtypefeedelegatedchaindataanchoringwithratio"></a>

TxTypeFeeDelegatedChainDataAnchoringWithRatio is a fee-delegated transaction, with the ratio, that anchors service chain data to the Klaytn mainchain. サービスチェーンは定期的にこの種のトランザクションをKlaytnメインチェーンに送信し、データのセキュリティと信頼性を確保します。 データのアンカーについての詳細は、 [アンカー](../../../node/service-chain/references/anchoring.md) を参照してください。 As it is a fee-delegated transaction with the given ratio as well, the fee payer bears only the given portion of the transaction fee based on the given ratio and the sender pays the rest. RPC経由でこの取引を送信することはできませんのでご注意ください。 現在、このトランザクションはセキュリティ上の理由からプライベートp2pチャネルを介して実行されます。 このトランザクションはKlaytnブロックチェーンの状態を変更しませんが、送信者のnonceが1つ増えています。

### Attributes <a id="attributes"></a>

| Attribute          | タイプ                                                    | Description                                                                                                                                    |
|:------------------ |:------------------------------------------------------ |:---------------------------------------------------------------------------------------------------------------------------------------------- |
| タイプ                | uint8 \(Go\)                                         | The type of TxTypeFeeDelegatedChainDataAnchoringWithRatio. This must be 0x4a.                                                                  |
| nonce              | uint64 \(Go\)                                        | 送信者のトランザクションを一意に識別するために使用される値。 同じノンスを持つ2つのトランザクションが送信者によって生成された場合、1つだけが実行されます。                                                                 |
| gasPrice           | \*big.Int \(Go\)                                   | 送金者が取引手数料を支払う `ペブ` のガソリン単価。 取引手数料は `gas` \* `gasPrice` として計算されます。 例えば、取引がガスの10単位を消費し、ガソリン価格が10^18の場合、取引手数料は10KLAYとなります。 KLAYの [単位][] を参照のこと。 |
| ガス                 | uint64 \(Go\)                                        | 取引が使用できる取引手数料の最大額です。                                                                                                                           |
| from               | common.address \(Go\)                                | 送信者のアドレス 詳細については、 [トランザクションの署名検証](README.md#signature-validation-of-transactions) を参照してください。                                                   |
| 手数料比               | uint8 \(Go\)                                         | 手数料支払者の手数料比率。 The valid range is between 1 and 99. Zero\(0\) is not allowed. 100 and above are not allowed as well.                          |
| input              | \[\]byte \(Go\)                                    | サービスチェーンのデータ。                                                                                                                                  |
| txSignatures       | \[\]{\*big.Int, \*big.Int, \*big.Int} \(Go\) | 送信者の署名 詳細については、 [トランザクションの署名検証](README.md#signature-validation-of-transactions) を参照してください。                                                     |
| feePayer           | common.address \(Go\)                                | 手数料支払者の住所                                                                                                                                      |
| feePayerSignatures | \[\]{\*big.Int, \*big.Int, \*big.Int} \(Go\) | 手数料支払者の署名。                                                                                                                                     |

### 送信者の署名のためのRLPエンコーディング <a id="rlp-encoding-for-signature-of-the-sender"></a>

送信者の署名を行うには、次のようにRLPのシリアル化を行う必要があります。

```javascript
SigRLP = encode([encode([type, nonce, gasPrice, gas, from, anchoredData, feeRatio]), chainid, 0, 0])
SigHash = keccak256(SigRLP)
Signature = sign(SigHash, <private key>)
```

### 手数料支払者の署名のためのRLPエンコーディング <a id="rlp-encoding-for-signature-of-the-fee-payer"></a>

手数料支払者の署名を行うには、次のようにRLPのシリアル化を行う必要があります。

```javascript
SigFeePayerRLP = encode([encode([type, nonce, gasPrice, gas, from, anchoredData, feeRatio]), feePayer, chainid, 0, 0])
SigFeePayerHash = keccak256(SigFeePayerRLP)
SignatureFeePayer = sign(SigFeePayerHash, <the fee payer's private key>)
```

### SenderTxHashのためのRLPエンコード <a id="rlp-encoding-for-sendertxhash"></a>

SenderTxHashを作るには、次のようにRLPのシリアル化を行う必要があります。

```javascript
txSignatures (a single signature) = [[v, r, s]]
txSignatures (two signatures) = [[v1, r1, s1], [v2, r2, s2]]
SenderTxHashRLP = type + encode([nonce, gasPrice, gas, from, anchoredData, feeRatio, txSignatures])
SenderTxHash = keccak256(SenderTxHashRLP)
```

### トランザクションハッシュ用のRLPエンコーディング <a id="rlp-encoding-for-transaction-hash"></a>

トランザクションハッシュを生成するには、次のようにRLPのシリアル化を行う必要があります。

```javascript
txSignatures (a single signature) = [[v, r, s]]
txSignatures (two signatures) = [[v1, r1, s1], [v2, r2, s2]]
feePayerSignatures (a single signature) = [[v, r, s]]
feePayerSignatures (two signatures) = [[v1, r1, s1], [v2, r2, s2]]
TxHashRLP = type + encode([nonce, gasPrice, gas, from, anchoredData, feeRatio, txSignatures, feePayer, feePayerSignatures])
TxHash = keccak256(TxHashRLP)
```

### RLP Encoding \(Example\) <a id="rlp-encoding-example"></a>

以下に、RLPシリアル化とトランザクションオブジェクトの結果を示します。

```javascript
ChainID 0x01
PrivateKey 0x45a915e4d060149eb4365960e6a7a45f334393093061116b197e3240065ff2d8
PublicKey.X 0x3a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33d
PublicKey.Y 0x8072e77939dc03ba44790779b7a1025baf3003f6732430e20cd9b76d953391b3
SigRLP 0xf8dcb8d7f8d54a128505d21dba0085174876e80094a94f5374fce5edbc8e2a8697c15331677e6ebf0bb8aff8ad80b8aaf8a8a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000002a00000000000000000000000000000000000000000000000000000000000000003a0000000000000000000000000000000000000000000000000000000000000000405800658018080
SigHash 0xd79dbb964bee2d3807e214a247141a1fcb066a67de99e90750aac4a2a0b776de
Signature 0xf845f84326a0c612a243bcb3b98958e9cce1a0bc0e170291b33a7f0dbfae4b36dafb5806797da00c734423492ecc21cc53238147c359676fcec43fcc2a0e021d87bb1da49f0abf
FeePayerPrivateKey 0xb9d5558443585bca6f225b935950e3f6e69f9da8a5809a83f51c3365dff53936
FeePayerPublicKey.X 0x327434d4cfc66ef8857d431419e9deebdc53a3e415edcc55382e2d417b8dd102
FeePayerPublicKey.Y 0x65fc97045707faf7b8f81ac65089d4cc71f69ad0bf1bc8559bc24f13fc284ced
SigRLPFeePayer 0xf8f1b8d7f8d54a128505d21dba0085174876e80094a94f5374fce5edbc8e2a8697c15331677e6ebf0bb8aff8ad80b8aaf8a8a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000002a00000000000000000000000000000000000000000000000000000000000000003a00000000000000000000000000000000000000000000000000000000000000004058006589433f524631e573329a550296f595c820d6c65213f018080
SigHashFeePayer 0xa824ff743912239d0665d2fd43a66d57138c92834e9d338b66bcca4a0bee8fbd
SignatureFeePayer 0xf845f84325a0a3e40598b67e2bcbaa48fdd258b9d1dcfcc9cc134972560ba042430078a769a5a06707ea362e588e4e5869cffcd5a058749d823aeff13eb95dc1146faff561df32
TxHashRLP 0x4af90177128505d21dba0085174876e80094a94f5374fce5edbc8e2a8697c15331677e6ebf0bb8aff8ad80b8aaf8a8a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000002a00000000000000000000000000000000000000000000000000000000000000003a0000000000000000000000000000000000000000000000000000000000000000405800658f845f84326a0c612a243bcb3b98958e9cce1a0bc0e170291b33a7f0dbfae4b36dafb5806797da00c734423492ecc21cc53238147c359676fcec43fcc2a0e021d87bb1da49f0abf9433f524631e573329a550296f595c820d6c65213ff845f84325a0a3e40598b67e2bcbaa48fdd258b9d1dcfcc9cc134972560ba042430078a769a5a06707ea362e588e4e5869cffcd5a058749d823aeff13eb95dc1146faff561df32
TxHash 0xc01a7c3ece18c115b58d7747669ec7c31ec5ab031a88cb49ad85a31f6dbbf915
SenderTxHashRLP 0x4af9011b128505d21dba0085174876e80094a94f5374fce5edbc8e2a8697c15331677e6ebf0bb8aff8ad80b8aaf8a8a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000002a00000000000000000000000000000000000000000000000000000000000000003a0000000000000000000000000000000000000000000000000000000000000000405800658f845f84326a0c612a243bcb3b98958e9cce1a0bc0e170291b33a7f0dbfae4b36dafb5806797da00c734423492ecc21cc53238147c359676fcec43fcc2a0e021d87bb1da49f0abf
SenderTxHash 0xa0670c01fe39feb2d2442adf7df1957ade3c5abcde778fb5edf99c80c06aa53c

    TX(c01a7c3ece18c115b58d7747669ec7c31ec5ab031a88cb49ad85a31f6dbbf915)
    Type:          TxTypeFeeDelegatedChainDataAnchoringWithRatio
    From:          0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B
    Nonce:         18
    GasPrice:      0x5d21dba00
    GasLimit:      0x174876e800
    AnchoredData:  f8ad80b8aaf8a8a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000002a00000000000000000000000000000000000000000000000000000000000000003a00000000000000000000000000000000000000000000000000000000000000004058006
    Signature:     [{"V":"0x26","R":"0xc612a243bcb3b98958e9cce1a0bc0e170291b33a7f0dbfae4b36dafb5806797d","S":"0xc734423492ecc21cc53238147c359676fcec43fcc2a0e021d87bb1da49f0abf"}]
    FeePayer:      0x33f524631e573329a550296F595c820D6c65213f
    FeeRatio:      88
    FeePayerSig:   [{"V":"0x25","R":"0xa3e40598b67e2bcbaa48fdd258b9d1dcfcc9cc134972560ba042430078a769a5","S":"0x6707ea362e588e4e5869cffcd5a058749d823aeff13eb95dc1146faff561df32"}]
    Hex:           4af90177128505d21dba0085174876e80094a94f5374fce5edbc8e2a8697c15331677e6ebf0bb8aff8ad80b8aaf8a8a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000002a00000000000000000000000000000000000000000000000000000000000000003a0000000000000000000000000000000000000000000000000000000000000000405800658f845f84326a0c612a243bcb3b98958e9cce1a0bc0e170291b33a7f0dbfae4b36dafb5806797da00c734423492ecc21cc53238147c359676fcec43fcc2a0e021d87bb1da49f0abf9433f524631e573329a550296f595c820d6c65213ff845f84325a0a3e40598b67e2bcbaa48fdd258b9d1dcfcc9cc134972560ba042430078a769a5a06707ea362e588e4e5869cffcd5a058749d823aeff13eb95dc1146faff561df32
```

### RPC出力 \(Example\) <a id="rpc-output-example"></a>

JSON RPC経由で返されたトランザクションオブジェクトを以下に示します。

```javascript
{
    "blockHash": "0xee6c72b7d99019a941b47d77507abe015c3f00d3ff9122a2eec33d846107b842",
    "blockNumber": "0x2",
    "contractAddress": null,
    "feePayer": "0x33f524631e573329a550296f595c820d6c65213f",
    "feePayerSignatures": [
        {
            "V": "0x25",
            "R": "0xa3e40598b67e2bcbaa48fdd258b9d1dcfcc9cc134972560ba042430078a769a5",
            "S": "0x6707ea362e588e4e5869cffcd5a058749d823aeff13eb95dc1146faff561df32"
        }
    ],
    "feeRatio": "0x58",
    "from": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
    "gas": "0x174876e800",
    "gasPrice": "0x5d21dba00",
    "gasUsed": "0xd0fc",
    "input": "0xf8ad80b8aaf8a8a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000002a00000000000000000000000000000000000000000000000000000000000000003a00000000000000000000000000000000000000000000000000000000000000004058006",
    "logs": [],
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "nonce": "0x12",
    "senderTxHash": "0xa0670c01fe39feb2d2442adf7df1957ade3c5abcde778fb5edf99c80c06aa53c",
    "signatures": [
        {
            "V": "0x26",
            "R": "0xc612a243bcb3b98958e9cce1a0bc0e170291b33a7f0dbfae4b36dafb5806797d",
            "S": "0xc734423492ecc21cc53238147c359676fcec43fcc2a0e021d87bb1da49f0abf"
        }
    ],
    "status": "0x1",
    "transactionHash": "0xc01a7c3ece18c115b58d7747669ec7c31ec5ab031a88cb49ad85a31f6dbbf915",
    "transactionIndex": "0xb",
    "type": "TxTypeFeeDelegatedChainDataAnchoringWithRatio",
    "typeInt": 74
}
```

[単位]: ../klaytn-native-coin-klay.md#units-of-klay
[トランザクションの署名検証]: README.md#signature-validation-of-transactions
[AccountKey]: ../accounts.md#account-key
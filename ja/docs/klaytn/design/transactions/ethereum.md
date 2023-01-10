# イーサリアムトランザクションの種類 <a id="ethereum-transaction-types"></a>

KlaytnはEthereum互換性をサポートするラップされたトランザクションタイプを提供します。 KlaytnのEthereumトランザクションタイプは、 `EthereumTxTypeEnvelope`と呼ばれるシングルバイトタイプの区切り文字を除き、Ethereumのデザインと同じ属性とRLPエンコーディングスキームを持っています。 したがって、ユーザーはEthereum開発ツールによって生成されたトランザクションをKlaytnにデプロイすることができます。 ユーザが `eth` 名前空間 API を使用すると、型区切り文字も省略されます。 彼らはEthereumを使っているかのようにKlaytnを使うことができます。 `klay` 名前空間 API を使用します。 ユーザーは、既存のKlaytnトランザクションタイプと混同することなく、KlaytnトランザクションのタイプとしてEthereumフォーマットされたトランザクションをデプロイおよび取得できます。


## EthereumTxTypeEnvelope <a id="ethereumtxtypeenvelope"></a>

EthereumTxTypeEnvelopeはEthereumトランザクションタイプを示す生トランザクション用のシングルバイトプレフィックスです。 Ethereumは [EIP-2718](https://eips.ethereum.org/EIPS/eip-2718) から拡張可能なトランザクション型スキームを採用しており、Klaytn と競合する型番システムを使用しています。 2つの異なるトランザクションタイプのスキーム間の競合を解決するには、 Klaytnは将来のEthereumトランザクションタイプの分離と拡張を可能にする `EthereumTxTypeEnvelope` を導入しました。

`EthereumTxTypeEnvelope` は追加の型区切り文字で、生のトランザクションと型番付けにのみ使用されます。 トランザクションハッシュや署名ハッシュには使用されません。 そのために、EIPで定義されている `EthereumTransactionType` が使用されます。
- EthereumTxTypeEnvelope: `0x78`
- TxHashRLP : EthereumTransactionType || TransactionPayload
- RawTransaction : EthereumTxTypeEnvelope | EthereumTransactionType || TransactionPayload


## TxTypeEthereumAccessList <a id="txtypeethereumaccesslist"></a>

`TxTypeEthereumAccessList` は、 [EIP-2930](https://eips.ethereum.org/EIPS/eip-2930) で指定されたEthereumトランザクションのタイプを表します。 このトランザクションタイプにはアクセスリスト、トランザクションがアクセスするはずのアドレスとストレージキーが含まれています。 このトランザクションタイプは互換性をサポートするために存在するため、 [AccountKeyLegacy] に関連付けられた EOA のみで動作します。 他のアカウント・キー・タイプに関連付けられたEOAは、 `TxTypeValueTransfer`, `TxTypeSmartContractExecution`, などのような他のトランザクション型を使用する必要があります。 このトランザクションタイプは、アカウントの作成、トークンの転送、スマートコントラクトのデプロイ/実行、または前述の混合を行うことができます。

{% hint style="success" %}
注意: Klaytnネットワークは `EthTxTypeCompatibleBlock`の後にこのトランザクションタイプを処理できます。
{% endhint %}

{% hint style="success" %}
注: このトランザクションタイプは、Ethereumトランザクションタイプのフォーマットのみをサポートしています。 [EIP-2930](https://eips.ethereum.org/EIPS/eip-2930)とは異なり、アクセスリストの使用による取引手数料には利点はありません。
{% endhint %}

### Attributes <a id="attributes"></a>

| Attribute  | タイプ                         | Description                                                                                                                                     |
|:---------- |:--------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------- |
| タイプ        | uint8 \(Go\)              | `TxTypeEthereumAccessList` の型は、 `EthereumTxTypeEnvelope` と `EthereumTransactionType` の連結です。 これは0x7801でなければなりません。                                |
| chainId    | \*big.Int \(Go\)        | 宛先チェーンID。                                                                                                                                       |
| nonce      | uint64 \(Go\)             | 送信者のトランザクションを一意に識別するために使用される値。 同じノンスを持つ2つのトランザクションが送信者によって生成された場合、1つだけが実行されます。                                                                  |
| gasPrice   | \*big.Int \(Go\)        | 送信者がトークンで支払う金額を取得する倍数。 送信者が支払うトークンの金額は、 `ガス` \* `gasPrice` で計算されます。 例えば、ガスが10でgasPriceが10^18の場合、送信者はトランザクション手数料として10KLAYを支払います。 format@@0を参照。 |
| ガス         | uint64 \(Go\)             | 取引が使用できる取引手数料の最大額です。                                                                                                                            |
| to         | \*common.address \(Go\) | 転送された値を受け取るアカウントアドレス。                                                                                                                           |
| 値          | \*big.Int \(Go\)        | 転送する `peb` 内の KLAYの量。                                                                                                                           |
| data       | \[\]byte \(Go\)         | トランザクションの実行に使用されるトランザクションに添付されたデータ。                                                                                                             |
| accessList | type.AccessList \(Go\)    | \[\](common.Address, []common.Hash)で構成されるアドレスとストレージキーのリスト。                                                                                    |
| v,r s      | \*big.Int \(Go\)        | 送信者によって生成された暗号署名で、受信者が送信者のアドレスを取得することができます。                                                                                                     |

### 署名用のRLPエンコーディング <a id="rlp-encoding-for-signature"></a>

このトランザクションタイプの署名を作成するには、RLPのシリアル化が次のように進みます。

{% hint style="success" %}
注: このタイプのトランザクションはロンドン署名者と署名する必要があります
{% endhint %}

```javascript
SigRLP = EthereumTransactionType || encode([chainId, nonce, gasPrice, to, value, data, accessList])
SigHash = keccak256(SigRLP)
Signature = sign(Sighash, <private key>)
```

### SenderTxHashのためのRLPエンコード <a id="rlp-encoding-for-sendertxhash"></a>

このトランザクションタイプの `SenderTxHash` を取得するには、次のようにRLPシリアル化が進行します。

```javascript
SenderTxHashRLP = EthereumTransactionType || encode([chainId, nonce, gasPrice, to, value, data, accessList, v, r, s])
SenderTxHash = keckak256(SenderTxHashRLP)
Signature = sign(SenderTxHash, <private key>)
```

### トランザクションハッシュ用のRLPエンコーディング <a id="rlp-encoding-for-transaction-hash"></a>

トランザクションハッシュを生成するには、RLPのシリアル化が次のように進みます。

```javascript
TxHashRLP = EthereumTransactionType || encode([chainId, nonce, gasPrice, gasPrice, to, value, accessList, v, r, s])
TxHash = keckak256(TxHashRLP)
```

### 未加工取引 <a id="raw-transaction"></a>
```javascript
RawTx = EthereumTxTypeEnvelope || EthereumTransactionType || encode([chainId, nonce, gasPrice, gasPrice, to, value, data, accessList, v, r, s])
```

### RLP Encoding \(Example\) <a id="rlp-encoding-example"></a>

以下に、RLPシリアル化とトランザクションオブジェクトの結果を示します。

```javascript
    TX(3a3ab67168de40b1f8a2141a70a4e2f551f90d7814b2fbcb3ac99ad8d8d0b641)
    Contract: false
    Chaind:   0x2
    From:     a94f5374fce5edbc8e2a8697c15331677e6ebf0b
    To:       7b65b75d204abed71587c9e519a89277766ee1d0
    Nonce:    1234
    GasPrice: 0x19
    GasLimit  0xf4240
    Value:    0xa
    Data:     0x31323334
    AccessList: [{0000000000000000000000000000000000000001 [0000000000000000000000000000000000000000000000000000000000000000]}]
    V:        0x1
    R:        0xbfc80a874c43b71b67c68fa5927d1443407f31aef4ec6369bbecdb76fc39b0c0
    S:        0x193e62c1dd63905aee7073958675dcb45d78c716a9a286b54a496e82cb762f26
    Hex:      7801f8a1028204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a8431323334f838f7940000000000000000000000000000000000000001e1a0000000000000000000000000000000000000000000000000000000000000000001a0bfc80a874c43b71b67c68fa5927d1443407f31aef4ec6369bbecdb76fc39b0c0a0193e62c1dd63905aee7073958675dcb45d78c716a9a286b54a496e82cb762f26


```

### RPC出力 \(Example\) <a id="rpc-output-example"></a>

JSON RPC経由で返されたトランザクションオブジェクトを以下に示します。

`eth_getTransactionByHash` の戻り値
```javascript
{
  "blockHash": "0x7bd7e8a92ecaa5781a15a8b6fff589f8ac8a79325b517a1ba5d5f2f3d7af1b00",
  "blockNumber": "0x1c8f4b",
  "from": "0x5618e15ec2916bbe6cf2cce20ce31e61d6062cac",
  "gas": "0x174876e800",
  "gasPrice": "0x5d21dba00",
  "hash": "0x3f67e48c2090f560234f555cd4edf7853b6327aa9a6a795be1efe3f360dac118",
  "input": "0x1122",
  "nonce": "0x11",
  "to": "0x5dce87b5bfcde54023811b168dc97a9f10913957",
  "transactionIndex": "0x0",
  "value": "0x186a0",
  "type": "0x1",
  "accessList": [
      {
          "address": "0x0000000000000000000000000000000000000001",
          "storageKeys": [
              "0x0000000000000000000000000000000000000000000000000000000000000000"
          ]
      }
  ],
  "chainId": "0x2710",
  "v": "0x1",
  "r": "0xebb2d2144293c257e27aaa1d22156f322b0d2d7385257f186c117899d791f174",
  "s": "0x5cea970287c9f0f9754050a552c458c066d8f3b3e4639f561b22ce4cb7553ac0"
}
```

`klay_getTransactionByHashの戻り値`
```javascript
{
  "accessList": [
      {
          "address": "0x0000000000000000000000000000000000000001",
          "storageKeys": [
              "0x0000000000000000000000000000000000000000000000000000000000000000"
          ]
      }
  ],
  "blockHash": "0x7bd7e8a92ecaa5781a15a8b6fff589f8ac8a79325b517a1ba5d5f2f3d7af1b00",
  "blockNumber": "0x1c8f4b",
  "chainID": "0x2710",
  "from": "0x5618e15ec2916bbe6cf2cce20ce31e61d6062cac",
  "gas": "0x174876e800",
  "gasPrice": "0x5d21dba00",
  "hash": "0x3f67e48c2090f560234f555cd4edf7853b6327aa9a6a795be1efe3f360dac118",
  "input": "0x1122",
  "nonce": "0x11",
  "senderTxHash": "0x3f67e48c2090f560234f555cd4edf7853b6327aa9a6a795be1efe3f360dac118",
  "signatures": [
      {
          "V": "0x1",
          "R": "0xebb2d2144293c257e27aaa1d22156f322b0d2d7385257f186c117899d791f174",
          "S": "0x5cea970287c9f0f9754050a552c458c066d8f3b3e4639f561b22ce4cb7553ac0"
      }
  ],
  "to": "0x5dce87b5bfcde54023811b168dc97a9f10913957",
  "transactionIndex": "0x0",
  "type": "TxTypeEthereumAccessList",
  "typeInt": 30721,
  "value": "0x186a0"
}
```


## TxTypeEthereumDynamicFee <a id="txtypeethereumdynamicfee"></a>

`TxTypeEthereumDynamicFee` は、 [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559) で指定されたEthereumトランザクションのタイプを表します。 このトランザクションタイプには、 `gasTipCap` と `gasFeeCap` の代わりに `gasPrice` が含まれます。 このトランザクションタイプは互換性をサポートするために存在するため、 [AccountKeyLegacy] に関連付けられた EOA のみで動作します。 他のアカウント・キー・タイプに関連付けられたEOAは、 `TxTypeValueTransfer`, `TxTypeSmartContractExecution`, などのような他のトランザクション型を使用する必要があります。 このタイプのトランザクションは、アカウント、転送トークン、スマートコントラクトのデプロイ/実行、または前述の混合を作成できます。

{% hint style="success" %}
注意: Klaytnネットワークは `EthTxTypeCompatibleBlock`の後にこのトランザクションタイプを処理できます。
{% endhint %}

{% hint style="success" %}
注:現在、このタイプのトランザクションはEthereumトランザクションタイプのフォーマットのみをサポートしています。 [EIP-2930](https://eips.ethereum.org/EIPS/eip-2930)とは異なり、アクセスリストの使用による取引手数料の面ではメリットはありません。
{% endhint %}

{% hint style="success" %}
注:Klaytnにはガス価格が固定されているため。 `gasTipCap` と `gasFeeCap` は各ネットワークのガス価格を取る必要があります。 文章を書く時点で250ストンです
{% endhint %}

### Attributes <a id="attributes"></a>

| Attribute  | タイプ                         | Description                                                                                                                                                       |
|:---------- |:--------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| タイプ        | uint8 \(Go\)              | `EthereumTxTypeEnvelope` と `EthereumTransactionType` の連結である `TxEthereumDynamicFee`のタイプ。 `0x7802` でなければなりません。                                                      |
| chainId    | \*big.Int \(Go\)        | 宛先チェーンID。                                                                                                                                                         |
| nonce      | uint64 \(Go\)             | 送信者のトランザクションを一意に識別するために使用される値。 同じノンスを持つ2つのトランザクションが送信者によって生成された場合、1つだけが実行されます。                                                                                    |
| gasTipCap  | \*big.Int \(Go\)        | `baseFee` に加えて、送信者が支払う金額を得る倍数。 Klaytnはガス価格が固定されているので、 `gasTipCap` と `gasFeeCap` は各ネットワークのガス価格を取る必要があります。 文章を書く時点で250ストンです                                         |
| gasFeeCap  | \*big.Int \(Go\)        | 送信者がトークンで支払う金額を取得する倍数。 送信者が支払うトークンの金額は、 `ガス` \* `gasFeeCap` で計算されます。 Klaytnはガス価格が固定されているので、 `gasTipCap` と `gasFeeCap` は各ネットワークのガス価格を取る必要があります。 文章を書く時点で250ストンです |
| ガス         | uint64 \(Go\)             | 取引が使用できる取引手数料の最大額です。                                                                                                                                              |
| to         | \*common.address \(Go\) | 転送された値を受け取るアカウントアドレス。                                                                                                                                             |
| 値          | \*big.Int \(Go\)        | 転送する `peb` 内の KLAYの量。                                                                                                                                             |
| data       | \[\]byte \(Go\)         | トランザクションの実行に使用されるトランザクションに添付されたデータ。                                                                                                                               |
| accessList | type.AccessList \(Go\)    | \[\](common.Address, []common.Hash)で構成されるアドレスとストレージキーのリスト。                                                                                                      |
| v,r s      | \*big.Int \(Go\)        | 送信者によって生成された暗号署名で、受信者が送信者のアドレスを取得することができます。                                                                                                                       |

### 署名用のRLPエンコーディング <a id="rlp-encoding-for-signature"></a>

このトランザクションタイプの署名を作成するには、RLPのシリアル化が次のように進みます。

{% hint style="success" %}
注: このタイプのトランザクションはロンドン署名者と署名する必要があります
{% endhint %}

```javascript
SigRLP = EthereumTransactionType || encode([chainId, nonce, gasTipCap, gasFeeCap, gasLimit, to, value, data, accessList])
SigHash = keccak256(SigRLP)
Signature = sign(Sighash, <private key>)
```

### SenderTxHashのためのRLPエンコード <a id="rlp-encoding-for-sendertxhash"></a>

このトランザクションタイプの `SenderTxHash` を取得するには、次のようにRLPシリアル化が進行します。

```javascript
SenderTxHashRLP = EthereumTransactionType || encode([chainId, nonce, gasTipCap, gasFeeCap, gasLimit, to, value, data accessList, v, r, s])
SenderTxHash = kecchak256(SenderTxHashRLP)
Signature = sign(SenderTxHash, <private key>)
```

### トランザクションハッシュ用のRLPエンコーディング <a id="rlp-encoding-for-transaction-hash"></a>

トランザクションハッシュを取得するには、RLPのシリアル化を次のように進めます。

```javascript
TxHashRLP = EthereumTransactionType || encode([chainId, nonce, gasTipCap, gasFeeCap, gasLimit, to, value, data, accessList, v, r, s])
TxHash = keccak256(TxHashRLP)
```

### 未加工取引 <a id="raw-transaction"></a>
```javascript
RawTx = EthereumTxTypeEnvelope || EthereumTransactionType || encode([chainId, nonce, gasTipCap, gasFeeCap, gasLimit, to, value, data, accessList, v, r, s])
```

### RLP Encoding \(Example\) <a id="rlp-encoding-example"></a>

以下に、RLPシリアル化とトランザクションオブジェクトの結果を示します。

```javascript
    TX(be74e122acf00c2f257e8698ecf01140b58b2880de3f24d0875730425eccb45a)
    Contract: false
    Chaind:   0x2
    From:     a94f5374fce5edbc8e2a8697c15331677e6ebf0b
    To:       7b65b75d204abed71587c9e519a89277766ee1d0
    Nonce:    1234
    GasTipCap: 0x19
    GasFeeCap: 0x19
    GasLimit  0xf4240
    Value:    0xa
    Data:     0x31323334
    AccessList: [{0000000000000000000000000000000000000001 [0000000000000000000000000000000000000000000000000000000000000000]}]
    V:        0x0
    R:        0xca14aa0bada2da7ca1b143c16e2dd4a69f2a1e77ce54c7f6d440fe828a777f4f
    S:        0x117f0f78aed398b2995b5ee7c67ace25d52be3c72c1384c2aaa9683b351556
    Hex:      7802f8a1028204d21919830f4240947b65b75d204abed71587c9e519a89277766ee1d00a8431323334f838f7940000000000000000000000000000000000000001e1a0000000000000000000000000000000000000000000000000000000000000000080a0ca14aa0bada2da7ca1b143c16e2dd4a69f2a1e77ce54c7f6d440fe828a777f4f9f117f0f78aed398b2995b5ee7c67ace25d52be3c72c1384c2aaa9683b351556
```

### RPC出力 \(Example\) <a id="rpc-output-example"></a>

JSON RPC経由で返されたトランザクションオブジェクトを以下に示します。

`eth_getTransactionByHash` の戻り値
```javascript
{
  "blockHash": "0x55792fe186e3d1515fe35a68c2c8d7977b2d7db184d80526f906c53222b77833",
  "blockNumber": "0x1c944d",
  "from": "0x5618e15ec2916bbe6cf2cce20ce31e61d6062cac",
  "gas": "0x174876e800",
  "gasPrice": "0x5d21dba00",
  "maxFeePerGas": "0x5d21dba00",
  "maxPriorityFeePerGas": "0x5d21dba00",
  "hash": "0x5db239963029ad9ef6c3331b10ae455638316e330b0efdae2cc1f8e86884e66e",
  "input": "0x1122",
  "nonce": "0x13",
  "to": "0xa0f1633f4c666d7fe5ba912bd5caf03d3655ac31",
  "transactionIndex": "0x0",
  "value": "0x186a0",
  "type": "0x2",
  "accessList": [
      {
          "address": "0x0000000000000000000000000000000000000001",
          "storageKeys": [
              "0x0000000000000000000000000000000000000000000000000000000000000000"
          ]
      }
  ],
  "chainId": "0x2710",
  "v": "0x1",
  "r": "0x27e007cbe79fd8cc9b89dd798bdd5aa62d038273bf006c7c3b40e13a938ab807",
  "s": "0x6209bb328855f02fa2671fecb41efd9f191b03ecab5e580227fa2a0674879384"
}
```

`klay_getTransactionByHashの戻り値`
```javascript
{
  "accessList": [
      {
          "address": "0x0000000000000000000000000000000000000001",
          "storageKeys": [
              "0x0000000000000000000000000000000000000000000000000000000000000000"
          ]
      }
  ],
  "blockHash": "0x55792fe186e3d1515fe35a68c2c8d7977b2d7db184d80526f906c53222b77833",
  "blockNumber": "0x1c944d",
  "chainId": "0x2710",
  "from": "0x5618e15ec2916bbe6cf2cce20ce31e61d6062cac",
  "gas": "0x174876e800",
  "hash": "0x5db239963029ad9ef6c3331b10ae455638316e330b0efdae2cc1f8e86884e66e",
  "input": "0x1122",
  "maxFeePerGas": "0x5d21dba00",
  "maxPriorityFeePerGas": "0x5d21dba00",
  "nonce": "0x13",
  "senderTxHash": "0x5db239963029ad9ef6c3331b10ae455638316e330b0efdae2cc1f8e86884e66e",
  "signatures": [
      {
          "V": "0x1",
          "R": "0x27e007cbe79fd8cc9b89dd798bdd5aa62d038273bf006c7c3b40e13a938ab807",
          "S": "0x6209bb328855f02fa2671fecb41efd9f191b03ecab5e580227fa2a0674879384"
      }
  ],
  "to": "0xa0f1633f4c666d7fe5ba912bd5caf03d3655ac31",
  "transactionIndex": "0x0",
  "type": "TxTypeEthereumDynamicFee",
  "typeInt": 30722,
  "value": "0x186a0"
}
```
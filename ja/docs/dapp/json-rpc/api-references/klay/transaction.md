## klay_call <a id="klay_call"></a>

ブロックチェーン上でトランザクションを作成せずに、すぐに新しいメッセージ呼び出しを実行します。 エラーが発生した場合は、データまたはJSON RPCのエラーオブジェクトを返します。

**パラメータ**

| 名前                | タイプ                             | Description                                                                                                                                        |
| ----------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| callObject        | Object                          | トランザクションコールオブジェクト。  オブジェクトのプロパティについては次の表を参照してください。                                                                                                 |
| blockNumberOrHash | QUANTITY &#124; Tag &#124; Hash | 整数または16進ブロック番号、または文字列 `"forest"`、 ` "latest" ` または `"pending"` `"pending"` [既定のブロックパラメータ](./block.md#the-default-block-parameter)、またはブロックハッシュのように。 |

{% hint style="success" %}
注意: Klaytn v1.7.0 より前のバージョンでは、整数ブロック番号のみが使用できます。 文字列 `"最も早い"` と `"最も遅い"`。
{% endhint %}

`callObject` には以下のプロパティがあります。

| 名前       | タイプ        | Description                                                                              |
| -------- | ---------- | ---------------------------------------------------------------------------------------- |
| from     | 20 バイトのデータ | (オプション) トランザクションが送信されたアドレス。                                                              |
| to       | 20 バイトのデータ | (新しいコントラクトの展開をテストする場合はオプション) トランザクションが指示されるアドレス。                                         |
| ガス       | 品質         | (オプション) トランザクション実行のために提供されるガスの整数。 `klay_call` はガスを消費しませんが、このパラメータはいくつかの実行で必要となる場合があります。  |
| gasPrice | 品質         | (オプション) 有料ガスに使用されるガス価格の整数。                                                               |
| 値        | 品質         | (オプション) このトランザクションで送信された値の整数。                                                            |
| input    | データ        | (オプション) メソッド署名とエンコードされたパラメータのハッシュ。 `data` フィールドを置き換えますが、'data' フィールドは後方互換性のためサポートされています。 |

**戻り値**

| タイプ | Description      |
| --- | ---------------- |
| データ | 実行されたコントラクトの戻り値。 |

コントラクトをデプロイした場合は、 [klay_getTransactionReceipt](#klay_gettransactionreceipt) を使用してコントラクトアドレスを取得します。

**エラー**

何か問題が発生した場合は、JSON RPCのエラーオブジェクトを返します。 例えば、メッセージ "evm: execution reverted" のエラーオブジェクトは、 `REVERT` opcodeでメッセージ呼び出しが終了した場合に生成されます。

**例**

```shell
// Request
curl -H "Content-Type: application/json" --data '{"jsonrpc": "2.0", "method": "klay_call", "params": [{"from": "0x3f71029af4e252b25b9ab999f77182f0cd3bc085", "to": "0x87ac99835e67168d4f9a40580f8f5c33550ba88b", "gas": "0x100000", "gasPrice": "0x5d21dba00", "value": "0x0", "input": "0x8ada066e"}, "latest"], "id": 1}' https://api.baobab.klaytn.net:8651

// Result
{"jsonrpc":"2.0","id":1,"result":"0x000000000000000000000000000000000000000000000000000000000000000a"}
```

## klay_estimateGas <a id="klay_estimategas"></a>

トランザクションが完了するために必要なガス量の見積もりを生成して返します。 トランザクションはブロックチェーンに追加されません。 この推定値は、実際に取引によって使用されるガス量を大きく上回る可能性があることに注意してください。 さまざまな理由で、Klaytn Virtual Machineのメカニクスやノードのパフォーマンスなどがあります。

**パラメータ**

| 名前         | タイプ    | Description                                        |
| ---------- | ------ | -------------------------------------------------- |
| callObject | Object | トランザクションコールオブジェクト。  オブジェクトのプロパティについては次の表を参照してください。 |

`callObject` には以下のプロパティがあります。

| 名前       | タイプ        | Description                                                                              |
| -------- | ---------- | ---------------------------------------------------------------------------------------- |
| from     | 20 バイトのデータ | (オプション) トランザクションが送信されたアドレス。                                                              |
| to       | 20 バイトのデータ | (新しいコントラクトの展開をテストする場合はオプション) トランザクションが指示されるアドレス。                                         |
| ガス       | 品質         | (オプション) ガスの見積もりに提供される上限の整数。 ガス制限が指定されていない場合、Klaytnノードは指定されたガス制限を上限束縛として使用します。            |
| gasPrice | 品質         | (オプション) 有料ガスに使用されるガス価格の整数。                                                               |
| 値        | 品質         | (オプション) このトランザクションで送信された値の整数。                                                            |
| input    | データ        | (オプション) メソッド署名とエンコードされたパラメータのハッシュ。 `data` フィールドを置き換えますが、'data' フィールドは後方互換性のためサポートされています。 |

**戻り値**

| タイプ | Description |
| --- | ----------- |
| 品質  | ガスの使用量。     |


**例**
```shell
// Request
curl -H "Content-Type: application/json" --data '{"jsonrpc": "2.0", "method": "klay_estimateGas", "params": [{"from": "0x3f71029af4e252b25b9ab999f77182f0cd3bc085", "to": "0x87ac99835e67168d4f9a40580f8f5c33550ba88b", "gas": "0x100000", "gasPrice": "0x5d21dba00", "value": "0x0", "input": "0x8ada066e"}], "id": 1}' https://api.baobab.klaytn.net:8651

// Result
{
  "jsonrpc": "2.0","id":1,
  "result": "0x5208" // 21000
}
```

## klay_estimateComputationCost <a id="klay_estimatecomputationcost"></a>

トランザクションの実行に費やされる計算コストの見積もりを生成して返します。 Klaytn はトランザクションの計算コストを `10000000000` に制限しています。 トランザクションは [klay_estimateGas](#klay_estimategas) のようなブロックチェーンには追加されません。

**パラメータ**

すべてのプロパティがオプションであることを除いては、 [klay_call](#klay_call) パラメータを参照してください。 ガス制限が指定されていない場合、Klaytnノードはデフォルトのガス制限(uint64 / 2)を上限束縛として使用します。

**戻り値**

| タイプ | Description |
| --- | ----------- |
| 品質  | 使用される計算量。   |

**例**
```shell
// Request
curl -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"klay_estimateComputationCost","params":[{"from":"0x73718c4980728857f3aa5148e9d1b471efa3a7dd", "to":"0x069942a3ca0dabf495dba872533134205764bc9c", "value":"0x0", "input":"0x2a31efc7000000000000000000000000000000000000000000000000000000000000271000000000000000000000000000000000000000000000000000000000000000420000000000000000000000000000000000000000000000000000000000003039"}, "latest"],"id":1}' https://api.baobab.klaytn.net:8651

// Result
{
  "jsonrpc": "2.0","id":1,
  "result": "0x1e8b0ad"
}
```

## klay_getTransactionByBlockHashAndIndex <a id="klay_gettransactionbyblockhashandindex"></a>

ブロックハッシュとトランザクションインデックスの位置でトランザクションに関する情報を返します。 この API は RPC 呼び出しでのみ動作し、JavaScript コンソールでは動作しません。

**パラメータ**

| タイプ       | Description          |
| --------- | -------------------- |
| 32バイトのデータ | ブロックのハッシュ。           |
| 品質        | トランザクションインデックス位置の整数。 |

**戻り値**

[klay_getTransactionByHash](#klay_gettransactionbyhash) を参照してください

**例**

```shell
// Request
curl -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"klay_getTransactionByBlockHashAndIndex","params":["0x451cafae98d61b7458b5cef54402830941432278184453e3ca490eb687317e68", "0x0"],"id":1}' https://api.baobab.klaytn.net:8651

// Result
{
  "jsonrpc":"2.0",
  "id":1,
  "result":{
    "blockHash":"0x0591ceb74102fc4ed54b66d27e869224d481e9f44170b25ed4a5654675043198",
    "blockNumber":"0x27",
    "from":"0xe02837b9d671e0848e599c374416f383f8910e45",
    "gas":"0xf4240",
    "gasPrice":"0x5d21dba00",
    "hash":"0x451cafae98d61b7458b5cef54402830941432278184453e3ca490eb687317e68",
    "input":"0x",
    "nonce":"0x1",
    "senderTxHash":"0x451cafae98d61b7458b5cef54402830941432278184453e3ca490eb687317e68",
    "signatures":[
      {
        "V":"0xfea",
        "R":"0x1924d0f36e05d368a37b8130b85067f21f0ea1d35b87bf137216cdc3c844c762",
        "S":"0x31d61be4d5cf677e60ad0fa0214e75c3167509c8d8905d7c6f85979b5f32eead"
      }
    ],
    "to":"0x44d827f98430784c8e3401748d8ba92c43df4546",
    "transactionIndex":"0x0",
    "type":"TxTypeLegacyTransaction",
    "typeInt":0,
    "value":"0xde0b6b3a7640000"
  }
}
```


## klay_getTransactionByBlockNumberAndIndex <a id="klay_gettransactionbyblocknumberandindex"></a>

ブロック番号とトランザクションインデックス位置でトランザクションに関する情報を返します。 この API は RPC 呼び出しでのみ動作し、JavaScript コンソールでは動作しません。

**パラメータ**

| タイプ                 | Description                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| QUANTITY &#124; Tag | Integer or hexadecimal block number, or the string `"earliest"`, `"latest"` or `"pending"`  as in the [default block parameter](./block.md#the-default-block-parameter). |
| 品質                  | トランザクションインデックスの位置。                                                                                                                                                       |

{% hint style="success" %}
注意: Klaytn v1.7.0 より前のバージョンでは、整数ブロック番号のみが使用できます。 文字列 `"最も早い"` と `"最も遅い"`。
{% endhint %}

**戻り値**

[klay_getTransactionByHash](#klay_gettransactionbyhash) を参照してください

**例**

```shell
// Request
curl -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"klay_getTransactionByBlockNumberAndIndex","params":["0x27", "0x0"],"id":1}' https://api.baobab.klaytn.net:8651

// Result
{
  "jsonrpc":"2.0",
  "id":1,
  "result":{
    "blockHash":"0x0591ceb74102fc4ed54b66d27e869224d481e9f44170b25ed4a5654675043198",
    "blockNumber":"0x27",
    "from":"0xe02837b9d671e0848e599c374416f383f8910e45",
    "gas":"0xf4240",
    "gasPrice":"0x5d21dba00",
    "hash":"0x451cafae98d61b7458b5cef54402830941432278184453e3ca490eb687317e68",
    "input":"0x",
    "nonce":"0x1",
    "senderTxHash":"0x451cafae98d61b7458b5cef54402830941432278184453e3ca490eb687317e68",
    "signatures":[
      {
        "V":"0xfea",
        "R":"0x1924d0f36e05d368a37b8130b85067f21f0ea1d35b87bf137216cdc3c844c762",
        "S":"0x31d61be4d5cf677e60ad0fa0214e75c3167509c8d8905d7c6f85979b5f32eead"
      }
    ],
    "to":"0x44d827f98430784c8e3401748d8ba92c43df4546",
    "transactionIndex":"0x0",
    "type":"TxTypeLegacyTransaction",
    "typeInt":0,
    "value":"0xde0b6b3a7640000"
  }
}
```


## klay_getTransactionByHash <a id="klay_gettransactionbyhash"></a>

トランザクションハッシュによって要求されたトランザクションに関する情報を返します。 この API は RPC 呼び出しでのみ動作し、JavaScript コンソールでは動作しません。

**パラメータ**

| タイプ       | Description    |
| --------- | -------------- |
| 32バイトのデータ | トランザクションのハッシュ。 |

**戻り値**

`Object` - トランザクションが見つからなかった場合、トランザクションオブジェクト、または `null`。

| 名前                 | タイプ        | Description                                                                                                                                              |
| ------------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| blockHash          | 32バイトのデータ  | このトランザクションがあったブロックのハッシュ。 `保留中の場合は null`                                                                                                                  |
| blockNumber        | 品質         | このトランザクションがあったブロック番号。 `保留中の場合は null`                                                                                                                     |
| codeFormat         | 文字列        | (オプション) スマートコントラクトコードのコード形式。                                                                                                                             |
| feePayer           | 20 バイトのデータ | (オプション) 手数料支払者の住所。                                                                                                                                       |
| feePayerSignatures | 行列         | (オプション) 手数料支払者の署名オブジェクトの配列。 シグネチャオブジェクトには、3 つのフィールド (V, R, S) が含まれます。 VにはECDSAリカバリIDが含まれています。 RにはECDSAシグネチャrが含まれ、SにはECDSAシグネチャsが含まれています。                 |
| 手数料比               | 品質         | (オプション) 手数料支払者の手数料比率。 30%の場合は、手数料の30%が手数料支払者によって支払われます。 70%は送信者が支払います。                                                                                   |
| from               | 20 バイトのデータ | 送信者のアドレス                                                                                                                                                 |
| ガス                 | 品質         | 送信者が提供するガス。                                                                                                                                              |
| gasPrice           | 品質         | ペブ内の送信者によって提供されるガス価格。                                                                                                                                    |
| hash               | 32バイトのデータ  | トランザクションのハッシュ                                                                                                                                            |
| humanReadable      | Boolean    | (オプション) `true` アドレスが humanReadable の場合、 `false` アドレスが humanReadable でない場合。                                                                               |
| キー                 | 文字列        | (オプション) 新しく作成されたアカウントのキー。                                                                                                                                |
| input              | データ        | (オプション) トランザクションとともに送信されるデータ。                                                                                                                            |
| nonce              | 品質         | この前の送信者によって行われたトランザクションの数。                                                                                                                               |
| senderTxHash       | 32バイトのデータ  | 送信者だけが署名したトランザクションのハッシュ。 See [SenderTxHash](../../../../klaytn/design/transactions/README.md#sendertxhash). この値は、手数料が委任されていないトランザクションでは、 `ハッシュ` と常に同じです。 |
| signatures         | 行列         | 署名オブジェクトの配列。 シグネチャオブジェクトには、3 つのフィールド (V, R, S) が含まれます。 VにはECDSAリカバリIDが含まれています。 RにはECDSAシグネチャrが含まれ、SにはECDSAシグネチャsが含まれています。                                |
| to                 | 20 バイトのデータ | 受信者のアドレス。 `null` がコントラクト作成トランザクションの場合。                                                                                                                   |
| transactionIndex   | 品質         | ブロック内のトランザクションインデックス位置の整数。 `保留中の場合は null`                                                                                                                |
| タイプ                | 文字列        | トランザクションのタイプを表す文字列。                                                                                                                                      |
| typeInt            | 品質         | トランザクションのタイプを表す整数。                                                                                                                                       |
| 値                  | 品質         | 値はペブで転送されます。                                                                                                                                             |


**例**

```shell
// Request
curl -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"klay_getTransactionByHash","params":["0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67"],"id":1}' https://api.baobab.klaytn.net:8651

// Result
{
  "jsonrpc":"2.0",
  "id":1,
  "result":{
    "blockHash":"0x4d97cf1f686a925ed4f1ad42c635cedb54974fe23a2941c7825e1ed3163c0e41",
    "blockNumber":"0x7008",
    "feePayer":"0xa9d2cc2bb853163b6eadfb6f962d72f7e00bc2e6",
    "feePayerSignatures":[
      {
        "V":"0x4e44",
        "R":"0xa665e17d92e1c671c8b062cecb19790d49138a21854fc15c460c91035b1884e",
        "S":"0x17165688acc01736f1221a39399e3aac7e1ece14731fcab31631e3e4a59b7441"
      }
    ],
    "from":"0xab0833d744a8943fe3c783f9cc70c13cbd70fcf4",
    "gas":"0xdbba0",
    "gasPrice":"0x5d21dba00",
    "hash":"0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67",
    "nonce":"0x26",
    "senderTxHash":"0x18fe9e1007da7d20aad77778557fb8acc58c80054daba65124c8c843aadd3478",
    "signatures":[
      {
        "V":"0x4e44",
        "R":"0x1b6bb3d996d903d0528565d13e8d9d122b2220ed09c5baf384114193a6977027",
        "S":"0x20c506ce9f1bdd42183c40c44f414a3930f339f856e8be3cfcdf5ca0852fd378"
      }
    ],
    "to":"0x15a9119104e1bf0ec6d408b3cc188685e4402a2c",
    "transactionIndex":"0x0",
    "type":"TxTypeFeeDelegatedValueTransfer",
    "typeInt":9,
    "value":"0x1"
  }
}
```


## klay_getTransactionBySenderTxHash <a id="klay_gettransactionbysendertxhash"></a>

送信者トランザクションハッシュによって要求されたトランザクションに関する情報を返します。 この API は RPC 呼び出しでのみ動作し、JavaScript コンソールでは動作しません。 この API は、インデックス作成機能が `--sendertxhashindexing` によって有効になっている場合にのみ正しい結果を返すことに注意してください。 これは [klay_isSenderTxHashIndexingEnabled](config.md#klay_issendertxhashindexingenabled) で確認できます。

**パラメータ**

| タイプ       | Description                                                                                                 |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| 32バイトのデータ | 送信者だけが署名したトランザクションのハッシュ。 See [SenderTxHash](../../../../klaytn/design/transactions/README.md#sendertxhash). |

**戻り値**

`Object` - トランザクションが見つからなかった場合、トランザクションオブジェクト、または `null`。

| 名前                 | タイプ        | Description                                                                                                                                              |
| ------------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| blockHash          | 32バイトのデータ  | このトランザクションがあったブロックのハッシュ。 `保留中の場合は null`                                                                                                                  |
| blockNumber        | 品質         | このトランザクションがあったブロック番号。 `保留中の場合は null`                                                                                                                     |
| codeFormat         | 文字列        | (オプション) スマートコントラクトコードのコード形式。                                                                                                                             |
| feePayer           | 20 バイトのデータ | 手数料支払者の住所。                                                                                                                                               |
| feePayerSignatures | 行列         | 手数料支払者の署名オブジェクトの配列。 シグネチャオブジェクトには、3 つのフィールド (V, R, S) が含まれます。 VにはECDSAリカバリIDが含まれています。 RにはECDSAシグネチャrが含まれ、SにはECDSAシグネチャsが含まれています。                         |
| 手数料比               | 品質         | (オプション) 手数料支払者の手数料比率。 30%の場合は、手数料の30%が手数料支払者によって支払われます。 70%は送信者が支払います。                                                                                   |
| from               | 20 バイトのデータ | 送信者のアドレス                                                                                                                                                 |
| ガス                 | 品質         | 送信者が提供するガス。                                                                                                                                              |
| gasPrice           | 品質         | ペブ内の送信者によって提供されるガス価格。                                                                                                                                    |
| hash               | 32バイトのデータ  | トランザクションのハッシュ                                                                                                                                            |
| humanReadable      | Boolean    | (オプション) `true` アドレスが humanReadable の場合、 `false` アドレスが humanReadable でない場合。                                                                               |
| キー                 | 文字列        | (オプション) 新しく作成されたアカウントのキー。                                                                                                                                |
| input              | データ        | (オプション) トランザクションとともに送信されるデータ。                                                                                                                            |
| nonce              | 品質         | この前の送信者によって行われたトランザクションの数。                                                                                                                               |
| senderTxHash       | 32バイトのデータ  | 送信者だけが署名したトランザクションのハッシュ。 See [SenderTxHash](../../../../klaytn/design/transactions/README.md#sendertxhash). この値は、手数料が委任されていないトランザクションでは、 `ハッシュ` と常に同じです。 |
| signatures         | 行列         | 署名オブジェクトの配列。 シグネチャオブジェクトには、3 つのフィールド (V, R, S) が含まれます。 VにはECDSAリカバリIDが含まれています。 RにはECDSAシグネチャrが含まれ、SにはECDSAシグネチャsが含まれています。                                |
| to                 | 20 バイトのデータ | 受信者のアドレス。 `null` がコントラクト作成トランザクションの場合。                                                                                                                   |
| transactionIndex   | 品質         | ブロック内のトランザクションインデックス位置の整数。 `保留中の場合は null`                                                                                                                |
| タイプ                | 文字列        | トランザクションのタイプを表す文字列。                                                                                                                                      |
| typeInt            | 品質         | トランザクションのタイプを表す整数。                                                                                                                                       |
| 値                  | 品質         | 値はペブで転送されます。                                                                                                                                             |

**例**

```shell
// Request
curl -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"klay_getTransactionBySenderTxHash","params":["0x18fe9e1007da7d20aad77778557fb8acc58c80054daba65124c8c843aadd3478"],"id":1}' https://api.baobab.klaytn.net:8651

// Result
{
  "jsonrpc":"2.0",
  "id":1,
  "result":{
    "blockHash":"0x4d97cf1f686a925ed4f1ad42c635cedb54974fe23a2941c7825e1ed3163c0e41",
    "blockNumber":"0x7008",
    "feePayer":"0xa9d2cc2bb853163b6eadfb6f962d72f7e00bc2e6",
    "feePayerSignatures":[
      {
        "V":"0x4e44",
        "R":"0xa665e17d92e1c671c8b062cecb19790d49138a21854fc15c460c91035b1884e",
        "S":"0x17165688acc01736f1221a39399e3aac7e1ece14731fcab31631e3e4a59b7441"
      }
    ],
    "from":"0xab0833d744a8943fe3c783f9cc70c13cbd70fcf4",
    "gas":"0xdbba0",
    "gasPrice":"0x5d21dba00",
    "hash":"0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67",
    "nonce":"0x26",
    "senderTxHash":"0x18fe9e1007da7d20aad77778557fb8acc58c80054daba65124c8c843aadd3478",
    "signatures":[
      {
        "V":"0x4e44",
        "R":"0x1b6bb3d996d903d0528565d13e8d9d122b2220ed09c5baf384114193a6977027",
        "S":"0x20c506ce9f1bdd42183c40c44f414a3930f339f856e8be3cfcdf5ca0852fd378"
      }
    ],
    "to":"0x15a9119104e1bf0ec6d408b3cc188685e4402a2c",
    "transactionIndex":"0x0",
    "type":"TxTypeFeeDelegatedValueTransfer",
    "typeInt":9,
    "value":"0x1"
  }
}
```


## klay_getTransactionReceipt <a id="klay_gettransactionreceipt"></a>

トランザクションハッシュによるトランザクションの受領を返します。

**注意**: 保留中の取引ではレシートは利用できません。

**パラメータ**

| 名前   | タイプ       | Description    |
| ---- | --------- | -------------- |
| ハッシュ | 32バイトのデータ | トランザクションのハッシュ。 |

**戻り値**

`Object` - レシートが見つからなかった場合、 `null`

| 名前                 | タイプ                | Description                                                                                                                              |
| ------------------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| blockHash          | 32バイトのデータ          | このトランザクションがあったブロックのハッシュ。                                                                                                                 |
| blockNumber        | 品質                 | この取引があったブロック番号                                                                                                                           |
| codeFormat         | 文字列                | (オプション) スマートコントラクトコードのコード形式。                                                                                                             |
| コントラクトアドレス         | データ                | トランザクションがコントラクト作成であれば、コントラクトアドレスが作成されます。そうでなければ `null` です。                                                                               |
| feePayer           | 20 バイトのデータ         | (オプション) 手数料支払者の住所。                                                                                                                       |
| feePayerSignatures | 行列                 | (オプション) 手数料支払者の署名オブジェクトの配列。 シグネチャオブジェクトには、3 つのフィールド (V, R, S) が含まれます。 VにはECDSAリカバリIDが含まれています。 RにはECDSAシグネチャrが含まれ、SにはECDSAシグネチャsが含まれています。 |
| 手数料比               | 品質                 | (オプション) 手数料支払者の手数料比率。 30%の場合は、手数料の30%が手数料支払者によって支払われます。 70%は送信者が支払います。                                                                   |
| from               | 20 バイトのデータ         | 送信者のアドレス                                                                                                                                 |
| ガス                 | 品質                 | 送信者が提供するガス。                                                                                                                              |
| effectiveGasPrice  | 品質                 | 送信者口座からガス当たりの実際の値が差し引かれます。                                                                                                               |
| gasPrice           | 品質                 | ペブ内の送信者によって提供されるガス価格。                                                                                                                    |
| gasUsed            | 品質                 | この特定の取引だけで使用されるガスの量。                                                                                                                     |
| humanReadable      | Boolean            | (オプション) `true` アドレスが humanReadable の場合、 `false` アドレスが humanReadable でない場合。                                                               |
| キー                 | 文字列                | (オプション) 新しく作成されたアカウントのキー。                                                                                                                |
| input              | データ                | (オプション) トランザクションとともに送信されるデータ。                                                                                                            |
| ログ                 | 行列                 | このトランザクションが生成したログオブジェクトの配列。                                                                                                              |
| logsBloom          | 256バイトのデータ         | ライトクライアントが関連するログをすばやく取得できるようにするためのフィルターをブルームにします。                                                                                        |
| nonce              | 品質                 | この前の送信者によって行われたトランザクションの数。                                                                                                               |
| senderTxHash       | (オプション) 32 バイトのデータ | 手数料支払者のアドレスと署名なしでTXをハッシュします。 この値は、非手数料委任トランザクションの transactionHash の値と常に同じです。                                                             |
| 署名                 | 行列                 | 署名オブジェクトの配列。 シグネチャオブジェクトには、3 つのフィールド (V, R, S) が含まれます。 VにはECDSAリカバリIDが含まれています。 RにはECDSAシグネチャrが含まれ、SにはECDSAシグネチャsが含まれています。                |
| ステータス              | 品質                 | `1` (成功) または `0 0` (失敗).                                                                                                                 |
| txError            | 品質                 | (オプション) `ステータス` が 0 に等しい場合の詳細なエラーコード。                                                                                                    |
| to                 | 20 バイトのデータ         | 受信者のアドレス。 `null` がコントラクト作成トランザクションの場合。                                                                                                   |
| transactionHash    | 32バイトのデータ          | トランザクションのハッシュ                                                                                                                            |
| transactionIndex   | 品質                 | ブロック内のトランザクションインデックス位置の整数。                                                                                                               |
| タイプ                | 文字列                | トランザクションのタイプを表す文字列。                                                                                                                      |
| typeInt            | 品質                 | トランザクションのタイプを表す整数。                                                                                                                       |
| 値                  | 品質                 | 値はペブで転送されます。                                                                                                                             |

**例**

```shell
// Request
curl -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"klay_getTransactionReceipt","params":["0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67"],"id":1}' https://api.baobab.klaytn.net:8651

// Result
{
  "jsonrpc":"2.0",
  "id":1,
  "result":{
    "blockHash":"0x4d97cf1f686a925ed4f1ad42c635cedb54974fe23a2941c7825e1ed3163c0e41",
    "blockNumber":"0x7008",
    "contractAddress":null,
    "feePayer":"0xa9d2cc2bb853163b6eadfb6f962d72f7e00bc2e6",
    "feePayerSignatures":[
      {
        "V":"0x4e44",
        "R":"0xa665e17d92e1c671c8b062cecb19790d49138a21854fc15c460c91035b1884e",
        "S":"0x17165688acc01736f1221a39399e3aac7e1ece14731fcab31631e3e4a59b7441"
      }
    ],
    "effectiveGasPrice":"0x5d21dba00",
    "from":"0xab0833d744a8943fe3c783f9cc70c13cbd70fcf4",
    "gas":"0xdbba0",
    "gasPrice":"0x5d21dba00",
    "gasUsed":"0x7918",
    "logs":[],
    "logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "nonce":"0x26",
    "senderTxHash":"0x18fe9e1007da7d20aad77778557fb8acc58c80054daba65124c8c843aadd3478",
    "signatures":[
      {
        "V":"0x4e44",
        "R":"0x1b6bb3d996d903d0528565d13e8d9d122b2220ed09c5baf384114193a6977027",
        "S":"0x20c506ce9f1bdd42183c40c44f414a3930f339f856e8be3cfcdf5ca0852fd378"
      }
    ],
    "status":"0x1",
    "to":"0x15a9119104e1bf0ec6d408b3cc188685e4402a2c",
    "transactionHash":"0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67",
    "transactionIndex":"0x0",
    "type":"TxTypeFeeDelegatedValueTransfer",
    "typeInt":9,
    "value":"0x1"
  }
}
```


## klay_getTransactionReceiptBySenderTxHash <a id="klay_gettransactionreceiptbysendertxhash"></a>

送信者トランザクションハッシュによるトランザクションの受領を返します。

**注意**: 保留中の取引ではレシートは利用できません。 この API は、インデックス作成機能が `--sendertxhashindexing` によって有効になっている場合にのみ正しい結果を返すことに注意してください。 これは [klay_isSenderTxHashIndexingEnabled](config.md#klay_issendertxhashindexingenabled) で確認できます。

**パラメータ**

| 名前   | タイプ       | Description                                          |
| ---- | --------- | ---------------------------------------------------- |
| ハッシュ | 32バイトのデータ | feePayer(senderTransactionHash)に署名する前のトランザクションのハッシュ。 |

**戻り値**

`Object` - レシートが見つからなかった場合、 `null`

| 名前                 | タイプ                | Description                                                                                                                      |
| ------------------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| blockHash          | 32バイトのデータ          | このトランザクションがあったブロックのハッシュ。                                                                                                         |
| blockNumber        | 品質                 | この取引があったブロック番号                                                                                                                   |
| codeFormat         | 文字列                | (オプション) スマートコントラクトコードのコード形式。                                                                                                     |
| コントラクトアドレス         | データ                | トランザクションがコントラクト作成であれば、コントラクトアドレスが作成されます。そうでなければ `null` です。                                                                       |
| feePayer           | 20 バイトのデータ         | 手数料支払者の住所。                                                                                                                       |
| feePayerSignatures | 行列                 | 手数料支払者の署名オブジェクトの配列。 シグネチャオブジェクトには、3 つのフィールド (V, R, S) が含まれます。 VにはECDSAリカバリIDが含まれています。 RにはECDSAシグネチャrが含まれ、SにはECDSAシグネチャsが含まれています。 |
| 手数料比               | 品質                 | (オプション) 手数料支払者の手数料比率。 30%の場合は、手数料の30%が手数料支払者によって支払われます。 70%は送信者が支払います。                                                           |
| from               | 20 バイトのデータ         | 送信者のアドレス                                                                                                                         |
| ガス                 | 品質                 | 送信者が提供するガス。                                                                                                                      |
| gasPrice           | 品質                 | ペブ内の送信者によって提供されるガス価格。                                                                                                            |
| gasUsed            | 品質                 | この特定の取引だけで使用されるガスの量。                                                                                                             |
| humanReadable      | Boolean            | (オプション) `true` アドレスが humanReadable の場合、 `false` アドレスが humanReadable でない場合。                                                       |
| キー                 | 文字列                | (オプション) 新しく作成されたアカウントのキー。                                                                                                        |
| input              | データ                | (オプション) トランザクションとともに送信されるデータ。                                                                                                    |
| ログ                 | 行列                 | このトランザクションが生成したログオブジェクトの配列。                                                                                                      |
| logsBloom          | 256バイトのデータ         | ライトクライアントが関連するログをすばやく取得できるようにするためのフィルターをブルームにします。                                                                                |
| nonce              | 品質                 | この前の送信者によって行われたトランザクションの数。                                                                                                       |
| senderTxHash       | (オプション) 32 バイトのデータ | 手数料支払者のアドレスと署名なしでTXをハッシュします。 この値は、非手数料委任トランザクションの transactionHash の値と常に同じです。                                                     |
| 署名                 | 行列                 | 署名オブジェクトの配列。 シグネチャオブジェクトには、3 つのフィールド (V, R, S) が含まれます。 VにはECDSAリカバリIDが含まれています。 RにはECDSAシグネチャrが含まれ、SにはECDSAシグネチャsが含まれています。        |
| ステータス              | 品質                 | `1` (成功) または `0 0` (失敗).                                                                                                         |
| txError            | 品質                 | (オプション) `ステータス` が 0 に等しい場合の詳細なエラーコード。                                                                                            |
| to                 | 20 バイトのデータ         | 受信者のアドレス。 `null` がコントラクト作成トランザクションの場合。                                                                                           |
| transactionHash    | 32バイトのデータ          | トランザクションのハッシュ                                                                                                                    |
| transactionIndex   | 品質                 | ブロック内のトランザクションインデックス位置の整数。                                                                                                       |
| タイプ                | 文字列                | トランザクションのタイプを表す文字列。                                                                                                              |
| typeInt            | 品質                 | トランザクションのタイプを表す整数。                                                                                                               |
| 値                  | 品質                 | 値はペブで転送されます。                                                                                                                     |

**例**

```shell
// Request
curl -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"klay_getTransactionReceiptBySenderTxHash","params":["0x18fe9e1007da7d20aad77778557fb8acc58c80054daba65124c8c843aadd3478"],"id":1}' https://api.baobab.klaytn.net:8651

// Result
{
  "jsonrpc":"2.0",
  "id":1,
  "result":{
    "blockHash":"0x4d97cf1f686a925ed4f1ad42c635cedb54974fe23a2941c7825e1ed3163c0e41",
    "blockNumber":"0x7008",
    "contractAddress":null,
    "feePayer":"0xa9d2cc2bb853163b6eadfb6f962d72f7e00bc2e6",
    "feePayerSignatures":[
      {
        "V":"0x4e44",
        "R":"0xa665e17d92e1c671c8b062cecb19790d49138a21854fc15c460c91035b1884e",
        "S":"0x17165688acc01736f1221a39399e3aac7e1ece14731fcab31631e3e4a59b7441"
      }
    ],
    "from":"0xab0833d744a8943fe3c783f9cc70c13cbd70fcf4",
    "gas":"0xdbba0",
    "gasPrice":"0x5d21dba00",
    "gasUsed":"0x7918",
    "logs":[],
    "logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "nonce":"0x26",
    "senderTxHash":"0x18fe9e1007da7d20aad77778557fb8acc58c80054daba65124c8c843aadd3478",
    "signatures":[
      {
        "V":"0x4e44",
        "R":"0x1b6bb3d996d903d0528565d13e8d9d122b2220ed09c5baf384114193a6977027",
        "S":"0x20c506ce9f1bdd42183c40c44f414a3930f339f856e8be3cfcdf5ca0852fd378"
      }
    ],
    "status":"0x1",
    "to":"0x15a9119104e1bf0ec6d408b3cc188685e4402a2c",
    "transactionHash":"0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67",
    "transactionIndex":"0x0",
    "type":"TxTypeFeeDelegatedValueTransfer",
    "typeInt":9,
    "value":"0x1"
  }
}
```


## klay_sendRawTransaction <a id="klay_sendrawtransaction"></a>

新しいメッセージコールトランザクションまたは署名されたトランザクションのコントラクト作成を作成します。

**パラメータ**

| タイプ | Description       |
| --- | ----------------- |
| データ | 署名されたトランザクションデータ。 |

**戻り値**

| タイプ       | Description                                 |
| --------- | ------------------------------------------- |
| 32バイトのデータ | トランザクションがまだ利用可能でない場合、トランザクションハッシュまたはゼロハッシュ。 |

コントラクトをデプロイした場合は、 [klay_getTransactionReceipt](#klay_gettransactionreceipt) を使用してコントラクトアドレスを取得します。

**例**

```shell
// Request
curl -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"klay_sendRawTransaction","params":[{see above}],"id":1}' https://api.baobab.klaytn.net:8651

// Result
{
  "jsonrpc": "2.0",
  "id":1,
  "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
```


## klay_sendTransaction <a id="klay_sendtransaction"></a>

与えられたパラメータでトランザクションを構築し、送信者の秘密鍵でトランザクションに署名し、トランザクションをKlaytnネットワークに伝播します。

**注**: 署名するアドレスのロックを解除する必要があります。

**パラメータ**

必要なパラメータはトランザクションの種類によって異なります。 [Klaytn Transaction Types](./transaction/transaction-type-support.md) で適切なパラメータを確認してください。

**戻り値**

| タイプ       | Description  |
| --------- | ------------ |
| 32バイトのデータ | トランザクションハッシュ |

コントラクトをデプロイした場合は、 [klay_getTransactionReceipt](#klay_gettransactionreceipt) を使用してコントラクトアドレスを取得します。

**例**

```shell
params: [{
  "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
  "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
  "gas": "0x76c0",
  "gasPrice": "0x5d21dba00",
  "value": "0x9184e72a",
  "input": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
}]
```

```shell
// Request
curl -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"klay_sendTransaction","params":[{see above}],"id":1}' https://api.baobab.klaytn.net:8651

// Result
{
  "jsonrpc": "2.0","id":1,
  "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"

```


## klay_sendTransactionAsFeePayer <a id="klay_sendtransactionasfeepayer"></a>

与えられたパラメータでトランザクションを構築し、手数料支払者の秘密鍵でトランザクションに署名し、トランザクションをKlaytnネットワークに伝播します。 この API は手数料委任タイプ(部分手数料委任タイプを含む)トランザクションのみをサポートします。

**注**: 署名する手数料支払者アドレスのロックを解除する必要があります。

**パラメータ**

必要なパラメータはトランザクションの種類によって異なります。 [Klaytn Transaction Types](./transaction/transaction-type-support.md) で適切なパラメータを確認してください。

**戻り値**

| タイプ       | Description  |
| --------- | ------------ |
| 32バイトのデータ | トランザクションハッシュ |

コントラクトをデプロイした場合は、 [klay_getTransactionReceipt](#klay_gettransactionreceipt) を使用してコントラクトアドレスを取得します。

**例**

```shell
params: [{
  "typeInt": 18,
  "from": "0xcd01b2b44584fb143824c1ea0231bebaea826b9d",
  "to": "0x44711E89b0c23845b5B2ed9D3716BA42b8a3e075",
  "gas": "0x4a380",
  "gasPrice": "0x5d21dba00",
  "nonce": "0x2c",
  "value": "0xf4",
  "input": "0xb3f98adc0000000000000000000000000000000000000000000000000000000000000001",
  "feePayer": "0xcd01b2b44584fb143824c1ea0231bebaea826b9d",
  "feeRatio": 30,
  "signatures": [{
    "V": "0x4e43", 
    "R": "0xd3ff5ca7bdd0120d79e8aa875593d05022fe74ce2b7a0594218d53c0fdca7fa9", 
    "S": "0x2c100e69d2455afc9393e017514063da18b18db6f7e811d0aeaf6002515b58ef"
  }]
}]
```

```shell
// Request
curl -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"klay_sendTransactionAsFeePayer","params":[{see above}],"id":1}' https://api.baobab.klaytn.net:8651

// Result
{
  "jsonrpc": "2.0","id":1,
  "result": "0x77ec2d910d0b96585373e2d6508f2b2d8c2af7d0060d2012e1cb2f0ee9d74830"
}
```

## klay_signTransaction <a id="klay_signtransaction"></a>

与えられたパラメータでトランザクションを作成し、送信者の秘密鍵でトランザクションに署名します。 このメソッドは、送信者署名を生成するか、Klaytnネットワークに送信する準備ができた最終生トランザクションを作成するために使用できます。

**注**: 署名するアドレスのロックを解除する必要があります。

**パラメータ**

必要なパラメータはトランザクションの種類によって異なります。 [Klaytn Transaction Types](./transaction/transaction-type-support.md) で適切なパラメータを確認してください。

**戻り値**

| タイプ | Description             |
| --- | ----------------------- |
| raw | 署名された生の取引               |
| tx  | 送信者の署名を含むトランザクションオブジェクト |

**例**
```shell
// Request
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0", "method":"klay_signTransaction", "params":[{"from":"0x77982323172e5b6182539d3522d5a33a944206d4", "to":"0xcd6bfdb523a4d030890d28bf1eb6ef36307c9aaa", "value":"0x10000", "gas":"0x1000000", "nonce":"0x2", "gasprice":"0x25000000000"}],"id":73}' https://api.baobab.klaytn.net:8651

// Result
{
  "jsonrpc":"2.0",
  "id":73,
  "result":{
    "raw":"0xf86c0286025000000000840100000094cd6bfdb523a4d030890d28bf1eb6ef36307c9aaa8301000080820fe8a056d2ddd231c3c111687ab351d339240db18cd721e5aa33c601dd4fc3927fb4d1a03443443392517aa7da082aa0a00b9ee5e3e1ee007d22e57cd9ff55b5ddbf4a64",
    "tx":{
      "nonce":"0x2",
      "gasPrice":"0x5d21dba00",
      "gas":"0x1000000",
      "to":"0xcd6bfdb523a4d030890d28bf1eb6ef36307c9aaa",
      "value":"0x10000",
      "input":"0x",
      "v":"0xfe8",
      "r":"0x56d2ddd231c3c111687ab351d339240db18cd721e5aa33c601dd4fc3927fb4d1",
      "s":"0x3443443392517aa7da082aa0a00b9ee5e3e1ee007d22e57cd9ff55b5ddbf4a64",
      "hash":"0xb53cc9128a19c3916c0de1914725b7337bba84666c2556d8682c72ca34c6874c"
    }
  }
}
```


## klay_signTransactionAsFeePayer <a id="klay_signtransactionasfeepayer"></a>

与えられたパラメータでトランザクションを作成し、手数料支払者の秘密鍵でトランザクションに署名します。 このメソッドは、手数料支払い者の署名を生成するか、Klaytnネットワークに送信する準備ができた最終生トランザクションを作成するために使用できます。 手数料支払者署名を抽出したい場合は、結果から `feePayerSignatures` を取得してください。 Note that the `raw` transaction is not final if the sender's signature is not attached (that is, `signatures` in `tx` is empty).

**注**: 署名する手数料支払者アドレスのロックを解除する必要があります。

**パラメータ**

必要なパラメータはトランザクションの種類によって異なります。 [Klaytn Transaction Types](./transaction/transaction-type-support.md) で適切なパラメータを確認してください。

**戻り値**

| タイプ | Description          |
| --- | -------------------- |
| raw | 署名された生の取引            |
| tx  | 手数料支払者の署名を含む取引オブジェクト |

**例**
```shell
// Request
curl -H "Content-Type: application/json" --data '{"jsonrpc": "2.0", "method": "klay_signTransactionAsFeePayer", "params": [{"typeInt": 17, "from": "0xcd01b2b44584fb143824c1ea0231bebaea826b9d", "to": "0x44711E89b0c23845b5B2ed9D3716BA42b8a3e075", "gas": "0x76c0", "gasPrice": "0x5d21dba00", "value": "0xf4", "input": "0xb3f98adc0000000000000000000000000000000000000000000000000000000000000001", "feePayer": "0xcd01b2b44584fb143824c1ea0231bebaea826b9d"}], "id": 83}' http://127.0.0.1:8551

// Result
{
    "id": 83,
    "jsonrpc": "2.0",
    "result": {
        "raw": "0x11f8ba358505d21dba008276c09444711e89b0c23845b5b2ed9d3716ba42b8a3e07581f494cd01b2b44584fb143824c1ea0231bebaea826b9da4b3f98adc0000000000000000000000000000000000000000000000000000000000000001c094cd01b2b44584fb143824c1ea0231bebaea826b9df847f845824e43a0b34470d1bb588a6afe8f170333ca147e805727aa1911353ed544c31ad4863beca020322c2727091ff79458a87a424b53a4b08cc3d7d485e002e8bf0add13974507",
        "tx": {
            "feePayer": "0xcd01b2b44584fb143824c1ea0231bebaea826b9d",
            "feePayerSignatures": [
                {
                    "R": "0xb34470d1bb588a6afe8f170333ca147e805727aa1911353ed544c31ad4863bec",
                    "S": "0x20322c2727091ff79458a87a424b53a4b08cc3d7d485e002e8bf0add13974507",
                    "V": "0x4e43"
                }
            ],
            "from": "0xcd01b2b44584fb143824c1ea0231bebaea826b9d",
            "gas": "0x76c0",
            "gasPrice": "0x5d21dba00",
            "hash": "0x9e76f754b884d7853814a39c0e51fcefcef6f55b872f00ddad9724c9638128b3",
            "input": "0xb3f98adc0000000000000000000000000000000000000000000000000000000000000001",
            "nonce": "0x35",
            "signatures": [],
            "to": "0x44711e89b0c23845b5b2ed9d3716ba42b8a3e075",
            "type": "TxTypeFeeDelegatedValueTransferMemo",
            "typeInt": 17,
            "value": "0xf4"
        }
    }
}
```


## txError: トランザクション失敗の詳細情報 <a id="txerror-detailed-information-of-transaction-failures"></a>

Klaytn provides a field `txError` in the transaction receipt to give developers more information about the reason for the failed transaction execution. この項目はトランザクションの実行に失敗した場合にのみ存在します。 ストレージとネットワーク帯域幅を節約するには、 `txError` に整数値が含まれています。 以下の表は、 `txError` の値の意味を示しています。

| エラーコード | Description                             |
| ------ | --------------------------------------- |
| 0x02   | スマートコントラクトの実行中にVMエラーが発生しました             |
| 0x03   | 最大通話深度を超えました                            |
| 0x04   | コントラクトアドレスが衝突しました                       |
| 0x05   | ガスからコントラクト作成コードを保管する                    |
| 0x06   | evm: 最大コードサイズを超えました                     |
| 0x07   | ガス欠だ                                    |
| 0x08   | (エドワード)書き込み保護                           |
| 0x09   | 実行が取り消されました                             |
| 0x0a   | TXのオペコードの計算コスト上限(100000000)に達しました       |
| 0x0b   | アカウントは既に存在します                           |
| 0x0c   | プログラムアカウントではありません (コードとストレージを持つアカウントなど) |
| 0x0d   | 人間が読めるアドレスは現在サポートされていません                |
| 0x0e   | 手数料比率が範囲外です[1 99]                       |
| 0x0f   | AccountKeyFail は更新できません                 |
| 0x10   | 異なるアカウントキーの種類                           |
| 0x11   | AccountKeyNil はアカウントに初期化できません           |
| 0x12   | 公開鍵は曲線上にありません                           |
| 0x13   | キーの重量がゼロです                              |
| 0x14   | キーはシリアライズできません                          |
| 0x15   | 重複したキー                                  |
| 0x16   | 加重合計オーバーフロー                             |
| 0x17   | 不十分な閾値です 鍵の加重合計はしきい値より小さい。              |
| 0x18   | 長さはゼロです                                 |
| 0x19   | 長すぎます                                   |
| 0x1a   | ネストされた複合タイプ                             |
| 0x1b   | レガシートランザクションはレガシーアカウントキーでなければなりません      |
| 0x1c   | 非推奨の機能                                  |
| 0x1d   | 対応していません                                |
| 0x1e   | スマートコントラクトコード形式が無効です                    |

## klay_getDecodedAnchoringTransactionByHash <a id="klay_getDecodedAnchoringTransactionByHash"></a>

指定されたトランザクションハッシュに対してデコードされたアンカーされたデータを返します。

**パラメータ**

| タイプ       | Description    |
| --------- | -------------- |
| 32バイトのデータ | トランザクションのハッシュ。 |

**戻り値**

| 名前            | タイプ       | Description                                                                                             |
| ------------- | --------- | ------------------------------------------------------------------------------------------------------- |
| BlockHash     | 32バイトのデータ | このアンカー取引が実行された子チェーンブロックのハッシュ。                                                                           |
| ブロック番号        | 品質        | このアンカー取引が実行された子チェーンブロック番号。                                                                              |
| ParentHash    | 32バイトのデータ | 親ブロックのハッシュ。                                                                                             |
| TxHash        | 32バイトのデータ | ブロックのトランザクションのルート。                                                                                      |
| StateRootHash | 32バイトのデータ | ブロックの最後の状態のルート。                                                                                         |
| レシートハッシュ      | 32バイトのデータ | ブロックのレシートのルートは試してみました。                                                                                  |
| ブロック数         | 品質        | アンカー期間中に生成されたブロックの数。 ほとんどの場合、この数は子チェーンの `SC_TX_PERIOD`に等しい。 このトランザクションがアンカーをオンにした後で最初にtxをアンカーした場合を除きます。 |
| TxCount       | 品質        | アンカー期間中に子チェーンで生成されたトランザクションの数。                                                                          |

**例**

```shell
// Request
curl -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"klay_getDecodedAnchoringTransactionByHash","params":["0x499350bc5e2f6fee1ba78b4d40a7a1db0a64f3c091112e6798a02ed9a4140084"],"id":1}' https://api.baobab.klaytn.net:8651

// Result
{
   "jsonrpc":"2.0",
   "id":1,
   "result":{
      "BlockCount":1,
      "BlockHash":"0xcf5f591836d70a1da8e6bb8e5b2c5739329ca0e535b91e239b332af2e1b7f1f4",
      "BlockNumber":1055,
      "ParentHash":"0x70f6115a5b597f29791d3b5e3f129df54778f69ae669842cc81ec8c432fee37c",
      "ReceiptHash":"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      "StateRootHash":"0x654773348f77a6788c76c93946340323c9b39399d0aa173f6b23fe082848d056",
      "TxCount":0,
      "TxHash":"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"
   }
}
```

```javascript
> klay.getDecodedAnchoringTransactionByHash("0x499350bc5e2f6fee1ba78b4d40a7a1db0a64f3c091112e6798a02ed9a4140084")
{
  BlockCount: 1,
  BlockHash: "0xcf5f591836d70a1da8e6bb8e5b2c5739329ca0e535b91e239b332af2e1b7f1f4",
  BlockNumber: 1055,
  ParentHash: "0x70f6115a5b597f29791d3b5e3f129df54778f69ae669842cc81ec8c432fee37c",
  ReceiptHash: "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
  StateRootHash: "0x654773348f77a6788c76c93946340323c9b39399d0aa173f6b23fe082848d056",
  TxCount: 0,
  TxHash: "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"
}
```
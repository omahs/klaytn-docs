# その他 <a id="miscellaneous"></a>

## klay_sha3 <a id="klay_sha3"></a>

戻り値 与えられたデータの Keccak-256 (標準化された SHA3-256) ではありません。

**Parameters**

| Name | Type | Description       |
| ---- | ---- | ----------------- |
| data | DATA | SHA3ハッシュに変換するデータ。 |

**Return Value**

| Type         | Description      |
| ------------ | ---------------- |
| 32-byte DATA | 与えられたデータのSHA3結果。 |


**Example**

```shell
// Request
curl -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"klay_sha3","params":["0x11223344"],"id":1}' https://public-en-baobab.klaytn.net

// Result
{
  "jsonrpc":"2.0",
  "id":1,
  "result":"0x36712aa4d0dd2f64a9ae6ac09555133a157c74ddf7c079a70c33e8b4bf70dd73"
}
```
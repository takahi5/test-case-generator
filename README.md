# test-case-generator
プルリクのコメントから検証項目書を作成する

githubのプルリクエストの説明に、以下のようにチェックボックスで検証項目を書いておいてもらう。   
それをまとめてcsv出力するスクリプト。

```
- [ ] ボタンを押すと画面遷移すること
- [ ] 一覧が表示されること
```

## Usage

```
npm install
// or yarn install
```


APIキーの設定
ルートに`.env`ファイルを作成し、githubのAPIキーを記載する

```
# .env
API_KEY=c44i983f9jfeq9jfj494qjf3r4wqf
```

実行する

```
node create-test-case.js
```

検証項目書 output.csv ができる

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


**APIキーの設定**

githubのpersonal access tokenを取得し、それを.envのAPI_KEYに記載する。
https://docs.github.com/ja/github/authenticating-to-github/creating-a-personal-access-token


```
# .env
API_KEY=c44i983f9jfeq9jfj494qjf3r4wqf
```

**実行する**

```
node create-test-case.js
```

検証項目書 output.csv ができる

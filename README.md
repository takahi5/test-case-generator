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

githubのpersonal access tokenを取得し、それをルートに作成した.envのAPI_KEYに記載する。
https://docs.github.com/ja/github/authenticating-to-github/creating-a-personal-access-token


```
# .env
API_KEY=c44i983f9jfeq9jfj494qjf3r4wqf
```

**実行する**

```
node create-test-case.js
```

カーソルで対象のリポジトリを選択する。  
![node](https://user-images.githubusercontent.com/7026785/92456093-7169cb00-f1fd-11ea-8fd4-396aeab44f25.png)


検証項目書 output.csv ができる。  
(直近のclosedのプルリクエスト20件が対象です）

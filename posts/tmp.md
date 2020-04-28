# 記事を書くための一時的なメモ

https://reffect.co.jp/vue/nuxt-js-first-step#SEO
assets・・・コンパイルが行われていないSASS, LESSやFontなどを保存
middleware・・・layoutやページがレンダリングする前に実行されるカスタム関数を保存。ユーザ認証などに使うことができます。
plugins・・・Vueインスタンスが起動する前にロードするJavaScriptプラグインを保存
static・・・robots.text, favicon、画像ファイルを保存されています。もしimage.pngを保存すると/image.pngでアクセスすることが可能です。
store・・・Vuex Storeに関するファイルが保存されています。
.nuxt・・・コンパイルを実行すると作成されます。
node_modelues・・・next.jsで使われるJavaScriptのパッケージが保存されています。


https://enterprisezine.jp/article/detail/3521
DDL(Data Definition Language)とは、データ定義言語と呼ばれ、データベース内の表、ビューやインデックスなどの各種オブジェクトの作成や変更をするためのSQL文です。 DDLとされるコマンドは以下の4つです。
CREATE	新しいデータベースオブジェクトの作成
DROP	既存のデータベースオブジェクトの削除
ALTER	既存のデータベースオブジェクトの変更
TRUNCATE	テーブル内のデータ全体の削除


https://logmi.jp/tech/articles/321249
Vue.jsにおいてMixinを用いる注意点と、Pluginで代用する方法


https://codmon.kibe.la/notes/9174
フロントエンドアーキテクチャ【技術選定編】


## コールバック地獄
以下のコードを実行すると「0, 1, 2, 3 ,4」とConsoleに出力されます。

```js
console.log(0);
function sleep(error, callback) {
  setTimeout(() => {
    callback(1);
  }, 1000);
}

sleep(result => {
  console.log(result + 1);
  sleep(result => {
    console.log(result + 2);
    sleep(result => {
      console.log(result + 3);
    });
  });
});

console.log(1);
```

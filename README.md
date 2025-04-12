# MarkdownToJsx

Markdownテキストを美しいJSXコンポーネントに変換するReactライブラリです。複数のテーマをサポートし、豊富なMarkdown機能を提供します。

## 特徴

- **多彩なMarkdown要素サポート**: 見出し、リスト、コードブロック、テーブル、引用、画像など
- **テーマ機能**: 複数のプリセットテーマ（light, dark, sepia, nord, github, dracula）
- **カスタムテーマ**: 独自のテーマを定義可能
- **引用元表示機能**: 特殊な形式 `> テキスト\n> -- 引用元` で引用元を表示
- **セキュリティ対策**: URLサニタイズなど安全な実装
- **パフォーマンス最適化**: useMemoによる効率的なレンダリング

## インストール

```bash
npm install
```

## 使用方法

### 基本的な使い方

```tsx
import MarkdownToJsx from './components/MarkdownToJsx';

const MyComponent = () => {
  const markdown = `# こんにちは
これは**Markdown**テキストです。`;

  return <MarkdownToJsx markdown={markdown} />;
};
```

### テーマの指定

```tsx
// プリセットテーマを使用
<MarkdownToJsx markdown={markdown} themeName="dark" />

// カスタムテーマを使用
const customTheme = {
  backgroundColor: '#f5f5f5',
  textColor: '#333',
  // その他のテーマプロパティ...
};

<MarkdownToJsx markdown={markdown} customTheme={customTheme} />
```

## サポートされているMarkdown機能

- 見出し (h1〜h6)
- 段落
- 強調 (太字、イタリック、取り消し線)
- リスト (順序付き、順序なし、チェックボックス)
- コードブロック (シンタックスハイライト付き)
- インラインコード
- 引用 (引用元表示機能付き)
- 画像
- リンク
- 水平線
- テーブル

## 引用元表示機能の使用例

```markdown
> これは引用テキストです。
> -- 引用元
```

## 開発

```bash
# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# デプロイ
npm run deploy
```

## 技術スタック

- React 19
- TypeScript
- HonoX
- highlight.js (コードシンタックスハイライト)
- Tailwind CSS

# Markdown変換デモ
## 基本的な書式

これは段落テキストです。**太字**, *イタリック*, ~~取り消し線~~, そして \`インラインコード\` を含みます。

> これは引用です。引用内でも **書式** が使えます。

## 文章
「子」という表現は、日本語で特に年齢や経験が自分より下の人を親しみを込めて表現するときに使われる傾向があり、必ずしも悪意や軽視があるわけではないが、上下関係や対等でないニュアンスを含む場合がある。この表現は日本特有とは言えないものの、特に年功序列的な意識が強い日本社会では頻繁に使われる傾向がある。

また、職場環境や個人の価値観が多様化する中で、こうした表現に対して違和感を覚える人も増えてきている。特に、研修や指導の場面において、新人を一人前の社会人として尊重する姿勢を伝えるためには、「新人の方」「新入社員」「○○さん」など、より中立的で対等な表現を使う方が適切とされる。

「新人の子」という言葉に違和感を覚えること自体が、新人を対等な存在として尊重しようとする意識の表れでもあるため、「新人の方」「新人さん」など、代替表現を意識的に使うようにするとよい。

### リスト

#### 箇条書きリスト
- リストアイテム 1
  - リストアイテム 2
    - ネストされたアイテム
  - リストアイテム 3

#### 番号付きリスト
1. 最初のアイテム
2. 2番目のアイテム
3. 3番目のアイテム

#### チェックボックス
- [x] 完了したタスク
- [ ] 未完了のタスク
- [x] もう一つの完了タスク

### リンクと画像

[外部リンク](https://example.com)

![](/cat_icon_600.jpg)

### 水平線

以下は水平線です:

---

### コードブロック

```javascript
// JavaScriptのサンプルコード
function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return true;
}
greet('World');
```

```css
/* CSSのサンプル */
body {
  font-family: 'Arial', sans-serif;
  color: #333;
  margin: 0;
  padding: 20px;
}
```

### 引用と引用元

> デザインとは、単に見た目や感触を良くすることではない。
> デザインとは、どう機能するかということだ。
> -- スティーブ・ジョブズ

> 成功とは、失敗から失敗へと情熱を失わずに進むことである。
> -- ウィンストン・チャーチル

### テーブル

| 名前 | 年齢 | 職業 |
|------|------|------|
| 山田 | 28 | エンジニア |
| 佐藤 | 34 | デザイナー |
| 鈴木 | 42 | マネージャー |

### 数式（未対応）

インライン数式: $E=mc^2$

ブロック数式:
$$
\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}
$$

### HTMLタグ（一部対応）

<div style="color: red;">
  HTMLタグは部分的にサポートされています。
</div>
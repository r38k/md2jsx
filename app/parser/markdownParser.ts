import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";

export const markdownToAst = (markdown: string) => {
  const ast = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .parse(markdown);
  return ast;
};

/*
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

\`\`\`javascript
// JavaScriptのサンプルコード
function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return true;
}
greet('World');
\`\`\`

\`\`\`css
\/\* CSSのサンプル \*\/
body {
    font-family: 'Arial', sans-serif;
    color: #333333;
    margin: 0;
    padding: 20px;
  }
  \`\`\`
  
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
  
*/

/*
{
  type: 'root',
  children: [
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Markdown変換デモ',
          position: {
            start: { line: 1, column: 3, offset: 2 },
            end: { line: 1, column: 15, offset: 14 }
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 15, offset: 14 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: '基本的な書式',
          position: {
            start: { line: 2, column: 4, offset: 18 },
            end: { line: 2, column: 10, offset: 24 }
          }
        }
      ],
      position: {
        start: { line: 2, column: 1, offset: 15 },
        end: { line: 2, column: 10, offset: 24 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'これは段落テキストです。',
          position: {
            start: { line: 4, column: 1, offset: 26 },
            end: { line: 4, column: 13, offset: 38 }
          }
        },
        {
          type: 'strong',
          children: [
            {
              type: 'text',
              value: '太字',
              position: {
                start: { line: 4, column: 15, offset: 40 },
                end: { line: 4, column: 17, offset: 42 }
              }
            }
          ],
          position: {
            start: { line: 4, column: 13, offset: 38 },
            end: { line: 4, column: 19, offset: 44 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 4, column: 19, offset: 44 },
            end: { line: 4, column: 21, offset: 46 }
          }
        },
        {
          type: 'emphasis',
          children: [
            {
              type: 'text',
              value: 'イタリック',
              position: {
                start: { line: 4, column: 22, offset: 47 },
                end: { line: 4, column: 27, offset: 52 }
              }
            }
          ],
          position: {
            start: { line: 4, column: 21, offset: 46 },
            end: { line: 4, column: 28, offset: 53 }
          }
        },
        {
          type: 'text',
          value: ', ~~取り消し線~~, そして ',
          position: {
            start: { line: 4, column: 28, offset: 53 },
            end: { line: 4, column: 45, offset: 70 }
          }
        },
        {
          type: 'inlineCode',
          value: 'インラインコード',
          position: {
            start: { line: 4, column: 45, offset: 70 },
            end: { line: 4, column: 55, offset: 80 }
          }
        },
        {
          type: 'text',
          value: ' を含みます。',
          position: {
            start: { line: 4, column: 55, offset: 80 },
            end: { line: 4, column: 62, offset: 87 }
          }
        }
      ],
      position: {
        start: { line: 4, column: 1, offset: 26 },
        end: { line: 4, column: 62, offset: 87 }
      }
    },
    {
      type: 'blockquote',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'これは引用です。引用内でも ',
              position: {
                start: { line: 6, column: 3, offset: 91 },
                end: { line: 6, column: 17, offset: 105 }
              }
            },
            {
              type: 'strong',
              children: [
                {
                  type: 'text',
                  value: '書式',
                  position: {
                    start: { line: 6, column: 19, offset: 107 },
                    end: { line: 6, column: 21, offset: 109 }
                  }
                }
              ],
              position: {
                start: { line: 6, column: 17, offset: 105 },
                end: { line: 6, column: 23, offset: 111 }
              }
            },
            {
              type: 'text',
              value: ' が使えます。',
              position: {
                start: { line: 6, column: 23, offset: 111 },
                end: { line: 6, column: 30, offset: 118 }
              }
            }
          ],
          position: {
            start: { line: 6, column: 3, offset: 91 },
            end: { line: 6, column: 30, offset: 118 }
          }
        }
      ],
      position: {
        start: { line: 6, column: 1, offset: 89 },
        end: { line: 6, column: 30, offset: 118 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: '文章',
          position: {
            start: { line: 8, column: 4, offset: 123 },
            end: { line: 8, column: 6, offset: 125 }
          }
        }
      ],
      position: {
        start: { line: 8, column: 1, offset: 120 },
        end: { line: 8, column: 6, offset: 125 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: '「子」という表現は、日本語で特に年齢や経験が自分より下の人を親しみを込めて表現するときに使われる傾向があり、必ずしも悪意や軽視があるわけではないが、上下関係や対等でないニュアンスを含む場合がある。この表現は日本特有とは言えないものの、特に年功序列的な意識が強い日本社会では頻繁に使われる傾向がある。',
          position: {
            start: { line: 9, column: 1, offset: 126 },
            end: { line: 9, column: 150, offset: 275 }
          }
        }
      ],
      position: {
        start: { line: 9, column: 1, offset: 126 },
        end: { line: 9, column: 150, offset: 275 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'また、職場環境や個人の価値観が多様化する中で、こうした表現に対して違和感を覚える人も増えてきている。特に、研修や指導の場面において、新人を一人前の社会人として尊重する姿勢を伝えるためには、「新人の方」「新入社員」「○○さん」など、より中立的で対等な表現を使う方が適切とされる。',
          position: {
            start: { line: 11, column: 1, offset: 277 },
            end: { line: 11, column: 139, offset: 415 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 277 },
        end: { line: 11, column: 139, offset: 415 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: '「新人の子」という言葉に違和感を覚えること自体が、新人を対等な存在として尊重しようとする意識の表れでもあるため、「新人の方」「新人さん」など、代替表現を意識的に使うようにするとよい。',
          position: {
            start: { line: 13, column: 1, offset: 417 },
            end: { line: 13, column: 92, offset: 508 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 417 },
        end: { line: 13, column: 92, offset: 508 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'リスト',
          position: {
            start: { line: 15, column: 5, offset: 514 },
            end: { line: 15, column: 8, offset: 517 }
          }
        }
      ],
      position: {
        start: { line: 15, column: 1, offset: 510 },
        end: { line: 15, column: 8, offset: 517 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: '箇条書きリスト',
          position: {
            start: { line: 17, column: 6, offset: 524 },
            end: { line: 17, column: 13, offset: 531 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 519 },
        end: { line: 17, column: 13, offset: 531 }
      }
    },
    {
      type: 'list',
      ordered: false,
      start: null,
      spread: false,
      children: [
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: 'リストアイテム 1',
                  position: {
                    start: { line: 18, column: 3, offset: 534 },
                    end: { line: 18, column: 12, offset: 543 }
                  }
                }
              ],
              position: {
                start: { line: 18, column: 3, offset: 534 },
                end: { line: 18, column: 12, offset: 543 }
              }
            }
          ],
          position: {
            start: { line: 18, column: 1, offset: 532 },
            end: { line: 18, column: 12, offset: 543 }
          }
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: 'リストアイテム 2',
                  position: {
                    start: { line: 19, column: 3, offset: 546 },
                    end: { line: 19, column: 12, offset: 555 }
                  }
                }
              ],
              position: {
                start: { line: 19, column: 3, offset: 546 },
                end: { line: 19, column: 12, offset: 555 }
              }
            },
            {
              type: 'list',
              ordered: false,
              start: null,
              spread: false,
              children: [
                {
                  type: 'listItem',
                  spread: false,
                  checked: null,
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          value: 'ネストされたアイテム',
                          position: {
                            start: { line: 20, column: 5, offset: 560 },
                            end: { line: 20, column: 15, offset: 570 }
                          }
                        }
                      ],
                      position: {
                        start: { line: 20, column: 5, offset: 560 },
                        end: { line: 20, column: 15, offset: 570 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 20, column: 3, offset: 558 },
                    end: { line: 20, column: 15, offset: 570 }
                  }
                }
              ],
              position: {
                start: { line: 20, column: 3, offset: 558 },
                end: { line: 20, column: 15, offset: 570 }
              }
            }
          ],
          position: {
            start: { line: 19, column: 1, offset: 544 },
            end: { line: 20, column: 15, offset: 570 }
          }
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: 'リストアイテム 3',
                  position: {
                    start: { line: 21, column: 3, offset: 573 },
                    end: { line: 21, column: 12, offset: 582 }
                  }
                }
              ],
              position: {
                start: { line: 21, column: 3, offset: 573 },
                end: { line: 21, column: 12, offset: 582 }
              }
            }
          ],
          position: {
            start: { line: 21, column: 1, offset: 571 },
            end: { line: 21, column: 12, offset: 582 }
          }
        }
      ],
      position: {
        start: { line: 18, column: 1, offset: 532 },
        end: { line: 21, column: 12, offset: 582 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: '番号付きリスト',
          position: {
            start: { line: 23, column: 6, offset: 589 },
            end: { line: 23, column: 13, offset: 596 }
          }
        }
      ],
      position: {
        start: { line: 23, column: 1, offset: 584 },
        end: { line: 23, column: 13, offset: 596 }
      }
    },
    {
      type: 'list',
      ordered: true,
      start: 1,
      spread: false,
      children: [
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: '最初のアイテム',
                  position: {
                    start: { line: 24, column: 4, offset: 600 },
                    end: { line: 24, column: 11, offset: 607 }
                  }
                }
              ],
              position: {
                start: { line: 24, column: 4, offset: 600 },
                end: { line: 24, column: 11, offset: 607 }
              }
            }
          ],
          position: {
            start: { line: 24, column: 1, offset: 597 },
            end: { line: 24, column: 11, offset: 607 }
          }
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: '2番目のアイテム',
                  position: {
                    start: { line: 25, column: 4, offset: 611 },
                    end: { line: 25, column: 12, offset: 619 }
                  }
                }
              ],
              position: {
                start: { line: 25, column: 4, offset: 611 },
                end: { line: 25, column: 12, offset: 619 }
              }
            }
          ],
          position: {
            start: { line: 25, column: 1, offset: 608 },
            end: { line: 25, column: 12, offset: 619 }
          }
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: '3番目のアイテム',
                  position: {
                    start: { line: 26, column: 4, offset: 623 },
                    end: { line: 26, column: 12, offset: 631 }
                  }
                }
              ],
              position: {
                start: { line: 26, column: 4, offset: 623 },
                end: { line: 26, column: 12, offset: 631 }
              }
            }
          ],
          position: {
            start: { line: 26, column: 1, offset: 620 },
            end: { line: 26, column: 12, offset: 631 }
          }
        }
      ],
      position: {
        start: { line: 24, column: 1, offset: 597 },
        end: { line: 26, column: 12, offset: 631 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'チェックボックス',
          position: {
            start: { line: 28, column: 6, offset: 638 },
            end: { line: 28, column: 14, offset: 646 }
          }
        }
      ],
      position: {
        start: { line: 28, column: 1, offset: 633 },
        end: { line: 28, column: 14, offset: 646 }
      }
    },
    {
      type: 'list',
      ordered: false,
      start: null,
      spread: false,
      children: [
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: '[x] 完了したタスク',
                  position: {
                    start: { line: 29, column: 3, offset: 649 },
                    end: { line: 29, column: 14, offset: 660 }
                  }
                }
              ],
              position: {
                start: { line: 29, column: 3, offset: 649 },
                end: { line: 29, column: 14, offset: 660 }
              }
            }
          ],
          position: {
            start: { line: 29, column: 1, offset: 647 },
            end: { line: 29, column: 14, offset: 660 }
          }
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: '[ ] 未完了のタスク',
                  position: {
                    start: { line: 30, column: 3, offset: 663 },
                    end: { line: 30, column: 14, offset: 674 }
                  }
                }
              ],
              position: {
                start: { line: 30, column: 3, offset: 663 },
                end: { line: 30, column: 14, offset: 674 }
              }
            }
          ],
          position: {
            start: { line: 30, column: 1, offset: 661 },
            end: { line: 30, column: 14, offset: 674 }
          }
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: '[x] もう一つの完了タスク',
                  position: {
                    start: { line: 31, column: 3, offset: 677 },
                    end: { line: 31, column: 17, offset: 691 }
                  }
                }
              ],
              position: {
                start: { line: 31, column: 3, offset: 677 },
                end: { line: 31, column: 17, offset: 691 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 1, offset: 675 },
            end: { line: 31, column: 17, offset: 691 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 647 },
        end: { line: 31, column: 17, offset: 691 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'リンクと画像',
          position: {
            start: { line: 33, column: 5, offset: 697 },
            end: { line: 33, column: 11, offset: 703 }
          }
        }
      ],
      position: {
        start: { line: 33, column: 1, offset: 693 },
        end: { line: 33, column: 11, offset: 703 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://example.com',
          children: [
            {
              type: 'text',
              value: '外部リンク',
              position: {
                start: { line: 35, column: 2, offset: 706 },
                end: { line: 35, column: 7, offset: 711 }
              }
            }
          ],
          position: {
            start: { line: 35, column: 1, offset: 705 },
            end: { line: 35, column: 29, offset: 733 }
          }
        }
      ],
      position: {
        start: { line: 35, column: 1, offset: 705 },
        end: { line: 35, column: 29, offset: 733 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: '/cat_icon_600.jpg',
          alt: '',
          position: {
            start: { line: 37, column: 1, offset: 735 },
            end: { line: 37, column: 23, offset: 757 }
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 735 },
        end: { line: 37, column: 23, offset: 757 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: '水平線',
          position: {
            start: { line: 39, column: 5, offset: 763 },
            end: { line: 39, column: 8, offset: 766 }
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 759 },
        end: { line: 39, column: 8, offset: 766 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: '以下は水平線です:',
          position: {
            start: { line: 41, column: 1, offset: 768 },
            end: { line: 41, column: 10, offset: 777 }
          }
        }
      ],
      position: {
        start: { line: 41, column: 1, offset: 768 },
        end: { line: 41, column: 10, offset: 777 }
      }
    },
    {
      type: 'thematicBreak',
      position: {
        start: { line: 43, column: 1, offset: 779 },
        end: { line: 43, column: 4, offset: 782 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'コードブロック',
          position: {
            start: { line: 45, column: 5, offset: 788 },
            end: { line: 45, column: 12, offset: 795 }
          }
        }
      ],
      position: {
        start: { line: 45, column: 1, offset: 784 },
        end: { line: 45, column: 12, offset: 795 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// JavaScriptのサンプルコード\n' +
        'function greet(name) {\n' +
        '  console.log(`Hello, ${name}!`);\n' +
        '  return true;\n' +
        '}\n' +
        "greet('World');",
      position: {
        start: { line: 47, column: 1, offset: 797 },
        end: { line: 54, column: 4, offset: 926 }
      }
    },
    {
      type: 'code',
      lang: 'css',
      meta: null,
      value: '\/\* CSSのサンプル \*\/\n' +
      'body {\n' +
      "  font-family: 'Arial', sans-serif;\n" +
      '  color: #333333;\n' +
      '  margin: 0;\n' +
      '  padding: 20px;\n' +
      '}',
    position: {
      start: { line: 56, column: 1, offset: 928 },
      end: { line: 64, column: 4, offset: 1046 }
    }
  },
  {
    type: 'heading',
    depth: 3,
    children: [
      {
        type: 'text',
        value: '引用と引用元',
        position: {
          start: { line: 66, column: 5, offset: 1052 },
          end: { line: 66, column: 11, offset: 1058 }
        }
      }
    ],
    position: {
      start: { line: 66, column: 1, offset: 1048 },
      end: { line: 66, column: 11, offset: 1058 }
    }
  },
  {
    type: 'blockquote',
    children: [
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value: 'デザインとは、単に見た目や感触を良くすることではない。\n' +
              'デザインとは、どう機能するかということだ。\n' +
              '-- スティーブ・ジョブズ',
            position: {
              start: { line: 68, column: 3, offset: 1062 },
              end: { line: 70, column: 16, offset: 1129 }
            }
          }
        ],
        position: {
          start: { line: 68, column: 3, offset: 1062 },
          end: { line: 70, column: 16, offset: 1129 }
        }
      }
    ],
    position: {
      start: { line: 68, column: 1, offset: 1060 },
      end: { line: 70, column: 16, offset: 1129 }
    }
  },
  {
    type: 'blockquote',
    children: [
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value: '成功とは、失敗から失敗へと情熱を失わずに進むことである。\n-- ウィンストン・チャーチル',
            position: {
              start: { line: 72, column: 3, offset: 1133 },
              end: { line: 73, column: 18, offset: 1179 }
            }
          }
        ],
        position: {
          start: { line: 72, column: 3, offset: 1133 },
          end: { line: 73, column: 18, offset: 1179 }
        }
      }
    ],
    position: {
      start: { line: 72, column: 1, offset: 1131 },
      end: { line: 73, column: 18, offset: 1179 }
    }
  },
  {
    type: 'heading',
    depth: 3,
    children: [
      {
        type: 'text',
        value: 'テーブル',
        position: {
          start: { line: 75, column: 5, offset: 1185 },
          end: { line: 75, column: 9, offset: 1189 }
        }
      }
    ],
    position: {
      start: { line: 75, column: 1, offset: 1181 },
      end: { line: 75, column: 9, offset: 1189 }
    }
  },
  {
    type: 'paragraph',
    children: [
      {
        type: 'text',
        value: '| 名前 | 年齢 | 職業 |\n' +
          '|------|------|------|\n' +
          '| 山田 | 28 | エンジニア |\n' +
          '| 佐藤 | 34 | デザイナー |\n' +
          '| 鈴木 | 42 | マネージャー |',
        position: {
          start: { line: 77, column: 1, offset: 1191 },
          end: { line: 81, column: 21, offset: 1291 }
        }
      }
    ],
    position: {
      start: { line: 77, column: 1, offset: 1191 },
      end: { line: 81, column: 21, offset: 1291 }
    }
  },
}
*/
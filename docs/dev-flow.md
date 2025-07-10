# 開発の流れメモ

## Process Flow Diagram

```mermaid

flowchart TD
  subgraph 要求
    th-tech@{ shape: braces, label: "試したいこと" }
    th-complain@{ shape: braces, label: "不満" }
    th-ideal@{ shape: braces, label: "理想" }
    th-idea@{ shape: braces, label: "アイデア" }
  end

  p-organize@{ shape: circle, label: "書き出して\n整理する"}

  要求 --> p-organize

  subgraph 要件
    md-req@{shape: lin-doc, label: "箇条書き要件"}
    %% フローチャートはなんの集まり？シーン？
    md-flow@{shape: lin-doc, label: "行動の\nフローチャート"}
    %% 画面一覧
    draw-screen@{}
    mer-er@{ shape: lin-doc, label: "ER図"}
    p-imagine-flow@{ shape: circle, label: "体験の流れを\n想像する"}
    p-shape-model@{ shape: circle, label: "概念\nモデリング"}

    md-req --> p-imagine-flow --> md-flow
    md-flow --> p-imagine-flow --> md-req

    md-req --> p-shape-model --> mer-er
    mer-er --> p-shape-model--> md-req
  end

  p-organize --> 要件

  subgraph App
    subgraph Frontend
    end

    subgraph Backend
    end
  end

```

## 1. 要求定義

- やりたいこと・不満なこと・良いなと思うことを書き出すだけ。
- 目的の大元を言語化する。
- AI には言語化の壁打ちになってもらう。
- `output`
  - 要求一覧(markdown)

## 2. 要件定義・基本設計

- 要求に対する実現可能性を考える。
- どこまでやるか
- AI に聞く。技術スタックとか、実現の方針とか。
- `output`
  - 技術スタック(markdown)
  - 要件一覧(markdown)
  - ER 図(mermaid)
  - 行動のフローチャート(mermaid)
  - 画面遷移図(drawio)
  - 実装計画ガントチャート(mermaid)

## 3. 詳細設計・開発・テスト

- 画面を作ってアプリケーションコード・テストコードを作る
- AI を使う。#2 のドキュメントはすべて AI フレンドリーに書いてるはず。
- `output`
  - 画面定義書(drawio+markdown)
  - アプリケーションコード
  - テストコード

## 4. 実機テスト・試用・ふりかえりとむきなおり

- 使ってみる。気付いた点を書き出す。フローを振り返って、次を考える。
- 気になったら適宜前に戻ってやり直す

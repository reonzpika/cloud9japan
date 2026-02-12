'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Collapsible } from '@/components/ui/collapsible'

export function HorseMesse() {
  return (
    <section id="horse-messe-section" className="py-16 md:py-24 bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto space-y-8"
        >
          {/* Header Section */}
          <div className="p-8 md:p-12 border-2 border-indigo rounded-lg bg-indigo-light space-y-6">
            <div className="text-center space-y-4">
              <span className="inline-block px-4 py-2 bg-indigo text-white text-sm font-bold rounded-full">
                2026年2月21日(土)・22日(日)・23日(月・祝)
              </span>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-indigo">
                午年の今年、日本最大の馬の祭典でお会いしましょう
              </h2>
              
              <p className="text-xl font-semibold text-indigo">
                第7回ホースメッセTOKYO2026
              </p>
            </div>
            
            {/* Event Details Grid */}
            <div className="grid md:grid-cols-2 gap-6 py-6">
              <div className="space-y-2">
                <p className="font-semibold text-indigo">📍 会場</p>
                <p className="text-indigo-muted">JRA馬事公苑（東京・世田谷区）</p>
                <p className="text-sm text-indigo-muted">東京2020オリンピック馬術競技会場</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-indigo">🕘 時間</p>
                <p className="text-indigo-muted">9:00 - 17:00</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-indigo">🎯 ブース番号</p>
                <p className="text-2xl font-bold text-indigo">F6</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-indigo">💴 入場料</p>
                <p className="text-indigo-muted">無料</p>
                <p className="text-sm text-indigo-muted">講習会も無料でご参加いただけます</p>
              </div>
            </div>
          </div>

          {/* Venue Map Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-indigo">会場マップ</h3>
            <div className="relative w-full rounded-lg overflow-hidden border-2 border-indigo-light">
              <Image 
                src="https://horsemesse.jp/wp-content/uploads/2026/02/馬事公苑マップ.webp"
                alt="馬事公苑マップ - Cloud NineはF6ブースでお待ちしています"
                width={1200}
                height={800}
                className="w-full h-auto"
                unoptimized
              />
            </div>
            <p className="text-center text-indigo-muted">
              Cloud Nineは <strong className="text-indigo font-bold">F列6番（F6）</strong> でお待ちしています。正面玄関から入り、厩舎エリアのF列へお進みください。
            </p>
          </div>

          {/* Cloud Nine Booth - Expanded Section */}
          <div className="p-8 md:p-12 border-2 border-indigo rounded-lg bg-kinari-light space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-indigo text-center">
              Cloud Nineブース F6
            </h3>
            
            <div className="space-y-4 text-indigo-muted leading-relaxed">
              <p>
                厩舎F列6番（F6）にて、久留米絣の馬グッズを展示販売しています。
              </p>
              
              <p>
                ショルダーバッグ、にんじんポーチ、馬の刺繍入りハンカチ、久留米絣のぬいぐるみ馬——すべてYokoの手作りによる一点ものです。
              </p>
              
              <p>
                画面では伝わらない久留米絣の手触りと藍の深さを、ぜひ実際に手に取ってみてください。馬好きさんへのプレゼントにもぴったりです。
              </p>
              
              <p className="font-semibold text-indigo">
                3日間ブースにおりますので、お気軽にお声がけください。MarshallとLucasの写真もたくさんご用意していますので、ぜひ遊びにいらしてください。
              </p>
              
              <p className="text-center text-lg font-semibold text-indigo pt-4">
                お会いできるのを楽しみにしています。
              </p>
            </div>
          </div>

          {/* Collapsible Sections for Event Details */}
          <div className="space-y-4">
            <Collapsible title='馬を「知る・触れる・体験する」3日間' defaultOpen={false}>
              <div className="space-y-6">
                <p className="text-indigo-muted leading-relaxed">
                  ホースメッセでは、3日間にわたって多彩な講習会やイベントが開催されます。
                </p>
                
                <p className="text-indigo-muted leading-relaxed">
                  馬の行動学、中国医学から読み解く馬の性格、ライダーのための姿勢づくり、馬の歯や蹄の健康、障害馬術の世界、引退競走馬の未来——専門家や現役トップライダーによる講習会は、初心者からベテランまで楽しめる内容が揃っています。
                </p>
                
                <p className="text-indigo font-semibold">
                  今回、すべての講習会が初めて無料になりました。（事前予約制・席数に限りあり）
                </p>
                
                <p className="text-indigo-muted leading-relaxed">
                  講習会以外にも、会場では馬と直接ふれあえる体験が盛りだくさん。
                </p>

                {/* Event Highlights Grid */}
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-indigo">🏇 クロスカントリー デモンストレーション</p>
                    <p className="text-sm text-indigo-muted">
                      パリ五輪で話題の初老ジャパン・根岸淳監督が騎乗。馬事公苑メインアリーナに特設クロスカントリー障害が出現します。
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-semibold text-indigo">🎯 流鏑馬の的当て体験＆演舞</p>
                    <p className="text-sm text-indigo-muted">
                      日本の伝統馬上武芸・流鏑馬を間近で体感。的当て体験もできます。
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-semibold text-indigo">🐴 馬とふれあい体験</p>
                    <p className="text-sm text-indigo-muted">
                      聴診器で馬の心臓の音を聴く体験、馬と一緒に歩くホースリーディングなど、お子さまも楽しめるプログラムが多数。
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-semibold text-indigo">🌿 ワークショップ</p>
                    <p className="text-sm text-indigo-muted">
                      本物の蹄鉄を使ったドライフラワーアレンジメント（¥4,000）、馬モチーフの多肉寄せ植え（¥5,000）など、馬にまつわるものづくり体験も。
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-semibold text-indigo">🧘 芝生ピラティス</p>
                    <p className="text-sm text-indigo-muted">
                      乗馬にもつながる身体づくりを、馬事公苑の芝生の上で。参加者には動画リンク付きリーフレットのプレゼントも。
                    </p>
                  </div>
                </div>

                {/* Links to Official Site */}
                <div className="pt-6 space-y-2">
                  <p className="text-sm text-indigo-muted">
                    講習会のスケジュールやイベントの詳細は、公式サイトでご確認ください。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a 
                      href="https://horsemesse.jp/programs-events/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo hover:text-indigo-muted underline"
                    >
                      講習会・イベント →
                    </a>
                    <a 
                      href="https://horsemesse.jp/workshop/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo hover:text-indigo-muted underline"
                    >
                      ワークショップ・アクティビティ →
                    </a>
                    <a 
                      href="https://horsemesse.jp/eventfoxchildren/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo hover:text-indigo-muted underline"
                    >
                      子供向けコンテンツ →
                    </a>
                  </div>
                </div>
              </div>
            </Collapsible>

            <Collapsible title="ご来場のご案内" defaultOpen={false}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="font-semibold text-indigo">🎫 入場無料</p>
                  <p className="text-sm text-indigo-muted">
                    入場料はかかりません。チケットも不要です。どなたでもお気軽にお越しください。
                  </p>
                </div>
                
                <div className="space-y-2">
                  <p className="font-semibold text-indigo">🕘 開催時間</p>
                  <p className="text-sm text-indigo-muted">
                    3日間とも 9:00〜17:00
                  </p>
                </div>
                
                <div className="space-y-2">
                  <p className="font-semibold text-indigo">💳 お支払い</p>
                  <p className="text-sm text-indigo-muted">
                    各ブースにて現金・キャッシュレス決済が利用できます。（一部現金不可の店舗あり）
                  </p>
                </div>
                
                <div className="space-y-2">
                  <p className="font-semibold text-indigo">🎁 レシートくじ</p>
                  <p className="text-sm text-indigo-muted">
                    ¥3,000（税抜）以上のお買い上げごとに、レシートくじが引けます。各出店棟のインフォメーションにてお楽しみください。
                  </p>
                </div>
                
                <div className="space-y-2">
                  <p className="font-semibold text-indigo">📦 配送サービス</p>
                  <p className="text-sm text-indigo-muted">
                    お買い上げ商品の配送も可能です（着払い）。大きなお買い物でも安心。各出店棟インフォメーションにてお申し付けください。
                  </p>
                </div>
                
                <div className="space-y-2">
                  <p className="font-semibold text-indigo">🍔 キッチンカー</p>
                  <p className="text-sm text-indigo-muted">
                    会場内にキッチンカーも出店。一日ゆっくりお過ごしいただけます。
                  </p>
                </div>
              </div>
            </Collapsible>
          </div>

          {/* Official Site Link */}
          <div className="text-center pt-4 space-y-4">
            <p className="text-indigo-muted">
              ホースメッセ2026の最新情報は公式サイトをご覧ください。
            </p>
            <a 
              href="https://horsemesse.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-indigo text-indigo hover:bg-indigo hover:text-kinari font-medium text-lg rounded-md transition-all duration-300"
            >
              ホースメッセ2026 公式サイト →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function ProfileImage({ src, name }: { src: string; name: string }) {
  const [error, setError] = useState(false)
  const initial = name.charAt(0)

  return (
    <div className="flex flex-col items-center gap-2 mb-6 md:mb-0 shrink-0">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-kinari-light shadow-md relative bg-indigo">
        {error ? (
          <div
            className="absolute inset-0 flex items-center justify-center text-kinari-light text-xl md:text-2xl font-serif font-semibold"
            aria-hidden
          >
            {initial}
          </div>
        ) : (
          <Image
            src={src}
            alt={name}
            fill
            className="object-cover"
            sizes="80px"
            onError={() => setError(true)}
          />
        )}
      </div>
      <span className="text-sm font-medium text-indigo">{name}</span>
    </div>
  )
}

export function YokoStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-indigo">
            40年越しの夢、そして馬たちへの想い
          </h2>

          <div className="space-y-10">
            {/* 8歳の出会い + Yoko profile */}
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <ProfileImage src="/images/profiles/yoko.jpg" name="Yoko" />
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-indigo">
                    8歳の出会い
                  </h3>
                  <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                    アメリカで初めて馬に触れた時、「この動物と生きていきたい」と確信しました。けれど家族の事情で、馬との暮らしは夢のまま40年が過ぎました。
                  </p>
                </div>
              </div>
            </div>

            {/* Marshallとの出会いが、すべてを変えた */}
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <ProfileImage src="/images/profiles/marshall.jpg" name="Marshall" />
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-indigo">
                    Marshallとの出会いが、すべてを変えた
                  </h3>
                  <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                    40年後、ふとしたきっかけで訪れた乗馬クラブで、Marshallに出会いました。彼は菊花賞を走った元競走馬。脚を痛めて引退し、なぜか私のもとにやってきました。
                  </p>
                  <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                    馬は1メートル離れた場所から人の心臓の音が聴こえると言われています。Marshallは私が疲れている日にはそっと寄り添い、子育てで心が折れそうな時も静かに支えてくれました。彼は、私にとって家族であり、友であり、人生の先生です。
                  </p>
                </div>
              </div>
            </div>

            {/* Lucasとの日々 */}
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <ProfileImage src="/images/profiles/lucas.jpg" name="Lucas" />
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-indigo">
                    Lucasとの日々
                  </h3>
                  <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                    その後、Lucasが家族に加わりました。彼は3歳での引退を余儀なくされた若い馬で、人への不信感を抱えていました。時間をかけて少しずつ心を開いてくれるようになり、今も一緒に成長を続けています。この3月には、彼と初めての競技会に出る予定です。
                  </p>
                  <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                    二頭と過ごす時間が、今の私の人生の中心です。
                  </p>
                </div>
              </div>
            </div>

            {/* Cloud Nineを始めた理由 — no image, Yoko already shown at top */}
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-indigo">
                Cloud Nineを始めた理由
              </h3>
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                馬好きのための上質な小物が、日本にはほとんどありません。「ないなら、自分が作ろう」。そう思って久留米絣と出会い、一つひとつ手で縫い始めました。
              </p>
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                そしてもう一つ。<strong className="text-indigo font-semibold">一頭でも多くの馬に、より良い暮らしを届けたい</strong>。MarshallとLucas、そして出会うすべての馬たちのために、私にできることを続けていきたいと思っています。
              </p>
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                午年の今年、ホースメッセで同じ想いを持つ皆さまとお会いできることを、心から楽しみにしています。
              </p>
            </div>
          </div>

          {/* Yuka Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-3 pt-8 border-t border-indigo-light">
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-indigo">
                もう一人の仲間、Yuka
              </h3>
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                Cloud Nineは、Yokoひとりのブランドではありません。
              </p>
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                長年の友人であり、カメラを愛するYukaと二人で立ち上げました。Yokoが馬のいる暮らしを久留米絣で届けるように、Yukaはカメラのある暮らしを届ける準備をしています。
              </p>
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                馬とカメラ、好きなものは違うけれど、「好きなものに囲まれた暮らしを、手仕事で届けたい」という想いは同じ。二人の「好き」が出会って、Cloud Nineは生まれました。
              </p>
              <p className="text-sm text-indigo-muted/70 italic">
                Yukaのカメラ部門は、ホースメッセ後にスタート予定です。お楽しみに。
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

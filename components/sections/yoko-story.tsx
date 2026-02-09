'use client'

import { motion } from 'framer-motion'

export function YokoStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-indigo">
            40年越しの夢、そして馬たちへの想い
          </h2>
          
          <div className="space-y-10">
            {/* 8歳の出会い */}
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-indigo">
                8歳の出会い
              </h3>
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                アメリカで初めて馬に触れた時、「この動物と生きていきたい」と確信しました。けれど家族の事情で、馬との暮らしは夢のまま40年が過ぎました。
              </p>
            </div>

            {/* Marshallとの出会いが、すべてを変えた */}
            <div className="space-y-3">
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

            {/* Lucasとの日々 */}
            <div className="space-y-3">
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

            {/* Cloud Nineを始めた理由 */}
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
        </motion.div>
      </div>
    </section>
  )
}

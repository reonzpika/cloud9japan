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
                アメリカで初めて馬に会った時、「これだ！」と直感しました。でも、家族からは馬禁止令が出て（笑）、馬を見ることすらNGに。
              </p>
            </div>

            {/* 40年後の再会 */}
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-indigo">
                40年後の再会
              </h3>
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                それから40年。こっそり乗馬クラブに通い始めて、Marshallに出会いました。Marshallは菊花賞っていう凄いその年の優秀な選ばれしトップ3歳馬十八頭で走るレースも出た事あるの。でも脚を痛めて引退して、なぜかど素人のお母さんの所にやってきたの。
              </p>
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                馬は1メートル遠くから人間の心臓が聴こえるから、私が調子悪い時にそっと寄り添ってくれて、子育て時代はよく助けられた。その後Lucasも家族に加わりました。
              </p>
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                Lucasはそれと対照的で今からが走る年齢の3歳を前に引退。あまり早く走れないし、噛みつくわ、蹴るわでとっても悪い子だったけど、多分ひどい目に遭ってたんだろうと思って、ど素人の私が更生させようと思って引き取ったのよ。今でもまだヤンチャなんだけど、それでも少しずつ良い子になってきてるから、諦めずに頑張ろうと思う。3月にはLucasと競技会に出る予定。
              </p>
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                今では、二頭と過ごす時間が私の人生の中心です。MarshallとLucasは、ただのペットではありません。家族であり、友達であり、人生の先生です。彼らと一緒にいる時間は、何にも代えられない宝物です。
              </p>
            </div>

            {/* Cloud Nineを始めた理由 */}
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-indigo">
                Cloud Nineを始めた理由
              </h3>
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                日本では馬の小物があまり店頭に並んでいなくて、「ないなら自分で作ろう」と思ったんです。馬好きとして、本当に欲しいものを。自分が使いたいと思えるものを。
              </p>
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                そして、もう一つ。<strong className="text-indigo font-semibold">一頭でも多くの馬に、より良い暮らしを届けたい</strong>という想いがあります。私ができることは小さいかもしれませんが、MarshallとLucas、そして出会うすべての馬たちのために、できる限りのことをしたい。
              </p>
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                午年の今年、ホースメッセで同じ想いを持つ皆さまとお会いできることを楽しみにしています。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

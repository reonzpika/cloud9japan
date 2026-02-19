'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/sections/header'
import { Footer } from '@/components/sections/footer'
import { TableOfContents } from '@/components/sections/table-of-contents'

const ABOUT_SECTIONS = [
  { id: 'section-1', title: '久留米絣とは' },
  { id: 'section-2', title: '12歳の少女が生んだ伝統' },
  { id: 'section-3', title: '30の工程、3ヶ月の手仕事' },
  { id: 'section-4', title: 'なぜ「かすれる」のか' },
  { id: 'section-5', title: '藍の力' },
  { id: 'section-6', title: '久留米絣のいま' },
  { id: 'section-7', title: 'Cloud Nineと久留米絣' },
]

export default function AboutKurumeKasuri() {
  return (
    <>
      <Header />
      
      <main className="bg-kinari">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-indigo-light to-kinari">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center space-y-6"
            >
              <Link 
                href="/"
                className="inline-flex items-center text-sm text-indigo-muted hover:text-indigo transition-colors mb-4"
              >
                ← ホームに戻る
              </Link>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-indigo leading-tight">
                久留米絣を知る
              </h1>
              
              <p className="text-xl md:text-2xl text-indigo-muted font-medium">
                220年の手仕事、世界に一つの布
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content with TOC */}
        <div className="container py-12 md:py-16">
          <div className="grid lg:grid-cols-[250px_1fr] gap-8 lg:gap-12">
            {/* Table of Contents - Desktop Only */}
            <aside className="hidden lg:block">
              <TableOfContents sections={ABOUT_SECTIONS} variant="sidebar" />
            </aside>

            {/* Main Content */}
            <article className="space-y-20 md:space-y-28">
              
              {/* Section 1: 久留米絣とは */}
              <section id="section-1" className="scroll-mt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-indigo">
                    220年、受け継がれてきた手仕事の布
                  </h2>

                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                    <img 
                      src="/images/about-kurumekasuri/kasuri-texture-closeup.png"
                      alt="久留米絣の布のクローズアップ - 藍と白の絣模様のテクスチャー"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="prose prose-lg max-w-none space-y-6">
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      糸を括り、藍で染め、織る。
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      言葉にすればたったこれだけのことに、30以上の工程と、2〜3ヶ月の時間がかかります。
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      久留米絣（くるめかすり）は、福岡県久留米市を中心とした筑後地方で、220年以上にわたって織り続けられている綿の織物です。糸をあらかじめ部分的に括って染め分け、その糸を織り上げることで模様を生み出す「絣」の技法。日本三大絣のひとつであり、1957年に国の重要無形文化財に、1976年に伝統的工芸品に指定されています。
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      日本三大絣の中で、産地として今も残っているのは久留米絣だけです。広島の備後絣はデニムへ、愛媛の伊予絣はタオルへと姿を変えました。久留米だけが、220年前と同じ技法で、今日も布を織り続けています。
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Section 2: 12歳の少女が生んだ伝統 */}
              <section id="section-2" className="scroll-mt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-indigo">
                    はじまりは、一人の少女の「なぜ？」
                  </h2>

                  <div className="aspect-[3/2] relative overflow-hidden rounded-lg">
                    <img 
                      src="/images/about-kurumekasuri/inoue-den-discovery.png"
                      alt="井上伝の発見 - 色褪せた藍染め布がほどかれた瞬間"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="prose prose-lg max-w-none space-y-6">
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      1800年頃。久留米藩の城下町に暮らす12歳の少女、井上伝（いのうえでん、1788〜1869年）は、色褪せた藍染めの古着に白い斑点模様を見つけました。
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      「なぜ、ここだけ白いのだろう？」
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      伝は布を解き、糸を一本一本調べました。そして気づいたのです。糸の一部が何かの理由で染まらずに残ったところが、模様になっていることに。
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      この発見から、伝は糸を括ってから藍で染め、白い部分を残す技法を考案しました。それが久留米絣のはじまりです。
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      他の絣が東南アジアや琉球から伝来したのに対し、久留米絣は伝が独自に発明した、世界でも珍しい織物です。少女の好奇心から生まれた技法は、久留米藩の奨励を受けて急速に発展し、明治以降は庶民の衣服として全国で愛用されるようになりました。最盛期には年間200〜300万反が生産されていたと言われています。
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      伝は生涯にわたって技法の改良に取り組み、1869年に81歳で亡くなるまで、久留米絣の発展に尽くしました。
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      一人の少女の「なぜ？」が、200年以上続く伝統を生んだ。その物語は、今も私たちの手元にある一枚の布につながっています。
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Section 3: 30の工程、3ヶ月の手仕事 */}
              <section id="section-3" className="scroll-mt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-indigo">
                    一枚の布ができるまで
                  </h2>

                  <p className="text-lg md:text-xl text-indigo-muted leading-relaxed">
                    久留米絣は、図案の作成から仕上げまで30以上の工程を経て完成します。そのひとつひとつに、職人の経験と技が必要です。ここでは、主な工程をご紹介します。
                  </p>

                  {/* 工程1: 図案・柄づくり */}
                  <div className="space-y-4 p-6 md:p-8 bg-indigo-light rounded-lg">
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-indigo">
                      工程1: 図案・柄づくり
                    </h3>
                    <h4 className="text-xl md:text-2xl text-indigo font-medium">
                      すべては、一枚の設計図から
                    </h4>
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      経糸と緯糸の配分数、糸の伸縮率、絣糸の特性を考慮しながら、柄をデザインします。図案をもとに糸の配分を計算した「絵紙」、伸縮を踏まえて描き直した「下絵」を作成。長年の経験と知識がなければ、この最初の一歩すら踏み出せません。
                    </p>
                  </div>

                  {/* 工程2: 括り */}
                  <div className="space-y-4 p-6 md:p-8 bg-kinari-light rounded-lg border-2 border-indigo-light">
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-indigo">
                      工程2: 括り（くくり）
                    </h3>
                    <h4 className="text-xl md:text-2xl text-indigo font-medium">
                      柄を決める、もっとも重要な工程
                    </h4>
                    
                    <div className="aspect-video relative overflow-hidden rounded-lg">
                      <img 
                        src="/images/about-kurumekasuri/process-kukuri-tying.png"
                        alt="括り作業 - 職人が麻の繊維で糸を括る様子"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      図案に従い、染めたくない部分をアラソウ（麻の一種）で一か所ずつ固く括ります。染色中にほどけないように、しかし後で解くときには解きやすいように。この相反する要求を満たすには、熟練の技が必要です。
                    </p>
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      括りの精度が、完成する布の柄を決定づけます。久留米絣では、機械では出せない深い味わいを生むために、この工程は今でも職人の手で行われています。
                    </p>
                  </div>

                  {/* 工程3: 藍染め */}
                  <div className="space-y-4 p-6 md:p-8 bg-indigo-light rounded-lg">
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-indigo">
                      工程3: 藍染め（あいぞめ）
                    </h3>
                    <h4 className="text-xl md:text-2xl text-indigo font-medium">
                      「藍は生きている」
                    </h4>
                    
                    <div className="aspect-video relative overflow-hidden rounded-lg">
                      <img 
                        src="/images/about-kurumekasuri/process-aizome-dyeing.png"
                        alt="藍染め工程 - 職人が藍甕に糸を浸す様子"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      職人たちがそう語るほど、藍染めは繊細な工程です。タデ科の藍を乾燥させ、水を加えて3ヶ月ほど発酵させた「すくも」を原料に、木灰汁や貝灰を加えて2〜3週間かけて染液を建てます。
                    </p>
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      括った糸束を藍甕に浸し、引き上げ、空気に触れさせて発色させる。この作業を何十回と繰り返します。薄い藍液で何度も染め重ねることで、色落ちしにくい深い藍に仕上がります。
                    </p>
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      茶色い藍液が空気に触れた瞬間、鮮やかな藍色に変わる——その様子は、まるで魔法のようです。
                    </p>
                  </div>

                  {/* 工程4: 糸解き */}
                  <div className="space-y-4 p-6 md:p-8 bg-kinari-light rounded-lg border-2 border-indigo-light">
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-indigo">
                      工程4: 糸解き（かすりとき）
                    </h3>
                    <h4 className="text-xl md:text-2xl text-indigo font-medium">
                      模様が現れる瞬間
                    </h4>
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      染め上がった糸束から、括っていた部分をほどきます。すると、括られていた部分だけが白く残り、藍と白の染め分けられた糸が現れます。この瞬間、図案で描いた模様が糸の上にはじめて姿を見せます。
                    </p>
                  </div>

                  {/* 工程5: 織り */}
                  <div className="space-y-4 p-6 md:p-8 bg-indigo-light rounded-lg">
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-indigo">
                      工程5: 織り（おり）
                    </h3>
                    <h4 className="text-xl md:text-2xl text-indigo font-medium">
                      100年前の織機が、今日も動いている
                    </h4>
                    
                    <div className="aspect-video relative overflow-hidden rounded-lg">
                      <img 
                        src="/images/about-kurumekasuri/process-ori-weaving.png"
                        alt="織り工程 - ヴィンテージのシャトル織機で織る職人"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      経糸と緯糸の柄を合わせながら、丹念に一段ずつ織り上げていきます。産地では、100年ほど前に開発されたシャトル織機が現役で使われています。現代の革新織機より織りのスピードがゆるやかなため、柔らかな風合いの生地を織ることができます。
                    </p>
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      手織りの場合は、投げ杼（なげひ）で緯糸を通し、筬（おさ）を手前にトントンと打ち込む作業を繰り返します。綜絖の高さ、足の踏み加減、筬の打ち具合——すべてが最終的な布の質を決めます。
                    </p>
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      そして、この織りの工程で、久留米絣ならではの現象が起こります。
                    </p>
                  </div>

                  {/* 工程6: 仕上げ */}
                  <div className="space-y-4 p-6 md:p-8 bg-kinari-light rounded-lg border-2 border-indigo-light">
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-indigo">
                      工程6: 仕上げ
                    </h3>
                    <h4 className="text-xl md:text-2xl text-indigo font-medium">
                      自然の光と風で、布が完成する
                    </h4>
                    
                    <div className="aspect-video relative overflow-hidden rounded-lg">
                      <img 
                        src="/images/about-kurumekasuri/process-shiage-drying.png"
                        alt="仕上げ工程 - 久留米絣の反物が屋外で天日干しされている様子"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      糊を落とすためにぬるま湯に浸け、水洗いした後、竿にかけて天日でじっくり乾燥させます。多くの工程と人の手をかけてつくられた布が、自然の風にたなびく姿。そこには、時間をかけた手仕事だけが持つ、穏やかな美しさがあります。
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Section 4: なぜ「かすれる」のか */}
              <section id="section-4" className="scroll-mt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-indigo">
                    同じものは二つとない——その理由
                  </h2>

                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                    <img 
                      src="/images/about-kurumekasuri/kasuri-no-two-alike.png"
                      alt="同じ柄の久留米絣を並べた写真 - かすれの違いが見える"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="prose prose-lg max-w-none space-y-6">
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      「絣（かすり）」という名前は、模様の輪郭が「かすれて」見えることに由来します。
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      これは欠点ではありません。久留米絣の最大の特徴です。
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      あらかじめ括って染め分けた糸を織機にかけると、織りの過程で糸がわずかに動きます。このごくわずかな動きによって、模様の輪郭に自然な「にじみ」が生まれます。機械で均一に印刷されたプリントにはない、有機的で温かみのある表情。
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      visvimの創設者、中村ヒロキ氏はこう語っています。「絣の柄が持つ滲みやズレは不均一で有機的な味わいがある。」
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      この糸の動きは完全にコントロールすることができません。だから、同じ図案で、同じ糸で、同じ織機で織っても、まったく同じ布は物理的に生まれないのです。
                    </p>

                    <div className="p-8 bg-artisan-gold/10 border-2 border-artisan-gold rounded-lg my-8">
                      <p className="text-xl md:text-2xl text-indigo font-semibold text-center">
                        世界に一つだけの布。
                      </p>
                    </div>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      それは、マーケティングの言葉ではありません。久留米絣の物理的な事実です。
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      あなたの馬が世界で唯一の存在であるように、この布も世界に一つだけ。Cloud Nineが久留米絣を選んだ理由は、ここにあります。
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Section 5: 藍の力 */}
              <section id="section-5" className="scroll-mt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-indigo">
                    自然が生んだ、暮らしを守る機能
                  </h2>

                  <p className="text-lg md:text-xl text-indigo-muted leading-relaxed">
                    久留米絣の伝統的な染料である天然藍には、美しい色だけでなく、暮らしに役立つ機能が備わっています。何百年もの間、日本人の生活を支えてきた藍の力をご紹介します。
                  </p>

                  <div className="aspect-[3/2] relative overflow-hidden rounded-lg">
                    <img 
                      src="/images/about-kurumekasuri/indigo-hands.png"
                      alt="藍染めで染まった職人の手"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* 抗菌 */}
                  <div className="space-y-4 p-6 md:p-8 bg-indigo-light rounded-lg">
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-indigo">
                      抗菌
                    </h3>
                    <h4 className="text-xl md:text-2xl text-indigo font-medium">
                      菌を増やさない、穏やかな力
                    </h4>
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      天然藍に含まれるトリプタンスリンという成分には、抗菌作用があることが研究で確認されています。「殺菌」ではなく「抗菌」——菌を殺すのではなく、増殖を抑える穏やかな働きかけです。
                    </p>
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      戦国時代、武士は藍染めの下着を身につけて戦場に臨みました。傷口に藍の布を当てると化膿しにくいことを、経験的に知っていたのです。
                    </p>
                  </div>

                  {/* 防虫 */}
                  <div className="space-y-4 p-6 md:p-8 bg-kinari-light rounded-lg border-2 border-indigo-light">
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-indigo">
                      防虫
                    </h3>
                    <h4 className="text-xl md:text-2xl text-indigo font-medium">
                      虫を寄せつけない、先人の知恵
                    </h4>
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      江戸時代、農民は田畑の仕事に藍染めの着物を着ていました。虫やヘビを寄せつけない効果があることを、暮らしの中で実感していたからです。
                    </p>
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      古代エジプトでは、ミイラに藍染めの麻布が巻かれていたことが確認されています。4000年前から、人々は藍の力を活用してきました。
                    </p>
                  </div>

                  {/* UVカット */}
                  <div className="space-y-4 p-6 md:p-8 bg-indigo-light rounded-lg">
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-indigo">
                      UVカット
                    </h3>
                    <h4 className="text-xl md:text-2xl text-indigo font-medium">
                      紫外線から守る
                    </h4>
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      藍染めの布には、紫外線を遮る効果があることが学術研究で確認されています。屋外での活動が多い暮らしに、自然の力で寄り添います。
                    </p>
                  </div>

                  {/* 経年変化 */}
                  <div className="space-y-4 p-6 md:p-8 bg-kinari-light rounded-lg border-2 border-indigo-light">
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-indigo">
                      経年変化
                    </h3>
                    <h4 className="text-xl md:text-2xl text-indigo font-medium">
                      使うほど、美しくなる
                    </h4>
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      久留米絣の綿布は、洗うたびに柔らかく、肌に馴染んでいきます。藍の色は、革のように美しく変化していきます。色あせではなく、味わいの深まり。
                    </p>
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      10年、20年と使い込むことで、あなただけの風合いが生まれます。新品が一番美しいのではなく、時間とともにもっと美しくなる。それが、藍染めの綿布の魅力です。
                    </p>
                  </div>

                  {/* JAPAN BLUE */}
                  <div className="space-y-4 p-6 md:p-8 bg-indigo-light rounded-lg">
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-indigo">
                      JAPAN BLUE
                    </h3>
                    <h4 className="text-xl md:text-2xl text-indigo font-medium">
                      世界が認めた、日本の青
                    </h4>
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      明治時代に来日したイギリス人化学者ロバート・ウィリアム・アトキンソンは、日本各地で目にする藍色に驚き、「JAPAN BLUE」と名づけました。
                    </p>
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      寒色でありながら温かみを感じる藍の色は、今も世界中の人々を魅了し続けています。
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Section 6: 久留米絣のいま */}
              <section id="section-6" className="scroll-mt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-indigo">
                    守り、つなぐ——伝統のいまとこれから
                  </h2>

                  <div className="aspect-video relative overflow-hidden rounded-lg">
                    <img 
                      src="/images/about-kurumekasuri/modern-kasuri-colours.png"
                      alt="カラフルな現代の久留米絣製品のモザイク"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="prose prose-lg max-w-none space-y-6">
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      最盛期には年間200〜300万反が生産された久留米絣。しかし、戦後の洋装化、安価な合成染料の普及により、需要は激減しました。
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      かつて何百人もいた職人は、現在ではわずか数人。手織りの技術を持つ職人は、本当に限られた人数しかいません。日本三大絣のうち、産地として存続しているのは久留米だけです。
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      しかし、久留米絣は消えていません。
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      若い世代の織元が新しい柄に挑戦し、スニーカーやバッグなど現代の暮らしに溶け込む製品が生まれています。世界的なファッションブランドが久留米絣に注目し、コラボレーションを行う動きも出てきました。
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      伝統を守ることは、博物館に閉じ込めることではありません。暮らしの中で使い、楽しみ、その価値を次の世代に伝えていくこと。
                    </p>

                    <div className="p-8 bg-artisan-gold/10 border-2 border-artisan-gold rounded-lg my-8">
                      <p className="text-xl md:text-2xl text-indigo font-semibold text-center leading-relaxed">
                        久留米絣を手に取っていただくこと、それ自体が、220年の伝統を未来へつなぐ一歩になります。
                      </p>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Section 7: Cloud Nineと久留米絣 */}
              <section id="section-7" className="scroll-mt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-indigo">
                    馬を愛する人のための、久留米絣
                  </h2>

                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                    <img 
                      src="/images/homepage/hero-image.png"
                      alt="Cloud Nine 久留米絣製品 - 馬モチーフのポーチとチャーム"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="prose prose-lg max-w-none space-y-6">
                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      Cloud Nineの創設者Yokoが久留米絣と出会ったとき、直感的に思ったことがあります。
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      「この布は、馬のいる暮らしにぴったりだ。」
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      藍の持つ防虫効果は、厩舎や馬場で過ごす時間に寄り添います。抗菌作用は、馬との暮らしに欠かせない衛生面をサポートします。そして何より、使い込むほどに柔らかく美しくなる性質は、馬と長い時間を共に過ごす人の暮らしに、自然に溶け込みます。
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      久留米絣の「同じものは二つと作れない」という物理的な特性は、Cloud Nineの想いそのものです。あなたの馬が世界で唯一の存在であるように、あなたの持つCloud Nineの製品も、世界にたった一つ。
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      Yokoは、久留米絣の職人が織った布に、馬の刺繍やにんじんチャームを一つひとつ手作業で加えています。伝統の布が、馬を愛する人のための特別なアイテムに生まれ変わる瞬間。それがCloud Nineのものづくりです。
                    </p>

                    <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                      馬好きのための上質な小物が、日本にはほとんどありません。だから、自分で作ることにしました。220年の伝統と、馬への想い。その二つが出会って生まれたCloud Nineを、ぜひ手に取ってみてください。
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* CTA Section */}
              <section className="scroll-mt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="p-8 md:p-12 bg-gradient-to-br from-indigo-light to-artisan-gold/20 rounded-2xl space-y-6 text-center"
                >
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-indigo">
                    久留米絣を、手に取ってみませんか？
                  </h2>
                  
                  <p className="text-base md:text-lg text-indigo-muted leading-relaxed max-w-2xl mx-auto">
                    ホースメッセ2026（2月21〜23日、JRA馬事公苑）のブースF6にて、実際に久留米絣の質感を体験いただけます。画面では伝わらない、手織りの柔らかさと藍の深さを、ぜひご自身の手で確かめてください。
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <a 
                      href="/#horse-messe-section" 
                      className="inline-flex items-center justify-center px-8 py-4 bg-artisan-gold hover:bg-artisan-gold/90 text-white font-medium text-lg rounded-md transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
                    >
                      ホースメッセでお会いしましょう（ブースF6）
                    </a>
                    <a 
                      href="https://instagram.com/cloudnine1017"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 bg-indigo hover:bg-indigo-dark text-white font-medium text-lg rounded-md transition-all duration-300 active:scale-95"
                    >
                      Instagramで制作過程を見る
                    </a>
                  </div>
                </motion.div>
              </section>

            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

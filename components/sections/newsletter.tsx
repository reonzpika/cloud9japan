'use client'

import { motion } from 'framer-motion'

export function Newsletter() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-indigo">
            オンラインショップ開始のお知らせを受け取る
          </h2>
          
          <p className="text-lg text-indigo-muted">
            新作情報、限定販売のお知らせをお届けします
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="メールアドレスを入力"
              className="flex-1 px-4 py-3 border-2 border-indigo/20 rounded-md focus:border-artisan-gold focus:ring-2 focus:ring-artisan-gold/20 transition-colors bg-white text-indigo"
              disabled
            />
            <button
              type="submit"
              className="px-6 py-3 bg-indigo hover:bg-indigo-dark text-white font-medium rounded-md transition-colors disabled:opacity-50"
              disabled
            >
              最新情報を受け取る
            </button>
          </form>
          
          <p className="text-sm text-indigo-muted pt-4">
            ご登録いただいたメールアドレスは、Cloud Nineからのお知らせ以外には使用いたしません。
          </p>
        </motion.div>
      </div>
    </section>
  )
}

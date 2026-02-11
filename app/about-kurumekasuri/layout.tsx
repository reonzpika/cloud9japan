import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '久留米絣を知る | 220年の手仕事、世界に一つの布 | Cloud Nine',
  description: '久留米絣は220年以上続く日本の伝統織物。1957年重要無形文化財指定。30以上の工程を手作業で行い、同じものは二つと作れない世界唯一の布。井上伝、藍染め、手織り、日本三大絣、伝統工芸品。',
  keywords: ['久留米絣', '久留米絣とは', '重要無形文化財', '藍染め', '手織り', '井上伝', '日本三大絣', '伝統工芸品', 'Cloud Nine'],
};

export default function AboutKurumeKasuriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

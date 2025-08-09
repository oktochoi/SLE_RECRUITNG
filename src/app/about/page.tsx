import Image from 'next/image';
import Header from "@/components/Header";
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div>
      <div className="pb-[120px]">
        <Header />
        {/* ✅ 가로 100%, 세로는 비율에 따라 자동 */}
        <Image
          src="/aboutpage.svg"
          alt="이미지"
          width={1920}          // 대략적 원본 비율만 맞추면 됩니다 (예: 1920x1080)
          height={1080}
          sizes="100vw"
          className="w-full h-auto"
          priority
        />
      </div>

      <Footer />
    </div>
  );
}

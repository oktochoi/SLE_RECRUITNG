import Image from 'next/image';
import Header from "@/components/Header";
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div>
        <div className="pb-[120px]">
        <Header />
        <Image src="/aboutpage.svg" alt="이미지" width={1920} height={10} />
        </div>
        <div>
           <Footer />
        </div>
    </div>
  );
}

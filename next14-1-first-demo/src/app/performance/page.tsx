import Hero from '@/components/hero';
import performanceImg from 'public/performance.jpg';

export default function Performance() {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt="welding"
      title="We serve high performance applications"
    />
  );
}

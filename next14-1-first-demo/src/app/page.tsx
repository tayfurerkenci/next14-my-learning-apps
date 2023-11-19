import Hero from '@/components/hero';
import home from 'public/home.jpg';

export default function Home() {
  return (
    <Hero
      imgData={home}
      imgAlt="car factory"
      title="Professional Cloud Hosting"
    />
  );
}

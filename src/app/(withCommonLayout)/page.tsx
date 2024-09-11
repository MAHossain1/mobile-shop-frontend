import BrandSlider from '@/components/ui/BrandSlider';
import Carousel from '@/components/ui/Carousel';
import Featured from '@/components/ui/Featured';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <div>
      {/* <BannerSlider /> */}
      <Carousel />
      <BrandSlider />
      <Featured />
      <Footer />
    </div>
  );
}

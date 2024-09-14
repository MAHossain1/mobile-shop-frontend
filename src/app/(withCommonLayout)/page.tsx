import BrandSlider from '@/components/ui/BrandSlider';
import Carousel from '@/components/ui/Carousel';
import CustomerTestimonials from '@/components/ui/CustomerTestimonials';
import Featured from '@/components/ui/Featured';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <div>
      <Carousel />
      <BrandSlider />
      <Featured />
      <CustomerTestimonials />
      <Footer />
    </div>
  );
}

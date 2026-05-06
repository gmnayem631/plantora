import CareLevelGuide from "@/components/CareLevelGuide";
import FeaturedPlants from "@/components/FeaturedPlants";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import PlantOfTheWeek from "@/components/PlantOfTheWeek";
import PlantStats from "@/components/PlantStats";
import WhyPlantora from "@/components/WhyPlantora";

export default function Home() {
  return (
    <section className="">
      <Hero></Hero>
      <FeaturedPlants></FeaturedPlants>
      <WhyPlantora></WhyPlantora>
      <CareLevelGuide></CareLevelGuide>
      <PlantStats></PlantStats>
      <PlantOfTheWeek></PlantOfTheWeek>
      <Newsletter></Newsletter>
    </section>
  );
}

import CareLevelGuide from "@/components/CareLevelGuide";
import FeaturedPlants from "@/components/FeaturedPlants";
import Hero from "@/components/Hero";
import PlantOfTheWeek from "@/components/PlantOfTheWeek";
import WhyPlantora from "@/components/WhyPlantora";

export default function Home() {
  return (
    <section className="">
      <Hero></Hero>
      <FeaturedPlants></FeaturedPlants>
      <WhyPlantora></WhyPlantora>
      <CareLevelGuide></CareLevelGuide>
      <PlantOfTheWeek></PlantOfTheWeek>
    </section>
  );
}

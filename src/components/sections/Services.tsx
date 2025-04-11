import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { services } from "../../utils/services-data";
import { ServiceCard } from "../cards/ServiceCard";

export const Services = () => {
  return (
    <section id="services">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>Our Services</Title>
          <Paragraph>Unlock the potential of advances machine learning, natural language processing and predictive analytics. our services include:</Paragraph>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, key) => (
            <ServiceCard key={key} title={service.title} description={service.description} icon={service.icon}></ServiceCard>
          ))}
        </div>
      </Container>
    </section>
  );
};

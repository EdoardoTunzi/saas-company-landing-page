import { AiOutlineThunderbolt } from "react-icons/ai";
import { Info } from "../cards/Info";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { IoStarOutline } from "react-icons/io5";

export const AboutUs = () => {
  return (
    <section id="about-us">
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full h-80 sm:h-100 relative">
            <img
              src="https://images.pexels.com/photos/4389742/pexels-photo-4389742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="vr-visor"
              className=" w-full h-full object-cover rounded-3xl shadow.lg relative z-10"
            />
          </div>
        </div>

        <div className="w-full md:max-w-7/12 lg:w-1/2 flex flex-col">
          <Title> About Our AI Solution</Title>
          <div className="mt-3">
            <Paragraph>
              We are on a mission to empower business with transformative AI technology. Our team of experts combines industry leading research with innovative
              algorithms to deliver a platform that adapts to your unique needs. Join us and lead the digital revolution in your industry.
            </Paragraph>
          </div>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <Info title="Mission" description="Our mission is to use AI for good of humanity and the planet">
              <AiOutlineThunderbolt size={25} />
            </Info>
            <Info title="Vision" description="Our vision is to drive business innovation and growth.">
              <IoStarOutline size={25} />
            </Info>
          </div>
        </div>
      </Container>
    </section>
  );
};

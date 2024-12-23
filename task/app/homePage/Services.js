import Image from "next/image";
import digital_menu from "./images/digital_menu.png";
import online_payment from "./images/online_payment.png";
import easy_managment from "./images/easy_managment.png";
import reservation_managment from "./images/reservation_managment.png";
import free_marketing from "./images/free_marketing.png";

const Services = () => {
  const services = [
    {
      title: "Digital Menu",
      description:
        "Make your menu digital edit it easy add or remove items without any additional cost",
      image: digital_menu,
    },
    {
      title: "Online Payment",
      description:
        "Online payment and reserved the money in less than 3 days make your customer order and pay online",
      image: online_payment,
    },
    {
      title: "Easy Management",
      description: "Simplifies restaurant management",
      image: easy_managment,
    },
    {
      title: "Reservation Management",
      description: "Manages table reservations",
      image: reservation_managment,
    },
    {
      title: "Free Marketing Consultation Call",
      description: "Offers a consultation to grow sales",
      image: free_marketing,
    },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-8xl Jomhuria-regular text-purple-700 mb-10">
          OUR SERVICES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
          {services.slice(0, -1).map((service, index) => (
            <div
              key={index}
              className="w-4/5 bg-white p-6 shadow-lg rounded-lg text-center transform transition-transform hover:scale-105"
              style={{ marginLeft: "10%" }}
            >
              <Image
                src={service.image}
                alt={service.title}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-4xl poppins-bold text-purple-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 poppins-semibold text-xl text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <div className="w-4/5 md:w-2/5 bg-white p-6 shadow-lg rounded-lg text-center transform transition-transform hover:scale-105">
            <Image
              src={services[services.length - 1].image}
              alt={services[services.length - 1].title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h3 className="text-4xl poppins-bold text-purple-700 mb-2">
              {services[services.length - 1].title}
            </h3>
            <p className="text-gray-600 poppins-semibold text-xl text-center">
              {services[services.length - 1].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

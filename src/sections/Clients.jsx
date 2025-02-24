import React from "react";
import image1 from "../assets/image.png";
import { CircleUserRound } from "lucide-react";
import { motion } from "framer-motion";
const Clients = () => {
  return (
    <>
      <div className="w-full my-20">
        <div className="flex flex-col container mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-row container mx-auto p-4 gap-5"
          >
            <a href="https://www.instagram.com/lelio_chemane?igsh=OHNqczZndnNwNWJq">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/instagram-new--v1.png"
                alt="instagram-new--v1"
                className=""
              />
            </a>
            <a href="https://www.behance.net/lliochemane">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/behance.png"
                alt="behance"
              />
            </a>
            <a href="https://wa.me/qr/J5I3I7FKI3ECN1">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/whatsapp.png"
                alt="whatsapp"
              />
            </a>
            <a href="">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/fluency/48/filled-message.png"
                alt="filled-message"
              />
            </a>
          </motion.div>

          {/*Image Card*/}
          <div className="flex container mx-auto justify-center relative">
            <div className="relative">
              {/* First Card - Above the image on small devices */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className=" group
        static md:absolute md:top-4 md:-right-96 md:transform md:-translate-x-1/2 
        mt-4 flex justify-center 
      "
              >
                <div className="flex w-96 h-36 bg-white space-x-4 border-red-500 border-2 hover:bg-black  transition-all duration-300 rounded-xl shadow-2xl justify-center items-center">
                  <img
                    src={image1}
                    alt=""
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="flex-col p-2">
                    <p className="text-3xl font-bold text-center group-hover:text-white">
                      Lélio Chemane
                    </p>
                    <p className="text-xl font-semibold text-center group-hover:text-white">
                      Designer Gráfico
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Main Image */}
              <img src={image1} alt="" className="max-h-screen" />

              {/* Second Card - Below the image on small devices */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className=" group 
        static md:absolute md:bottom-4 md:-left-0 md:transform md:-translate-x-1/2 
        mt-4 flex justify-center p-4
      "
              >
                <div className="flex w-96 h-36 md:w-[400px] bg-white space-x-4 border-red-500 border-2 hover:bg-black  transition-all duration-300 rounded-xl shadow-2xl justify-center items-center">
                  <div className="w-16 h-16">
                    <CircleUserRound className="w-full h-full group-hover:text-white" />
                  </div>
                  <div className="flex-col p-2">
                    <p className="text-4xl md:text-6xl font-bold text-center group-hover:text-white">
                      +50
                    </p>
                    <p className="text-xl md:text-3xl font-semibold text-center group-hover:text-white">
                      Clientes Atendidos
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;

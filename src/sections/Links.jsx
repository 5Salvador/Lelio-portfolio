import React from "react";
import image from "../assets/orçameto.png";
import image2 from "../assets/Portfolio.png";
import { motion } from "framer-motion";

const Links = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="flex flex-col p-4 space-y-2 md:ml-40">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-2xl font-bold md:text-5xl"
          >
            Links importantes
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-xl font-bold "
          >
            Clique nos cards para acessar!
          </motion.p>
        </div>

        <div className="flex-col my-20 w-full">
          <a href="https://wa.me/qr/J5I3I7FKI3ECN1" className="">
            <img src={image} alt="" className="min-w-full -skew-y-3 " />
          </a>
          <a href="https://www.behance.net/lliochemane" className="">
            <img src={image2} alt="" className="w-full -skew-y-3 " />
          </a>
        </div>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col space-y-4 p-4 container mx-auto my"
        >
          <h1 className="text-2xl font-bold md:text-5xl md:text-center">
            Quem é Lélio Chemane?
          </h1>
          <p className="text-md md:text-2xl font-bold md:text-center">
            O especialista por trás do seu projto
          </p>
          <p className="md:text-4xl md:text-center">
            Com formação em Designer Gráfico e experiência, ajudo empresas a
            transformar sua presenças online, elevando a percepção de valores
            de seus produtos e serviços através de designs que não apenas
            impressionam, mas que realmente convertem.
          </p>
          <p className="md:text-4xl md:text-center">
            Tive o privilégio de colaborar com empresas de diversos tamanhos,
            desde pequenos empreendedores até grandes corporações. O meu
            objetivo é criar soluções visuais que não só impressionam, mas
            também geram resultados. O meu foco está em desenvolver artes que,
            além de capturar a atenção, também convertem e impulsionam o sucesso
            dos negócios.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Links;

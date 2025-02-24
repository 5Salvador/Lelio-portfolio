import React from 'react'
import { motion } from "framer-motion"

const Contact = () => {
  const [result, setResult] = React.useState("");
  const apiKey = import.meta.env.VITE_API_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviado...");
    const formData = new FormData(event.target);

    formData.append("access_key", apiKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Messagem enviada com sucesso!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col space-y-4 p-4'>
        <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
         className='flex flex-col space-y-3 justify-center'>
            <h1 className='text-center text-2xl font-bold md:text-5xl'>Contate-me</h1>
            <p className='text-center text-xl md:text-2xl'>Pronto para transformar sua visão em realidade? Vamos conversar sobre como posso ajudar seu projeto a alcançar novos patamares. Entre em contato comigo para discutir suas ideias e objetivos.</p>
        </motion.div>

        {/* Contact Form */}
        <div className='my-20'>
        <form onSubmit={onSubmit} className='p-2'>
          <div className="flex flex-col space-y-4 items-center">
            <input type="text" placeholder="Nome" className="p-4 w-full md:w-1/2  border rounded-3xl  bg-[#eae8e8]" />
            <input type="email" placeholder="Email" className="p-4 w-full md:w-1/2  border rounded-3xl  bg-[#eae8e8]" />
            <input type="Numero" placeholder="Numero" className="p-4 w-full md:w-1/2  border rounded-3xl  bg-[#eae8e8]" />
            <textarea placeholder="Mensagem" className="p-4 w-full md:w-1/2  h-48 border rounded-3xl  bg-[#eae8e8]" />
          </div>

          <div className="flex flex-col space-y-2 mt-5 items-center">
            <button type="submit" className="p-4 w-1/2 bg-blue-500 text-white font-bold  border rounded-3xl hover:bg-blue-600 transition-all duration-300">Enviar</button>
          </div>
        </form>
        <div className='items-center'>
        <span className='text-center'>{result}</span>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
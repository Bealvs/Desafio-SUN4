import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { motion } from "motion/react"


export const ContactUs = () => {
  const formEmail = useRef<HTMLFormElement>(null);
  const sendEmail = async (e: any) => {
    e.preventDefault();
    console.log(formEmail.current)

    await emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formEmail.current!, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Formulário enviado com sucesso!');
        },
        (error) => {
          console.log('FAILED...', error);
          toast.error('Falha ao enviar o formulário. Tente novamente mais tarde.');
        },
      );
    }

  return (
    <motion.form initial={{ opacity: 0 }} transition={{duration: 1.5}} whileInView={{ opacity: 1}} ref={formEmail} onSubmit={sendEmail} className='flex flex-col items-center bg-white md:w-[30%] w-[90%] h-[100%] border-2-[#060724] rounded-tl-2xl rounded-br-2xl shadow-lg shadow-[#006de1] transition-transform ease-in-out duration-300 hover:scale-105 p-10'>
                <h2 className='text-3xl font-bold'>Fale conosco</h2>
                <div className='flex flex-col gap-5 mt-10 w-full'>
                    <div className='flex flex-col gap-2'>
                        <label className='self-start'>Nome:</label>
                        <input type="text" placeholder='Seu nome...' className='shadow-md p-2 focus:outline-none focus:shadow-[#006de193] border-[#006de1] border-2 rounded-[5px]' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='self-start'>Email:</label>
                        <input name="email" type="email" placeholder='exemplo@gmail.com' className='shadow-md p-2 focus:outline-none focus:shadow-[#006de193] border-[#006de1] border-2 rounded-[5px]' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='self-start'>Dúvida:</label>
                        <textarea placeholder='Tenho uma dúvida com relação a...' className='shadow-md max-h-30
                        min-h-12 p-2 focus:outline-none focus:shadow-[#006de193] border-[#006de1] border-2 rounded-[5px]' />
                    </div>
                </div>
                <button type='submit' className="group mt-5 px-4 py-2 border-1 border-[#006de1] font-bold tracking-widest uppercase text-[#006de1] overflow-hidden transition-all duration-[1000ms] hover:text-black hover:scale-110 hover:border-[#a4dbff] hover:shadow-[4px_5px_17px_-4px_#268391]">
                    Enviar
                    <span className="absolute left-[-50px] top-0 h-full w-0 skew-x-12 bg-[#a4dbff] z-[-1] transition-all duration-[850ms] group-hover:w-[250%]"></span>
                </button>

            </motion.form>
  );
}
    
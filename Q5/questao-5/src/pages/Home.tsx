import sec1 from '../assets/sec1.png'
import sec3 from '../assets/sec3.png'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import logo from '../assets/logo_sun4.png'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"
import { Instagram, Mail } from 'lucide-react';
import { ContactUs } from '@/components/ContactForm'
import { useState, useEffect } from 'react'
import { motion } from "motion/react"
import {Link as Scroll} from "react-scroll"

export function Home() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="flex flex-col items-center w-full min-h-screen overflow-x-hidden">
      <section className="grid grid-cols-1 md:grid-cols-[60%_40%] md:bg-[#060724] bg-[#060724] justify-items-center h-[43rem] w-full z-0" style={isMobile?{backgroundImage: `url(${sec1})`}:{}}>
        <div className={`flex flex-col md:items-start md:justify-start gap-12 p-10 text-white z-1 ${isMobile ? 'bg-black/65':""}`}>
          <motion.span className='text-3xl mb-[2rem]' initial={{ opacity: 0,x:-60 }} whileInView={{ opacity: 1, x: 0 }}  viewport={{once:false, amount: 0.6}}>🔅</motion.span>
          <motion.h1 className='text-3xl' initial={{ opacity: 0,x:-50 }} whileInView={{ opacity: 1, x: 0 }}  viewport={{once:false, amount: 0.6}}>Jurídico SUN4</motion.h1>
          <motion.p className='text-2xl font-semibold' initial={{ opacity: 0,x:-60 }} whileInView={{ opacity: 1, x: 0 }}  viewport={{once:false, amount: 0.6}}> Automação inteligente para escritórios de advocacia.</motion.p>
          <motion.p className='text-sm mt-[-2.5rem] font-light' initial={{ opacity: 0,x:-60 }} whileInView={{ opacity: 1, x: 0 }}  viewport={{once:false, amount: 0.6}}>Acompanhe milhares de processos com precisão e agilidade.</motion.p>
          <Scroll smooth={true} offset={-55} to="planos"><motion.button  initial={{ opacity: 0,y:110 }} whileInView={{ opacity: 1, y: 0 }} transition={{duration: 0.3}} viewport={{once:false, amount: 0.6}} className="group mt-20 relative px-8 py-4 border-2 border-[#db9236] font-bold tracking-widest uppercase text-[#db9236] overflow-hidden transition-all duration-[1000ms] hover:text-white hover:scale-110 hover:border-[#D1651D] hover:shadow-[4px_5px_17px_-4px_#268391]">
            Ver planos
            <span className="absolute left-[-50px] top-0 h-full w-0 skew-x-12 bg-[#D1651D] z-[-1] transition-all duration-[850ms] group-hover:w-[250%]"></span>
          </motion.button></Scroll>
        </div>
        <motion.img initial={{ opacity: 0,x:60 }} whileInView={{ opacity: 1, x: 0 }}  viewport={{once:false, amount: 0.6}} className='md:block hidden w-full h-full object-contain z-[-1]' src={sec1} alt="" />
      </section>

      <section className="flex flex-col items-center justify-center w-full h-[35rem] bg-[#a4dbff] text-black z-0">
        <div className="grid grid-cols-1 md:grid-cols-[40%_40%] justify-center items-center h-full p-5 gap-10">
          <motion.h1 initial={{ opacity: 0,x:-60 }} whileInView={{ opacity: 1, x: 0 }}  viewport={{once:false, amount: 0.6}} className='text-2xl'>Automatizar é a <motion.span initial={{ opacity: 0,x:-60}} whileInView={{ opacity: 1, x: 0 }}  viewport={{once:false, amount: 0.6}} transition={{duration:2.0}} className='font-semibold text-[#db9236] underline underline-offset-8'>chave</motion.span></motion.h1>
          <motion.div initial={{ opacity: 0,x:60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:false, amount: 0.6}} className='flex flex-col items-start justify-start gap-4'>
              <p className='font-base text-justify'>
                O Jurídico SUN4 foi criado para transformar a forma como advogados e escritórios acompanham seus processos.
              </p>
              <p className='font-base text-justify'>Com automações jurídicas de alto desempenho, você reduz tarefas manuais, evita falhas humanas e garante eficiência na gestão processual. Tudo isso com escalabilidade para qualquer tamanho de operação.</p>
          </motion.div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full h-[40rem] md:h-[35rem] bg-[#fffbf5] text-[#D1651D]">
        <div className=" grid grid-cols-1 md:grid-cols-[55%_45%] justify-center items-center h-full">
        <motion.img initial={{ opacity: 0,x:-50 }} transition={{duration: 1.3}} whileInView={{ opacity: 1, x: 0 }}  viewport={{once:false, amount: 0.6}} className='md:block hidden h-140 w-300' src={sec3} alt="" />
          <div className='mt-5 flex flex-col gap-5 p-10'>
            <motion.h1 initial={{ opacity: 0,x:50 }} transition={{duration: 1.3}} whileInView={{ opacity: 1, x: 0 }}  viewport={{once:false, amount: 0.6}}>Sobre nós</motion.h1>
            <motion.p initial={{ opacity: 0,x:50 }} transition={{duration: 1.3}} whileInView={{ opacity: 1, x: 0 }}  viewport={{once:false, amount: 0.6}} className='text-justify'>Fundada em 2024, nossa startup nasceu com o propósito de tornar a gestão de processos mais eficiente, automatizando tarefas e reduzindo falhas humanas. Combinamos inovação e expertise jurídica para oferecer uma solução escalável e inteligente. Nosso sistema permite que escritórios e advogados acompanhem processos com precisão e agilidade, garantindo mais tempo para estratégias e atendimento aos clientes. Estamos sempre evoluindo para atender às necessidades do mercado e redefinir o futuro da advocacia. </motion.p >
            <motion.p initial={{ opacity: 0,x:50 }} transition={{duration: 1.3}} whileInView={{ opacity: 1, x: 0 }}  viewport={{once:false, amount: 0.6}} className='text-justify'>Junte-se a nós nessa revolução e descubra como a automação pode levar seu escritório a um novo patamar!</motion.p >
            <motion.button initial={{ opacity: 0,x:50 }} transition={{duration: 0.3}} whileInView={{ opacity: 1, x: 0 }}  viewport={{once:false, amount: 0.6}} className="group mt-10 relative px-8 py-4 border-1 border-[#db9236] font-bold tracking-widest uppercase text-[#db9236] overflow-hidden transition-all duration-[1000ms] hover:text-white hover:scale-110 hover:border-[#D1651D] hover:shadow-[4px_5px_17px_-4px_#268391]">
            Ver vagas
            <span className="absolute left-[-50px] top-0 h-full w-0 skew-x-12 bg-[#D1651D] z-[-1] transition-all duration-[850ms] group-hover:w-[250%]"></span>
          </motion.button>
          </div>
        </div>
      </section>

      <section id='planos' className='bg-[#060724] w-full md:h-[40rem] h-[100rem] text-white flex flex-col p-10'>
        <motion.h1 initial={{ opacity: 0,x:100 }} transition={{duration: 0.8}} whileInView={{ opacity: 1, x: 0 }}  viewport={{once:false, amount: 0.6}} className='text-2xl self-start mb-10'>O que oferecemos?</motion.h1>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 items-center justify-center md:gap-5 gap-12'>
            <div className='w-full h-100 bg-no-repeat bg-cover overflow-hidden hover:scale-102 transition-transform ease-in-out duration-300' style={{ backgroundImage: `url(${image1})` }}>
                <motion.div initial={{ opacity: 0,x:0 }} transition={{duration: 0.8}} whileInView={{ opacity: 1, x: 0 }}  viewport={{once:false, amount: 0.6}} className='bg-black/60 p-6 w-full h-full flex flex-col items-center justify-center'>
                    <h3 className="text-3xl font-semibold text-white mb-6">Basic – R$ 199/mês</h3>
                    <p className="text-justify leading-6 text-white font-normal mb-6"> Para pequenos escritórios que gerenciam até 5.000 processos. </p>
                    <ul className='self-start text-start mb-10 list-disc ml-5'>
                        <li>Automatização de consulta processual.</li>
                        <li>Alertas e notificações personalizadas.</li>
                        <li>Dashboard intuitivo para acompanhamento.</li>
                    </ul>
                    <button className="group relative px-4 py-2 border-1 border-white font-bold tracking-widest uppercase text-white overflow-hidden transition-all duration-[1000ms] hover:text-white hover:scale-110 hover:border-[#D1651D] hover:shadow-[4px_5px_17px_-4px_#268391]">
                    Escolher este plano
                    <span className="absolute left-[-50px] top-0 h-full w-0 skew-x-12 bg-[#D1651D] z-[-1] transition-all duration-[850ms] group-hover:w-[250%]"></span>
                </button>
                </motion.div>
            </div>
            <div className='w-full h-100 bg-no-repeat bg-cover overflow-hidden hover:scale-102 transition-transform ease-in-out duration-300' style={{ backgroundImage: `url(${image2})` }}>
                <motion.div initial={{ opacity: 0,x:0 }} transition={{duration: 0.8}} whileInView={{ opacity: 1, x: 0 }} className='bg-black/60 p-6 w-full h-full flex flex-col items-center justify-center'>
                    <h3 className="text-3xl font-semibold text-white mb-6">Standard – R$ 299/mês</h3>
                    <p className="text-justify leading-6 text-white font-normal mb-6"> Para escritórios médios que gerenciam até 10.000 processos. </p>
                    <ul className='self-start text-start mb-10 list-disc ml-5'>
                        <li>Todos os recursos do Plano Basic.</li>
                        <li>Relatórios inteligentes para gestão.</li>
                        <li>Suporte especializado.</li>
                    </ul>
                    <button className="group relative px-4 py-2 border-1 border-white font-bold tracking-widest uppercase text-white overflow-hidden transition-all duration-[1000ms] hover:text-white hover:scale-110 hover:border-[#D1651D] hover:shadow-[4px_5px_17px_-4px_#268391]">
                    Escolher este plano
                    <span className="absolute left-[-50px] top-0 h-full w-0 skew-x-12 bg-[#D1651D] z-[-1] transition-all duration-[850ms] group-hover:w-[250%]"></span>
                </button>
                </motion.div>
            </div>
            <div className='w-full h-100 bg-no-repeat bg-cover overflow-hidden hover:scale-102 transition-transform ease-in-out duration-300' style={{ backgroundImage: `url(${image3})` }}>
                <motion.div initial={{ opacity: 0,x:0 }} transition={{duration: 0.8}} whileInView={{ opacity: 1, x: 0 }} className='bg-black/60 p-6 w-full h-full flex flex-col items-center justify-center'>
                    <h3 className="text-3xl font-semibold text-white mb-6">Premium – R$ 499/mês</h3>
                    <p className="text-justify leading-6 text-white font-normal mb-6">Para grandes escritórios e operações com até 20.000 processos.</p>
                    <ul className='self-start text-start mb-10 list-disc ml-5'>
                        <li>Todos os recursos do Plano Standard.</li>
                        <li>Inteligência artificial para análise estratégica.</li>
                        <li>Personalização total do sistema.</li>
                    </ul>
                    <button className="group relative px-4 py-2 border-1 border-white font-bold tracking-widest uppercase text-white overflow-hidden transition-all duration-[1000ms] hover:text-white hover:scale-110 hover:border-[#D1651D] hover:shadow-[4px_5px_17px_-4px_#268391]">
                    Escolher este plano
                    <span className="absolute left-[-50px] top-0 h-full w-0 skew-x-12 bg-[#D1651D] z-[-1] transition-all duration-[850ms] group-hover:w-[250%]"></span>
                </button>
                </motion.div>
            </div>
        </div>
      </section>

      <section className='bg-[#fffbf5] w-full h-[35rem] text-[#D1651D] p-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 h-full'>
            <motion.h1 initial={{ opacity: 0,y:-100 }} transition={{duration: 0.8}} whileInView={{ opacity: 1, y: 0 }}>Perguntas frequentes</motion.h1>
            <motion.div initial={{ opacity: 0,y:100 }} transition={{duration: 0.8}} whileInView={{ opacity: 1, y: 0 }}>
                <Accordion type="single" collapsible className='flex flex-col gap-5'>
                <AccordionItem value="item-1">
                    <AccordionTrigger className='bg-[#D1651D] text-white p-5'>Como posso entrar em contato com o suporte?</AccordionTrigger>
                    <AccordionContent className='mt-5 text-justify'>
                    Nossa equipe está disponível para ajudar! Você pode nos contatar através do formulário no site ou pelo e-mail contato@sun4.com.br.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className='bg-[#D1651D] text-white p-5'>Quais métodos de pagamento são aceitos?</AccordionTrigger>
                    <AccordionContent className='mt-5 text-justify'>
                    Aceitamos pagamentos via cartão de crédito, boleto bancário e PIX, garantindo flexibilidade para nossos clientes.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className='bg-[#D1651D] text-white p-5'>Os dados dos nossos clientes estão seguros?</AccordionTrigger>
                    <AccordionContent className='mt-5 text-justify'>
                    Sim! Trabalhamos com criptografia avançada e seguimos todas as normas de segurança digital para proteger suas informações.
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
            </motion.div>
        </div>
      </section>

        <section className='bg-[#a4dbff] w-full h-[40rem] text-black p-10 flex flex-col items-center justify-center'>
            <ContactUs/>
        </section>

      <footer className="md:h-[15rem] h-[15rem] md:text-base text-sm w-screen bg-[#000] text-white">
            <div className="p-5 flex flex-col justify-between md:gap-[20px] gap-[5px]">
                <section className="flex flex-row items-center justify-center md:gap-40 gap-10">
                    <section className="flex flex-col">
                    <img src={logo} alt="SUN4" className='w-20 opacity-95'/>
                    <div className="flex flex-row gap-5 w-40 justify-start">
                        <a className='text-white' target='_blank' href="https://www.instagram.com/juridico.sun4/#"><Instagram /></a>
                        <a className='text-white' target='_blank' href="contato@sun4.com.br"><Mail /></a>
                    </div>
                    </section>
                    <div>
                        <h2 className="text-[1.2rem]">Contato</h2>
                        <p className="text-gray-300 opacity-90">+55 83 0000-0000</p>
                        <p className='text-gray-300 opacity-90'>contato@sun4.com.br</p>
                    </div>
                    <div>
                        <h2 className="text-[1.2rem]">Localização</h2>
                        <div className="flex flex-col">

                            <p className="text-gray-300 opacity-90">AV PAULISTA 1106 SALA 01 ANDA, Bela Vista - SP</p>
                            <p className="text-gray-300 opacity-90">CEP: 01310-914</p>
                            
                        </div>
                    </div>
                </section>
                <span className="h-[1px] bg-gray-300 opacity-30"></span>
                <section className="flex flex-row justify-between pt-5 md:pt-2 mb-3 text-[0.8rem] md:text-[0.9rem]">
                    <div className="flex gap-[40px]">
                        <a href="">Termos de uso</a>
                        <a href="">Política de cookies</a>
                        <a href="">Política de privacidade</a>
                    </div>
                    <div>
                        <p className="text-gray-300 opacity-90">2025 © SUN4 - Todos os direitos reservados.</p>
                    </div>
                </section>
            </div>
            
        </footer>
    </main>
    
  )
}

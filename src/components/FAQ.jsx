import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    id: 1,
    question: "Por que um site genérico não gera vendas para minha empresa?",
    answer: "Um site moderno precisa de arquitetura de alta conversão, inteligência visual e velocidade máxima. Se a sua página não direciona o visitante para uma ação clara em até 5 segundos, você está perdendo oportunidades para concorrentes mais preparados."
  },
  {
    id: 2,
    question: "Como a automação de processos reduz custos operacionais?",
    answer: "Conectamos suas ferramentas diárias (WhatsApp, CRM, ERP e e-mails) para que tarefas repetitivas aconteçam de forma 100% autônoma 24/7. Isso elimina erros humanos, economiza centenas de horas da equipe e acelera o tempo de resposta ao cliente."
  },
  {
    id: 3,
    question: "Qual é a diferença entre suporte reativo e consultoria estratégica de TI?",
    answer: "O suporte reativo apenas 'apaga incêndios' quando o sistema já parou. A consultoria da LGF Consultant atua de forma proativa: mapeamos vulnerabilidades, garantimos proteção de dados cibernética e otimizamos a infraestrutura para o seu negócio crescer sem sobressaltos."
  },
  {
    id: 4,
    question: "Como funciona o Diagnóstico de TI Gratuito?",
    answer: "Nossos especialistas analisam a presença digital da sua PME, velocidade do site, fluxos de atendimento e nível de segurança atual. Em seguida, apresentamos um plano executivo prático com as melhorias prioritárias para impulsionar seus resultados."
  },
  {
    id: 5,
    question: "A implantação do novo site ou automação causa interrupção nos meus serviços?",
    answer: "Não. Todo o desenvolvimento e testes acontecem em ambiente seguro de homologação. A virada para o ar é planejada sem nenhuma parada na sua operação e com suporte dedicado durante todo o processo."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Abre o primeiro item por padrão

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="lgf-faq-section" id="faq">
      <div className="faq-bg-glow"></div>
      <div className="faq-bg-glow-purple"></div>

      <div className="lgf-faq-container">
        
        {/* Cabeçalho da Seção */}
        <div className="lgf-faq-header">
          <div className="lgf-faq-badge">
            <i className="fa-solid fa-circle-question"></i>
            <span>⚡ Tira-Dúvidas Estratégico</span>
          </div>

          <h2 className="lgf-faq-title">
            Perguntas Frequentes Sobre <span className="faq-text-gradient">Nossa Consultoria</span>
          </h2>

          <p className="lgf-faq-subtitle">
            Esclareça as principais dúvidas sobre como nossas soluções de tecnologia e automação transformam o dia a dia da sua empresa.
          </p>
        </div>

        {/* Accordion Interativo */}
        <div className="lgf-faq-accordion">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className={`lgf-faq-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  className="lgf-faq-question-btn"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  type="button"
                >
                  <div className="question-content">
                    <div className="question-icon">
                      <i className="fa-solid fa-lightbulb"></i>
                    </div>
                    <span>{item.question}</span>
                  </div>

                  <div className="toggle-arrow">
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </button>

                <div className="lgf-faq-answer-panel">
                  <p className="lgf-faq-answer-text">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
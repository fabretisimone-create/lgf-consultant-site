import React from 'react';
import './Solutions.css';

export default function Solutions() {
  const whatsappNumber = '5511930597236';

  const solutionsList = [
    {
      id: 1,
      icon: 'fa-solid fa-code',
      title: 'Criação de Sites & Portais',
      description: 'Desenvolvimento web de alta performance com design Cyber-Tech, SEO avançado e total adaptabilidade mobile.',
      features: ['Design Exclusivo e Moderno', 'Carregamento Ultra-Rápido', 'Otimizado para o Google (SEO)']
    },
    {
      id: 2,
      icon: 'fa-brands fa-whatsapp',
      title: 'Automação de WhatsApp',
      description: 'Integração de chatbots inteligentes e fluxos automatizados para atendimento 24/7 sem perder clientes.',
      features: ['Atendimento Automático 24/7', 'Disparo de Notificações', 'Integração com Sistemas CRM']
    },
    {
      id: 3,
      icon: 'fa-solid fa-chart-line',
      title: 'Consultoria Estratégica de TI',
      description: 'Diagnóstico e otimização de infraestrutura tecnológica para reduzir custos operacionais e acelerar vendas.',
      features: ['Análise de Gargalos Digitais', 'Planejamento Executivo', 'Redução de Custos de TI']
    },
    {
      id: 4,
      icon: 'fa-solid fa-shield-halved',
      title: 'Segurança Cibernética & LGPD',
      description: 'Proteção avançada de dados corporativos contra invasões, além da adequação completa às normas da LGPD.',
      features: ['Proteção de Dados Sensíveis', 'Adequação LGPD Completa', 'Prevenção de Ataques Hacker']
    }
  ];

  // Duplicamos a lista para criar o efeito seamless (infinito) sem falhas
  const infiniteSolutions = [...solutionsList, ...solutionsList];

  return (
    <section className="lgf-solutions-section" id="solucoes">
      <div className="solutions-bg-glow"></div>

      <div className="lgf-solutions-container">
        
        {/* Cabeçalho */}
        <div className="solutions-header">
          <div className="solutions-badge">
            <i className="fa-solid fa-cube"></i>
            <span>Nossas Soluções Especializadas</span>
          </div>
          <h2 className="solutions-title">
            Tecnologia de Ponta Para <br />
            <span className="solutions-title-accent">Impulsionar o Seu Negócio</span>
          </h2>
          <p className="solutions-subtitle">
            Desenvolvemos ecossistemas digitais sob medida para empresas que buscam liderar seus mercados.
          </p>
        </div>

        {/* Estrutura do Carrossel Infinito */}
        <div className="solutions-carousel-wrapper">
          <div className="solutions-track">
            {infiniteSolutions.map((item, index) => {
              const itemWhatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
                `Olá! Gostaria de saber mais detalhes sobre a solução: *${item.title}*.`
              )}`;

              return (
                <div key={`${item.id}-${index}`} className="solution-card">
                  <div className="solution-icon-box">
                    <i className={item.icon}></i>
                  </div>

                  <h3 className="solution-card-title">{item.title}</h3>
                  <p className="solution-card-desc">{item.description}</p>

                  <ul className="solution-features-list">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex}>
                        <i className="fa-solid fa-circle-check"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={itemWhatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="solution-card-btn"
                  >
                    <span>Saber Mais</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicador de interação */}
        <div className="carousel-hint">
          <i className="fa-solid fa-hand-pointer"></i>
          <span>Passe o mouse sobre os cards para pausar a rotação e ler os detalhes</span>
        </div>

      </div>
    </section>
  );
}
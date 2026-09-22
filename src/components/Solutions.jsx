import React from 'react';
import './Solutions.css';

export default function Solutions() {
  const whatsappNumber = '5511930597236';
  
  const getSolutionWhatsappUrl = (serviceName) => {
    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      `Olá! Tenho interesse no serviço de ${serviceName} e gostaria de solicitar uma proposta.`
    )}`;
  };

  const solutionsData = [
    {
      id: 1,
      icon: "fa-solid fa-code",
      title: "Criação de Sites & Portais de Alta Conversão",
      desc: "Desenvolvimento web em React com inteligência artificial, design exclusivo, carregamento ultrarrápido e arquitetura focada em SEO no Google.",
      features: [
        "Design Responsivo e Exclusivo",
        "Otimização SEO para o Google",
        "Integração com WhatsApp & CRM",
        "Arquitetura Modular em React"
      ]
    },
    {
      id: 2,
      icon: "fa-solid fa-diagram-project",
      title: "Automação de Processos & Integração WhatsApp",
      desc: "Elimine tarefas repetitivas integrando WhatsApp, CRM e planilhas com fluxos inteligentes operando 24 horas por dia sem falhas humanas.",
      features: [
        "Captação e Resposta Automática",
        "Integrações via API (WhatsApp/CRM)",
        "Redução de Custos Operacionais",
        "Relatórios de Performance em Tempo Real"
      ]
    },
    {
      id: 3,
      icon: "fa-solid fa-chart-line",
      title: "Consultoria Estratégica & Gestão de TI",
      desc: "Alinhamento direto entre os objetivos do negócio e as ferramentas de tecnologia, reduzindo riscos e direcionando investimentos em inovação.",
      features: [
        "Diagnóstico de Infraestrutura Gratuito",
        "Planejamento de Custo e Escalabilidade",
        "Mapeamento de Vulnerabilidades",
        "Orientação Executiva Personalizada"
      ]
    },
    {
      id: 4,
      icon: "fa-solid fa-shield-halved",
      title: "Segurança Cibernética & Proteção em Nuvem",
      desc: "Blindagem de dados empresariais, migração segura para a nuvem, prevenindo vazamentos e garantindo conformidade total com a LGPD.",
      features: [
        "Proteção e Backup em Nuvem",
        "Conformidade Integral com LGPD",
        "Monitoramento Proativo de Ameaças",
        "Suporte Técnico Proativo 24/7"
      ]
    }
  ];

  return (
    <section className="lgf-solutions-section" id="solucoes">
      <div className="solutions-bg-glow"></div>
      <div className="solutions-bg-glow-cyan"></div>

      <div className="lgf-solutions-container">
        
        {/* Cabeçalho da Seção */}
        <div className="lgf-solutions-header">
          <div className="lgf-solutions-badge">
            <i className="fa-solid fa-cubes"></i>
            <span>⚡ Nossas Soluções</span>
          </div>
          <h2 className="lgf-solutions-title">
            Tecnologia Estratégica Projetada Para <span className="solutions-text-gradient">Acelerar Sua Empresa</span>
          </h2>
          <p className="lgf-solutions-subtitle">
            Traduzimos inovação tecnológica em eficiência operacional, segurança cibernética e crescimento financeiro real para pequenas e médias empresas.
          </p>
        </div>

        {/* Grid de Soluções */}
        <div className="lgf-solutions-grid">
          {solutionsData.map((item) => (
            <div className="lgf-solution-card" key={item.id}>
              <div>
                <div className="solution-icon-box">
                  <i className={item.icon}></i>
                </div>

                <h3 className="solution-card-title">{item.title}</h3>
                <p className="solution-card-desc">{item.desc}</p>

                <ul className="solution-features-list">
                  {item.features.map((feature, idx) => (
                    <li className="solution-feature-item" key={idx}>
                      <i className="fa-solid fa-angle-right"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={getSolutionWhatsappUrl(item.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="solution-card-link"
              >
                <span>Solicitar esta Solução</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
import React from 'react';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const pillars = [
    {
      id: 1,
      icon: 'fa-solid fa-microchip',
      title: 'Tecnologia de Ponta',
      description: 'Sistemas e arquiteturas modernas com alta performance, segurança e escalabilidade.'
    },
    {
      id: 2,
      icon: 'fa-solid fa-user-tie',
      title: 'Atendimento Executivo',
      description: 'Consultoria direta com especialistas sênior para alinhar a tecnologia ao seu negócio.'
    },
    {
      id: 3,
      icon: 'fa-solid fa-chart-line',
      title: 'Foco em Resultados',
      description: 'Soluções sob medida orientadas a aumentar o ROI, conversões e eficiência operacional.'
    }
  ];

  return (
    <section className="lgf-why-section" id="diferenciais">
      <div className="why-bg-glow"></div>

      <div className="lgf-why-container">
        
        {/* Cabeçalho */}
        <div className="lgf-why-header">
          <div className="lgf-why-badge">
            <i className="fa-solid fa-bolt"></i>
            <span>Por Que Escolher a LGF</span>
          </div>
          <h2 className="lgf-why-title">
            Engenharia Digital & <span className="why-text-gradient">Alta Performance</span>
          </h2>
          <p className="lgf-why-subtitle">
            Combinamos estratégia de negócios, segurança cibernética e tecnologia avançada para impulsionar a transformação da sua empresa.
          </p>
        </div>

        {/* Grid com Conectores */}
        <div className="lgf-why-grid">
          {pillars.map((item, index) => (
            <React.Fragment key={item.id}>
              <div className="lgf-why-card">
                <div className="why-icon-box">
                  <i className={item.icon}></i>
                </div>
                <h3 className="lgf-why-card-title">{item.title}</h3>
                <p className="lgf-why-card-desc">{item.description}</p>
              </div>

              {/* Exibe o conector visual de circuito entre os cards */}
              {index < pillars.length - 1 && (
                <div className="lgf-circuit-connector">
                  <div className="lgf-circuit-line"></div>
                  <div className="lgf-circuit-node"></div>
                  <div className="lgf-circuit-line"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
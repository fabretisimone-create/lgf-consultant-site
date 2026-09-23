import React from 'react';
import './Compare.css';

export default function Compare() {
  const traditionalPoints = [
    'Desenvolvimento lento e prazos incertos',
    'Layouts genéricos baseados em templates',
    'Suporte demorado ou sem atendimento pós-entrega',
    'Sem otimização para SEO e alta performance',
    'Sem foco claro em resultados e conversão'
  ];

  const lgfPoints = [
    'Entregas ágeis com cronograma rigoroso',
    'Design exclusivo Cyber-Tech sob medida',
    'Atendimento executivo sênior com SLA garantido',
    'Arquitetura ultrarrápida e otimizada para o Google',
    'Estrutura focada em gerar ROI e novas vendas'
  ];

  return (
    <section className="lgf-compare-section" id="comparativo">
      <div className="compare-bg-glow"></div>

      <div className="lgf-compare-container">
        
        {/* Cabeçalho Limpo */}
        <div className="compare-header">
          <div className="compare-badge">
            <i className="fa-solid fa-scale-balanced"></i>
            <span>Comparativo Direto</span>
          </div>
          <h2 className="compare-title">
            O Padrão <span className="compare-accent">LGF Consultant</span>
          </h2>
          <p className="compare-subtitle">
            Veja a diferença entre soluções genéricas do mercado e a engenharia digital de alto nível.
          </p>
        </div>

        {/* Grid Enxuto */}
        <div className="compare-grid">
          
          {/* Card Modelo Tradicional (Vermelho no Hover) */}
          <div className="compare-card traditional">
            <div className="compare-card-header">
              <span className="compare-card-tag">Outras Opções</span>
              <h3 className="compare-card-title">Mercado Tradicional</h3>
            </div>
            <ul className="compare-list">
              {traditionalPoints.map((text, index) => (
                <li key={index} className="compare-item">
                  <span className="compare-icon">
                    <i className="fa-solid fa-xmark"></i>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card LGF (Ciano Neon) */}
          <div className="compare-card lgf">
            <div className="compare-card-badge">Exclusivo</div>
            <div className="compare-card-header">
              <span className="compare-card-tag">Alta Performance</span>
              <h3 className="compare-card-title">LGF Consultant</h3>
            </div>
            <ul className="compare-list">
              {lgfPoints.map((text, index) => (
                <li key={index} className="compare-item">
                  <span className="compare-icon">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
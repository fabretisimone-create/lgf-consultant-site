import React from 'react';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  return (
    <section className="lgf-why-section" id="diferenciais">
      <div className="why-bg-glow"></div>

      <div className="lgf-why-container">
        
        {/* Cabeçalho da Seção */}
        <div className="lgf-why-header">
          <div className="lgf-why-badge">
            <i className="fa-solid fa-microchip"></i>
            <span>⚡ Diferenciais Estratégicos</span>
          </div>
          <h2 className="lgf-why-title">
            Por Que Escolher a <span className="why-text-gradient">LGF Consultant</span>?
          </h2>
          <p className="lgf-why-subtitle">
            Unimos visão de negócios com engenharia de software avançada para entregar infraestruturas digitais rápidas, seguras e prontas para escalar.
          </p>
        </div>

        {/* Grid de Pilares com Conectores de Circuito */}
        <div className="lgf-why-grid">
          
          {/* Pilar 1: Segurança */}
          <div className="lgf-why-card">
            <div className="why-icon-box">
              <i className="fa-solid fa-shield-virus"></i>
            </div>
            <h3 className="lgf-why-card-title">Segurança & Proteção Integral</h3>
            <p className="lgf-why-card-desc">
              Segurança cibernética avançada, prevenindo vazamentos de dados, invasões e garantindo a continuidade operacional e conformidade total com a LGPD.
            </p>
          </div>

          {/* Conector de Circuito 1 */}
          <div className="lgf-circuit-connector" aria-hidden="true">
            <div className="lgf-circuit-line"></div>
            <div className="lgf-circuit-node"></div>
            <div className="lgf-circuit-line"></div>
          </div>

          {/* Pilar 2: Eficiência */}
          <div className="lgf-why-card">
            <div className="why-icon-box">
              <i className="fa-solid fa-chart-pie"></i>
            </div>
            <h3 className="lgf-why-card-title">Eficiência & Escalabilidade</h3>
            <p className="lgf-why-card-desc">
              Otimização de processos para eliminar gargalos manuais, automatizar rotinas diárias e preparar a infraestrutura do seu negócio para crescer sem elevar custos.
            </p>
          </div>

          {/* Conector de Circuito 2 */}
          <div className="lgf-circuit-connector" aria-hidden="true">
            <div className="lgf-circuit-line"></div>
            <div className="lgf-circuit-node"></div>
            <div className="lgf-circuit-line"></div>
          </div>

          {/* Pilar 3: Suporte Proativo */}
          <div className="lgf-why-card">
            <div className="why-icon-box">
              <i className="fa-solid fa-headset"></i>
            </div>
            <h3 className="lgf-why-card-title">Implantação Rápida & Suporte Proativo</h3>
            <p className="lgf-why-card-desc">
              Migração tecnológica sem paradas na sua operação e suporte técnico proativo que antecipa falhas antes que aconteçam, garantindo estabilidade 24/7.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
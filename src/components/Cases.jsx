import React from 'react';

export default function Cases() {
  return (
    <section className="section-padding" id="casos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Resultados Comprovados em Clientes</h2>
          <p className="section-subtitle">Casos reais de empresas que escalaram sua TI e operação conosco.</p>
        </div>

        <div className="cases-grid">
          <div className="case-card">
            <div className="case-stat">+240%</div>
            <h3 className="case-title">Aumento em Vendas Digitais</h3>
            <p className="case-desc">Redesign completo de portal e otimização de velocidade para e-commerce B2B.</p>
          </div>
          <div className="case-card">
            <div className="case-stat">85h/mês</div>
            <h3 className="case-title">Economizadas em Processos Manual</h3>
            <p className="case-desc">Automação de integração de pedidos via WhatsApp diretamente no ERP da empresa.</p>
          </div>
        </div>

        <div className="reviews-box">
          <div className="google-badge">
            <i className="fa-brands fa-google" style={{ color: '#4285F4' }}></i>
            <span>Avaliação 5.0 no Google Meu Negócio</span>
          </div>
          <div className="stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <p className="review-quote">
            "A LGF Consultant transformou a forma como nossa empresa opera online. Nosso novo site atrai clientes qualificados semanalmente."
          </p>
          <div className="review-author">— Direção de Operações, PME Parceira</div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import './Compare.css';

export default function Compare() {
  return (
    <section className="lgf-compare-section" id="comparativo">
      <div className="compare-bg-glow"></div>

      <div className="lgf-compare-container">
        
        {/* Cabeçalho da Seção */}
        <div className="lgf-compare-header">
          <div className="lgf-compare-badge">
            <i className="fa-solid fa-scale-balanced"></i>
            <span>⚡ Comparativo Estratégico</span>
          </div>
          <h2 className="lgf-compare-title">
            O Impacto Real de Ter a <span className="compare-text-gradient">LGF Consultant</span> ao Seu Lado
          </h2>
          <p className="lgf-compare-subtitle">
            Veja a diferença prática entre manter o modelo tradicional e acelerar sua PME com tecnologia de ponta, processos automatizados e alta segurança.
          </p>
        </div>

        {/* Grid Comparativo de Cards */}
        <div className="lgf-compare-grid">
          
          {/* Card 1: Cenário Tradicional */}
          <div className="lgf-compare-card card-danger">
            <div>
              <div className="card-header-top">
                <div className="icon-danger-box">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                </div>
                <div>
                  <h3 className="title-danger">Cenário Tradicional</h3>
                  <small style={{ color: '#64748b', fontSize: '12px' }}>Sem Estratégia Digital</small>
                </div>
              </div>

              <ul className="compare-list">
                <li className="compare-item">
                  <i className="fa-solid fa-xmark icon-danger-item"></i>
                  <div className="compare-item-content">
                    <strong>Site Antigo ou Inexistente</strong>
                    <p>Perde clientes diariamente para concorrentes com presença digital mais moderna e rápida.</p>
                  </div>
                </li>

                <li className="compare-item">
                  <i className="fa-solid fa-xmark icon-danger-item"></i>
                  <div className="compare-item-content">
                    <strong>Processos Manuais & Lentos</strong>
                    <p>Dezenas de horas da equipe gastas com planilhas, digitação e retrabalho operacional.</p>
                  </div>
                </li>

                <li className="compare-item">
                  <i className="fa-solid fa-xmark icon-danger-item"></i>
                  <div className="compare-item-content">
                    <strong>Sem Atendimento 24/7</strong>
                    <p>Leads e clientes ficam horas aguardando resposta no WhatsApp e desistem da compra.</p>
                  </div>
                </li>

                <li className="compare-item">
                  <i className="fa-solid fa-xmark icon-danger-item"></i>
                  <div className="compare-item-content">
                    <strong>Suporte Reativo & Vulnerável</strong>
                    <p>Problemas são corrigidos apenas depois que a empresa já parou ou perdeu dados.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Cenário LGF Consultant */}
          <div className="lgf-compare-card card-success">
            <span className="recommended-badge">⚡ Recomendado</span>

            <div>
              <div className="card-header-top">
                <div className="icon-success-box">
                  <i className="fa-solid fa-rocket"></i>
                </div>
                <div>
                  <h3 className="title-success">Com a LGF Consultant</h3>
                  <small style={{ color: '#00f2fe', fontSize: '12px' }}>Tecnologia & Aceleração</small>
                </div>
              </div>

              <ul className="compare-list">
                <li className="compare-item">
                  <i className="fa-solid fa-circle-check icon-success-item"></i>
                  <div className="compare-item-content">
                    <strong>Presença Digital de Elite</strong>
                    <p>Site ultrarrápido, com IA, otimizado para SEO no Google e focado em converter visitantes em vendas.</p>
                  </div>
                </li>

                <li className="compare-item">
                  <i className="fa-solid fa-circle-check icon-success-item"></i>
                  <div className="compare-item-content">
                    <strong>Processos Automatizados</strong>
                    <p>Integração total entre CRM, ERP e WhatsApp operando 24 horas por dia sem erros humanos.</p>
                  </div>
                </li>

                <li className="compare-item">
                  <i className="fa-solid fa-circle-check icon-success-item"></i>
                  <div className="compare-item-content">
                    <strong>Atendimento Imediato no WhatsApp</strong>
                    <p>Respostas automáticas inteligentes e captação direta de propostas em segundos.</p>
                  </div>
                </li>

                <li className="compare-item">
                  <i className="fa-solid fa-circle-check icon-success-item"></i>
                  <div className="compare-item-content">
                    <strong>Gestão Proativa & Proteção Cyber</strong>
                    <p>Monitoramento contínuo, backups em nuvem e conformidade integral com a LGPD.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
import React from 'react';
import './Hero.css';

export default function Hero() {
  const whatsappNumber = '5511930597236';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    'Olá! Gostaria de conhecer o processo de criação e solicitar um Diagnóstico Gratuito.'
  )}`;

  return (
    <section className="lgf-hero-section" id="home">
      {/* Efeitos de Iluminação Cyber no Fundo */}
      <div className="hero-glow-cyan"></div>
      <div className="hero-glow-purple"></div>
      <div className="hero-grid-pattern"></div>

      <div className="lgf-hero-container">
        {/* Conteúdo de Texto */}
        <div className="lgf-hero-content">
          <div className="lgf-hero-badge">
            <span className="badge-pulse"></span>
            <span>⚡ Inteligência Artificial & Engenharia Web Sênior</span>
          </div>

          <h1 className="lgf-hero-title">
            Criamos portais de elite com <span className="hero-text-gradient">Inteligência Artificial</span> e arquitetura de alto desempenho.
          </h1>

          <p className="lgf-hero-description">
            Nos bastidores da LGF Consultant, unimos IA generativa, código limpo em React e automação avançada para construir ecossistemas digitais ultrarrápidos, seguros e prontos para converter visitantes em clientes.
          </p>

          {/* Destaques Rápidos */}
          <div className="lgf-hero-features">
            <div className="feature-item">
              <i className="fa-solid fa-microchip"></i>
              <span>IA Generativa no Design & Copywriting</span>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-code"></i>
              <span>Arquitetura Modular & Reutilizável</span>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-rocket"></i>
              <span>Velocidade Máxima Otimizada para SEO</span>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="lgf-hero-actions">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="lgf-btn-primary">
              <i className="fa-brands fa-whatsapp"></i>
              <span>Receber Diagnóstico de TI Gratuito</span>
            </a>
            <a href="#solucoes" className="lgf-btn-secondary">
              <span>Ver Bastidores & Soluções</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Lado Direito: Visual Cyber Studio IA & Bastidores de Código */}
        <div className="lgf-hero-visual">
          <div className="tech-card-wrapper">
            <div className="tech-card-glow"></div>
            <div className="tech-card-inner">
              
              {/* Topo do Mockup Studio */}
              <div className="mockup-header">
                <div className="dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="mockup-title">
                  <i className="fa-solid fa-brain" style={{ marginRight: '6px' }}></i>
                  lgf-ai-builder // generating_ui_v3.0
                </div>
              </div>

              {/* Corpo da Imagem Cyber-Tech de IA & Código */}
              <div className="mockup-body">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80"
                  alt="Bastidores de Criação Web com IA e Código"
                  className="hero-tech-img"
                />

                {/* Overlays de Bastidores & Código em Tempo Real */}
                <div className="code-overlay-box">
                  <div className="code-line"><span className="code-keyword">const</span> <span className="code-var">LGF_App</span> = <span className="code-func">useAIBuilder</span>();</div>
                  <div className="code-line"><span className="code-comment">// Compilando UI/UX & SEO de Alta Conversão...</span></div>
                  <div className="code-line"><span className="code-keyword">return</span> &lt;<span className="code-var">HighTechWebsite</span> <span className="code-prop">status</span>=<span className="code-string">"OPTIMIZED"</span> /&gt;;</div>
                </div>
                
                {/* Badge Flutuante Topo (IA) */}
                <div className="floating-badge badge-top">
                  <i className="fa-solid fa-wand-magic-sparkles text-cyan"></i>
                  <div>
                    <strong>Geração Autônoma por IA</strong>
                    <small>UI/UX Inteligente & Adaptável</small>
                  </div>
                </div>

                {/* Badge Flutuante Base (Engenharia) */}
                <div className="floating-badge badge-bottom">
                  <i className="fa-solid fa-terminal text-purple"></i>
                  <div>
                    <strong>Bastidores LGF</strong>
                    <small>Código React Sênior & Clean Code</small>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
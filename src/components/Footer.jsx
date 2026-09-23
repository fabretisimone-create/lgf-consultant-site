import React from 'react';
import './Footer.css';

export default function Footer() {
  const whatsappNumber = '5511930597236';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    'Olá! Vim pelo site e gostaria de falar com um consultor da LGF Consultant.'
  )}`;

  return (
    <footer className="lgf-footer">
      <div className="footer-bg-glow"></div>

      <div className="lgf-footer-container">
        
        {/* Grid de 4 Colunas */}
        <div className="lgf-footer-grid">
          
          {/* Coluna 1: Marca, Slogan e Redes Sociais */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-brand-logo">
              <span className="brand-text">LGF</span>
              <span className="brand-accent">Consultant</span>
            </a>

            <p className="footer-slogan">
              Transformando tecnologia em vantagem competitiva.
            </p>

            <div className="footer-social-links">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="mailto:atendimento@lgfconsultant.com.br" className="social-icon-btn" aria-label="E-mail">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="footer-links-col">
            <h4 className="footer-title">Navegação</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Início</a></li>
              <li><a href="#solucoes">Soluções</a></li>
              <li><a href="#comparativo">Comparativo</a></li>
              <li><a href="#diferenciais">Diferenciais</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contato">Solicitar Proposta</a></li>
            </ul>
          </div>

          {/* Coluna 3: Soluções */}
          <div className="footer-links-col">
            <h4 className="footer-title">Soluções</h4>
            <ul className="footer-links-list">
              <li><a href="#solucoes">Criação de Sites & Portais</a></li>
              <li><a href="#solucoes">Automação de WhatsApp</a></li>
              <li><a href="#solucoes">Consultoria Estratégica de TI</a></li>
              <li><a href="#solucoes">Segurança Cibernética & LGPD</a></li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div className="footer-contact-col">
            <h4 className="footer-title">Contato Direct</h4>
            
            <div className="footer-contact-item">
              <i className="fa-brands fa-whatsapp"></i>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                (11) 93059-7236
              </a>
            </div>

            <div className="footer-contact-item">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:atendimento@lgfconsultant.com.br">
                atendimento@lgfconsultant.com.br
              </a>
            </div>

            <div className="footer-contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>São Paulo - SP, Brasil</span>
            </div>
          </div>

        </div>

        {/* Rodapé Direitos Autorais & Assinatura de Desenvolvimento */}
        <div className="lgf-footer-bottom">
          <p className="lgf-footer-copyright">
           © 2026 LGF Consultant. Todos os direitos reservados. Desenvolvido por <span className="developer-name">Simone Strutzel Fabreti</span>
          </p>
        </div>

      </div>

      {/* Botão Flutuante do WhatsApp */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="lgf-whatsapp-float"
        aria-label="Falar no WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </footer>
  );
}

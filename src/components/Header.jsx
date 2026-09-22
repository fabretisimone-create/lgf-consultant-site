import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappNumber = '5511930597236';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    'Olá! Gostaria de solicitar uma proposta com a LGF Consultant.'
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`lgf-header ${isScrolled ? 'lgf-header-scrolled' : ''}`}>
      <div className="lgf-header-container">
        
        {/* Logo da Empresa */}
        <a href="#home" className="lgf-brand-logo" onClick={closeMobileMenu}>
          <span className="brand-text">LGF</span>
          <span className="brand-accent">Consultant</span>
        </a>

        {/* Menu de Navegação Principal */}
        <nav className={`lgf-nav-menu ${mobileMenuOpen ? 'is-active' : ''}`}>
          <ul className="lgf-nav-list">
            <li>
              <a href="#home" className="lgf-nav-link" onClick={closeMobileMenu}>
                Início
              </a>
            </li>
            <li>
              <a href="#solucoes" className="lgf-nav-link" onClick={closeMobileMenu}>
                Soluções
              </a>
            </li>
            <li>
              <a href="#comparativo" className="lgf-nav-link" onClick={closeMobileMenu}>
                Comparativo
              </a>
            </li>
            <li>
              <a href="#diferenciais" className="lgf-nav-link" onClick={closeMobileMenu}>
                Diferenciais
              </a>
            </li>
            <li>
              <a href="#faq" className="lgf-nav-link" onClick={closeMobileMenu}>
                FAQ
              </a>
            </li>
          </ul>

          {/* Botão CTA para Mobile */}
          <div className="lgf-mobile-cta">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="lgf-btn-header"
              onClick={closeMobileMenu}
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span>Solicitar Proposta</span>
            </a>
          </div>
        </nav>

        {/* Ações do Header (Botão Desktop + Menu Hambúrguer) */}
        <div className="lgf-header-actions">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="lgf-btn-header lgf-btn-desktop"
          >
            <i className="fa-brands fa-whatsapp"></i>
            <span>Solicitar Proposta</span>
          </a>

          <button 
            className={`lgf-hamburger ${mobileMenuOpen ? 'is-open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Abrir Menu de Navegação"
            type="button"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

      </div>
    </header>
  );
}
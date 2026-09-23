import React, { useState } from 'react';
import './OfferForm.css';

export default function OfferForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    necessidade: 'Criação / Reformulação de Site'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '5511930597236';
    const message = `Olá! Gostaria de solicitar uma proposta da LGF Consultant:\n\n` +
      `👤 *Nome:* ${formData.nome}\n` +
      `✉️ *E-mail:* ${formData.email}\n` +
      `📱 *WhatsApp:* ${formData.whatsapp}\n` +
      `⚡ *Necessidade:* ${formData.necessidade}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="lgf-offer-section" id="contato">
      <div className="offer-bg-glow-cyan"></div>
      <div className="offer-bg-glow-purple"></div>

      <div className="lgf-offer-container">
        <div className="lgf-offer-grid">
          
          {/* Lado Esquerdo: Proposta de Valor */}
          <div className="lgf-offer-info">
            <div className="lgf-offer-badge">
              <i className="fa-solid fa-paper-plane"></i>
              <span>⚡ Proposta Personalizada</span>
            </div>

            <h2 className="lgf-offer-title">
              Pronto Para Dar o Próximo Passo na <span className="offer-text-gradient">TI da Sua Empresa</span>?
            </h2>

            <p className="lgf-offer-description">
              Preencha os dados ao lado e nossa equipe apresentará um plano executivo sob medida para automatizar, proteger e acelerar seu negócio.
            </p>

            {/* Selos de Garantia e Confiança */}
            <div className="lgf-trust-list">
              <div className="trust-item">
                <div className="trust-icon-box">
                  <i className="fa-solid fa-user-shield"></i>
                </div>
                <div className="trust-text">
                  <strong>Dados 100% Seguros</strong>
                  <span>Proteção rigorosa contra spam e sigilo garantido</span>
                </div>
              </div>

              <div className="trust-item">
                <div className="trust-icon-box">
                  <i className="fa-solid fa-clock-fast"></i>
                </div>
                <div className="trust-text">
                  <strong>Resposta Rápida</strong>
                  <span>Retorno técnico executivo em até 2 horas úteis</span>
                </div>
              </div>

              <div className="trust-item">
                <div className="trust-icon-box">
                  <i className="fa-solid fa-headset"></i>
                </div>
                <div className="trust-text">
                  <strong>Atendimento Especializado</strong>
                  <span>Consultoria direta com especialistas sênior</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Form Card Glassmorphism Compacto */}
          <div className="lgf-offer-card-wrapper">
            <div className="offer-card-glow"></div>
            <div className="lgf-offer-card">
              
              <div className="offer-card-header">
                <h3>Solicitar Proposta Sem Compromisso</h3>
                <p>Receba um diagnóstico completo do seu projeto</p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Campo Nome */}
                <div className="form-group">
                  <label className="form-label">Seu Nome Completo</label>
                  <div className="input-group">
                    <span className="input-group-icon">
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <input
                      type="text"
                      name="nome"
                      className="form-input"
                      placeholder="Ex: Carlos Eduardo Silva"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Campo E-mail */}
                <div className="form-group">
                  <label className="form-label">E-mail Corporativo</label>
                  <div className="input-group">
                    <span className="input-group-icon">
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="carlos@suaempresa.com.br"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Campo WhatsApp */}
                <div className="form-group">
                  <label className="form-label">WhatsApp com DDD</label>
                  <div className="input-group">
                    <span className="input-group-icon">
                      <i className="fa-brands fa-whatsapp"></i>
                    </span>
                    <input
                      type="tel"
                      name="whatsapp"
                      className="form-input"
                      placeholder="(11) 99999-9999"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Campo Seleção de Necessidade */}
                <div className="form-group">
                  <label className="form-label">Principal Necessidade</label>
                  <div className="input-group">
                    <span className="input-group-icon">
                      <i className="fa-solid fa-layer-group"></i>
                    </span>
                    <select
                      name="necessidade"
                      className="form-select"
                      value={formData.necessidade}
                      onChange={handleChange}
                    >
                      <option value="Criação / Reformulação de Site">Criação / Reformulação de Site</option>
                      <option value="Automação de Processos & WhatsApp">Automação de Processos & WhatsApp</option>
                      <option value="Consultoria Estratégica de TI">Consultoria Estratégica de TI</option>
                      <option value="Segurança Cibernética & LGPD">Segurança Cibernética & LGPD</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn-submit-proposal">
                  <i className="fa-brands fa-whatsapp"></i>
                  <span>Enviar Proposta via WhatsApp</span>
                </button>

                <div className="form-footer-note">
                  <i className="fa-solid fa-lock"></i>
                  <span>Início imediato via atendimento prioritário</span>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
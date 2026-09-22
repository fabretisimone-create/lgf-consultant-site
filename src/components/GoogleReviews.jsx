import React from 'react';
import './GoogleReviews.css';

const reviewsData = [
  {
    id: 1,
    nome: "Carlos Eduardo Silva",
    cargo: "CEO na LogiTech Transportes",
    foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    estrelas: 5,
    tempo: "Há 2 semanas",
    depoimento: "A LGF Consultant reformulou a nossa infraestrutura de TI e automatizou o nosso atendimento no WhatsApp. O tempo de resposta caiu 70%. Atendimento de nível executivo!",
  },
  {
    id: 2,
    nome: "Mariana Alcantara",
    cargo: "Diretora Operacional no Grupo Innova",
    foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    estrelas: 5,
    tempo: "Há 1 mês",
    depoimento: "Excelente consultoria! Precisávamos de um site moderno com IA e integrado ao nosso CRM. Entregaram antes do prazo, com design impecável e suporte proativo nota 10.",
  },
  {
    id: 3,
    nome: "Roberto Mendes",
    cargo: "Sócio-Fundador da RM Advocacia",
    foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    estrelas: 5,
    tempo: "Há 3 semanas",
    depoimento: "A segurança e estabilidade dos nossos dados eram prioridade. A LGF implementou proteção cibernética de ponta e migrou tudo para a nuvem sem qualquer pausa no escritório.",
  }
];

export default function GoogleReviews() {
  return (
    <section className="lgf-reviews-section" id="avaliacoes">
      <div className="reviews-bg-glow"></div>

      <div className="lgf-reviews-container">
        
        {/* Cabeçalho da Seção */}
        <div className="lgf-reviews-header">
          <div className="lgf-reviews-badge">
            <i className="fa-solid fa-star"></i>
            <span>⚡ Depoimentos & Reputação</span>
          </div>

          <h2 className="lgf-reviews-title">
            O Que Nossos Clientes Dizem Sobre a <span className="reviews-text-gradient">LGF Consultant</span>
          </h2>

          <p className="lgf-reviews-subtitle">
            Aprovação de executivos e líderes que transformaram a TI e os resultados operacionais de suas empresas.
          </p>

          {/* Badge de Avaliação Excelente do Google */}
          <div className="lgf-google-score-box">
            <i className="fa-brands fa-google google-brand-icon"></i>
            <div className="score-details">
              <span className="score-number">4.9</span>
              <span className="stars-gold">★★★★★</span>
              <span className="score-label">Avaliação excelente no Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Grid de Depoimentos Conectados por Circuitos Cyber */}
        <div className="lgf-reviews-grid">
          
          {/* Card Depoimento 1 */}
          <div className="lgf-review-card">
            <div>
              <div className="review-card-header">
                <i className="fa-solid fa-quote-left review-quote-icon"></i>
                <div className="review-google-meta">
                  <i className="fa-brands fa-google"></i>
                  <span className="review-time">{reviewsData[0].tempo}</span>
                </div>
              </div>

              <div className="review-card-stars">
                {"★".repeat(reviewsData[0].estrelas)}
              </div>

              <p className="review-card-text">
                "{reviewsData[0].depoimento}"
              </p>
            </div>

            <div className="review-user-profile">
              <img src={reviewsData[0].foto} alt={reviewsData[0].nome} className="review-user-avatar" />
              <div>
                <h4 className="review-user-name">
                  {reviewsData[0].nome}
                  <i className="fa-solid fa-circle-check review-verified-badge" title="Cliente Verificado"></i>
                </h4>
                <p className="review-user-role">{reviewsData[0].cargo}</p>
              </div>
            </div>
          </div>

          {/* Conector de Circuito 1 */}
          <div className="lgf-reviews-connector" aria-hidden="true">
            <div className="lgf-reviews-line"></div>
            <div className="lgf-reviews-node"></div>
            <div className="lgf-reviews-line"></div>
          </div>

          {/* Card Depoimento 2 */}
          <div className="lgf-review-card">
            <div>
              <div className="review-card-header">
                <i className="fa-solid fa-quote-left review-quote-icon"></i>
                <div className="review-google-meta">
                  <i className="fa-brands fa-google"></i>
                  <span className="review-time">{reviewsData[1].tempo}</span>
                </div>
              </div>

              <div className="review-card-stars">
                {"★".repeat(reviewsData[1].estrelas)}
              </div>

              <p className="review-card-text">
                "{reviewsData[1].depoimento}"
              </p>
            </div>

            <div className="review-user-profile">
              <img src={reviewsData[1].foto} alt={reviewsData[1].nome} className="review-user-avatar" />
              <div>
                <h4 className="review-user-name">
                  {reviewsData[1].nome}
                  <i className="fa-solid fa-circle-check review-verified-badge" title="Cliente Verificado"></i>
                </h4>
                <p className="review-user-role">{reviewsData[1].cargo}</p>
              </div>
            </div>
          </div>

          {/* Conector de Circuito 2 */}
          <div className="lgf-reviews-connector" aria-hidden="true">
            <div className="lgf-reviews-line"></div>
            <div className="lgf-reviews-node"></div>
            <div className="lgf-reviews-line"></div>
          </div>

          {/* Card Depoimento 3 */}
          <div className="lgf-review-card">
            <div>
              <div className="review-card-header">
                <i className="fa-solid fa-quote-left review-quote-icon"></i>
                <div className="review-google-meta">
                  <i className="fa-brands fa-google"></i>
                  <span className="review-time">{reviewsData[2].tempo}</span>
                </div>
              </div>

              <div className="review-card-stars">
                {"★".repeat(reviewsData[2].estrelas)}
              </div>

              <p className="review-card-text">
                "{reviewsData[2].depoimento}"
              </p>
            </div>

            <div className="review-user-profile">
              <img src={reviewsData[2].foto} alt={reviewsData[2].nome} className="review-user-avatar" />
              <div>
                <h4 className="review-user-name">
                  {reviewsData[2].nome}
                  <i className="fa-solid fa-circle-check review-verified-badge" title="Cliente Verificado"></i>
                </h4>
                <p className="review-user-role">{reviewsData[2].cargo}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
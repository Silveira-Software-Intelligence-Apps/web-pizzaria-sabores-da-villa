import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <main style={{ background: '#1a0a00', color: '#fef3c7' }}>

      {/* ── NAVBAR ── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: '#1a0a00dd', backdropFilter: 'blur(16px)', borderBottom: '1px solid #3d1f00', height: '68px', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#f59e0b' }}>Pizzaria Sabores da Villa</div>
          <div style={{ display: 'flex', gap: '32px', fontSize: '0.9rem', fontWeight: 500 }}>
            <a href="#servicos" style={{ color: '#d97706', transition: 'color .15s' }}>Serviços</a>
            <a href="#sobre" style={{ color: '#d97706', transition: 'color .15s' }}>Sobre</a>
            <a href="#avaliacoes" style={{ color: '#d97706', transition: 'color .15s' }}>Avaliações</a>
          </div>
          <a href="https://wa.me/555511966035050?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.875rem', background: '#25d366', color: '#fff' }}>WhatsApp</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '68px' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1a0a00ee 0%, #1a0a0099 50%, #1a0a0077 100%)' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1120px', margin: '0 auto', padding: '60px 24px' }}>
          <span className="section-label">pizzaria • Osasco</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: '24px', color: '#fef3c7' }}>
            Pizzaria Sabores da Villa
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', color: '#d97706', maxWidth: '580px', marginBottom: '40px', lineHeight: 1.7 }}>
            pizzaria de qualidade em Osasco. Atendimento rápido e profissional.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="https://wa.me/555511966035050?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-primary">Fazer Reserva →</a>
            <a href="#servicos" className="btn-outline">Ver Cardápio</a>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#f59e0b', fontSize: '1.4rem' }}>★★★★★</span>
            <span style={{ color: '#d97706', fontSize: '0.95rem' }}>4.7 no Google</span>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#220e00', borderTop: '1px solid #3d1f00', borderBottom: '1px solid #3d1f00' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '48px 24px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#f59e0b', lineHeight: 1 }}>12+</div>
          <div style={{ fontSize: '0.875rem', color: '#d97706', marginTop: '6px' }}>Anos de sabor</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#f59e0b', lineHeight: 1 }}>500+</div>
          <div style={{ fontSize: '0.875rem', color: '#d97706', marginTop: '6px' }}>Pratos no cardápio</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#f59e0b', lineHeight: 1 }}>4.8★</div>
          <div style={{ fontSize: '0.875rem', color: '#d97706', marginTop: '6px' }}>TripAdvisor</div>
        </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">O que fazemos</span>
            <h2 className="section-title">Nossos Serviços</h2>
            <p style={{ color: '#d97706', maxWidth: '520px', margin: '0 auto', fontSize: '1.05rem' }}>
              Qualidade e excelência em cada atendimento. Confira tudo que oferecemos.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="grid-responsive">
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🍽️</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fef3c7', marginBottom: '8px' }}>Almoço Executivo</h3>
          <p style={{ fontSize: '0.9rem', color: '#d97706', lineHeight: 1.6 }}>Segunda a sexta</p>
        </div>
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🌙</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fef3c7', marginBottom: '8px' }}>Jantar Especial</h3>
          <p style={{ fontSize: '0.9rem', color: '#d97706', lineHeight: 1.6 }}>Ambiente romântico</p>
        </div>
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🎉</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fef3c7', marginBottom: '8px' }}>Eventos e Festas</h3>
          <p style={{ fontSize: '0.9rem', color: '#d97706', lineHeight: 1.6 }}>Casamentos e corporativos</p>
        </div>
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🛵</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fef3c7', marginBottom: '8px' }}>Delivery</h3>
          <p style={{ fontSize: '0.9rem', color: '#d97706', lineHeight: 1.6 }}>Entrega rápida</p>
        </div>
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>⭐</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fef3c7', marginBottom: '8px' }}>Cardápio do Dia</h3>
          <p style={{ fontSize: '0.9rem', color: '#d97706', lineHeight: 1.6 }}>Ingredientes frescos</p>
        </div>
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📅</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fef3c7', marginBottom: '8px' }}>Reservas Online</h3>
          <p style={{ fontSize: '0.9rem', color: '#d97706', lineHeight: 1.6 }}>Mesa garantida</p>
        </div>
          </div>
        </div>
      </section>

      {/* ── SOBRE + IMAGEM ── */}
      <section id="sobre" style={{ background: '#220e00', padding: '96px 24px', borderTop: '1px solid #3d1f00' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="grid-2-responsive">
          <div>
            <span className="section-label">Nossa história</span>
            <h2 className="section-title">Por que escolher a Pizzaria Sabores da Villa?</h2>
            <p style={{ color: '#d97706', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '28px' }}>
              Referência em pizzaria em Osasco, a <strong style={{ color: '#fef3c7' }}>Pizzaria Sabores da Villa</strong> se destaca pela qualidade no atendimento, 
              profissionais especializados e compromisso com a satisfação total dos nossos clientes.
               Com avaliação 4.7★ no Google, somos a escolha certa para quem busca resultado de verdade.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Profissionais certificados e experientes',
                'Atendimento rápido e personalizado',
                'Garantia em todos os serviços',
                'Preços justos e transparentes',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#f59e0b22', border: '1px solid #f59e0b55', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="12" height="12" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{ color: '#d97706', fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '36px' }}>
              <a href="https://wa.me/555511966035050?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-primary">Fazer Reserva →</a>
            </div>
          </div>
          <div style={{ borderRadius: '20px', overflow: 'hidden', height: '480px', position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80&auto=format&fit=crop" alt="Pizzaria Sabores da Villa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #1a0a0088, transparent)' }} />
          </div>
        </div>
      </section>

      {/* ── AVALIAÇÕES ── */}
      <section id="avaliacoes" style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Amados pela nossa comunidade</span>
            <h2 className="section-title">Avaliações Reais</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="grid-responsive">
        <div className="card">
          <div style={{ color: '#f59e0b', fontSize: '1.1rem', marginBottom: '12px' }}>★★★★★</div>
          <p style={{ color: '#d97706', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '16px', fontStyle: 'italic' }}>"Melhor pizzaria que já fui! Atendimento excelente, rápido e preço justo. Super recomendo."</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f59e0b22', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>👨</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#fef3c7' }}>Carlos M.</div>
              <div style={{ fontSize: '0.75rem', color: '#d97706' }}>Cliente verificado</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div style={{ color: '#f59e0b', fontSize: '1.1rem', marginBottom: '12px' }}>★★★★★</div>
          <p style={{ color: '#d97706', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '16px', fontStyle: 'italic' }}>"Muito profissional e atencioso. Resolveram tudo na hora. Voltarei sempre com certeza!"</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f59e0b22', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>👩</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#fef3c7' }}>Ana L.</div>
              <div style={{ fontSize: '0.75rem', color: '#d97706' }}>Cliente verificado</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div style={{ color: '#f59e0b', fontSize: '1.1rem', marginBottom: '12px' }}>★★★★★</div>
          <p style={{ color: '#d97706', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '16px', fontStyle: 'italic' }}>"4.7★ Serviço de primeira qualidade. Equipe qualificada e ambiente organizado. Recomendo a todos!"</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f59e0b22', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>🧑</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#fef3c7' }}>Roberto F.</div>
              <div style={{ fontSize: '0.75rem', color: '#d97706' }}>Cliente verificado</div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ background: '#220e00', borderTop: '1px solid #3d1f00', padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900&q=80&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label">Pronto para começar?</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '20px', color: '#fef3c7' }}>
            Fale com a <span style={{ color: '#f59e0b' }}>Pizzaria Sabores da Villa</span> agora mesmo
          </h2>
          <p style={{ color: '#d97706', fontSize: '1.1rem', marginBottom: '40px', lineHeight: 1.7 }}>
            Atendimento rápido, profissional e sem complicação. Estamos em Osasco para te atender.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://wa.me/555511966035050?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-primary" style={{ fontSize: '1.1rem', padding: '18px 40px' }}>Fazer Reserva →</a>
            
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#1a0a00', borderTop: '1px solid #3d1f00', padding: '48px 24px 32px' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid #3d1f00' }} className="grid-responsive">
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#f59e0b', marginBottom: '12px' }}>Pizzaria Sabores da Villa</div>
              <p style={{ color: '#d97706', fontSize: '0.9rem', lineHeight: 1.7 }}>
                pizzaria em Osasco. Qualidade e confiança em cada atendimento.
              </p>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#fef3c7', marginBottom: '16px', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '.08em' }}>Navegação</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Início', 'Serviços', 'Sobre', 'Avaliações', 'Contato'].map(item => (
                  <a key={item} href={`#${item.toLowerCase()}`} style={{ color: '#d97706', fontSize: '0.9rem', transition: 'color .15s' }}>{item}</a>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#fef3c7', marginBottom: '16px', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '.08em' }}>Contato</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="https://wa.me/555511966035050?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" style={{ color: '#d97706', fontSize: '0.9rem' }}>📱 5511966035050</a>
                <div style={{ color: '#d97706', fontSize: '0.9rem' }}>📍 Osasco</div>
                
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ color: '#d97706', fontSize: '0.85rem' }}>© 2026 Pizzaria Sabores da Villa. Todos os direitos reservados.</p>
            <p style={{ color: '#d97706', fontSize: '0.8rem', opacity: .5 }}>Site criado por Lead Machine</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}

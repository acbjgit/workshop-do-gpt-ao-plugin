import Link from 'next/link';

export const metadata = {
  title: 'Inscrição Confirmada! | Do GPT ao Plugin',
  description: 'Confirmação de inscrição no Workshop Do GPT ao Plugin. Entre no grupo exclusivo do WhatsApp para receber o link do Zoom.',
};

export default function Obrigado() {
  const whatsappGrupo = process.env.NEXT_PUBLIC_WHATSAPP_GRUPO || 'https://chat.whatsapp.com/LTlStAD867DKzuEFmi3hqj?s=cl&p=a&iam=2';
  const whatsappSuporte = process.env.NEXT_PUBLIC_WHATSAPP || '5511945903307';

  return (
    <main>
      <header className="nav container">
        <Link className="logo" href="/">
          BESSA <span>WEB DESIGN</span>
        </Link>
        <span className="pill smallPill" style={{ background: '#123b28', borderColor: '#2ba866', color: '#68f09b' }}>
          ✓ INSCRIÇÃO CONFIRMADA
        </span>
      </header>

      <section className="hero container" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
        <div className="pill" style={{ background: '#123b28', borderColor: '#2ba866', color: '#68f09b' }}>
          🎉 PARABÉNS! SUA VAGA ESTÁ GARANTIDA
        </div>

        <h1 style={{ margin: '24px auto', fontSize: 'clamp(32px, 5vw, 54px)' }}>
          Falta apenas <span>um passo fundamental</span> para você acessar o Workshop:
        </h1>

        <p className="lead" style={{ margin: '0 auto 30px' }}>
          O link de acesso à sala exclusiva do <strong>Zoom</strong>, avisos importantes e materiais complementares serão compartilhados diretamente no nosso grupo VIP de alunos.
        </p>

        <div className="card" style={{ maxWidth: '620px', margin: '0 auto 36px', textAlign: 'left', borderColor: '#336294', background: '#0e1d35' }}>
          <h3 style={{ marginTop: 0, color: '#6abeff' }}>📱 Entre no Grupo Exclusivo no WhatsApp</h3>
          <p style={{ marginBottom: '22px', fontSize: '15px' }}>
            Clique no botão abaixo para entrar imediatamente no grupo do workshop. O grupo é silencioso, exclusivo para avisos e envio do link do Zoom no dia <strong>26/11 às 18h</strong>.
          </p>

          {whatsappGrupo ? (
            <a
              className="button"
              href={whatsappGrupo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: '#25D366',
                color: '#062010',
                fontSize: '15px',
                fontWeight: '900',
                padding: '18px 24px',
              }}
            >
              ENTRAR NO GRUPO DO WHATSAPP DO WORKSHOP →
            </a>
          ) : (
            <div style={{ padding: '16px', background: '#1c2c43', borderRadius: '8px', border: '1px dashed #406085', textAlign: 'center' }}>
              <span style={{ color: '#ffd28c', fontWeight: 'bold' }}>
                Link do grupo em configuração (.env.local: NEXT_PUBLIC_WHATSAPP_GRUPO)
              </span>
            </div>
          )}
        </div>

        <div style={{ borderTop: '1px solid #1f314d', paddingTop: '28px' }}>
          <p className="details" style={{ margin: 0 }}>
            📅 <strong>Quando:</strong> 26 de novembro de 2026 às 18h (Horário de Brasília) &nbsp; · &nbsp; 💻 <strong>Onde:</strong> Zoom Ao Vivo
          </p>

          {whatsappSuporte && (
            <p className="help" style={{ marginTop: '16px' }}>
              Teve algum problema com seu acesso?{' '}
              <a
                href={`https://wa.me/${whatsappSuporte.replace(/\D/g, '')}?text=${encodeURIComponent(
                  'Olá! Acabei de me inscrever no workshop Do GPT ao Plugin e preciso de suporte com meu acesso.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale com o suporte individual ↗
              </a>
            </p>
          )}
        </div>
      </section>

      <footer className="container footer" style={{ textAlign: 'center' }}>
        <strong>BESSA <span>WEB DESIGN</span></strong>
        <p>Workshop Do GPT ao Plugin · Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}

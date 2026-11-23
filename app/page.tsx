'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import CountdownTimer from './components/CountdownTimer';
import FlowScrollytelling from './components/FlowScrollytelling';

const checkoutAoVivo = process.env.NEXT_PUBLIC_HOTMART_AO_VIVO || 'https://pay.hotmart.com/Q108609092V?off=zbon315k';
const checkoutGravacao = process.env.NEXT_PUBLIC_HOTMART_GRAVACAO || 'https://pay.hotmart.com/Q108609092V?off=k8yf81ko';
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '5511945903307';

const benefits = [
  ['01', 'Mapeamento de Funcionalidades', 'Aprenda a analisar as saídas e a lógica do GPT que você utiliza para identificar exatamente o que precisa ser replicado.'],
  ['02', 'Criação do Plugin do Zero', 'Acompanhe na tela do computador a estruturação de um plugin funcional, independente e personalizável.'],
  ['03', 'Configuração e Testes Práticos', 'Veja o passo a passo de configuração e os testes essenciais para garantir que a sua ferramenta responda com precisão.'],
  ['04', 'Sessão de Dúvidas ao Vivo', 'Tire suas dúvidas diretamente comigo pelo microfone ou chat durante a transmissão no Zoom.'],
];

function Checkout({ href, children }: { href: string; children: React.ReactNode }) {
  return href ? (
    <a className="button" href={href} target="_blank" rel="noopener noreferrer">
      {children} ↗
    </a>
  ) : (
    <span className="button disabled" title="Configure o link no arquivo .env.local">
      Inscrições em breve
    </span>
  );
}

// Configurações de animação suave de entrada
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Home() {
  return (
    <main>
      {/* Navegação */}
      <header className="nav container">
        <a className="logo" href="#inicio">
          BESSA <span>WEB DESIGN</span>
        </a>
        <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a className="navlink" href="#conteudo">O que aprende</a>
          <a className="navlink" href="#jornada">Como Funciona</a>
          <a className="navlink" href="#instrutor">Instrutor</a>
          <a className="navlink" href="#ingressos" style={{ color: '#56b5ff', fontWeight: 'bold' }}>Garantir Vaga →</a>
        </nav>
      </header>

      {/* Hero */}
      <motion.section
        className="hero container"
        id="inicio"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="pill">
          <span>✦</span> WORKSHOP EXCLUSIVO AO VIVO NO ZOOM · 04/12/2026 ÀS 18H
        </div>

        <h1>
          Você ganhou ou comprou um <em>GPT personalizado?</em><br />
          <span>Aprenda a criar seu próprio plugin e garanta sua independência.</span>
        </h1>

        <p className="lead">
          Não foi você quem criou aquele GPT que você usa todos os dias no seu fluxo de trabalho? Descubra como desenvolver uma alternativa própria e segura, mesmo sem acesso aos bastidores ou instruções internas do GPT original.
        </p>

        {/* Temporizador Sincronizado em Tempo Real */}
        <CountdownTimer targetDate="2026-12-04T18:00:00-03:00" />

        <aside className="alert">
          <strong>⚠ ATENÇÃO: NÃO FIQUE REFÉM DE FERRAMENTAS DE TERCEIROS</strong>
          <p>
            Mudanças de regras, encerramento de contas ou restrições nos GPTs de terceiros podem deixar você na mão de um dia para o outro. Aprenda a construir seu próprio plugin e tenha controle total sobre as suas ferramentas.
          </p>
        </aside>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <a className="button heroButton" href="#ingressos">
            QUERO GARANTIR MINHA VAGA NO ZOOM →
          </a>
        </div>

        <p className="details">
          📅 <strong>Data:</strong> 04 de dezembro de 2026 &nbsp;·&nbsp; 🕕 <strong>Horário:</strong> 18h (Horário de Brasília) &nbsp;·&nbsp; 💻 <strong>Local:</strong> Sala Privada no Zoom
        </p>
      </motion.section>

      {/* Scrollytelling / Jornada de Transformação */}
      <section className="section container" id="jornada">
        <FlowScrollytelling videoSrc={undefined} />
      </section>

      {/* O que vai aprender */}
      <section className="section container" id="conteudo">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
        >
          <div className="eyebrow">100% PRÁTICO E DIRETO AO PONTO</div>
          <h2>O que você vai dominar no Workshop</h2>
        </motion.div>

        <div className="grid">
          {benefits.map(([num, title, description], index) => (
            <motion.article
              className="card"
              key={num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              variants={fadeInUp}
            >
              <span className="num">{num}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Como funciona no Zoom */}
      <motion.section
        className="section container"
        id="zoom"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeInUp}
      >
        <div className="eyebrow">TRANSMISSÃO AO VIVO</div>
        <h2>Como será a dinâmica no Zoom</h2>
        <div className="zoomCard">
          <p className="lead" style={{ margin: 0, color: '#e1eeff' }}>
            Não é um curso gravado em que você fica com dúvidas sozinho. Será uma imersão prática ao vivo pelo Zoom, onde você acompanha o compartilhamento de tela em tempo real e interage diretamente com o instrutor.
          </p>
          <div className="zoomBadges">
            <div className="zoomBadgeItem">💻 <strong>Compartilhamento de Tela:</strong> Passo a passo sem pular etapas</div>
            <div className="zoomBadgeItem">🎙️ <strong>Microfone e Chat Abertos:</strong> Tira-dúvidas em tempo real</div>
            <div className="zoomBadgeItem">👥 <strong>Turma Exclusiva:</strong> Grupo VIP no WhatsApp para avisos e networking</div>
            <div className="zoomBadgeItem">📦 <strong>Códigos e Modelos:</strong> Materiais de apoio disponibilizados para download</div>
          </div>
        </div>
      </motion.section>

      {/* Para quem é / Ética */}
      <motion.section
        className="section container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeInUp}
      >
        <div className="eyebrow">DIRETRIZES & CLAREZA</div>
        <h2>Você não precisa ser o criador do GPT original</h2>
        <p className="lead">
          Este workshop foi desenhado para profissionais, designers, criadores e empreendedores que utilizam GPTs de terceiros (recebidos em mentorias, cursos ou compras) e desejam liberdade tecnológica.
        </p>
        <div className="card" style={{ marginTop: '24px', background: '#0a1628', borderColor: '#243e63' }}>
          <h3 style={{ color: '#88cdff', marginTop: 0 }}>Compromisso Ético e de Segurança:</h3>
          <p>
            O workshop ensina engenharia reversa conceitual e desenvolvimento próprio de plugins. <strong>Não incentivamos nem ensinamos cópia de código protegido, extração de dados confidenciais ou invasão de prompts privados de terceiros.</strong> Você aprenderá a criar uma ferramenta com lógica própria inspirada nas funcionalidades que você precisa.
          </p>
        </div>
      </motion.section>

      {/* Instrutor */}
      <motion.section
        className="section container"
        id="instrutor"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeInUp}
      >
        <div className="eyebrow">QUEM VAI TE ENSINAR</div>
        <h2>Conheça seu instrutor</h2>
        <div className="instructorCard">
          <div className="instructorImgWrapper">
            <Image
              src="/antonio-bessa.jpg"
              alt="Antonio Bessa - Instrutor do Workshop Do GPT ao Plugin"
              width={280}
              height={380}
              className="instructorImg"
              priority
            />
          </div>
          <div className="instructorBio">
            <span className="instructorRole">Analista de Sistemas · Web Designer · Especialista em IA</span>
            <h3>Antonio Bessa</h3>
            <p>
              Analista de sistemas, web designer e especialista em Inteligência Artificial, Antonio Bessa é a mente por trás da <strong>Bessa Web Design</strong>. Criador de conteúdo digital e YouTuber, tem como missão desmistificar a tecnologia e levar soluções práticas e funcionais para o dia a dia de profissionais e empresas.
            </p>
            <p>
              Neste workshop, Antonio vai abrir sua tela e demonstrar de forma clara e acessível como você pode criar seu próprio plugin, garantindo que suas ferramentas essenciais estejam sempre sob o seu controle.
            </p>
            <div className="socialLinks">
              <a
                href="https://www.instagram.com/bessawebdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="socialBtn"
              >
                📸 Siga no Instagram <strong>@bessawebdesign</strong> ↗
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Ingressos / Preços */}
      <motion.section
        className="section container"
        id="ingressos"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeInUp}
      >
        <div className="eyebrow">INSCRIÇÕES ABERTAS</div>
        <h2>Escolha como deseja participar</h2>
        <div className="grid prices">
          <article className="card priceCard">
            <h3>Workshop Ao Vivo</h3>
            <div className="price">R$ 49,90</div>
            <p style={{ marginBottom: '20px' }}>
              Acesso completo à aula ao vivo no Zoom no dia 04/12 às 18h, participação na sessão de dúvidas e acesso ao grupo VIP de alunos no WhatsApp.
            </p>
            <Checkout href={checkoutAoVivo}>GARANTIR MINHA VAGA NO AO VIVO</Checkout>
          </article>

          <article className="card priceCard featured">
            <div className="pill smallPill">MAIS ESCOLHIDO · RECOMENDADO</div>
            <h3 style={{ marginTop: '14px' }}>Ao Vivo + Gravação Completa</h3>
            <div className="price">R$ 67,00</div>
            <p style={{ marginBottom: '20px' }}>
              Tudo do plano Ao Vivo mais acesso à gravação oficial em alta definição por 12 meses, para você rever e pausar o passo a passo quantas vezes quiser.
            </p>
            <Checkout href={checkoutGravacao}>QUERO ACESSO COMPLETO + GRAVAÇÃO</Checkout>
          </article>
        </div>

        <p className="details" style={{ textAlign: 'center', marginTop: '24px' }}>
          🔒 <em>Pagamento 100% seguro processado pela Hotmart. Assim que confirmar a inscrição, você será direcionado ao nosso Grupo VIP do WhatsApp.</em>
        </p>

        {/* Garantia */}
        <div className="guaranteeCard">
          <div className="guaranteeBadge">🛡️</div>
          <div className="guaranteeContent">
            <h3>Garantia Incondicional de 7 Dias</h3>
            <p>
              Inscreva-se sem nenhum risco. Se por qualquer motivo você participar ou assistir ao conteúdo e achar que o workshop não entregou valor, basta solicitar o reembolso na plataforma em até 7 dias que 100% do seu dinheiro será devolvido.
            </p>
          </div>
        </div>

        {whatsapp && (
          <p className="help">
            Ficou com alguma dúvida antes de se inscrever?{' '}
            <a
              href={`https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
                'Olá Antonio! Tenho uma dúvida sobre o workshop Do GPT ao Plugin.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale comigo diretamente pelo WhatsApp ↗
            </a>
          </p>
        )}
      </motion.section>

      {/* FAQ */}
      <motion.section
        className="section container"
        id="faq"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeInUp}
      >
        <div className="eyebrow">DÚVIDAS COMUNS</div>
        <h2>Perguntas frequentes</h2>
        <div className="faq">
          <details>
            <summary>Preciso ser um programador experiente para acompanhar?</summary>
            <p>
              Não! O workshop foi desenhado para ser didático e acessível. Toda a lógica e o passo a passo serão demonstrados na tela, permitindo que iniciantes e profissionais de tecnologia entendam como montar e configurar seu plugin.
            </p>
          </details>

          <details>
            <summary>Como recebo o link para entrar na sala do Zoom?</summary>
            <p>
              Assim que o seu pagamento for confirmado na Hotmart, você será redirecionado para a nossa página de confirmação com o link de entrada no Grupo VIP do WhatsApp. O link da sala do Zoom e os lembretes serão enviados diretamente lá e também por e-mail.
            </p>
          </details>

          <details>
            <summary>E se eu não puder assistir no dia e horário ao vivo?</summary>
            <p>
              Selecione a opção <strong>"Ao Vivo + Gravação Completa" (R$ 67,00)</strong>. Você terá acesso irrestrito à gravação na íntegra por 12 meses para assistir no seu tempo e tirar suas dúvidas.
            </p>
          </details>

          <details>
            <summary>Vou conseguir copiar as instruções secretas do GPT original?</summary>
            <p>
              Não. O objetivo ético do workshop é ensinar você a construir uma alternativa própria com recursos semelhantes com base no que a ferramenta produz, sem violar acessos restritos, dados sensíveis ou configurações ocultas do autor original.
            </p>
          </details>

          <details>
            <summary>Por que é importante criar um plugin próprio agora?</summary>
            <p>
              Depender exclusivamente de GPTs criados por outras contas deixa o seu fluxo de trabalho vulnerável a mudanças de acesso, bloqueios ou descontinuação. Ter seu próprio plugin garante autonomia e personalização para o seu negócio.
            </p>
          </details>
        </div>
      </motion.section>

      {/* Rodapé */}
      <footer className="container footer">
        <strong>
          BESSA <span>WEB DESIGN</span>
        </strong>
        <p>
          Workshop independente idealizado e ministrado por Antonio Bessa. Sem afiliação comercial ou patrocínio da OpenAI. Marcas citadas pertencem aos seus respectivos titulares.
        </p>
      </footer>
    </main>
  );
}

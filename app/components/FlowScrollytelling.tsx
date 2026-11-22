'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FlowScrollytellingProps {
  videoSrc?: string; // Se fornecido (ex: /flow-animation.mp4), controla o vídeo pelo scroll
}

export default function FlowScrollytelling({ videoSrc }: FlowScrollytellingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasVideoFile, setHasVideoFile] = useState(Boolean(videoSrc));

  // Hook do framer-motion para acompanhar o progresso de rolagem dentro da seção
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Mapeamentos para animação vetorial do fluxo
  const step1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0.2]);
  const step2Opacity = useTransform(scrollYProgress, [0.2, 0.35, 0.55, 0.65], [0.2, 1, 1, 0.2]);
  const step3Opacity = useTransform(scrollYProgress, [0.5, 0.65, 0.85, 0.95], [0.2, 1, 1, 0.2]);
  const step4Opacity = useTransform(scrollYProgress, [0.8, 0.95, 1], [0.2, 1, 1]);

  const progressBar = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Sincroniza o frame do vídeo com o scroll do mouse (Video Scrubbing)
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasVideoFile) return;

    const handleLoadedMetadata = () => {
      setVideoLoaded(true);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    const unsubscribe = scrollYProgress.on('change', (progress) => {
      if (video.duration && !isNaN(video.duration)) {
        // Altera o tempo exato do vídeo com base na porcentagem de rolagem
        video.currentTime = video.duration * progress;
      }
    });

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      unsubscribe();
    };
  }, [scrollYProgress, hasVideoFile]);

  return (
    <div ref={containerRef} className="scrollyContainer">
      <div className="scrollySticky">
        <div className="scrollyHeader">
          <div className="eyebrow" style={{ textAlign: 'center' }}>JORNADA DE TRANSFORMAÇÃO</div>
          <h2 style={{ textAlign: 'center', marginBottom: '8px' }}>
            Role para ver a transição: do <span>GPT</span> ao seu <span>Plugin Próprio</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#9cb5d4', fontSize: '14px', maxWidth: '600px', margin: '0 auto 24px' }}>
            Role a tela do mouse para avançar na demonstração de engenharia e criação da sua ferramenta
          </p>

          {/* Barra de progresso do scroll */}
          <div className="scrollyProgressBarBg">
            <motion.div className="scrollyProgressBarFill" style={{ width: progressBar }} />
          </div>
        </div>

        {/* Player de Vídeo Controlado por Scroll OU Demonstração Visual */}
        <div className="scrollyStage">
          {hasVideoFile ? (
            <div className="scrollyVideoWrapper">
              <video
                ref={videoRef}
                src={videoSrc}
                playsInline
                muted
                preload="auto"
                className="scrollyVideo"
              />
              {!videoLoaded && (
                <div className="scrollyPlaceholder">
                  Carregando vídeo do Flow...
                </div>
              )}
            </div>
          ) : (
            /* Visualização Interativa de Fluxo (Tech Flow) */
            <div className="flowInteractiveVisual">
              {/* Estágio 1: GPT */}
              <motion.div className="flowStepCard" style={{ opacity: step1Opacity }}>
                <div className="flowStepIcon">🤖</div>
                <div className="flowStepTag">PASSO 01</div>
                <h4>O GPT Atual</h4>
                <p>Você usa um GPT de terceiro com receio de perder o acesso ou ter regras alteradas.</p>
              </motion.div>

              <div className="flowArrow">➔</div>

              {/* Estágio 2: Mapeamento */}
              <motion.div className="flowStepCard" style={{ opacity: step2Opacity }}>
                <div className="flowStepIcon">🔍</div>
                <div className="flowStepTag">PASSO 02</div>
                <h4>Engenharia Lógica</h4>
                <p>Identificamos as funções, estrutura de inputs e o comportamento que você quer manter.</p>
              </motion.div>

              <div className="flowArrow">➔</div>

              {/* Estágio 3: Criação */}
              <motion.div className="flowStepCard" style={{ opacity: step3Opacity }}>
                <div className="flowStepIcon">⚙️</div>
                <div className="flowStepTag">PASSO 03</div>
                <h4>Construção do Plugin</h4>
                <p>Desenvolvemos a arquitetura do plugin, com código limpo e independente de terceiros.</p>
              </motion.div>

              <div className="flowArrow">➔</div>

              {/* Estágio 4: Liberdade */}
              <motion.div className="flowStepCard highlightStep" style={{ opacity: step4Opacity }}>
                <div className="flowStepIcon">🚀</div>
                <div className="flowStepTag" style={{ background: '#22c55e', color: '#042710' }}>SUA FERRAMENTA</div>
                <h4>Autonomia Total</h4>
                <p>Seu plugin funcionando sem mensalidades para terceiros e 100% no seu controle.</p>
              </motion.div>
            </div>
          )}

          {/* Dica para o usuário */}
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <span style={{ fontSize: '12px', color: '#688db5', background: '#0a172a', padding: '6px 14px', borderRadius: '20px', border: '1px solid #1c3452' }}>
              💡 Dica: Para colocar seu vídeo renderizado do Flow, basta salvar como <code>public/flow.mp4</code>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

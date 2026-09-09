import { ArrowRight, Check, ChevronRight, ClipboardCheck, Home, MapPin, MessageCircle, ShieldCheck, Wrench } from 'lucide-react';

const whatsapp = 'https://wa.me/5583999364840?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20vistoria%20de%20imóvel.';
const checks = ['Pisos, revestimentos, pintura e forros', 'Portas, janelas, esquadrias e fechaduras', 'Tomadas e pontos elétricos acessíveis', 'Torneiras, ralos e escoamento aparente', 'Sinais de infiltração, umidade e fissuras', 'Registros fotográficos das condições encontradas'];
const services = [
  [Home, '01', 'Imóvel novo', 'Receba as chaves com um registro técnico das condições aparentes do seu apartamento ou casa.'],
  [ClipboardCheck, '02', 'Compra de imóvel', 'Conheça melhor o estado aparente do imóvel antes de avançar na negociação.'],
  [Wrench, '03', 'Entrega e pós-obra', 'Identifique e documente pontos que merecem atenção durante o processo de entrega.'],
];
const steps = [
  ['Conte sobre o imóvel', 'Envie localização, tipo de imóvel e data desejada pelo WhatsApp.'],
  ['Receba o orçamento', 'Analisamos sua necessidade e definimos o escopo mais adequado.'],
  ['Agende a vistoria', 'Combinamos a melhor data e horário para a inspeção.'],
  ['Tenha tudo registrado', 'Você recebe a documentação com fotos e descrição das condições observadas.'],
];

function Button({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <a className={`button ${light ? 'button-light' : 'button-primary'}`} href={whatsapp} target="_blank" rel="noreferrer">{children}</a>;
}

export default function HomePage() {
  return <main>
    <header className="site-header">
      <a href="#inicio" className="brand" aria-label="Vistoria de Imóveis JP — início"><span className="brand-mark"><ShieldCheck size={23} /></span><span>Vistoria de<br /><strong>Imóveis JP</strong></span></a>
      <nav aria-label="Navegação principal"><a href="#servicos">Serviços</a><a href="#processo">Como funciona</a><a href="#trabalho">Nosso trabalho</a><a href="#duvidas">Dúvidas</a></nav>
      <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Pedir orçamento</a>
    </header>

    <section id="inicio" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Vistoria técnica em João Pessoa e região</p>
        <h1>Receba seu imóvel novo <em>com mais segurança.</em></h1>
        <p className="hero-text">Inspeção técnica para identificar e registrar falhas aparentes antes da entrega das chaves, compra ou ocupação do seu imóvel.</p>
        <div className="hero-actions"><Button>Solicitar orçamento <ArrowRight size={19} /></Button><span className="click-trigger">Resposta pelo WhatsApp • Atendimento agendado</span></div>
        <div className="hero-trust"><span><Check size={16} /> Registro fotográfico</span><span><Check size={16} /> Atendimento profissional</span><span><Check size={16} /> João Pessoa — PB</span></div>
      </div>
      <div className="hero-visual">
        <div className="image-frame hero-image"><img src="/assets/vistoria_01.jpeg" alt="Profissional realizando inspeção técnica no piso de um imóvel" /></div>
        <p className="photo-caption">Inspeção de revestimentos <span>João Pessoa, PB</span></p>
      </div>
    </section>

    <section className="proof-bar"><div className="section-shell proof-inner"><p>Antes de assinar, receber ou comprar, tenha informação para decidir com tranquilidade.</p><a href="#processo">Entenda como funciona <ChevronRight size={17} /></a></div></section>

    <section className="section-shell reason-section">
      <div className="section-heading narrow"><p className="eyebrow"><span /> Por que fazer uma vistoria?</p><h2>Detalhes que passam despercebidos podem custar caro depois.</h2></div>
      <div className="reason-layout">
        <div className="reason-image image-frame"><img src="/assets/vistoria_02.jpeg" alt="Inspeção em imóvel residencial" /></div>
        <div className="reason-content"><p>Uma visita comum mostra a aparência geral. A vistoria técnica observa e registra elementos acessíveis do imóvel de forma organizada, ajudando você a reconhecer pontos que merecem atenção.</p><ul className="check-list">{checks.map(item => <li key={item}><Check size={18} />{item}</li>)}</ul><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Quero avaliar meu imóvel <ArrowRight size={17} /></a></div>
      </div>
    </section>

    <section id="servicos" className="services-section"><div className="section-shell">
      <div className="section-heading service-heading"><div><p className="eyebrow light"><span /> Serviços</p><h2>O momento certo para olhar cada detalhe.</h2></div><p>O escopo é definido de acordo com o tipo de imóvel e a necessidade da sua contratação.</p></div>
      <div className="services-grid">{services.map(([Icon, number, title, text]) => <article className="service-card" key={number as string}><div className="service-top"><span className="service-icon"><Icon size={26} /></span><span>{number}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      <Button light>Falar sobre meu imóvel <MessageCircle size={18} /></Button>
    </div></section>

    <section id="processo" className="section-shell process-section"><div className="section-heading process-title"><div><p className="eyebrow"><span /> Processo simples</p><h2>Da primeira mensagem ao relatório, você sabe o que esperar.</h2></div></div><ol className="steps">{steps.map(([title, text], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>

    <section id="trabalho" className="work-section"><div className="section-shell">
      <div className="section-heading gallery-heading"><div><p className="eyebrow"><span /> Trabalho em campo</p><h2>Uma vistoria feita com atenção aos detalhes.</h2></div><p>Registros reais de inspeções em imóveis.</p></div>
      <div className="photo-grid">{['vistoria_03.jpeg','vistoria_04.jpeg','vistoria_05.jpeg','vistoria_06.jpeg','vistoria_07.jpeg'].map((image,index) => <figure key={image} className={`photo-${index + 1}`}><img src={`/assets/${image}`} alt={`Registro de vistoria técnica ${index + 1}`} /></figure>)}</div>
    </div></section>

    <section className="testimonials-section section-shell"><div className="section-heading centered"><p className="eyebrow"><span /> Quem já contou com nosso trabalho</p><h2>Confiança se constrói em cada atendimento.</h2></div><div className="testimonial-grid">{['depoimento.jpeg','depoimento1.jpeg','depoimento02.jpeg'].map((image,index) => <figure className="testimonial" key={image}><img src={`/assets/${image}`} alt={`Mensagem de cliente ${index + 1} recebida pelo WhatsApp`} /></figure>)}</div></section>

    <section className="coverage-section"><div className="section-shell coverage-inner"><div className="coverage-map"><MapPin size={34} /><div className="map-ring ring-one" /><div className="map-ring ring-two" /></div><div><p className="eyebrow light"><span /> Área de atendimento</p><h2>João Pessoa e região.</h2><p>Atendimento para imóveis residenciais e comerciais mediante agendamento. Consulte disponibilidade para sua localização.</p></div><Button light>Consultar disponibilidade <ArrowRight size={18} /></Button></div></section>

    <section id="duvidas" className="section-shell faq-section"><div className="section-heading narrow"><p className="eyebrow"><span /> Perguntas frequentes</p><h2>Informação clara para a sua decisão.</h2></div><div className="faq-list">
      <details open><summary>O que é avaliado durante a vistoria?<ChevronRight size={20} /></summary><p>São observados os elementos acessíveis previstos no escopo contratado, como acabamentos, esquadrias, instalações aparentes, áreas molhadas e sinais visíveis de umidade ou irregularidades.</p></details>
      <details><summary>Quando devo fazer a vistoria de imóvel novo?<ChevronRight size={20} /></summary><p>Preferencialmente antes da conclusão do recebimento, para que as condições aparentes identificadas possam ser registradas no momento adequado.</p></details>
      <details><summary>O que recebo após a inspeção?<ChevronRight size={20} /></summary><p>Conforme o serviço contratado, você recebe a documentação técnica com descrição das condições observadas e registros fotográficos.</p></details>
      <details><summary>A vistoria identifica problemas ocultos?<ChevronRight size={20} /></summary><p>A vistoria avalia condições aparentes e elementos acessíveis dentro do escopo. Ela não substitui perícias, ensaios ou avaliações específicas para investigar problemas ocultos.</p></details>
    </div></section>

    <section className="final-cta section-shell"><div><p className="eyebrow"><span /> Antes de receber as chaves</p><h2>Seu imóvel é uma conquista.<br />Cuide dele desde o primeiro dia.</h2></div><div><p>Conte qual imóvel você precisa vistoriar e receba um orçamento personalizado pelo WhatsApp.</p><Button>Solicitar orçamento <MessageCircle size={19} /></Button></div></section>

    <footer><div className="section-shell footer-inner"><a href="#inicio" className="brand"><span className="brand-mark"><ShieldCheck size={23} /></span><span>Vistoria de<br /><strong>Imóveis JP</strong></span></a><div><strong>Atendimento</strong><p>Segunda a sexta: 08h às 17h<br />Sábado: 08h às 12h</p></div><div><strong>Fale conosco</strong><p><a href={whatsapp} target="_blank" rel="noreferrer">(83) 99936-4840</a><br /><a href="https://instagram.com/vistoriadeimoveisjp" target="_blank" rel="noreferrer">@vistoriadeimoveisjp</a></p></div></div><div className="section-shell footer-bottom">Vistoria técnica de imóveis em João Pessoa — PB <span>© {new Date().getFullYear()}</span></div></footer>
  </main>;
}

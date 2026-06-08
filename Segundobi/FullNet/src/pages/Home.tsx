import { useEffect, useState } from "react";

import Logo from "../assets/logo.svg";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import Check from "../assets/check.png";
import NetworkLok from "../assets/network_locked.svg";
import NetworkMan from "../assets/network_manage.svg";
import NetworkNode from "../assets/network_node.svg";
import ImageClientOne from "../assets/wellington.png";
import ImageClientTwo from "../assets/user.png";
import StarFull from "../assets/Star.png";
import StarEmpty from "../assets/Star_2.png";
import HeroRectangleOne from "../assets/images/Rectangle13.png";
import HeroRectangleTwo from "../assets/images/Rectangle14.png";

import Button from "../components/button";
import Card from "../components/card";

import "../styles/header.css";
import "../styles/hero.css";
import "../styles/soluction.css";
import "../styles/testimonials.css";
import "../styles/utility.css";
import "../styles/pricing.css";
import "../styles/contact.css";
import Footer from "../components/footer";
import HeroBg from "../assets/smile.png";

const solutionCards = [
  {
    icon: NetworkLok,
    alt: "ícone internet bloqueada",
    title: "Internet Bloqueada?",
    description:
      "Tranquilo, somos flexiveis, se você tiver alguma pendência com a gente, ou precisar de um tempo para resolver algo, é só entrar em contato que a gente segura sua internet em ate 18 dias apos o vencimento da mensalidade, e quando estiver tudo certo, é só avisar que a gente desbloqueia, sem burocracia e sem stress.",
  },
  {
    icon: NetworkMan,
    alt: "ícone gerenciamento de rede",
    title: "Bora gerenciar a rede?",
    description:
      "Somos especializados em cuidar da sua rede, desde a fibra optica ate a aconexão wi-fi, cabos de rede e demais serviços, com um unico objetivo garantir o melhor desempenho e segurança para sua infraestrutura.",
  },
  {
    icon: NetworkNode,
    alt: "ícone nó de rede",
    title: "Nó de Rede?",
    description:
      "Com a tecnologia Mash, "+" LIMITE DE 5 ROTEADORES "+", oferecemos soluções avançadas para cobertura, conectividade e desempenho otimizado, garantindo uma experiência de internet superior para nossos clientes.",
  },
];

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // estado para armazenar os valores do formulário de contato
  // Valores para capturar dados dos inputs
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendContactEmail() {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        message,
      }),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      throw new Error(body.error ?? "Erro ao enviar mensagem.");
    }
  }

  // função para lidar com o envio do formulário de contato, incluindo validação e feedback para o usuário
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // função para lidar com o envio do formulário de contato, incluindo validação e feedback para o usuário
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim() || !message.trim()) {
      setFeedback({
        type: "error",
        message: "Preencha o email e a mensagem antes de enviar.",
      });
      return;
    }

    if (!emailRegex.test(email.trim())) {
      setFeedback({
        type: "error",
        message: "Digite um email válido.",
      });
      return;
    }

    setIsSending(true);
    setFeedback(null);

    try {
      await sendContactEmail();
      setEmail("");
      setMessage("");
      setFeedback({
        type: "success",
        message: "Mensagem enviada com sucesso.",
      });
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error instanceof Error ? error.message : "Erro ao enviar mensagem.",
      });
    } finally {
      setIsSending(false);
    }
  }

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">
                Login
              </a>
              <Button text="Cadastre-se" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#solution"
                      >
                        Soluções
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#testimonials"
                      >
                        Depoimentos
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#pricing"
                      >
                        Preços
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#contact"
                      >
                        Contato
                      </a>
                    </li>
                    <li>
                      <a className="reverse-color" href="#">
                        Login
                      </a>
                    </li>
                  </ul>
                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img
                      src={Close}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>

      <section id="hero">
        <div className="hero-bg" aria-hidden="true">
          <img src={HeroBg} alt="" />
        </div>

        <span className="desktop-only hero-rect hero-rect-left">
          <img src={HeroRectangleTwo} alt="Retângulo 1" />
        </span>

        <span className="hero-rect hero-rect-right">
          <img src={HeroRectangleOne} alt="Retângulo 2" />
        </span>

        <div className="container content">
          <h1>
            A internet com as melhores velocidades
            e preços do mercado!
          </h1>
          <p>
            Ja pensou em jogar conectado com a melhor internet do mercado?
            aqui na Full-Net isso é possível, venha conhecer nossos planos e
            aproveite o melhor da internet, para jogar, assistir filmes e séries,
            estudar e muito mais!
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se" />
            </span>
            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section>

      <section className="container" id="solution">
        <header>
          <span>
            <h2>Soluções</h2>
            <span className="desktop-only">
              <h2> Para te atender melhor</h2>
            </span>
          </span>
          <p>
            Internet é com a gente! A <strong>Full-Net </strong>
            já conquistou diversos clientes, junte-se a eles e veja tudo
            que pode ganhar com nossos serviços.
          </p>
        </header>

        <section className="even-columns">
          {solutionCards.map((card) => (
            <Card
              key={card.title}
              icon={card.icon}
              alt={card.alt}
              title={card.title}
              description={card.description}
            />
          ))}
        </section>
      </section>

      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">Conselho de quem conhece</p>
            <h2>
              Aqui na <strong>Full-Net</strong> cada cliente importa!
            </h2>
          </span>
          <p>
            Quem já contratou conhece a qualidade de nossa rede, internet lenta é algo inaceitável,
            acompanhe abaixo os testemunhos de quem já contratou e aprovou.
          </p>
        </header>
        <section className="carousel">
          <div className="carousel-content">
            <div className="carousel-card">
              <img src={ImageClientOne} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  Se conectar com a melhor internet do mercado é incrível, só
                  existe uma coisa melhor do que isso, toda essa estabilidade para aproveitar uma boa internet.
                </p>
              </span>
              <span className="rating">
                <img src={StarFull} alt="ícone estrela" width={22} height={20} />
                <img src={StarFull} alt="ícone estrela" width={22} height={20} />
                <img src={StarFull} alt="ícone estrela" width={22} height={20} />
                <img src={StarFull} alt="ícone estrela" width={22} height={20} />
                <img src={StarEmpty} alt="ícone estrela sem fundo" width={20} height={22} />
              </span>
              <span className="names">
                <p>Wellington Davies</p>
                <p>Eng. de Software</p>
              </span>
            </div>
          </div>

          <div className="carousel-content">
            <div className="carousel-card">
              <img src={ImageClientTwo} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  A melhor internet que já tive, a velocidade é incrível, o
                  atendimento é excelente, recomendo para todos que querem uma
                  internet de qualidade.
                </p>
              </span>
              <span className="rating">
                <img src={StarFull} alt="ícone estrela" width={22} height={20} />
                <img src={StarFull} alt="ícone estrela" width={22} height={20} />
                <img src={StarFull} alt="ícone estrela" width={22} height={20} />
                <img src={StarFull} alt="ícone estrela" width={22} height={20} />
                <img src={StarEmpty} alt="ícone estrela sem fundo" width={20} height={22} />
              </span>
              <span className="names">
                <p>Matheus brolini</p>
                <p>Tecnico de TI</p>
              </span>
            </div>
          </div>
        </section>
      </section>

      <section id="pricing" className="container">
        <header>
          <p className="desktop-only">Planos e preços</p>
          <h2>Nossos planos</h2>
        </header>

        <section className="even-columns gap-1.5">
          <div className="pricing-card">
            <span className="plan">
              <h3>Básico</h3>
              <p>Velocidade de até 100 Mbps</p>
            </span>
            <h2>Teste 3 dias grátis</h2>
            <Button text="Pedir agora" key="free" />
            <span className="hr" />
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Wi-fi gratis</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Apenas 1 por CPF</p>
            </span>
          </div>
          <div className="pricing-card premium">
            <span className="bonus">
              <p>1º MÊS COM DESCONTO</p>
            </span>
            <span className="plan">
              <h3>Premium</h3>
              <p>Para quem precisa de uma internet de alta velocidade</p>
            </span>
            <span className="price">
              <h2>R$ 99,90</h2>
              <p>/mês</p>
            </span>
            <Button text="Pedir agora" key="premium" />
            <span className="hr" />
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Wi-fi gratis + Casa conectada</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p> Suporte Premium</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>600 Mbps</p>
            </span>
          </div>
          <div className="pricing-card empresarial">
            <span className="bonus">
              <p>1º MÊS COM DESCONTO</p>
            </span>
            <span className="plan">
              <h3>Empresarial</h3>
              <p>
                Para empresas que precisam de uma internet de alta velocidade e
                estabilidade
              </p>
            </span>
            <span className="price">
              <h2>R$ 149,90</h2>
              <p>/mês</p>
            </span>
            <Button text="Pedir agora" key="empresarial" />
            <span className="hr" />
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Wi-fi gratis + Baixa latencia</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p> Suporte Premium</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>1 Gbps</p>
            </span>
          </div>
        </section>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <header className="contact-header">
            <p>Envie sua dúvida</p>
            <h2>Entre em contato</h2>
            <p>
              Entre em contato, estamos dispostos a tirar qualquer dúvida, seja
              um orçamento, uma dúvida técnica ou sobre nossos produtos.
            </p>
          </header>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="contact-field">
              <span>Seu Email</span>
              <input
                type="email"
                placeholder="Seu email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>

            <label className="contact-field">
              <span>Mensagem</span>
              <textarea
                placeholder="Motivo do contato. Ex: Gostei muito do produto x, poderia me enviar um orçamento?"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={5}
                required
              />
            </label>

            <Button text={isSending ? "Enviando..." : "Enviar"} />
            {feedback && (
              <p
                className={`contact-feedback ${
                  feedback.type === "success" ? "success" : "error"
                }`}
              >
                {feedback.message}
              </p>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

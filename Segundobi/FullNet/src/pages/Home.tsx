import { useEffect, useState } from "react";

import Logo from "../assets/logo.svg";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import Check from "../assets/check.png";
import NetworkLok from "../assets/network_locked.svg";
import NetworkMan from "../assets/network_manage.svg";
import NetworkNode from "../assets/network_node.svg";
import ImageClientOne from "../assets/Elon.png";
import ImageClientTwo from "../assets/Ryan.png";
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

const solutionCards = [
  {
    icon: NetworkLok,
    alt: "ícone internet bloqueada",
    title: "Internet Bloqueada?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae sunt magni suscipit esse sed totam eos repellat minima, autem vero accusantium voluptates reiciendis animi minus consequuntur. Tempore, eum libero.",
  },
  {
    icon: NetworkMan,
    alt: "ícone gerenciamento de rede",
    title: "Bora gerenciar a rede?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae sunt magni suscipit esse sed totam eos repellat minima, autem vero accusantium voluptates reiciendis animi minus consequuntur. Tempore, eum libero.",
  },
  {
    icon: NetworkNode,
    alt: "ícone nó de rede",
    title: "Nó de Rede",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae sunt magni suscipit esse sed totam eos repellat minima, autem vero accusantium voluptates reiciendis animi minus consequuntur. Tempore, eum libero.",
  },
];

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
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
                      <a href="#pricing">Preços</a>
                    </li>
                    <li>
                      <a href="#contact">Contato</a>
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
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Retângulo 1" />
        </span>
        <img src={HeroRectangleOne} alt="Retângulo 2" />
        <div className="container content">
          <p className="desktop-only">Olá</p>
          <h1>
            Internet residencial de alta velocidade, com as melhores velocidades
            e preços do mercado!
          </h1>
          <p>
            ja pensou em jogar se conectado com a melhor internet do mercado?
            aqui na Full-Net isso é possível, venha conhecer nossos planos e
            aproveite o melhor da internet para jogar, assistir filmes e séries,
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
            já conquistou diversos clientes, seja você mais um deles, veja tudo
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
            Quem já contratou sabe da qualidade da nossa rede, estamos tirando
            aquela ideia de que internet lenta tem de ser algo inaceitável,
            acompanhe abaixo os testemunhos de quem já comprou e aprovou.
          </p>
        </header>
        <section className="carousel">
          <div className="carousel-content">
            <div className="carousel-card">
              <img src={ImageClientOne} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  Certamente o mercado chinês de eletricos está bombando, só
                  existe uma coisa melhor do que isso, provar uma boa internet.
                </p>
              </span>
              <span className="rating">
                <img
                  src={StarFull}
                  alt="ícone estrela"
                  width={22}
                  height={20}
                />
                <img
                  src={StarFull}
                  alt="ícone estrela"
                  width={22}
                  height={20}
                />
                <img
                  src={StarFull}
                  alt="ícone estrela"
                  width={22}
                  height={20}
                />
                <img
                  src={StarFull}
                  alt="ícone estrela"
                  width={22}
                  height={20}
                />
                <img
                  src={StarEmpty}
                  alt="ícone estrela sem fundo"
                  width={20}
                  height={22}
                />
              </span>
              <span className="names">
                <p>Ellon Ma</p>
                <p>CEO BING CHILLING</p>
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
                <img
                  src={StarFull}
                  alt="ícone estrela"
                  width={22}
                  height={20}
                />
                <img
                  src={StarFull}
                  alt="ícone estrela"
                  width={22}
                  height={20}
                />
                <img
                  src={StarFull}
                  alt="ícone estrela"
                  width={22}
                  height={20}
                />
                <img
                  src={StarFull}
                  alt="ícone estrela"
                  width={22}
                  height={20}
                />
                <img
                  src={StarEmpty}
                  alt="ícone estrela sem fundo"
                  width={20}
                  height={22}
                />
              </span>
              <span className="names">
                <p>Ryan brolini</p>
                <p>CEO Gardenals ltda</p>
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
            <Button text="Pedir agora" secondary key="free" />
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
              <p>Wi-fi gratis</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>5 Suporte Premium</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>300 Mbps</p>
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
              <p>Wi-fi gratis</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>10 Suporte Premium</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>1 Gbps</p>
            </span>
          </div>
          
        </section>
      </section>
    </>
  );
}

import Logo from "../assets/logo.svg";
import HeroRectangleOne from "../assets/images/Rectangle13.png";
import HeroRectangleTwo from "../assets/images/Rectangle14.png";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import NetworkLok from "../assets/network_locked.svg";
import NetworkMan from "../assets/network_manage.svg";
import NetworkNode from "../assets/network_node.svg";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/utility.css";
import "../styles/soluction.css";
import Button from "../components/button";

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
                      <a href="#testimonials">Depoimentos</a>
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
          <div className="card">
            <span>
              <img
                src={NetworkLok}
                alt="ícone internet bloqueada"
                width={64}
                height={64}
              />
            </span>
            <div>
              <h3>Internet Bloqueada?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                beatae sunt magni suscipit esse sed totam eos repellat minima,
                autem vero accusantium voluptates reiciendis animi minus
                consequuntur. Tempore, eum libero.
              </p>
              <hr />
            </div>
          </div>

          <div className="card">
            <span>
              <img
                src={NetworkMan}
                alt="ícone gerenciamento de rede"
                width={64}
                height={64}
              />
            </span>
            <div>
              <h3>Bora gerenciar a rede?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                beatae sunt magni suscipit esse sed totam eos repellat minima,
                autem vero accusantium voluptates reiciendis animi minus
                consequuntur. Tempore, eum libero.
              </p>
              <hr />
            </div>
          </div>

          <div className="card">
            <span>
              <img
                src={NetworkNode}
                alt="ícone nó de rede"
                width={64}
                height={64}
              />
            </span>
            <div>
              <h3>Nó de Rede</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                beatae sunt magni suscipit esse sed totam eos repellat minima,
                autem vero accusantium voluptates reiciendis animi minus
                consequuntur. Tempore, eum libero.
              </p>
              <hr />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

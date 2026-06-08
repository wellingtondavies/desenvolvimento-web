import Logo from "../assets/logo.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--light-gray)", color: "var(--second-text-color)" }}>
      <div className="container" style={{ padding: "2rem 0" }}>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <div style={{ minWidth: 220 }}>
            <img src={Logo} alt="Logo Full-Net" width={170} />
            <p style={{ marginTop: "0.75rem", color: "var(--second-text-color)", fontSize: "0.95rem" }}>
              Feito com amor na aula de Programação Web
            </p>
          </div>

          <div style={{ minWidth: 140 }}>
            <h4 style={{ marginBottom: "0.5rem", color: "var(--text-color)" }}>Empresa</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Faça parte do time</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div style={{ minWidth: 140 }}>
            <h4 style={{ marginBottom: "0.5rem", color: "var(--text-color)" }}>Funcionalidades</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Análise de dados</a></li>
              <li><a href="#">Boot discord</a></li>
            </ul>
          </div>

          <div style={{ minWidth: 140 }}>
            <h4 style={{ marginBottom: "0.5rem", color: "var(--text-color)" }}>Recursos</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="#">iOS & Android</a></li>
              <li><a href="#">Teste a Demo</a></li>
              <li><a href="#">Clientes</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #e6e6e6", background: "#fafafa", padding: "0.75rem 0" }}>
        <div className="container">
          <p style={{ margin: 0, textAlign: "center", fontSize: "0.9rem", color: "var(--second-text-color)" }}>
            ©{year} Dev Wellington — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
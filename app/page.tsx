export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1>Projeto CI/CD com GitHub Actions</h1>
      <p>
        Este é um site simples em Next.js criado para demonstrar um pipeline
        completo de Integração Contínua (CI) e Entrega Contínua (CD).
      </p>
      <ul style={{ textAlign: "left", maxWidth: "600px" }}>
        <li>✅ ESLint para validação de código</li>
        <li>✅ npm run test para testes automatizados</li>
        <li>✅ npm run build para build de produção</li>
        <li>✅ Deploy automático no GitHub Pages</li>
      </ul>
    </main>
  );
}

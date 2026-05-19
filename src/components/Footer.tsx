export function Footer() {
  return (
    <footer style={{
      display: "flex", justifyContent: "space-between", flexWrap: "wrap",
      gap: 24, padding: "28px 40px",
      color: "var(--muted)", fontSize: 13, fontWeight: 700,
      borderTop: "1px solid var(--line)",
    }}>
      <span>Tech Tsu</span>
      <span>TSUNOKAWA TECH LTDA · CNPJ 66.720.724/0001-18</span>
    </footer>
  )
}

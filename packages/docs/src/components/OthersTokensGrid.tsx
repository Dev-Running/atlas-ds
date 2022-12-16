import '../styles/tokens-grid.css'

interface TokenGridProps {
  tokens: Record<string, string>
  a: string
  b: string
  hasRemValue?: boolean
}
export function TokensGrid({ tokens, a, b, hasRemValue }: TokenGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>{a}</th>
          <th>{b}</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>${key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

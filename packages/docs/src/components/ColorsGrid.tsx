import { colors } from '@devrunning/tokens'
import { getContrast } from 'polished'
export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '1rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color:
              getContrast(color, '#fff') < 3.5
                ? colors['dark-200']
                : colors['neutral-200'],
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}

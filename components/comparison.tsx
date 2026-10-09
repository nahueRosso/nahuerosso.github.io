import { Section } from '@/components/section'
import { SectionHeading } from '@/components/section-heading'
import { comparison } from '@/lib/content'
import { cn } from '@/lib/utils'

export function Comparison() {
  return (
    <Section id="comparativa" labelledBy="comparativa-titulo" tone="alt">
      <SectionHeading
        id="comparativa-titulo"
        eyebrow={comparison.eyebrow}
        title={comparison.title}
        lead={comparison.lead}
      />

      {/* Tabla en pantallas medianas y grandes */}
      <div className="mt-12 hidden overflow-x-auto md:block">
        <table className="w-full min-w-176 border-separate border-spacing-0 text-left">
          <caption className="sr-only">{comparison.caption}</caption>
          <thead>
            <tr>
              <th scope="col" className="p-4 text-sm font-bold text-muted-foreground">
                {comparison.rowHeader}
              </th>
              {comparison.columns.map((column) => (
                <th
                  key={column.id}
                  scope="col"
                  className={cn(
                    'p-4 align-bottom text-lg font-extrabold',
                    column.highlight &&
                      'rounded-t-3xl border-x-2 border-t-2 border-primary bg-background',
                  )}
                >
                  {column.name}
                  {'note' in column ? (
                    <span className="block text-sm font-normal text-muted-foreground">
                      ({column.note})
                    </span>
                  ) : null}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row, rowIndex) => {
              const isLast = rowIndex === comparison.rows.length - 1
              return (
                <tr key={row.criterion}>
                  <th
                    scope="row"
                    className="border-t border-border p-4 text-base font-bold text-muted-foreground"
                  >
                    {row.criterion}
                  </th>
                  {row.values.map((value, columnIndex) => {
                    const highlight = comparison.columns[columnIndex].highlight
                    return (
                      <td
                        key={columnIndex}
                        className={cn(
                          'border-t border-border p-4 align-top text-base leading-relaxed',
                          highlight &&
                            'border-x-2 border-x-primary bg-background font-bold',
                          highlight && isLast && 'rounded-b-3xl border-b-2 border-b-primary',
                        )}
                      >
                        {value}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Tarjetas en celulares */}
      <div className="mt-10 grid gap-4 md:hidden">
        {comparison.columns.map((column, columnIndex) => (
          <article
            key={column.id}
            aria-labelledby={`comparativa-${column.id}`}
            className={cn(
              'rounded-3xl border p-6',
              column.highlight ? 'border-2 border-primary bg-background' : 'border-border bg-background',
            )}
          >
            <h3 id={`comparativa-${column.id}`} className="text-xl font-extrabold">
              {column.name}
              {'note' in column ? (
                <span className="block text-sm font-normal text-muted-foreground">
                  ({column.note})
                </span>
              ) : null}
            </h3>
            <dl className="mt-4 grid gap-4">
              {comparison.rows.map((row) => (
                <div key={row.criterion}>
                  <dt className="text-sm font-bold text-muted-foreground">{row.criterion}</dt>
                  <dd className="mt-0.5 text-base leading-relaxed">{row.values[columnIndex]}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </Section>
  )
}

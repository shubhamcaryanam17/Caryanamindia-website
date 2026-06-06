import fs from 'fs'
import path from 'path'

const srcDir = path.join(process.cwd(), 'src')

const replacements = [
  ['bg-navy-50/80 py-20', 'bg-white py-20'],
  ['bg-navy-50 py-20', 'bg-white py-20'],
  ['bg-gradient-to-b from-navy-50 via-white to-navy-50 py-20', 'bg-white py-20'],
  ['className="bg-navy-50 text-navy-900', 'className="bg-white text-navy-900'],
  ['border-t border-navy-100 bg-navy-50 text-navy-600', 'border-t border-navy-100 bg-white text-navy-600'],
  ['border-t border-navy-100 bg-white/80 py-6', 'border-t border-navy-100 bg-white py-6'],
  ['hover:bg-navy-50 dark:', 'hover:bg-navy-50/60 dark:'],
  ['hover:bg-navy-50"', 'hover:bg-navy-50/60"'],
  ['rounded-[1.8rem] bg-navy-50 p-6', 'rounded-[1.8rem] bg-white border border-navy-100 p-6'],
  ['rounded-[1.8rem] bg-navy-50 p-8', 'rounded-[1.8rem] bg-white border border-navy-100 p-8'],
  ['rounded-3xl bg-navy-50 p-5', 'rounded-3xl bg-white border border-navy-100 p-5'],
  ['rounded-3xl bg-navy-50 p-4', 'rounded-3xl bg-white border border-navy-100 p-4'],
  ['rounded-3xl bg-navy-50 p-3', 'rounded-3xl bg-white border border-navy-100 p-3'],
  ['rounded-[1.8rem] bg-navy-50 p-4', 'rounded-[1.8rem] bg-white border border-navy-100 p-4'],
  ['rounded-full border border-navy-100 bg-navy-50 px-4', 'rounded-full border border-navy-100 bg-white px-4'],
  ['rounded-[1.8rem] border border-navy-100 bg-navy-50 p-6', 'rounded-[1.8rem] border border-navy-100 bg-white p-6'],
  ['rounded-[1.8rem] bg-navy-50 p-6 text-navy-600', 'rounded-[1.8rem] bg-white border border-navy-100 p-6 text-navy-600'],
  ['rounded-[1.8rem] bg-navy-50 p-4 text-sm', 'rounded-[1.8rem] bg-white border border-navy-100 p-4 text-sm'],
  ['rounded-[1.8rem] bg-navy-50 p-6 text-navy-900', 'rounded-[1.8rem] bg-white border border-navy-100 p-6 text-navy-900'],
  ['mt-4 h-60 rounded-[1.8rem] bg-navy-100', 'mt-4 h-60 rounded-[1.8rem] bg-white border border-navy-100'],
  ['inline-flex rounded-full bg-navy-50 px-3', 'inline-flex rounded-full bg-white border border-navy-100 px-3'],
  ['inline-flex items-center gap-2 rounded-full border border-navy-300/30 bg-navy-50 px-4', 'inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-4'],
  ['inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-2', 'inline-flex items-center gap-2 rounded-full bg-white border border-navy-100 px-4 py-2'],
  ['rounded-[1.8rem] bg-navy-50 p-6 transition-colors duration-300 dark:bg-navy-950/90', 'rounded-[1.8rem] bg-white border border-navy-100 p-6 transition-colors duration-300 dark:border-white/10 dark:bg-navy-950/90'],
  ['relative rounded-[1.8rem] bg-navy-50 p-8', 'relative rounded-[1.8rem] bg-white border border-navy-100 p-8'],
  ['bg-gradient-to-br from-navy-50 via-navy-50 to-white', 'bg-white border border-navy-100'],
  ['flex h-14 w-14 items-center justify-center rounded-3xl bg-navy-50 text-xl', 'flex h-14 w-14 items-center justify-center rounded-3xl bg-white border border-navy-100 text-xl'],
  ['transition-colors duration-300 hover:bg-navy-50 dark:border-white/10 dark:bg-navy-950/90 dark:text-white dark:hover:bg-navy-900', 'transition-colors duration-300 hover:bg-navy-50/50 dark:border-white/10 dark:bg-navy-950/90 dark:text-white dark:hover:bg-navy-900'],
  ['className="relative overflow-hidden pb-20 transition-colors duration-300">\n      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top_right,_rgba(61,95,143,0.22),_transparent_30%),radial-gradient(circle_at_20%_20%,_rgba(30,58,95,0.14),_transparent_26%)]" />', 'className="relative overflow-hidden bg-white pb-20 transition-colors duration-300 dark:bg-navy-950">'],
  ['hover:bg-navy-50 dark:border-white/10', 'hover:bg-navy-50/50 dark:border-white/10'],
  ['CTA hover:bg-navy-50', 'CTA hover:bg-navy-50/60'],
]

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (entry.name.endsWith('.jsx')) {
      let content = fs.readFileSync(full, 'utf8')
      let changed = false
      for (const [from, to] of replacements) {
        if (content.includes(from)) {
          content = content.split(from).join(to)
          changed = true
        }
      }
      if (changed) {
        fs.writeFileSync(full, content)
        console.log('Updated', path.relative(process.cwd(), full))
      }
    }
  }
}

walk(srcDir)
console.log('Done')

import fs from 'fs'
import path from 'path'

const srcDir = path.join(process.cwd(), 'src')

const replacements = [
  ['dark:bg-slate-950', 'dark:bg-navy-950'],
  ['dark:bg-slate-900', 'dark:bg-navy-900'],
  ['dark:bg-slate-800', 'dark:bg-navy-800'],
  ['dark:border-slate-700', 'dark:border-navy-700'],
  ['dark:border-slate-800', 'dark:border-navy-800'],
  ['dark:hover:border-slate-500', 'dark:hover:border-navy-500'],
  ['dark:hover:bg-slate-800', 'dark:hover:bg-navy-800'],
  ['dark:hover:bg-slate-900', 'dark:hover:bg-navy-900'],
  ['dark:from-slate-950', 'dark:from-navy-950'],
  ['dark:via-slate-950', 'dark:via-navy-950'],
  ['dark:to-slate-900', 'dark:to-navy-900'],
  ['dark:from-slate-900', 'dark:from-navy-900'],
  ['dark:via-slate-800', 'dark:via-navy-800'],
  ['dark:to-slate-950', 'dark:to-navy-950'],
  ['dark:shadow-slate-950', 'dark:shadow-navy-950'],
  ['dark:bg-slate-200', 'dark:bg-navy-700'],
  ['text-slate-900', 'text-navy-900'],
  ['text-slate-600', 'text-navy-600'],
  ['text-slate-700', 'text-navy-700'],
  ['text-slate-500', 'text-navy-500'],
  ['text-slate-200', 'text-navy-300'],
  ['dark:text-slate-100', 'dark:text-white'],
  ['dark:text-slate-300', 'dark:text-navy-200'],
  ['dark:text-slate-400', 'dark:text-navy-300'],
  ['dark:text-slate-50', 'dark:text-white'],
  ['text-slate-50', 'text-navy-900'],
  ['text-sky-600', 'text-navy-700'],
  ['text-sky-700', 'text-navy-800'],
  ['dark:text-sky-300', 'dark:text-navy-300'],
  ['dark:text-sky-200', 'dark:text-navy-200'],
  ['text-sky-300', 'text-navy-600'],
  ['text-sky-200', 'text-navy-500'],
  ['bg-sky-500/10', 'bg-navy-600/10'],
  ['bg-sky-400/10', 'bg-navy-500/10'],
  ['bg-sky-300/10', 'bg-navy-500/10'],
  ['bg-sky-50', 'bg-navy-50'],
  ['group-hover:bg-sky-500/15', 'group-hover:bg-navy-600/15'],
  ['border-sky-300/30', 'border-navy-300/30'],
  ['border-sky-300/20', 'border-navy-400/20'],
  ['border-sky-400', 'border-navy-500'],
  ['border-sky-300', 'border-navy-400'],
  ['hover:border-sky-400', 'hover:border-navy-500'],
  ['hover:border-sky-300', 'hover:border-navy-400'],
  ['focus:border-sky-400', 'focus:border-navy-500'],
  ['focus:ring-sky-400', 'focus:ring-navy-500'],
  ['ring-sky-400', 'ring-navy-500'],
  ['shadow-sky-500', 'shadow-navy-600'],
  ['hover:shadow-sky-500', 'hover:shadow-navy-600'],
  ['from-sky-500', 'from-navy-700'],
  ['from-sky-600', 'from-navy-800'],
  ['via-cyan-400', 'via-navy-600'],
  ['via-cyan-500', 'via-navy-700'],
  ['to-sky-400', 'to-navy-500'],
  ['to-sky-500', 'to-navy-600'],
  ['to-cyan-400', 'to-navy-500'],
  ['to-cyan-500', 'to-navy-600'],
  ['via-sky-500', 'via-navy-600'],
  ['hover:from-sky-400', 'hover:from-navy-600'],
  ['hover:to-cyan-300', 'hover:to-navy-400'],
  ['hover:text-sky-600', 'hover:text-navy-700'],
  ['hover:text-sky-700', 'hover:text-navy-800'],
  ['dark:hover:text-sky-100', 'dark:hover:text-navy-100'],
  ['hover:text-sky-100', 'hover:text-navy-200'],
  ['bg-slate-50', 'bg-navy-50'],
  ['border-slate-200', 'border-navy-100'],
  ['bg-slate-100', 'bg-navy-50'],
  ['hover:bg-slate-50', 'hover:bg-navy-50'],
  ['hover:bg-slate-100', 'hover:bg-navy-50'],
  ['from-slate-100', 'from-navy-50'],
  ['via-slate-50', 'via-navy-50'],
  ['from-slate-50', 'from-navy-50'],
  ['to-slate-50', 'to-navy-50'],
  ['bg-slate-300', 'bg-navy-200'],
  ['text-slate-950', 'text-white'],
  ['hover:text-slate-900', 'hover:text-navy-900'],
  ['to-violet-600', 'to-navy-900'],
  ['from-slate-500 to-sky-500', 'from-navy-500 to-navy-600'],
  ['from-sky-500 to-cyan-400', 'from-navy-700 to-navy-500'],
  ['rgba(56,189,248', 'rgba(61,95,143'],
  ['rgba(56, 189, 248', 'rgba(61, 95, 143'],
  ['rgba(139,92,246', 'rgba(30,58,95'],
  ['rgba(139, 92, 246', 'rgba(30, 58, 95'],
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

import fs from 'fs'
import path from 'path'

const srcDir = path.join(process.cwd(), 'src')

const CARD_SHADOW =
  'shadow-sm transition-colors duration-300'
const CARD_SHADOW_DARK =
  'shadow-sm transition-colors duration-300 dark:shadow-[0_30px_80px_rgba(15,23,42,0.22)]'

const replacements = [
  ['border border-navy-100', 'border border-gray-200'],
  ['border-navy-100', 'border-gray-200'],
  ['border-navy-200', 'border-gray-200'],
  ['bg-white/80 backdrop-blur-xl', 'bg-white'],
  ['bg-white/95', 'bg-white'],
  ['hover:bg-navy-50/60', 'hover:border-gray-300'],
  ['hover:bg-navy-50 ', 'hover:bg-white '],
  ['hover:bg-navy-50"', 'hover:bg-white"'],
  ['? \'bg-navy-50 text-navy-900', "? 'bg-white ring-1 ring-inset ring-gray-200 text-navy-900"],
  ['bg-navy-600/10 text-navy-700', 'bg-white border border-gray-200 text-navy-700'],
  ['bg-navy-600/10 text-navy-700 dark:text-navy-300', 'bg-white border border-gray-200 text-navy-700 dark:border-transparent dark:bg-navy-600/10 dark:text-navy-300'],
  ['inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-navy-600/10 text-navy-700 transition group-hover:bg-navy-500/15 dark:text-navy-300', 'inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white border border-gray-200 text-navy-700 transition group-hover:border-navy-700 dark:border-transparent dark:bg-navy-600/10 dark:group-hover:bg-navy-500/15 dark:text-navy-300'],
  ['inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-navy-600/10 text-navy-700 transition group-hover:bg-navy-500/15 dark:text-navy-300', 'inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-white border border-gray-200 text-navy-700 transition group-hover:border-navy-700 dark:border-transparent dark:bg-navy-600/10 dark:group-hover:bg-navy-500/15 dark:text-navy-300'],
  ['flex h-12 w-12 items-center justify-center rounded-full bg-navy-600/10 text-navy-700 dark:text-navy-300', 'flex h-12 w-12 items-center justify-center rounded-full bg-white border border-gray-200 text-navy-700 dark:border-transparent dark:bg-navy-600/10 dark:text-navy-300'],
  ['inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-navy-600/10 text-navy-700 dark:text-navy-300', 'inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white border border-gray-200 text-navy-700 dark:border-transparent dark:bg-navy-600/10 dark:text-navy-300'],
  ['? \'border-navy-500 bg-navy-500/10 text-navy-800 dark:text-white\'', "? 'border-navy-700 bg-white text-navy-900 ring-1 ring-navy-700 dark:border-navy-500 dark:bg-navy-500/10 dark:text-white dark:ring-0'"],
  ['? "border-navy-500 bg-navy-500/10 text-navy-800 dark:text-white"', '? "border-navy-700 bg-white text-navy-900 ring-1 ring-navy-700 dark:border-navy-500 dark:bg-navy-500/10 dark:text-white dark:ring-0"'],
  ['shadow-glow', 'shadow-sm dark:shadow-glow'],
  ['backdrop-blur-xl transition-colors', 'transition-colors'],
  ['backdrop-blur-2xl transition-colors', 'transition-colors'],
  ['bg-navy-900/40 px-4 py-8 backdrop-blur-sm', 'bg-black/30 px-4 py-8 dark:bg-navy-950/90 dark:backdrop-blur-sm'],
  ['shadow-[0_24px_80px_rgba(15,23,42,0.08)]', 'shadow-sm'],
  ['shadow-[0_25px_70px_rgba(15,23,42,0.06)]', 'shadow-sm'],
  ['shadow-[0_30px_80px_rgba(15,23,42,0.08)]', 'shadow-sm'],
  ['shadow-[0_32px_100px_rgba(15,23,42,0.08)]', 'shadow-sm'],
  ['shadow-[0_40px_120px_rgba(15,23,42,0.08)]', 'shadow-sm'],
  ['shadow-[0_40px_120px_rgba(15,23,42,0.1)]', 'shadow-sm'],
  ['shadow-[0_40px_120px_rgba(15,23,42,0.12)]', 'shadow-sm'],
  ['shadow-[0_24px_60px_rgba(15,23,42,0.08)]', 'shadow-sm'],
  ['shadow-[0_20px_80px_rgba(15,23,42,0.06)]', 'shadow-sm'],
  ['shadow-[0_50px_120px_rgba(0,0,0,0.15)]', 'shadow-sm'],
  ['shadow-lg shadow-navy-600/10', 'shadow-sm dark:shadow-lg dark:shadow-navy-600/10'],
  ['shadow-lg shadow-navy-200/50', 'shadow-sm dark:shadow-lg dark:shadow-navy-950/20'],
  ['absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-navy-700/10 to-transparent', 'absolute inset-x-0 top-0 hidden h-28 bg-gradient-to-b from-navy-700/10 to-transparent dark:block'],
  ['absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-navy-700/20 to-transparent', 'absolute inset-x-0 top-0 hidden h-20 bg-gradient-to-b from-navy-700/20 to-transparent dark:block'],
  ['absolute -right-8 top-10 h-44 w-44 rounded-full bg-navy-600/10 blur-3xl', 'absolute -right-8 top-10 hidden h-44 w-44 rounded-full bg-navy-600/10 blur-3xl dark:block'],
  ['absolute -bottom-10 left-8 h-36 w-36 rounded-full bg-navy-200/30 blur-3xl dark:bg-navy-700/5', 'absolute -bottom-10 left-8 hidden h-36 w-36 rounded-full bg-navy-700/5 blur-3xl dark:block'],
  ['absolute right-0 top-4 h-24 w-24 rounded-full bg-navy-600/10 blur-3xl', 'absolute right-0 top-4 hidden h-24 w-24 rounded-full bg-navy-600/10 blur-3xl dark:block'],
  ['absolute bottom-10 left-10 h-32 w-32 rounded-full bg-navy-500/10 blur-3xl', 'absolute bottom-10 left-10 hidden h-32 w-32 rounded-full bg-navy-500/10 blur-3xl dark:block'],
  ['rounded-3xl bg-white/30 p-4 backdrop-blur-xl dark:bg-navy-950/20', 'rounded-3xl border border-gray-200 bg-white p-4 dark:border-transparent dark:bg-navy-950/20 dark:backdrop-blur-xl'],
  ['dark:border-navy-400/20 dark:bg-navy-500/10', 'border-gray-200 bg-white dark:border-navy-400/20 dark:bg-navy-500/10'],
  ['border border-navy-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.3em] text-navy-800 dark:border-navy-400/20', 'border border-gray-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.3em] text-navy-800 dark:border-navy-400/20'],
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

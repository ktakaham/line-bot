export const pagesPath = {
  "line": {
    $url: (url?: { hash?: string }) => ({ pathname: '/line' as const, hash: url?.hash })
  },
  "login": {
    $url: (url?: { hash?: string }) => ({ pathname: '/login' as const, hash: url?.hash })
  },
  "signup": {
    $url: (url?: { hash?: string }) => ({ pathname: '/signup' as const, hash: url?.hash })
  }
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  dropimg_jpeg: '/dropimg.jpeg',
  favicon_ico: '/favicon.ico',
  noimg_png: '/noimg.png',
  vercel_svg: '/vercel.svg'
} as const

export type StaticPath = typeof staticPath

import texts from '../data/texts.json'

export function tr(path: string) {
  return getDeepLabel(texts, path)
}

export function getDeepLabel(obj: object, path: string) {
  const paths: string[] = path.split('.')
  let current = obj
  let i

  for (i = 0; i < paths.length; i++) {
    // @ts-ignore
    if (current[paths[i]] === undefined) {
      return ''
    } else {
      // @ts-ignore
      current = current[paths[i]]
    }
  }

  if (!current || typeof current !== 'string') {
    return ''
  }

  return current
}

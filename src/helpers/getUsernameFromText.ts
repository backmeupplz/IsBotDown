export default function getUsernameFromText(text: string) {
  const match = /@?([A-Za-z0-9_]+bot)/gi.exec(text)
  if (!match || !match[1]) {
    return undefined
  }
  return match[1]
}

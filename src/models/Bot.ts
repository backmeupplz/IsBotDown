export default interface Bot {
  username: string
  telegramId: number
  isDown: boolean
  downSince?: Date
}

export default interface TrueWebResult {
  username: string
  full_name: string
  updated: string
  users: {
    active: number
    stopped: number
    deleted: number
    not_found: number
  }
}

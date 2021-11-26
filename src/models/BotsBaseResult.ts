export default interface BotsBaseResult {
  updated_at: string
  users: {
    active: number
    stopped: number
    deleted: number
    not_found: number
    cant_conversation: number
    female: number
    male: number
    unisex: number
    error: number
  }
  groups: {
    is_group: number
    available: number
    count_all_users: number
  }
  status: 'success' | 'error'
}

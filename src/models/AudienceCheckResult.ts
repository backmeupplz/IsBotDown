import BotsBaseResult from 'models/BotsBaseResult'
import TrueWebResult from 'models/TrueWebResult'

export default interface AudienceCheckResult {
  trueWebResult?: TrueWebResult
  botsBaseResult?: BotsBaseResult
}

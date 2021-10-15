import parseRouter from './parse'
import databaseRouter from './database'
export default function router (app) {
  app.use('/parse', parseRouter)
  app.use('/database', databaseRouter)
}

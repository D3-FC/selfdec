import { theMysqlConnection } from '../Database/theMysqlConnection'
import mysql from 'mysql'

export class Repo {
  db = theMysqlConnection

  flush (): void {
    this.db.end()
  }

  /**
   *
   * @param {string} q
   * @param values
   */
  query (q: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.query(q, (error, results, fields) => {
        if (error) reject(error)
        resolve({
          results,
          fields
        })
      })
    })
  }

  insertSql (q: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.query(q)
    })
  }

  insert (q: string, values: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.query(q, values, (error, results, fields) => {
        if (error) reject(error)
        resolve({
          results,
          fields
        })
      })
    })
  }

  format (q: string, values: any[]): string {
    return mysql.format(q, values)
  }
}

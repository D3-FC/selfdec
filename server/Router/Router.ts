import { Express, Request, Response } from 'express'

type Constructor<T> = new (...args: any[]) => T;

type CallBack = (req: Request, res: Response) => Promise<any> | any

export class Router {
  private readonly app: Express

  constructor (app: Express) {
    this.app = app
  }

  get (url: string, cb: CallBack) {
    this.action('get', url, cb)
  }

  post (url: string, cb: CallBack) {
    this.action('post', url, cb)
  }

  put (url: string, cb: CallBack) {
    this.action('put', url, cb)
  }

  patch (url: string, cb: CallBack) {
    this.action('patch', url, cb)
  }

  delete (url: string, cb: CallBack) {
    this.action('delete', url, cb)
  }

  private async action (type: 'get' | 'post' | 'put' | 'patch' | 'delete', url: string, cb: any) {
    this.app[type](url, async (req, res) => {
      let r: Promise<any> | any
      if (typeof cb === 'function') {
        r = cb(req, res)
      }
      const syndR = await r
      if (typeof syndR === 'object') {
        return res.json(syndR)
      }
      res.send(syndR)
    })
  }
}

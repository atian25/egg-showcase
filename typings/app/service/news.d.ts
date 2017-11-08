import { Service } from "egg";

export class NewsService extends Service {
  /**
   * list news
   * @param {number} [page = 1] - page num, default to 1
   * @return {array} result
   */
  list(page: number): Promise<any>
}

declare module "egg" {
  interface IService {
    news: NewsService;
  }
}
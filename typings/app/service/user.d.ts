import { Service } from "egg";

export class UserService extends Service {
  /**
   * say hi to user
   * @param {string} name - user name
   * @return {string} result string
   */
  sayHi(name: string): Promise<string>

  /**
   * echo
   * @param {string} str - input
   * @return {string} result string
   */
  echo(str: string): Promise<string>
}

declare module "egg" {
  interface IService {
    user: UserService;
  }
}
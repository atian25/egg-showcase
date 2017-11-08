import { Controller } from "egg";

export class HomeController extends Controller {
  index(): Promise<any>;
  echo(): Promise<any>;
}

declare module "egg" {
  interface IController {
    home: HomeController
  }
}
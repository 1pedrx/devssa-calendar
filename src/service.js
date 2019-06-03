import request from "./request";

class Service {
  constructor() {}

  get(url) {
    return fetch(url);
  }
}

export { Service };

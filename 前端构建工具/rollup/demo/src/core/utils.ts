type IUtilsOptions = {
  debug: boolean;
};
export default class Utils {
  options: IUtilsOptions;
  constructor(o: IUtilsOptions) {
    this.options = o;
  }
  say() {
    console.log("say");
  }
}

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name : "countryCode"
})
export class CountryCode implements PipeTransform{
  transform(value: any, code : string) {
    switch (code) {
      case "USA": return "+1 " + value;
      case "AUS": return "+12 " + value;
      case "EUR": return "+22 " + value;
      case "CHN": return "+34" + value;
      default: return "+91 " + value;
    }
  }
}

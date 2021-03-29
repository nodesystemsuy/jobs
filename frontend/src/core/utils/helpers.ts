export class Helpers{
  public static toUpperText(control: any): void {
    const valueInput = control.value;
    control.setValue(valueInput.toUpperCase());
  }

  public static onlyDecimalNumberKey(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    return !(charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57));
  }

  public static onlyNumberKey(event: any): any {
    return event.charCode === 8 || event.charCode === 0
      ? null
      : event.charCode >= 48 && event.charCode <= 57;
  }
  public static onlyCharacters(value: any): boolean {
    let isValid = false;
    value.willValidate = false;
    const pattern = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i');
    if (pattern.test(value.key)){
      isValid = true;
    }
    return isValid;
  }
}

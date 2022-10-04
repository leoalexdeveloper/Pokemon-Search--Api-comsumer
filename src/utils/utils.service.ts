export class Utils  {
  capitalize(text: string): string {
    const capitalize = text[0].toUpperCase()+text.substring(1, text.length)
    return capitalize
  }
}

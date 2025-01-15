import java.util.Scanner;
public class Atv6 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite uma frase para saber quantas palavras tem nela: ");
        String frase = scanner.nextLine();
        String[] fraseSeparada = frase.split(" ");
        int numeroPalavras = fraseSeparada.length;
        System.out.println(numeroPalavras);
    }
}
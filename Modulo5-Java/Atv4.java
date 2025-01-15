import java.util.Scanner;
import java.util.Arrays;

public class Atv4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite a primeira palavra: ");
        String palavra1 = scanner.nextLine();
        System.out.println("Digite a segunda palavra: ");
        String palavra2 = scanner.nextLine();

        if (palavra1.length() == palavra2.length()) {
            char[] palavra1Array = palavra1.toCharArray();
            char[] palavra2Array = palavra2.toCharArray();

            Arrays.sort(palavra1Array);
            Arrays.sort(palavra2Array);

            if (Arrays.equals(palavra1Array, palavra2Array)) {
                System.out.println("Correto: As palavras " + palavra1 + " e " + palavra2 + " são anagramas.");
            } else {
                System.out.println("Erro: As palavras " + palavra1 + " e " + palavra2 + " não são anagramas.");
            }
        } else {
            System.out.println("Erro: As palavras " + palavra1 + " e " + palavra2 + " não são anagramas.");
        }
    }
}

import java.util.Scanner;

public class Atv2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite uma palavra inteira:");
        String palavra = scanner.nextLine();
        String reverse = "";

        for(int c = palavra.length() - 1; c >= 0; c--) {
            reverse += palavra.charAt(c);
        }

        System.out.println("Palavra invertida: " + reverse);
    }
}

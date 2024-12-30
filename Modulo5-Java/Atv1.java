import java.util.Scanner;

public class Atv1 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite o primeiro numero: ");
        Number numero1 = scanner.nextInt();
        System.out.println("Digite o segundo numero: ");
        Number numero2 = scanner.nextInt();
        System.out.println("Digite o operador(+ - * /): ");
        char operador = scanner.charAt(0);
        if (operador == '+') {
            System.out.println(numero1 + numero2);
        }
    }
}

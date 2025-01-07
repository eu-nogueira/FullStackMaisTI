    import java.util.Scanner;
public class atv1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite o primeiro número: ");
        int number1 = scanner.nextInt();
        System.out.println("Digite o segundo número: ");
        int number2 = scanner.nextInt();
        scanner.nextLine();
        System.out.println("Digite o operador (+ - * ou /)");
        String operador = scanner.nextLine();
        if(operador.equals("+")) {
            System.out.println(number1 + number2);
        } else if (operador.equals("-")) {
            System.out.println(number1 - number2);
        } else if(operador.equals("*")) {
            System.out.println(number1 * number2);
        } else if(operador.equals("/")) {
            System.out.println(number1 / number2);
        }
    }
}
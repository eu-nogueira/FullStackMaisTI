import java.util.Scanner;

public class Atv5 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int numeroSorte = (int) (Math.random() * 50);
        System.out.println("Digite o seu número da sorte:");
        int numeroEscolhido = scanner.nextInt();
        while (numeroEscolhido != numeroSorte) {
            System.out.println("Errado!");
            System.out.println("Digite outro número: ");
            numeroEscolhido = scanner.nextInt();
        }
        System.out.println("Acertooou!!");
    }
}

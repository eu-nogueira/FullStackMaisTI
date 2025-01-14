import java.util.Scanner;

public class Atv3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite a quantia de numeros da sequencia que deseja ver: ");
        int numeroMaximo = scanner.nextInt();
        int numeroAnterior = 0;
        int numeroAtual = 1;

        for(int c=1; c<=numeroMaximo; c++) {
            System.out.println(numeroAnterior + " + " + numeroAtual + " = " + (numeroAnterior + numeroAtual));
            int proximoNumero = numeroAnterior + numeroAtual;
            numeroAnterior = numeroAtual;
            numeroAtual = proximoNumero;
        }

                System.out.print("Digite um número inteiro: ");
                int numeroCerto = scanner.nextInt();
                int numeroReverse = 0;
                while (numeroCerto != 0) {
                    int digito = numeroCerto % 10;
                    numeroReverse = numeroReverse * 10 + digito;
                    numeroCerto /= 10;
                }
                System.out.println(numeroReverse);
            }
        }

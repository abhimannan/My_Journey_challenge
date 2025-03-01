package Functions;
import java.util.Scanner;

public class Factorial {
    public static int cal(int n){
         int facto = 1;
         for(int i=1;i<=n;i++){
            facto = facto*i;
         }
         return facto;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter n : ");
        int n = sc.nextInt();
        int res = cal(n);
        System.out.println("Faactorial = "+res);
    }
}

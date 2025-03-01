package Functions;
import java.util.Scanner;
public class Prime {
    public static void PrimeCheck(int n){
        // boolean isPrime = false;
          if(n==2){
             System.out.println(n+" is prime number");
          }
          else{
            int count = 0;
             for(int i=1;i<=n;i++){
                
                 if(n%i==0){
                     count++;
                 }
             }
             if(count==2){
                 System.out.println(n+" is prime");
             }
             else{
                System.out.println(n+" is not prime");
             }
          }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter n : ");
        int n = sc.nextInt();
        PrimeCheck(n);
    }
}

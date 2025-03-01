import java.util.Scanner;
public class Prime {
    public static void main(String args[]){
        // prime number
        Scanner sc = new Scanner(System.in);
        boolean isPrime = true;
        System.out.println("Enter the n : ");
        int n = sc.nextInt();
        if(n==2){
            System.out.println(n+" is a prime number");
        }
        else{
            for(int i=2;i<=n-1;i++){
                if(n%i==0){
                    isPrime = false;
                }
           }
           if(isPrime==true){
               System.out.println(n+" is prime number");
           }
           else{
               System.out.println(n+" is not prime number");
           }
        }


    }
}

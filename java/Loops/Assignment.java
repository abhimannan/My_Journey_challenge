import java.util.Scanner;
public class Assignment {
    public static void main(String[] args) {
        // code output 
        /* for(int i=0;i<5;i++){
             System.out.println("Hello");
             i+=2;
         } */
        // Write a program that reads a set of integers,and then prints the sum of the even and odd integers
        /*
        Scanner sc = new Scanner(System.in);
        System.out.println("No. of integers : ");
        int n = sc.nextInt();
        int evenSum = 0;
        int oddSum = 0;
        for(int i=1;i<=n;i++){
            System.out.println("Enter the numbers : ");
            int value = sc.nextInt();
            if(value%2==0){
                evenSum = evenSum+value;
            }
            else{
                oddSum+=value;
            }
        }
        System.out.println("Even Total = "+evenSum);
        System.out.println("Odd Total = "+oddSum);
        */
        // factorial of a given number
        /*
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int factorial = 1;
        for(int i=n;i>=1;i--){
            factorial = n*(n-1);
        }
        System.out.println(factorial);
        */
        // printing multiplication table of the N
        /*
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the table number that you want : ");
        int table= sc.nextInt();
        for(int i=1;i<=10;i++){
            System.out.println(table+"*"+i+"="+(table*i));
        }
        */
        

    }
}

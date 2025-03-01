package Functions;
import java.util.Scanner;

public class Functions_basic {
    // Function creation
    public static void printHello(){
         System.out.println("Hello World!");
    }
    // sum of a,b
    public static int sum(int a,int b) {
         int sum = a+b;
         return sum;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a : ");
        int a = sc.nextInt();
        System.out.print("Enter b : ");
        int b = sc.nextInt();
        // function calling
        printHello();
        int total = sum(a,b);
        System.out.println("Sum of a & b is : "+ total);
    

    }
}

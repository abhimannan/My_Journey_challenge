package Functions;
import java.util.Scanner;

public class Product {
    // product od a & b
    public static int Product(int a,int b){
         int product = a*b;
         return product;
    }
   public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a : ");
    int a = sc.nextInt();
    System.out.println("Enter b : ");
    int b = sc.nextInt();
    // function calling
   int res =  Product(a,b);
   System.out.println("Product of a,b = "+ res);
   }
    
}


import java.util.Scanner;
public class While {
    public static void main(String[] args) {
        /*
        int i = 1;
        while(i<=10){
             System.out.println("hello world!");
             i+=1;
        }
       */
      // 1 to 10
      /*
      int i=1;
      while(i<=10){
         System.out.print(i+"\t");
         i++;
      }
         */
      // 1 to n
      /*
      Scanner x = new Scanner(System.in);
      System.out.println("Enter n : ");
      int n = x.nextInt();
      int i = 1;
      while(i<=n){
         System.out.print(i+"\t");
         i++;
      }
         */
      // sum of n natural numbers
      Scanner x = new Scanner(System.in);
      System.out.print("enter n : ");
      int n = x.nextInt();
      int i = 1;
      int sum = 0;
      while(i<=n){
         sum=sum+i;
         i++;
      }
      System.out.print(sum);
    }
}
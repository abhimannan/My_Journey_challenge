public class Reverse {
    public static int reverse(int n){
        while(n>0){
            int lastDigit = n%10;
            System.out.print(lastDigit);
            n=n/10;
        }
        System.out.println();
        return n;
    }
    public static void main(String args[]){
        int n = 1771;
        System.out.println(reverse(n));
        if(n==reverse(n)){
            System.out.println("polindrome");
        }
        else{
            System.out.println("not polindrome");
        }
        
    }
}
// class code
import java.util.Scanner;

public class Functions {
    
     int sumOfDigits( int n)
    {
         int sum =0;

         while( n>0 )
         {
            int digit = n%10;
            sum+= digit;
            n=n/10;
         }
         return sum;
    }
    public static void main(String args[])
    {
        Scanner sc= new Scanner(System.in);
        
        int n = sc.nextInt();
         
        Functions  yash = new Functions();
         int sum = yash.sumOfDigits ( n );

         System.out.println( sum );
    }
}
import java.util.Scanner;

public class Functions {
    
     int sumOfDigits( int n)
    {
         int sum =0;

         while( n>0 )
         {
            int digit = n%10;
            sum+= digit;
            n=n/10;
         }
         return sum;
    }
    public static void main(String args[])
    {
        Scanner sc= new Scanner(System.in);
        
        int n = sc.nextInt();
         
        Functions  yash = new Functions();
         int sum = yash.sumOfDigits ( n );

         System.out.println( sum );
    }
}
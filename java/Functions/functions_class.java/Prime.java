import java.util.Scanner;

public class Prime {
    public static void Check(int n){
       if(n==2){
         System.out.println(n+"is prime");
       }
       else{
         int count = 0;
          for(int i=2;i<=n;i++){
            
             if(n%i==0){
                count++;
             }
          }
          if(count==2){
            System.out.println("Prime number");
         }
         else{
              System.out.println("Not Prime Number");
         }
       }
     
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter n : ");
        System.out.println(Check(4));
    }
}
// class code
/*
import java.util.Scanner;

public class Functions {
    
    static  void isPrime( int n)
    {
         int count=0;
         for( int i=1;i<=n;i++)
         {
           if( n%i==0)
              count++;
         }

         if( count==2)
           System.out.println("Prime");
         else
           System.out.println("Not Prime");
    }
    public static void main(String args[])
    {
        Scanner sc= new Scanner(System.in);
        
        int n = sc.nextInt();
         
        isPrime( n );
    }
}
    */

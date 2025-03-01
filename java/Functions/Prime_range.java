public class Prime_range {
    // print all the primenumbers
    public static boolean PrimeCheck(int n){
        if(n==2){
            return true;
        }   
          for(int i=2;i<=Math.sqrt(n);i++){
              if(n%i==0){
                 return false;
              }
          } 
          
        return true;
    }     
    // print the primes with in the range
    public static void PrintPrime(int n){
         for(int i=2;i<=n;i++){
             if(PrimeCheck(i)){
                 System.out.print(i+" ");
             }
             System.out.println();
         }
    }
    public static void main(String[] args) {
        // System.out.println(PrimeCheck(7));
        PrintPrime(10);
    }  
}

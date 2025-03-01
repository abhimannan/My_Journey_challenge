package Functions;

public class Binomial_coefficient {
    // n_factorial
    public static int fact(int n){
        int f=1;
         for(int i=1;i<=n;i++){
            f=f*i;
         }
         return f;
    }
    public static int BinCoeff(int n,int r){
        int fact_n = fact(n);
        int fact_r = fact(r);
        int fact_nmr = fact(n-r);
        int BC = fact_n/(fact_nmr*fact_r);
        return BC;
    }
    public static void main(String[] args) {
        // n_factorial
        // int fact = fact(4);
        // System.out.println(fact);
        // BC
        int n = 5;
        int r = 2;
       int bionomial_res =  BinCoeff(n,r);
       System.out.println(bionomial_res);
    }
}
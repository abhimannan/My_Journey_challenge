package Advanced_Patterns;

public class ButterFly {
    public static void main(String[] args) {
        int n = 4;
        for(int i=1;i<=n;i++){
            // stars - i
            for(int stars=1;stars<=i;stars++){
                System.out.print("*");
            }
            // spaces - 2*(n-i)
            for(int spaces=1;spaces<=2*(n-i);spaces++){
                System.out.print(" ");
            }
            // stars - i
            for(int stars=1;stars<=i;stars++){
                System.out.print("*");
            }
            System.out.println();
        }
        // 2nd half
        for(int i=n;i>=1;i--){
            // stars - i
            for(int stars=1;stars<=i;stars++){
                System.out.print("*");
            }
            // spaces - 2*(n-i)
            for(int spaces=1;spaces<=2*(n-i);spaces++){
                System.out.print(" ");
            }
            // stars - i
            for(int stars=1;stars<=i;stars++){
                System.out.print("*");
            }
            System.out.println();
        }
       
    }
}

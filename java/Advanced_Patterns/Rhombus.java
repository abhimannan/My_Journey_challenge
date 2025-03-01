package Advanced_Patterns;

public class Rhombus {
     // fuction for rhombus pattern
     public static void Rhombus_pattern(int n){
        for(int i=1;i<=n;i++){
            // spaces - (n-i)
            for(int s=1;s<=(n-i);s++){
                System.out.print(" ");
            }
            // stars - n
            for(int star=1;star<=n;star++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        int n = 5;
        Rhombus_pattern(n);
    
}
}
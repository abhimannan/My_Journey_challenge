package Advanced_Patterns;

public class Hollow_Rhombus {
    
    public static void main(String[] args) {
          int n = 5;
          for(int i=1;i<=n;i++){
             // spaces - (n-i)
             for(int s=1;s<=(n-i);s++){
                 System.out.print(" ");
             }
             // hollow rectangle
             for(int star=1;star<=n;star++){
                if(i==1 || i==n || star==1 || star==n){
                    System.out.print("*");
                }
                else{
                    System.out.print(" ");
                }
             }
             System.out.println();
          }
    }
}

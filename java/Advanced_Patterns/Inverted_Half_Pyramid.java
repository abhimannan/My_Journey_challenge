package Advanced_Patterns;

public class Inverted_Half_Pyramid {
    public static void Pyramid_nums(int n){
        for(int i=n;i>=1;i--){
            int num = 1;
             for(int j=1;j<=i;j++){
                System.out.print(num);
                num+=1;
             }
             System.out.println();
         }
    }
    public static void floyds_trianle(int n){
        int num = 1;
         for(int i=1;i<=n;i++){
            
             for(int j=1;j<=i;j++){ 
                System.out.print(num +" ");
                num+=1;

             }
             System.out.println();
    }
}
    public static void main(String[] args) {
        // Pyramid_nums(8);
        floyds_trianle(5);
    }
}

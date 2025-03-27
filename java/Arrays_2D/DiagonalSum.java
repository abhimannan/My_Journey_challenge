public class DiagonalSum {
    public static void Diagonal(int[][] matrix) {
         int n = matrix.length-1;
         int sum = 0;
         System.out.println("n = "+n);
         for(int i=0;i<=n;i++) {
             for(int j=i;j<=i;j++){
                sum+=matrix[i][j];
                System.out.print(matrix[i][j]+" ");
             }
         }
         System.out.println("primary diagonal sum = "+sum);
         // secondary diagonal
         for(int i=0;i<=n;i++) {
            for(int j=n;j>=0;j--) {
               if((i+j)==3) {
                   sum+=matrix[i][j];
                   System.out.print(matrix[i][j]+" ");
               }
            }
        }
         System.out.println("Total sum = "+sum);
    }
    
    public static void main(String[] args) {
        int[][] matrix = {
            {1,2,3,4},
            {5,6,7,8},
            {9,10,11,12},
            {13,14,15,16}
        };
        Diagonal(matrix);

    }
}

package Assignment;

public class TransposeMatrix {
    
    public static void main(String[] args) {
        int[][] arr = {
            {1,2,3},
            {4,5,6}
        };
        int rows = 2;
        int cols = 3;
        // newarr
        int[][] newArr = new int[cols][rows];
        for(int i=0;i<rows;i++) {
             for(int j=0;j<cols;j++) {
                 newArr[j][i] = arr[i][j];
             }
        }
        for(int i=0;i<newArr.length;i++){
             for(int j=0;j<newArr[0].length;j++) {
                 System.out.print(newArr[i][j]+" ");
             }
             System.out.println();
        }

    }
}

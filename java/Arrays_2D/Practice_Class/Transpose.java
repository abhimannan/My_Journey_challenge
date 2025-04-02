package Practice_Class;
import java.util.*;

public class Transpose {
    public static void Trans(int[][] arr) {
         rows=2;
         cols=3;
         int[][] newArr = new int[cols][rows];
         for(int i=0;i<rows;i++) {
            for(int j=0;j<cols;j++) {
                 newArr[j][i] = arr[i][j];
            }
         }
         System.out.println(Arrays.toString(arr));
    }
    public static void main(String[] args) {
        int[][] arr = {
        {10,20,30},
        {40,50,60}
    };
    Trans(arr);
}
}

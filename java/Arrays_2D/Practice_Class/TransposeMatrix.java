package Practice_Class;

public class TransposeMatrix {
    int[][] arr = {
        {1,2,3},
        {4,5,6}
   };
   int rows = 2;
   int cols = 3;
   // new array
   int newArr[][] = new int[cols][rows];
   for(int i=0;i<rows;i++) {
        for(int j=0;j<cols;j++) {
            newArr[j][i] = arr[i][j];
            // rows become cols
            // cols become rows
        }
   }
   // print the transpose matrix
   for(int x=0;x<newArr.length;x++) {
        for(int y=0;y<newArr[0].length;y++) {
            System.out.println(newArr[x][y]);
        }
   }
}

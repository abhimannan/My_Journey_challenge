public class SearchinSortedArr {
    public static void Search(int[][] matrix,int key) {
         int row = 0;
         int col = matrix[0].length-1;
         while(row<matrix.length && col>=0) {
             if(matrix[row][col]==key) {
                 System.out.println("key found at index of : "+ "(" +row+","+ col + ")");
                 return;// if the key is found then immediatly exit from the loop
             }
             else if(key<matrix[row][col]) {
                 col--;
             }
             else{
                 row++;
             }
         }
         System.out.println("key was not found!!");

    }
    public static void main(String[] args) {
        int[][] matrix = {
            {10,20,30,40},
            {15,25,35,48},
            {27,29,37,48},
            {32,33,39,50}
        };
        int key = 37;
        Search(matrix, key);
    }
}

package Assignment;
// Question
/*
   Print the number of 7’s that are inthe 2d array.
   Example :Input - int[][] array = { {4,7,8},{8,8,7} };
   Output - 2
 */
public class CountReat {
    public static void Count(int[][] array) {
        int n = array.length;
        int count = 0;
         for(int i=0;i<n;i++) {
             for(int j=0;j<=array[0].length-1;j++) {
                 if(array[i][j]==7) {
                     count++;
                 }
             }
         }
         System.out.println(count);
    }
    public static void main(String[] args) {
        int[][] array = {
            {4,7,8},
            {8,8,7}
        };
        Count(array);

    }
}

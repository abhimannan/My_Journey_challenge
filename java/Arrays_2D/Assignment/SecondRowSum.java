package Assignment;
/*
   Print out the sum of the numbers inthe second row of the “nums” array.
   Example :
         Input - int[][] nums = { {1,4,9},{11,4,3},{2,2,3} };
         Output - 18
 */
public class SecondRowSum {
    public static void Sum(int[][] nums) {
         int sum = 0;
         int row = 1; 
             for(int j=0;j<nums[row].length;j++) {
                 sum+=nums[row][j];
             }
         System.out.println("The sum of the numbers in 2nd row = "+ sum);
    }
    public static void main(String[] args) {
        int[][] nums= {
            {1,4,9},
            {11,4,3},
            {2,2,3}
        };
        Sum(nums);
    }
}

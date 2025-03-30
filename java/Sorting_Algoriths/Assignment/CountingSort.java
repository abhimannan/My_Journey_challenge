import java.util.*;

public class CountingSort {
    public static void Count(int[] arr) {
         // find the max value in the array
         int max = Integer.MIN_VALUE;
         for(int i=0;i<arr.length;i++) {
            max = Math.max(max,arr[i]);
         }
         // create the count arr with [max+1] size
         int[] count = new int[max+1];
         // store the frequencies of the array in count array
         for(int i=0;i<count.length;i++) {
             count[arr[i]]++;
         }
         // sorting
         int j = 0;
         for(int i=0;i<count.length;i++) {
             while(count[i]>0) {
                 arr[j] = i;
                 j++;
                 count[i]--; 
             }
         }
         System.out.println(Arrays.toString(arr));
         
    }
    public static void main(String[] args) {
        int[] arr = {1,4,1,3,2,4,3,7};
        Count(arr);
    }
}

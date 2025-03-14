package Arrays_Part2;

import java.lang.reflect.Array;
import java.util.Arrays;

public class Trapped_Water {
    public static void TW(int[] arr){
        int n = arr.length;
        int width = 1;
        // calculate the left maximum boundaries
        int[] left_max_boundaries = new int[n];
        left_max_boundaries[0] = arr[0];
        for(int i=1;i<n;i++){
            left_max_boundaries[i]=Math.max(arr[i],left_max_boundaries[i-1]);
        }
            // System.out.println(Arrays.toString(left_max_boundaries));
        // calculate the right maximum boundaries
        int[] right_max_boundaries = new int[n];
        right_max_boundaries[n-1]=arr[n-1];
        for(int i=n-2;i>=0;i--){
            right_max_boundaries[i] = Math.max(arr[i],right_max_boundaries[i+1]);
        }
            // System.out.println(Arrays.toString(right_max_boundaries));
        // calculate the Water level height
        int water_trapped = 0;
         for(int i=0;i<n;i++){
             int water_level_height = Math.min(left_max_boundaries[i],right_max_boundaries[i]);
             // calculate the "Trapped Water"
             water_trapped+=(water_level_height-arr[i])*width;
         }
         System.out.println(water_trapped);
    }
    public static void main(String[] args) {
        int[] arr = {4,2,0,6,3,2,5};
        TW(arr);
    }
}

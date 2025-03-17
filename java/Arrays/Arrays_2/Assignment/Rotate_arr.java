package Assignment;

import java.util.Arrays;

public class Rotate_arr {
    public static int[] Rotate(int[] arr){
         int n=arr.length;
         int first = arr[n-1];
         for(int i=n-2;i>=0;i--){
             arr[i+1] = arr[i];
         }
         arr[0] = first;
         return arr;
    }
    public static int Return_index(int[] rotated_Array){
         System.out.println(Arrays.toString(rotated_Array));
         int target = 10;
         for(int i=0;i<rotated_Array.length;i++){
                if(target==rotated_Array[i]){
                    return i;
                }
         }
         return -1;
    }
    
    public static void main(String[] args) {
        int[] arr = {4,  5, 6, 7, 0, 1, 2};
        System.out.println("The actual array is : "+Arrays.toString(arr));
        
        //  After rotating k times
         int k = 2;
         for(int i=0;i<=k;i++){
            Rotate(arr);
         }
         int[] rotated_Array = arr;
        //  System.out.println(Arrays.toString(rotated_Array));
        int index = Return_index(rotated_Array);
        System.out.println(index);
    }
}

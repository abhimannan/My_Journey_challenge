import java.util.*;
public class BubbleSort {
    public static void main(String[] args) {
        int[] arr = {
            7,8,5,9,12
       };
       int n = arr.length;
       for(int i=0;i<n-1;i++) {
            for(int j=0;j<n-1-i;j++) {
               if(arr[j]>arr[j+1]) {
                    // swap
                    int temp =arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
               }
            }
       }
       System.out.println(Arrays.toString(arr));
    }
}

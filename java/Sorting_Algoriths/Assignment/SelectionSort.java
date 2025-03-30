import java.util.*;

public class SelectionSort {
    public static void Selection(int[] arr) {
        for(int i=0;i<arr.length-1;i++) {
            int minPos = i;
            for(int j=i+1;j<=arr.length-1;j++) {
                 if(arr[minPos]>arr[j]) {
                     minPos = j;
                 }
            }
            // SWAP
            int temp = arr[minPos];
            arr[minPos] = arr[i];
            arr[i] = temp;
        }
        System.out.println(Arrays.toString(arr));
    }
    public static void main(String[] args) {
        int[] arr = {5,4,7,9,1};
        Selection(arr);
        
    }
}


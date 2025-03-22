import java.util.*;

public class InsertionSort {
    public static void insertion(int[] arr){
        int n = arr.length;
         for(int i=0;i<=n-1;i++){
            int temp = i;   
            for(int j=i;j>=0;j--){
                if(arr[temp]>arr[j]){
                    temp = j;
                }
            }
            // swap
            int s = arr[i];
            arr[i] = arr[temp];
            arr[temp] = s;
         }
         System.out.println(Arrays.toString(arr));
    }
    public static void main(String[] args) {
        int[] arr = {5,4,1,3,2};
        System.out.println(Arrays.toString(arr));
        insertion(arr);
    }
}

import java.util.*;

public class Practice {
    // public static void BubbleSort(int[] arr){
    //     int n = arr.length;
    //      for(int i=0;i<=n-2;i++) {
    //          for(int j=0;j<=n-2-i;j++) {
    //              // swap
    //              if(arr[j]>arr[j+1]) {
    //                  int temp = arr[j];
    //                  arr[j] = arr[j+1];
    //                  arr[j+1] = temp;
    //              }
    //          }
             
    //      }
    //      System.out.println(Arrays.toString(arr));
    // }

    // selection sort
    public static void SelectionSort(int[] arr) {
         for(int i=0;i<=arr.length-1;i++) {
             int minValue = i;
             for(int j=i+1;j<=arr.length-1;j++) {
                 // find the min value index 
                 if(arr[minValue]>arr[j]){
                       minValue = j;
                 }
             }
             // swap
             int temp =arr[minValue];
             arr[minValue]=arr[i];
             arr[i] = temp; 
         }
         System.out.println(Arrays.toString(arr));
    }
    public static void main(String[] args) {
        int[] arr = {5,4,1,3,2};
        System.out.println(Arrays.toString(arr));
        SelectionSort(arr);

    }
}

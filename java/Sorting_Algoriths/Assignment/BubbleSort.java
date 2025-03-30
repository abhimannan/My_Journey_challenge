import java.util.Arrays;

public class BubbleSort {
    public static void Bubble(int[] arr) {
         for(int i=0;i<arr.length-1;i++) {
              for(int j=0;j<n-i-1;j++) {
                 if(arr[j]>arr[j+1]){
                     // swap
                     int temp = arr[j];
                     arr[j] = arr[j+1];
                     arr[j+1] = temp;
                 }
              }
         }
         System.out.println(Arrays.toString(arr));
    }
    public static void main(String[] args) {
        int[] arr = {3,6,2,1,8,7,4,5,3,1};
        Bubble(arr);
    } 
}

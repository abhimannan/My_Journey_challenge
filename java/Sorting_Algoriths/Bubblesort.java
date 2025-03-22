import java.util.*;

public class Bubblesort {
    public static void Bubble(int[] arr) {
        int n = arr.length;
        int swap;
         for(int turn=0;turn<n-1;turn++) {
             swap = 0;
             for(int j=0;j<(n-1-turn);j++){
                if(arr[j] > arr[j+1]){
                    
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    swap++;
                }
             }
             if(swap==0){
                System.out.println("Already sorted!");
                break;
             }
        }
        System.out.println(Arrays.toString(arr));
    }
    // print the arrays elements
    // public static void print(int[] arr) {
    //      for(int i=0;i<arr.length;i++){
    //          System.out.print(arr[i]+ " ");
    //      }
    // }
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};
        Bubble(arr);
        // print(arr);
    }
}

package My_Journey_challenge.java.Arrays.Revision;

import java.util.Arrays;

public class Reverse_arr {
    public static int[] Reverse(int[] arr) {
        for(int i=0;i<arr.length;i++) {
            int start = i;
            int end = arr.length-1;
            while(start<=end) {
                int temp = arr[start];
                arr[start] = arr[end];
                arr[end] = temp;
                start++;
                end--;
            }
        }
        return arr;
     }
    public static void main(String[] args) {
        int arr[] = {10,20,30,40,50};
        System.out.println(Arrays.toString(arr));
        System.out.println(Arrays.toString(Reverse(arr)));
        
    }
}

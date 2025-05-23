package My_Journey_challenge.java.Arrays.Revision.Sorting_algorithms;

import java.util.Arrays;

public class Bubble_Sort {
    public static void Bubble(int[] arr) {
        int N = arr.length;
        for(int turn=0;turn<N-1;turn++) {
            for(int j=0;j<N-1-turn;j++) {
                if(arr[j]>arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        System.out.println(Arrays.toString(arr));
    }
    public static void main(String[] args) {
        int[] arr = {4,5,1,3,2};
        Bubble(arr);
    }
}

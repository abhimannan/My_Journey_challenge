package My_Journey_challenge.java.Arrays.Revision.Sorting_algorithms;

import java.util.Arrays;

public class Selection_Sort {
    public static void Selection(int[] arr) {
        int N = arr.length;
        for(int i=0;i<N;i++) {
            // find the min position
            int minPos = i;
            for(int j=i+1;j<=(N-1);j++) {
                if(arr[minPos]>arr[j]) {
                    minPos = j;
                }
            }
            // swap the min position to the first index
            int temp = arr[i];
            arr[i]=arr[minPos];
            arr[minPos] = temp;
        }
        System.out.println(Arrays.toString(arr));
    }
    public static void main(String[] args) {
        int[] arr = {5,4,1,3,2};
        Selection(arr);
    }
}

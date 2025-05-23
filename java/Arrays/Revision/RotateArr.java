package My_Journey_challenge.java.Arrays.Revision;

import java.lang.reflect.Array;
import java.util.Arrays;

public class RotateArr {
    public static void Rotate(int[] arr) {
        int N = arr.length;
        int temp = arr[N-1];
        for(int i=N-2;i>=0;i--) {
            arr[i+1] = arr[i];
        }
        arr[0] = temp;
        System.out.println(Arrays.toString(arr));
    }
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6};
        int k = 3;
        for(int i=1;i<=k;i++) {
            Rotate(arr);
        }
        
    }
}

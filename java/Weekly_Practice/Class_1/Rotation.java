package Class_1;
import java.util.*;

public class Rotation {
    public static void Rotate1time(int[] arr) {
        int n = arr.length;
         int temp = arr[n-1];
         for(int i=n-2;i>=0;i--) {
             arr[i+1] = arr[i];
         }
         arr[0] = temp;
         System.out.println(Arrays.toString(arr));
    }
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};
        int k = 3;// no. of times to rotate
        for(int i=0;i<k;i++) {
            Rotate1time(arr);
        }
        

    }
}

package Assignment;
import java.util.*;

public class Insertion_Sort {
    public static void Insertion(int[] arr) {
        for(int i=1;i<arr.length;i++) {
            int curr = arr[i];
            int pre = i-1;
            // find the corrct pos to insert
            while(pre>=0 && arr[pre]>curr) {
                arr[pre+1] = arr[pre];
                pre--;
            }
            arr[pre+1] = curr;
        }
        System.out.println(Arrays.toString(arr));
    }
    public static void main(String[] args) {
        int[] arr = {3,6,2,1,8,7,4,5,3,1};
        Insertion(arr);
    }
}

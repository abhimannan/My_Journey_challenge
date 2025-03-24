import java.util.*;
import java.util.Collections;

public class InbultSort {
    public static void main(String[] args) {
        int[] arr = {5,4,3,1,2};
        Arrays.sort(arr);
        System.out.println(Arrays.toString(arr));
        // Arrays.sort(arr,Collections.reverseOrder())
        Integer[] marks = {45,65,10,25,79,36,85};
        // Arrays.sort(marks,Collections.reverseOrder());
        Arrays.sort(marks,0,2,Collections.reverseOrder());
        System.out.println(Arrays.toString(marks));
    }
}

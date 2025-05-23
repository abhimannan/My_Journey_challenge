import java.util.Arrays;

public class Counting_sort {
    public static void Count(int[] arr) {
        int N = arr.length;
        // finding the largest element
        int largest = Integer.MIN_VALUE;
        for(int i=0;i<N;i++) {
            largest = Math.max(arr[i],largest);
        }
        // create count arr & store the frequencies of the each elements in the array
        int[] count = new int[largest+1];
        for(int i=0;i<N;i++) {
            count[arr[i]]++;
        }

        // sorting
        int j = 0;
        for(int i=0;i<count.length;i++) {
            while(count[i]>0) {
                arr[j] = i;
                j++;
                count[i]--;
            }
        }
        System.out.println(Arrays.toString(arr));
    }
    public static void main(String[] args) {
        int[] arr = {1,4,1,3,2,4,3,7};
        Count(arr);
    }
}

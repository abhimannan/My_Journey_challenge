import java.util.Arrays;

public class Rotatearray {
    // rotate array 1 time towards right side
    public static int[] Rotate1time(int[] arr){
        int N = arr.length;
        int temp = arr[N-1];
        for(int i=N-2;i>=0;i--){
            arr[i+1] = arr[i];
        }
        arr[0]=temp;// inserting last index element in the first index
        return arr;
    }
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7};
        int k=3;
        System.out.println("Actual Array : "+Arrays.toString(arr));
        // arr rotation k times
        for(int i=0;i<k;i++){
             int[] data = Rotate1time(arr);
             System.out.println("Array Ratated By"+" "+(i+1)+"time"+" "+Arrays.toString(data));
        }
        System.out.println("The Final Array is :"+Arrays.toString(arr));
    }
}

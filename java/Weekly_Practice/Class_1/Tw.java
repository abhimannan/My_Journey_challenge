package Class_1;

import java.util.Arrays;

public class Tw {
    public static void Trapped_Water(int[] arr) {
        int n = arr.length;
        // left max boundaries
        int[] LMB = new int[arr.length];
        LMB[0] = arr[0];
        for(int i=1;i<arr.length;i++) {
            LMB[i] = Math.max(arr[i],LMB[i-1]);
        }
        // right max boundaries
        int[] RMB = new int[arr.length];
        RMB[n-1] = arr[n-1];
        for(int i=n-2;i>=0;i--) {
            RMB[i] = Math.max(arr[i],RMB[i+1]);
        }
        int TW_Sum = 0;
        for(int i=0;i<n;i++) {
            int water_level = Math.min(LMB[i],RMB[i]);
            TW_Sum+=(water_level-arr[i]);
        }
        System.out.println(TW_Sum);

    }
    public static void main(String[] args) {
        int[] arr = {4,2,0,6,3,2,5};
        Trapped_Water(arr);
    }
}

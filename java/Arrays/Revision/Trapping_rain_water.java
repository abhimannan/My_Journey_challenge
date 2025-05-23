package My_Journey_challenge.java.Arrays.Revision;

public class Trapping_rain_water {
    public static int TW(int[] arr) {
            int N = arr.length;
            int[] LMB = new int[N];
            LMB[0] = arr[0];
            for(int l=1;l<N;l++) {
                LMB[l] = Math.max(arr[l],LMB[l-1]);
            }
            // right max boundry
            int[] RMB = new int[N];
            RMB[N-1] = arr[N-1];
            for(int r=N-2;r>=0;r--) {
                RMB[r] = Math.max(arr[r],RMB[r+1]);
            }
            int TW = 0;
            // water level
            for(int j=0;j<N;j++) {
                int wl = Math.min(LMB[j],RMB[j]);
                TW+=(wl-arr[j]);
            }
            // trapped rain water
    return TW; 
}
    public static void main(String[] args) {
        int[] arr = {4,2,0,6,3,2,5};
        int result = TW(arr);
        System.out.println(result);
    }
}

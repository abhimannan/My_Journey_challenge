package Assignment;

public class Trapped_Water {
    public static int TW(int[] arr){
        int n = arr.length;
         // calculate the left max boundaries
         int[] LMB = new int[arr.length];
         LMB[0] = arr[0];
         for(int i=1;i<n;i++){
             LMB[i] = Math.max(arr[i],LMB[i-1]);
         }
         //calculate the right max boundaries
         int[] RMB = new int[arr.length];
         RMB[n-1] = arr[n-1];
         for(int i=n-2;i>=0;i--){
             RMB[i] = Math.max(arr[i],RMB[i+1]);
         }
         // calculate the water level height
          int trapped_Water = 0;
          for(int i=0;i<n;i++){
             int water_level_height = Math.min(LMB[i],RMB[i]);
             // calculate Trapped Water
             trapped_Water+=water_level_height-arr[i];
          }
          return trapped_Water;
    }
    public static void main(String[] args) {
        int[] arr = {4, 2, 0, 3, 2, 5};
        int Trappd_Water = TW(arr);
        System.out.println(Trappd_Water);
    }
}

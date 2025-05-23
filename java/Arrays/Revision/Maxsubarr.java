package My_Journey_challenge.java.Arrays.Revision;

public class Maxsubarr {
    public static void SumarrMax(int[] arr) {
        int N = arr.length;
        int cs = 0;
        int mx = Integer.MIN_VALUE;
        for(int i=0;i<N;i++) {
            cs = cs+arr[i];
            if(cs < 0) {
                cs = 0;
            }
            mx = Math.max(cs,mx);
        }
        System.out.println(mx);
    }
    public static void main(String[] args) {
        int[] arr = {-2,-3,4,-1,-2,1,5,-3};
        SumarrMax(arr);
    }
}

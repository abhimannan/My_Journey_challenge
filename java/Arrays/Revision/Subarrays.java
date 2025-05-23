package My_Journey_challenge.java.Arrays.Revision;

public class Subarrays {
    public static void arrPrint(int[] arr) {
        for(int i=0;i<arr.length;i++) {
            int start = i;
            for(int j=0;j<arr.length;j++) {
                int end = j;
                for(int s=start;s<=end;s++) {
                    System.out.print(arr[s]+" ");
                }
                System.out.println();
            }
        }
    }
    public static void main(String[] args) {
        int[] arr = {2,4,6,8,10};
        arrPrint(arr);
    }
}

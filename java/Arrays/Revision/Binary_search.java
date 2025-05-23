package My_Journey_challenge.java.Arrays.Revision;

public class Binary_search {
    public static int Binary(int[] arr,int target) {
        for(int i=0;i<arr.length;i++) {
            int start = i;
            int end = arr.length-1;
            while(start<=end) {
                int mid = (start+end)/2;
                if(arr[mid]==target) {
                    return mid;  
                }
                else if(target<arr[mid]) {
                    end = mid-1;
                }
                else {
                    start = mid+1;
                }
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        int[] arr = {10,20,30,40,80,90,20};
        int target = 90;
        int n = Binary(arr, target);
        System.out.println(n);
    }
}

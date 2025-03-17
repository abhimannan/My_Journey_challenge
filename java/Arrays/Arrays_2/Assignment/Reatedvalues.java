package Assignment;

public class Reatedvalues {
    public static boolean RepeatCheck(int[] arr){
        int n = arr.length;
         for(int i=0;i<n;i++){
            for(int j=i+1;j<n;j++){
                // System.out.print(arr[i]+" "+arr[j]);//printing subarrays
                if(arr[i]==arr[j]){
                    return true;
                }
            }
         }
         return false;
    }
    public static void main(String[] args) {
        int[] arr = {2,1,8};
        boolean res = RepeatCheck(arr);
        System.out.println(res);
    }
}

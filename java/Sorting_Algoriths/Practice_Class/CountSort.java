public class CountSort {
    public static void Sort(int[[] arr]) {
        // 1. find max in an array
        int max = Integer.MIN_VALUE;
        for(int i=0;i<arr.length;i++) {
             max = Math.max(max,arr[i]);
        }
        // 2. create an count array
        int[] count = new int[max+1];
        // 3. store the frequency of the array elements
        for(int i=0;i<arr.length;i++){
             count[arr[i]]++;
        }
        // 4. sorting
        int j = 0; // to update the elements
        for(int i=0;i<count.length;i++) {
            while(count[i]>0){
                arr[j] = i; // travelling from the original array
                j++;
                count[i]--;// decrease the frequency by 1b 
            }
        }
    }4
    public static void main(String[] args) {
        int[] arr = {1,4,1,3,2,4,3,7};

    }
}

package Assignment;

public class Sum_arr_0 {
    public static void Arr(int[] nums){
        int n = nums.length;
        // int[] arr = new int[arr.length];
        for(int i=0;i<n;i++){
             for(int j=0;j<n;j++){
                 for(int k=0;k<n;k++){
                    if(i!=j && i!=k && j!=k){
                        if((nums[i]+nums[j]+nums[k])==0){
                            // arr[i] = nums[nums];

                            System.out.print(nums[i]+" "+nums[j]+" "+nums[k]);
                        }
                    }
                 }
                 System.out.println();
             }
             
        }
        // System.out.println(Arrays.toString(arr));
    }
    public static void main(String[] args) {
        int[] nums = {-1,0,1,2,-1,-4};
        Arr(nums);

    }
}

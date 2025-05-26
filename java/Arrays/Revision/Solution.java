package My_Journey_challenge.java.Arrays.Revision;
import java.util.*;
public class Solution {
    public int[] buildArray(int[] nums) {
        int N = nums.length;
        int[] ans = new int[N];
        for(int i=0;i<N;i++) {
            ans[i] = nums[nums[i]];
        }
        return ans;
    }
    public static void main(String[] args) {
        int[] nums = {0,2,1,5,3,4};
        Solution sol = new Solution();
         System.out.println(Arrays.toString(sol.buildArray(nums)));


    }
    
}

import java.util.Arrays;

public class SortByFrequency {
    public static void SortString(String s) {
        int N = s.length();
        StringBuilder sb = new StringBuilder();
        // count frequencies of the each character
        int[] arr = new int[26];
        for(int i=0;i<N;i++) {
            char ch = s.charAt(i);
            arr[ch-'a']++;
        }
        // find the max frequency
        int max = arr[0];
        for(int i=0;i<arr.length;i++) {
            if(arr[i]>0) {
                if(max<arr[i]){
                    max = arr[i];
                }
            }
        }
        for(int i=max;i>=1;i--) {
            
        }
       
    }
    public static void main(String[] args) {
        String s = "tree";
        SortString(s);

    }
}

package Revision;

public class CountDuplicate {
    public static void Count(String s) {
        int N = s.length();
        int[] count = new int[26];
        for(int i=0;i<N;i++) {
            char ch = s.charAt(i);
            count[ch-'a']++;
        }
        boolean[] seen = new boolean[26];
        for(int i=0;i<N;i++) {
            char ch = s.charAt(i);
            if(!seen[ch-'a']){
                if(count[ch-'a']>1) {
                    System.out.println(ch+" : "+count[ch-'a']);
                    seen[ch-'a'] = true;
                }
            }
            
        }
    }
    public static void main(String[] args) {
        String s = "programming";
        Count(s);
    }
}

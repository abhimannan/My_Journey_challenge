package Revision;

public class NonRepeatechar {
    public static int findindexNonRepeatChar(String s) {
        int N = s.length();
        int[] count = new int[26];
        for(int i=0;i<N;i++) {
            char ch = s.charAt(i);
            count[ch-'a']++;
        }
        for(int i=0;i<N;i++) {
            char ch = s.charAt(i);
            if(count[ch-'a']==1) {
                return i;
            }
        }
        return -1;
    } 
    public static void main(String[] args) {
        String s = "abcdabcf";
        System.out.println(s);
        int res = findindexNonRepeatChar(s);
        System.out.println(res);
    }
}
